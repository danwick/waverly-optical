import Image from "next/image"
import { Award, Users, Heart } from "lucide-react"

export function ContinuitySection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/modern-optometry-clinic-interior-with-exam-equipme.jpg"
              alt="Dr Matt's Optical Outlet clinic interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Hometown Eye Care Team</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Serving Waverly and surrounding communities for over 30 years with the same experienced care you trust.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Experienced Professionals</h3>
                  <p className="text-muted-foreground">
                    Decades of combined experience in comprehensive eye care and disease management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Community Focused</h3>
                  <p className="text-muted-foreground">
                    Locally owned and operated—not owned by private equity. Your neighbors, serving neighbors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Patient-Centered Care</h3>
                  <p className="text-muted-foreground">
                    We take the time to listen, educate, and provide personalized treatment plans for every patient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
