import { Phone } from "lucide-react"
import { getBusinessInfo, getAnnouncement } from "@/lib/content"
import { formatPhoneLink } from "@/lib/utils"

export async function AnnouncementBar() {
  const [biz, announcement] = await Promise.all([
    getBusinessInfo(),
    getAnnouncement(),
  ])

  if (!announcement.enabled) return null

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
      <div className="container mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>{announcement.message}</span>
        <a
          href={formatPhoneLink(biz.phone)}
          className="inline-flex items-center gap-1 hover:underline font-semibold"
        >
          <Phone className="h-3 w-3" />
          {biz.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
