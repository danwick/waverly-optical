import { Shield, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getInsurance } from "@/lib/content"

export async function InsuranceSection() {
  const insurance = await getInsurance()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Insurance & Payment Options</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We accept most vision and medical insurance plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Vision Plans</h3>
              </div>
              <ul className="space-y-2">
                {insurance.vision.map((provider) => (
                  <li key={provider} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-secondary rounded-full" />
                    <span>{provider}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Medical Plans</h3>
              </div>
              <ul className="space-y-2">
                {insurance.medical.map((provider) => (
                  <li key={provider} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>{provider}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-center mt-8 text-muted-foreground max-w-3xl mx-auto">
          {insurance.additionalNote}
        </p>
      </div>
    </section>
  )
}
