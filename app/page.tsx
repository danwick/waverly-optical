import { Hero } from "@/components/hero"
import { PromoAd } from "@/components/promo-ad"
import { PricingCards } from "@/components/pricing-cards"
import { InsuranceSection } from "@/components/insurance-section"
import { ContinuitySection } from "@/components/continuity-section"
import { OnlineStoreSection } from "@/components/online-store-section"
import { PromoBanner } from "@/components/promo-banner"
import { LocalOwnershipBanner } from "@/components/local-ownership-banner"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoAd />
      <PricingCards />
      <InsuranceSection />
      <ContinuitySection />
      <OnlineStoreSection />
      <PromoBanner />
      <LocalOwnershipBanner />
      <ContactSection />
    </>
  )
}
