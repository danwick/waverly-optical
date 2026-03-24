"use client"
import { Gift, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PROMOTION } from "@/lib/constants"

export function PromoBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-secondary/20 rounded-full mb-6">
            <Gift className="h-8 w-8 text-secondary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{PROMOTION.title}</h2>
          <p className="text-xl text-muted-foreground mb-6">{PROMOTION.description}</p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Info className="h-4 w-4 mr-2" />
                Eligibility Details
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Promotion Eligibility</DialogTitle>
                <DialogDescription className="pt-4">{PROMOTION.eligibility}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
