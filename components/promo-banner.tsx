import { Gift } from "lucide-react"
import { getPromotion } from "@/lib/content"

export async function PromoBanner() {
  const promo = await getPromotion()

  if (!promo.enabled) return null

  return (
    <section className="py-16 bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-secondary/20 rounded-full mb-6">
            <Gift className="h-8 w-8 text-secondary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{promo.title}</h2>
          <p className="text-xl text-muted-foreground mb-6">{promo.description}</p>
        </div>
      </div>
    </section>
  )
}
