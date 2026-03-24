import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPricing, getExternalLinks } from "@/lib/content"

export async function PricingCards() {
  const [pricing, links] = await Promise.all([
    getPricing(),
    getExternalLinks(),
  ])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent, Affordable Pricing</h2>
          <p className="text-xl text-muted-foreground">Quality eye care shouldn't break the bank</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/10">
              <CardTitle className="text-2xl">{pricing.eyeExam.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">${pricing.eyeExam.price}</span>
              </div>
              <ul className="space-y-3">
                {pricing.eyeExam.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-br from-secondary/5 to-primary/10">
              <CardTitle className="text-2xl">{pricing.contactLensExam.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">${pricing.contactLensExam.price}</span>
              </div>
              <ul className="space-y-3">
                {pricing.contactLensExam.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            Visit our online contact lens store{" "}
            <a
              href={links.store}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              YOURSTORE
            </a>
          </p>
          <p className="text-muted-foreground">
            Contact lens pricing below online retailers with free shipping available right to your door
          </p>
        </div>
      </div>
    </section>
  )
}
