
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Pricing from "@/components/sections/pricing"
import Testimonials from "@/components/sections/testimonials"
import FAQ from "@/components/sections/faq"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
