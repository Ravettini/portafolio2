const About = () => {
  const currentInfo = [
    { label: 'Cargo', value: 'Analista de datos' },
    { label: 'Organización', value: 'Gobierno de la Ciudad de Buenos Aires (GCBA)' },
    { label: 'Área', value: 'Subsecretaría de Cultura Ciudadana y Responsabilidad Social' },
    { label: 'Ubicación', value: 'Buenos Aires, Argentina' },
  ]

  return (
    <section id="sobre-mi" className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">Conoce más sobre mi trayectoria y experiencia</p>

        <div className="card-aero p-6 md:p-8 space-y-8">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Soy Analista de datos y Desarrollador Web con una pasión por crear soluciones tecnológicas que combinan funcionalidad y claridad comunicativa. Mi trabajo se centra en desarrollar interfaces web modernas, analizar datos para la toma de decisiones estratégicas y diseñar contenido educativo de programación.
            </p>
            <p>
              Mi especialización radica en crear soluciones que integran tecnología avanzada con una comunicación clara y efectiva. Esto me permite no solo desarrollar herramientas poderosas, sino también hacer que sean accesibles y comprensibles para diversos públicos.
            </p>
            <p>
              Actualmente, desempeño el rol de Analista de datos en el Gobierno de la Ciudad de Buenos Aires (GCBA), donde aplico mis habilidades en el análisis de datos y la visualización de información para apoyar la toma de decisiones en políticas públicas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Actualmente</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4"
                >
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-gray-200 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

