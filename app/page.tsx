import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ArtBehindNeedle } from "@/components/art-behind-needle"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ArtBehindNeedle />
      <About />
      <Footer />
    </main>
  )
}
