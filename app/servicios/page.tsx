import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Servicios - Dr. Guillermo Martini',
  description: 'Descubre nuestros tratamientos de medicina estética: masculinización facial, armonización facial, bioestimuladores de colágeno y tratamientos híbridos.',
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Services />
      <Footer />
    </main>
  )
}
