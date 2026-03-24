import Image from "next/image"
import Link from "next/link"
import { getPromoAd } from "@/lib/content"

export async function PromoAd() {
  const ad = await getPromoAd()

  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container max-w-4xl px-4">
        <Link
          href="/promotions"
          className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
        >
          <Image
            src={ad.image}
            alt={ad.altText}
            width={1280}
            height={900}
            className="w-full h-auto"
            priority
          />
        </Link>
        <p className="text-center text-sm text-muted-foreground mt-4">Click to learn more about our promotions</p>
      </div>
    </section>
  )
}
