import { Phone } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { formatPhoneLink } from "@/lib/utils"

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
      <div className="container mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>Now accepting patients!</span>
        <a
          href={formatPhoneLink(BUSINESS_INFO.phone)}
          className="inline-flex items-center gap-1 hover:underline font-semibold"
        >
          <Phone className="h-3 w-3" />
          {BUSINESS_INFO.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
