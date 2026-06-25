import EstimateWizard from './EstimateWizard'

export const metadata = {
  title: 'Project Estimator — HAC',
  robots: 'noindex',
}

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 pb-32">
        <EstimateWizard />
      </div>
    </div>
  )
}
