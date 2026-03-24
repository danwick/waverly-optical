import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Dr Matt's Optical Outlet.",
}

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the Dr Matt's Optical Outlet website and services, you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dr Matt's Optical Outlet provides comprehensive eye care services, including but not limited to eye
              examinations, contact lens fittings, and eyewear sales. All services are provided by licensed
              optometrists.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Appointments and Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Appointments should be scheduled in advance. We request at least 24 hours notice for cancellations. Late
              cancellations or no-shows may be subject to a fee.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment and Insurance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment is due at the time of service. We accept most major insurance plans. It is your responsibility to
              understand your insurance coverage and benefits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dr Matt's Optical Outlet shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at 319-559-2733 or visit us at 1300 10th
              Avenue SW, Suite A, Waverly, IA 50677.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
