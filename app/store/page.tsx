import type { Metadata } from "next"
import { ExternalLink, Package, Truck, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EXTERNAL_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Online Store",
  description: "Order contact lenses online with everyday pricing below online retailers. Free shipping available.",
}

export default function StorePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Order Contact Lenses Online</h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Everyday contact lens pricing below major online retailers—delivered to your door with free shipping
            available.
          </p>
          <Button asChild size="lg">
            <a href={EXTERNAL_LINKS.store} target="_blank" rel="noopener noreferrer">
              Visit Our Online Store
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                Everyday pricing below major online retailers. We won't be undersold.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Free shipping available on qualifying orders. Fast delivery to your door.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
                <Package className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">All Brands</h3>
              <p className="text-muted-foreground">
                Wide selection of contact lens brands and types to fit your needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need a Contact Lens Exam?</h2>
            <p className="text-muted-foreground mb-4">
              Before ordering contact lenses, you'll need a current contact lens prescription. Our contact lens exam is
              just $49 (flat rate for any prescription) and includes fitting, trial lenses, and follow-up care.
            </p>
            <Button asChild variant="outline">
              <a href="/contact">Schedule Your Exam</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
