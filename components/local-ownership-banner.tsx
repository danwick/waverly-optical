import { Building2 } from "lucide-react"

export function LocalOwnershipBanner() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <Building2 className="h-12 w-12 flex-shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">LOCALLY OWNED AND OPERATED</h2>
            <p className="text-lg opacity-90">NOT owned by private equity. Your neighbors, serving neighbors.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
