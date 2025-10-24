"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            ESTÉTICA CENTER
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="/resultados" className="text-foreground hover:text-primary transition-colors">
              Resultados
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="w-4 h-4 mr-2" />
              +54 11 1234-5678
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">Agendar Cita</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/servicios" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Servicios
              </Link>
              <Link href="/resultados" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Resultados
              </Link>
              <Link href="/contacto" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
              <Button className="bg-secondary hover:bg-secondary/90 w-full">Agendar Cita</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
