const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-[70vh] flex items-center pt-20 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-xs uppercase tracking-wider text-cyan-400 font-medium">Portafolio Personal</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 leading-tight">
              Ignacio Ravettini
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">Novellino</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold">Data Analyst | Web Developer</p>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Analista de datos y Desarrollador Web. Desarrollo interfaces web modernas, analizo datos para la toma de decisiones y diseño contenido educativo de programación.
              </p>
              <p>
                Especializado en crear soluciones que combinan tecnología y claridad comunicativa. Actualmente analista de datos en el Gobierno de la Ciudad de Buenos Aires (GCBA).
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="btn-primary"
              >
                Ver proyectos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-secondary"
              >
                Contactarme
              </button>
              <a
                href="#"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  // Placeholder para descargar CV
                  alert('CV disponible próximamente')
                }}
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Right Column - Avatar Card */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="card-aero p-8 md:p-12 w-full max-w-sm">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-aero-glow">
                  IR
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="chip">React</span>
                  <span className="chip">Data Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

