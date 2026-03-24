import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { DOCTORS } from "@/lib/constants"
import { shouldShowDrMattContent } from "@/lib/date-gate"

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet our experienced optometrists at Dr Matt's Optical Outlet. Decades of combined experience in comprehensive eye care.",
}

export default function DoctorsPage() {
  const showDrMatt = shouldShowDrMattContent()

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Doctors</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Experienced, caring professionals dedicated to your eye health and vision.
          </p>
        </div>

        {/* Doctors */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Dr. Capper - Always shown */}
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src={DOCTORS.capper.image || "/placeholder.svg"}
                  alt={DOCTORS.capper.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6 md:py-8">
                <h2 className="text-3xl font-bold mb-2">
                  {DOCTORS.capper.name}, {DOCTORS.capper.credentials}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{DOCTORS.capper.bio}</p>
              </CardContent>
            </div>
          </Card>

          {showDrMatt && (
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={DOCTORS.drMatt.image || "/placeholder.svg"}
                    alt={DOCTORS.drMatt.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="pt-6 md:py-8">
                  <h2 className="text-3xl font-bold mb-2">
                    {DOCTORS.drMatt.name}, {DOCTORS.drMatt.credentials}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{DOCTORS.drMatt.bio}</p>
                </CardContent>
              </div>
            </Card>
          )}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience You Can Trust</h2>
          <p className="text-lg text-muted-foreground">
            Our doctors have served the community for over 3 decades, providing comprehensive eye care with a personal
            touch. We're committed to staying current with the latest technology and treatment options while maintaining
            the trusted, personalized care you deserve.
          </p>
        </div>
      </div>
    </div>
  )
}
