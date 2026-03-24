import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { getBusinessInfo } from "@/lib/content"
import { formatPhoneLink } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Dr Matt's Optical Outlet. Visit us at 1300 10th Avenue SW, Waverly, IA or call 319-559-2SEE (2733).",
}

export default async function ContactPage() {
  const biz = await getBusinessInfo()

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            We're here to answer your questions and schedule your appointment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={formatPhoneLink(biz.phone)}>
                <Phone className="h-5 w-5 mr-2" />
                Call {biz.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@waverlyoptical.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>

        <ContactSection />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">New Patients Welcome</h2>
            <p className="text-muted-foreground mb-4">
              We're accepting new patients and look forward to serving you and your family. When you call to schedule,
              please have your insurance information ready if applicable.
            </p>
            <p className="text-muted-foreground">
              If you have an urgent eye care need, please call us immediately. For medical emergencies, please call 911
              or visit your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
