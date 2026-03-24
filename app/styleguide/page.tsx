import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function StyleGuidePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-2">Design System</h1>
        <p className="text-muted-foreground mb-12">Dr Matt's Optical Outlet brand guidelines and component library</p>

        {/* Brand Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="h-24 rounded-lg bg-[#27284D] mb-2" />
              <p className="font-semibold">Brand Navy</p>
              <p className="text-sm text-muted-foreground">#27284D</p>
            </div>
            <div>
              <div className="h-24 rounded-lg bg-[#73C9E6] mb-2" />
              <p className="font-semibold">Brand Blue</p>
              <p className="text-sm text-muted-foreground">#73C9E6</p>
            </div>
            <div>
              <div className="h-24 rounded-lg bg-background border mb-2" />
              <p className="font-semibold">Background</p>
              <p className="text-sm text-muted-foreground">var(--background)</p>
            </div>
            <div>
              <div className="h-24 rounded-lg bg-foreground mb-2" />
              <p className="font-semibold">Foreground</p>
              <p className="text-sm text-muted-foreground">var(--foreground)</p>
            </div>
          </div>
        </section>

        {/* Logo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Logo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Light Background</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-12 bg-white">
                <Image src="/logo.png" alt="Dr Matt's Optical Outlet Logo" width={200} height={200} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dark Background</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-12 bg-[#27284D]">
                <Image
                  src="/logo.png"
                  alt="Dr Matt's Optical Outlet Logo"
                  width={200}
                  height={200}
                  className="brightness-0 invert"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
              <p className="text-sm text-muted-foreground">text-5xl font-bold</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
              <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
              <p className="text-sm text-muted-foreground">text-3xl font-bold</p>
            </div>
            <div>
              <p className="text-xl mb-2">Body Large</p>
              <p className="text-sm text-muted-foreground">text-xl</p>
            </div>
            <div>
              <p className="text-base mb-2">Body Regular</p>
              <p className="text-sm text-muted-foreground">text-base</p>
            </div>
            <div>
              <p className="text-sm mb-2">Body Small</p>
              <p className="text-sm text-muted-foreground">text-sm</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button size="lg">Large Button</Button>
            <Button size="sm">Small Button</Button>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Default Badge</Badge>
            <Badge variant="secondary">Secondary Badge</Badge>
            <Badge variant="outline">Outline Badge</Badge>
            <Badge variant="destructive">Destructive Badge</Badge>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Cards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is a sample card component with header and content sections.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Card with Border</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Cards can have different border styles for emphasis.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Spacing Scale</h2>
          <div className="space-y-4">
            {[1, 2, 4, 6, 8, 12, 16].map((size) => (
              <div key={size} className="flex items-center gap-4">
                <div className="bg-secondary h-8" style={{ width: `${size * 4}px` }} />
                <span className="text-sm text-muted-foreground">
                  {size} ({size * 4}px)
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
