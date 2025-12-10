import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-4 py-3">
        {/* Brand */}
        <div className="flex flex-col">
          <span className="text-xs uppercase text-gray-400 tracking-wider">Portafolio Personal</span>
          <span className="text-lg font-semibold text-gray-100">Ignacio Ravettini</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

