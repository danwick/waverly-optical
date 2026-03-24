import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { formatPhoneLink } from "@/lib/utils"
import { shouldShowDrMattContent } from "@/lib/date-gate"

export function Footer() {
  const showLegalNote = shouldShowDrMattContent()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt={BUSINESS_INFO.name}
              width={80}
              height={80}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-90">{BUSINESS_INFO.slogan}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:underline opacity-90">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:underline opacity-90">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="hover:underline opacity-90">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline opacity-90">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">{BUSINESS_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={formatPhoneLink(BUSINESS_INFO.phone)} className="hover:underline opacity-90">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-1 text-sm opacity-90">
              <li className="flex justify-between gap-4">
                <span>Mon - Thu:</span>
                <span>8:30 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Fri - Sun:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {showLegalNote && (
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-90 max-w-3xl">
              Please note: Dr. Matt is no longer associated with any other eye care practice or new building in Waverly.
            </p>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
