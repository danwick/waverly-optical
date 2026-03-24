import type { Metadata } from "next"
import { Eye, Glasses, Contact, Stethoscope, Scan } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"
import { formatPhoneLink } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive eye care services including eye exams, contact lens fittings, disease management, and more at Dr Matt's Optical Outlet.",
}

const services = [
  {
    icon: Eye,
    title: "Vision Eye Exams",
    description:
      "Complete evaluation of your eye health and vision, including retinal photography and refraction for accurate prescriptions.",
    price: "$99",
  },
  {
    icon: Contact,
    title: "Contact Lens Exams & Fittings",
    description:
      "Expert fitting for all types of contact lenses with flat-rate pricing. Includes trial lenses and follow-up care.",
    price: "$49",
  },
  {
    icon: Stethoscope,
    title: "Eye Disease Management",
    description:
      "Diagnosis and treatment of eye diseases including glaucoma, diabetic retinopathy, macular degeneration, and cataracts.",
  },
  {
    icon: Scan,
    title: "Advanced Retinal Imaging",
    description: "State-of-the-art imaging technology to detect and monitor eye diseases early.",
  },
  {
    icon: Glasses,
    title: "Eyewear Selection",
    description: "Brand name and designer frames and quality lenses at the lowest prices in the area.",
  },
]

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Comprehensive eye care services with transparent pricing and experienced professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  {service.price && <div className="text-2xl font-bold text-primary">{service.price}</div>}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-[#1a1b3a] text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference of personalized, affordable eye care.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
            <a href={formatPhoneLink(BUSINESS_INFO.phone)}>Call {BUSINESS_INFO.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
