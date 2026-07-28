import { Hero } from "@/components/hero"
import { DoctorsSection } from "@/components/doctors-section"
import { ContinuitySection } from "@/components/continuity-section"
import { InsuranceSection } from "@/components/insurance-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <DoctorsSection />
      <ContinuitySection />
      <InsuranceSection />
      <ContactSection />
    </>
  )
}
