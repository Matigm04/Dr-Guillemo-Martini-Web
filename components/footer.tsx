import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light mb-4 tracking-tight">Dr. Guillermo <span className="font-serif italic">Martini</span></h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md font-light">
              Medicina Estética en Córdoba. Botox - Rellenos - Bioestimuladores - PRP - Armonizaciones - Endolifting
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/dr.guillermomartini" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="mailto:dr.guillermomartini@gmail.com"
                className="hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+5493518596064" className="hover:text-secondary transition-colors">
                  +54 9 3518 59-6064
                </a>
              </li>
              <li>
                <a href="mailto:dr.guillermomartini@gmail.com" className="hover:text-secondary transition-colors">
                  dr.guillermomartini@gmail.com
                </a>
              </li>
              <li>Leopoldo Lugones 188, Córdoba Capital</li>
              <li>Lun, Mar, Mie, Vie: 10:00-19:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Dr. Guillermo Martini. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
