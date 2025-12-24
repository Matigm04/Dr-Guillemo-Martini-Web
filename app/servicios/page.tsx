import { Header } from "@/components/header"
import { AllTreatmentsJourney } from "@/components/all-treatments-journey"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Servicios - Dr. Guillermo Martini',
  description: 'Descubre nuestros tratamientos de medicina estética: masculinización facial, armonización facial, bioestimuladores de colágeno y tratamientos híbridos.',
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <AllTreatmentsJourney />
      </div>
      <Footer />
    </main>
  )
}
