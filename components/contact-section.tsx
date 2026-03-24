import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getBusinessInfo, getExternalLinks } from "@/lib/content"
import { formatPhoneLink } from "@/lib/utils"
import { getMapEmbedUrl } from "@/app/actions/get-map-url"

export async function ContactSection() {
  const [biz, links, mapUrl] = await Promise.all([
    getBusinessInfo(),
    getExternalLinks(),
    getMapEmbedUrl(),
  ])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl text-muted-foreground">Same trusted location in Waverly</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">{biz.address.full}</p>
                    <Button asChild variant="link" className="px-0 mt-2" size="sm">
                      <a href={links.googleMaps} target="_blank" rel="noopener noreferrer">
                        Get Directions
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a
                      href={formatPhoneLink(biz.phone)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {biz.phoneDisplay}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3">Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Thursday:</span>
                        <span className="font-medium">{biz.hours.monday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Friday - Sunday:</span>
                        <span className="font-medium">{biz.hours.friday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${biz.name} Location`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
