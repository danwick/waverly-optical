import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { getDoctors } from "@/lib/content"

export async function DoctorsSection() {
  const doctors = await getDoctors()

  return (
    <section id="doctors" className="py-16 scroll-mt-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Doctors</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Experienced, caring professionals dedicated to your eye health and vision.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src={doctors.capper.image || "/placeholder.svg"}
                  alt={doctors.capper.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6 md:py-8">
                <h3 className="text-3xl font-bold mb-2">
                  {doctors.capper.name}, {doctors.capper.credentials}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{doctors.capper.bio}</p>
              </CardContent>
            </div>
          </Card>

          {doctors.showDrMatt && (
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={doctors.drMatt.image || "/placeholder.svg"}
                    alt={doctors.drMatt.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="pt-6 md:py-8">
                  <h3 className="text-3xl font-bold mb-2">
                    {doctors.drMatt.name}, {doctors.drMatt.credentials}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{doctors.drMatt.bio}</p>
                  <p className="mt-6 font-bold">{doctors.drMatt.disclaimer}</p>
                </CardContent>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
