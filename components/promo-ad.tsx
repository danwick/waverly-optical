import Image from "next/image"
import Link from "next/link"

export function PromoAd() {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container max-w-4xl px-4">
        <Link
          href="/promotions"
          className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
        >
          <Image
            src="/images/ad-new.png"
            alt="Dr. Matt's Optical Outlet - Clear Savings Is Our Focus. Vision exams only $99, contact lens evaluations only $49. Contact lens price comparison showing significant savings vs competitors and online retailers. Now accepting new patients at 1300 10th Ave SW Suite A, Waverly. Call 319-559-2733 (2SEE). Dr. Matt Pollastrini and Dr. Vonda Capper."
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
