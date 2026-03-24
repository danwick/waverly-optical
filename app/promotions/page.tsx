import type { Metadata } from "next"
import Image from "next/image"
import { Gift, Glasses, Tag, Percent } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO, PROMOTION } from "@/lib/constants"
import { formatPhoneLink } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Promotions",
  description:
    "Current promotions and special offers at Dr Matt's Optical Outlet. Affordable eye care with exceptional value.",
}

export default function PromotionsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Current Promotions</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Experience matters. Price matters. Get exceptional value on quality eye care.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <Image
              src="/images/ad-new.png"
              alt="Dr. Matt's Optical Outlet announcement: Due to trademark dispute, the practice is now called Dr. Matt's Optical Outlet. Dr. Pollastrini and Dr. Capper continue providing outstanding eye care at 1300 10th Ave SW Suite A, Waverly. Call 319-559-2SEE (2733)."
              width={1080}
              height={1280}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Grand Opening Giveaway */}
          <Card className="border-2 border-secondary">
            <CardHeader>
              <Badge className="w-fit mb-2">Limited Time</Badge>
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                <Gift className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">{PROMOTION.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{PROMOTION.description}</p>
              <div className="bg-muted/50 p-4 rounded-lg text-sm">
                <p className="font-semibold mb-2">Eligibility:</p>
                <p className="text-muted-foreground">{PROMOTION.eligibility}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">
                Everyday Value
              </Badge>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Tag className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">We Will Beat Any Advertised Contact Lens Price!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bring us any advertised contact lens price and we'll beat it. Quality contact lenses at unbeatable
                prices.
              </p>
            </CardContent>
          </Card>

          {/* Designer Frames */}
          <Card>
            <CardHeader>
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                <Glasses className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Designer Eyeglass Frames</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Large selection of quality and designer eyeglass frames to meet every budget. Compare to competitor's
                pricing and save money!
              </p>
            </CardContent>
          </Card>

          {/* Outside Prescription Discount */}
          <Card>
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">10% Off Outside Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bring us your current glasses or contact lens prescription from any outside provider and receive an
                additional 10% off our already low prices!!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary to-[#1a1b3a] text-primary-foreground rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your appointment today and see why Waverly trusts us with their eye care.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
            <a href={formatPhoneLink(BUSINESS_INFO.phone)}>Call {BUSINESS_INFO.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
