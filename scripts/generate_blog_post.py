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
    "home addition Westchester NY",
    "kitchen renovation Scarsdale NY",
    "general contractor Westchester County NY",
    "residential architect Westchester NY",
    "bathroom remodel Westchester County",
    "custom home construction Westchester NY",
    "historic home restoration Westchester NY",
    "primary suite addition Scarsdale NY",
    "home renovation cost Westchester NY",
    "new home construction Eastchester NY",
    "home renovation permits Westchester NY",
    "colonial home renovation Westchester NY",
    "open concept renovation Westchester NY",
    "second story addition Westchester NY",
    "home remodeling Bronxville NY",
    "architect vs contractor Westchester NY",
    "luxury home renovation Scarsdale NY",
    "kitchen addition Westchester County",
    "mudroom addition Westchester NY",
    "basement renovation Westchester NY",
]

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
- EVERY post must mention at least 6 of these towns naturally within the content — not as a list dump, but woven into sentences where they make sense.
- SEO KEYWORDS to work in naturally throughout every post (use at least 4): architect Westchester NY, general contractor Westchester, design-build Westchester, home renovation Westchester NY, licensed architect NY, residential architect Scarsdale, home addition Westchester, custom home Westchester County. Use them in sentences — never as a keyword dump.

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

    prompt = PROMPT_TEMPLATE.format(topic=topic, forbidden=", ".join(FORBIDDEN_WORDS))

    text = call_claude(prompt)
    fields = parse_fields(text)

    if not fields["title"] or not fields["slug"] or not fields["content"]:
        print("ERROR: failed to parse required fields from model output", file=sys.stderr)
        print(text, file=sys.stderr)
        sys.exit(1)

    slug = re.sub(r"[^a-z0-9-]", "", fields["slug"].lower().replace(" ", "-"))

    post = {
        "title": fields["title"],
        "slug": slug,
        "date": date,
        "excerpt": fields["excerpt"],
        "content": fields["content"],
    }

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(post, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"Wrote post: {post['title']}")


if __name__ == "__main__":
    main()
