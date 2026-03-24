import { ExternalLink, Glasses, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getExternalLinks } from "@/lib/content"

export async function OnlineStoreSection() {
  const links = await getExternalLinks()

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-[#1a1b3a] text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-lg">
              <Glasses className="h-8 w-8" />
            </div>
            <div className="p-3 bg-white/10 rounded-lg">
              <Tag className="h-8 w-8" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Shop Our Online Store</h2>

          <p className="text-xl mb-8 opacity-90 leading-relaxed text-pretty">
            Shop our online store <span className="font-semibold">YOURSTORE</span> for contact lenses and eyeglass
            frames. We will beat any advertised contact lens price! Large selection of quality and designer eyeglass
            frames to meet every budget. Compare to competitor's pricing and save money!
          </p>

          <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
            <a
              href={links.store}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Visit YOURSTORE
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
