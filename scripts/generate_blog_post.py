"""Generate a daily blog post via the Claude API and write it to content/blog/.

Usage: python3 scripts/generate_blog_post.py <date YYYY-MM-DD> <topic>

Reads ANTHROPIC_API_KEY from the environment. Writes content/blog/<date>.json.
Exits non-zero (without writing a file) if the model output can't be parsed,
so a broken run never gets committed.
"""
import json
import os
import re
import sys
import urllib.request

TOPICS = [
    # Scarsdale-focused (priority market — keep this list the majority)
    "kitchen renovation Scarsdale NY",
    "primary suite addition Scarsdale NY",
    "luxury home renovation Scarsdale NY",
    "Scarsdale general contractor",
    "Scarsdale architect",
    "Scarsdale design-build firm",
    "Scarsdale home addition",
    "Scarsdale new construction",
    "Scarsdale custom home builder",
    "Scarsdale colonial renovation",
    "Scarsdale Tudor renovation",
    "Scarsdale bathroom renovation",
    "Scarsdale basement renovation",
    "Scarsdale second story addition",
    "Scarsdale open concept renovation",
    "Scarsdale historic home restoration",
    "how to choose an architect in Scarsdale NY",
    "Scarsdale building permits and Village approval",
    "Heathcote Scarsdale home renovation",
    "Edgewood Scarsdale home renovation",
    "Fox Meadow Scarsdale home renovation",
    "Greenacres Scarsdale home renovation",
    # Broader Westchester County (secondary — keeps organic reach in surrounding towns)
    "home addition Westchester NY",
    "general contractor Westchester County NY",
    "residential architect Westchester NY",
    "bathroom remodel Westchester County",
    "custom home construction Westchester NY",
    "historic home restoration Westchester NY",
    "home renovation cost Westchester NY",
    "new home construction Eastchester NY",
    "home renovation permits Westchester NY",
    "colonial home renovation Westchester NY",
    "open concept renovation Westchester NY",
    "second story addition Westchester NY",
    "home remodeling Bronxville NY",
    "architect vs contractor Westchester NY",
    "kitchen addition Westchester County",
    "mudroom addition Westchester NY",
    "basement renovation Westchester NY",
]

# (keyword-match predicate, href, anchor text) — first match wins, checked in
# order so more specific entries must come before general fallbacks.
INTERNAL_LINK_MAP = [
    (lambda t: "heathcote" in t, "/heathcote-renovation", "Heathcote renovation"),
    (lambda t: "edgewood" in t, "/edgewood-renovation", "Edgewood renovation"),
    (lambda t: "fox meadow" in t, "/fox-meadow-renovation", "Fox Meadow renovation"),
    (lambda t: "greenacres" in t, "/greenacres-renovation", "Greenacres renovation"),
    (lambda t: "scarsdale" in t and "general contractor" in t, "/scarsdale-general-contractor", "Scarsdale general contractor"),
    (lambda t: "scarsdale" in t and "architect" in t, "/scarsdale-architect", "Scarsdale architect"),
    (lambda t: "scarsdale" in t and "design-build" in t, "/scarsdale-design-build", "Scarsdale design-build firm"),
    (lambda t: "scarsdale" in t and "addition" in t, "/scarsdale-addition", "Scarsdale home addition"),
    (lambda t: "scarsdale" in t and "new construction" in t, "/scarsdale-new-construction", "Scarsdale new construction"),
    (lambda t: "scarsdale" in t and "custom home" in t, "/scarsdale-custom-home-builder", "Scarsdale custom home builder"),
    (lambda t: "scarsdale" in t and "colonial" in t, "/scarsdale-colonial-renovation", "Scarsdale colonial renovation"),
    (lambda t: "scarsdale" in t and "tudor" in t, "/scarsdale-tudor-renovation", "Scarsdale Tudor renovation"),
    (lambda t: "scarsdale" in t and "kitchen" in t, "/scarsdale-kitchen-renovation", "Scarsdale kitchen renovation"),
    (lambda t: "scarsdale" in t and "luxury" in t, "/scarsdale-luxury-renovation", "Scarsdale luxury renovation"),
    (lambda t: "scarsdale" in t, "/scarsdale-contractor", "Scarsdale contractor"),
    (lambda t: "kitchen" in t, "/kitchens", "kitchen renovations"),
    (lambda t: "bathroom" in t, "/bathrooms", "bathroom renovations"),
    (lambda t: "addition" in t, "/additions", "home additions"),
    (lambda t: "new construction" in t or "new home" in t, "/new-construction", "new construction"),
    (lambda t: "restoration" in t, "/restorations", "historic restorations"),
    (lambda t: "architect" in t, "/architecture", "architectural design"),
    (lambda t: True, "/renovations", "home renovations"),
]


def pick_internal_link(topic: str) -> tuple[str, str]:
    t = topic.lower()
    for predicate, href, label in INTERNAL_LINK_MAP:
        if predicate(t):
            return href, label
    return "/renovations", "home renovations"

FORBIDDEN_WORDS = [
    "seamlessly", "robust", "cutting-edge", "game-changer", "delve into",
    "unpack", "navigate the complexities", "holistic", "leverage",
    "synergies", "moreover", "furthermore", "ultimately",
    "at the end of the day", "foster a culture of", "powerful opportunity",
    "effortlessly", "innovative", "comprehensive range", "sets us apart",
    "streamlined",
]

PROMPT_TEMPLATE = """Write a blog post for House Architecture & Construction, PLLC. Target keyword: {topic}.

FACTS — use only these, do not invent anything:
- Design-build firm: principal Silvio M. Luca is both a licensed NY State architect and licensed general contractor. He runs every project personally.
- Services: home renovations, additions, second-story additions, kitchen remodels, bathroom renovations, primary suite additions, historic restorations, open-concept conversions, custom new construction.
- Based in Eastchester NY, serves all of Westchester County — Scarsdale, Bronxville, Larchmont, Mamaroneck, Pelham, Pelham Manor, Rye, Harrison, White Plains, New Rochelle, Tuckahoe, Eastchester, Ardsley, Dobbs Ferry, Hastings-on-Hudson, Tarrytown, and Ossining.
- Do NOT say the firm specializes exclusively in any one town or service. Do NOT include dollar amounts or cost estimates.
- Every Westchester municipality has its own building department and permit process — this is normal and not unique to any single town. Never imply one town's permitting is uniquely separate or different from the rest.
- {town_rule}
- SEO CONCEPTS to work into full, grammatical sentences throughout every post (use at least 4): a licensed architect in Westchester NY, a general contractor in Westchester, design-build in Westchester, home renovation in Westchester NY, a licensed architect in New York, a residential architect in Scarsdale, home additions in Westchester, a custom home in Westchester County. These are concepts, not phrases to insert verbatim — rewrite each one into a natural sentence with proper grammar (e.g. write "a licensed architect based in Westchester, NY" or "our Westchester NY architect," never the bare fragment "architect Westchester NY" or "architect NY").

WRITING RULES — this is non-negotiable:
- Write like a real person talking to a homeowner, not like a brochure.
- Short sentences. One idea per paragraph. Say what you mean.
- Never use: {forbidden}.
- No transition words to start sentences (Moreover, Additionally, Furthermore, That said).
- No generic conclusions that could apply to any company. Be specific.
- No bullet-point marketing lists inside paragraphs (e.g. "Kitchen Remodeling: ... Bathroom Renovations: ..."). Write in flowing prose instead.
- Read each sentence: if a real person wouldn't say it out loud, rewrite it.

OUTPUT FORMAT — follow this exactly, plain text, no markdown code fences, no JSON:

TITLE: <the post title>
SLUG: <url-friendly-slug-no-spaces>
EXCERPT: <1-2 plain English sentences>
CONTENT:
<the full post body as HTML using only <p> and <h2> tags, 450-600 words, ending with a call to action to call (914) 224-7383 for a free consultation>
"""


def call_claude(prompt: str) -> str:
    api_key = os.environ["ANTHROPIC_API_KEY"]
    body = json.dumps({
        "model": "claude-haiku-4-5-20251001",
        "max_tokens": 1500,
        "messages": [{"role": "user", "content": prompt}],
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=body,
        headers={
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return data["content"][0]["text"]


def parse_fields(text: str) -> dict:
    # Strip stray code fences if the model adds them anyway
    text = text.strip()
    text = re.sub(r"^```\w*\n?", "", text)
    text = re.sub(r"\n?```$", "", text)

    def extract(field, stop_fields):
        stops = "|".join(stop_fields) if stop_fields else r"$(?!)"
        pattern = rf"{field}:\s*(.*?)(?=\n(?:{stops}):|\Z)"
        m = re.search(pattern, text, re.DOTALL)
        return m.group(1).strip() if m else ""

    title = extract("TITLE", ["SLUG", "EXCERPT", "CONTENT"])
    slug = extract("SLUG", ["EXCERPT", "CONTENT"])
    excerpt = extract("EXCERPT", ["CONTENT"])
    content = extract("CONTENT", [])

    return {"title": title, "slug": slug, "excerpt": excerpt, "content": content}


def main():
    if len(sys.argv) < 2:
        print("Usage: generate_blog_post.py <date> [topic]", file=sys.stderr)
        sys.exit(1)

    date = sys.argv[1]
    out_path = os.path.join("content", "blog", f"{date}.json")

    if os.path.exists(out_path):
        print(f"Post for {date} already exists, skipping.")
        return

    import random
    topic = sys.argv[2] if len(sys.argv) > 2 else random.choice(TOPICS)

    is_scarsdale = "scarsdale" in topic.lower() or any(
        n in topic.lower() for n in ("heathcote", "edgewood", "fox meadow", "greenacres")
    )
    town_rule = (
        "This post is about Scarsdale specifically — keep Scarsdale as the clear, "
        "consistent focus throughout. You may still mention 1-2 nearby towns in "
        "passing for context, but do not dilute the post across many towns."
        if is_scarsdale
        else "EVERY post must mention at least 6 of these towns naturally within "
        "the content — not as a list dump, but woven into sentences where they make sense."
    )

    prompt = PROMPT_TEMPLATE.format(topic=topic, forbidden=", ".join(FORBIDDEN_WORDS), town_rule=town_rule)

    text = call_claude(prompt)
    fields = parse_fields(text)

    if not fields["title"] or not fields["slug"] or not fields["content"]:
        print("ERROR: failed to parse required fields from model output", file=sys.stderr)
        print(text, file=sys.stderr)
        sys.exit(1)

    slug = re.sub(r"[^a-z0-9-]", "", fields["slug"].lower().replace(" ", "-"))

    link_href, link_label = pick_internal_link(topic)
    content = fields["content"].rstrip()
    content += f'\n<p>Curious what this could look like for your home? Take a look at our <a href="{link_href}">{link_label}</a> page, or call (914) 224-7383 to set up a free consultation.</p>'

    post = {
        "title": fields["title"],
        "slug": slug,
        "date": date,
        "excerpt": fields["excerpt"],
        "content": content,
    }

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(post, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"Wrote post: {post['title']}")


if __name__ == "__main__":
    main()
