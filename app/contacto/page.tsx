import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Contacto - Dr. Guillermo Martini',
  description: 'Agenda tu consulta con el Dr. Guillermo Martini. Contáctanos para más información sobre nuestros tratamientos de medicina estética.',
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}
