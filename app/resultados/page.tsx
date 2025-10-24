import { Header } from "@/components/header"
import { Results } from "@/components/results"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Resultados - Dr. Guillermo Martini',
  description: 'Mira los resultados de nuestros tratamientos de medicina estética y lee los testimonios de nuestros pacientes satisfechos.',
}

export default function ResultadosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Results />
      <Footer />
    </main>
  )
}
