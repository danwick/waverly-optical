import { Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO, EXTERNAL_LINKS } from "@/lib/constants"
import { formatPhoneLink } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-[#1a1b3a] text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Same experienced care. Same trusted location.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 text-pretty">Now with lower prices and better value.</p>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto text-pretty">
            Same experienced care you expect and deserve in the same trusted location—now with lower prices and even
            better value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
              <a href={formatPhoneLink(BUSINESS_INFO.phone)}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base font-semibold bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="/contact">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Your Exam ($99)
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base font-semibold bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href={EXTERNAL_LINKS.googleMaps} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  )
}
