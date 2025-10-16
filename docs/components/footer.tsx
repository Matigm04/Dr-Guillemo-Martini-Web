import { Instagram, Facebook, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ESTÉTICA CENTER</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Centro especializado en medicina estética y tratamientos faciales avanzados. Transformamos tu belleza
              natural con los más altos estándares de calidad y seguridad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Masculinización Facial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Bioestimuladores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Tratamientos Híbridos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Armonización Facial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+54 11 1234-5678</li>
              <li>info@esteticacenter.com</li>
              <li>Av. Corrientes 1234, CABA</li>
              <li>Lun-Vie: 9:00-19:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Estética Center. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
