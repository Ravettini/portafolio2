const Experience = () => {
  const experiences = [
    {
      period: '2024 – Presente',
      title: 'Analista de datos',
      company: 'Gobierno de la Ciudad de Buenos Aires (GCBA)',
      achievements: [
        'Análisis de datos para la toma de decisiones en políticas públicas',
        'Elaboración de informes y visualizaciones de datos',
        'Limpieza y tratamiento de grandes volúmenes de información',
        'Colaboración con equipos multidisciplinarios en proyectos gubernamentales'
      ]
    },
    {
      period: '2022 – Presente',
      title: 'Profesor de informática',
      company: 'Instituto Mater Dolorosa',
      achievements: [
        'Diseño e implementación de currículas de programación e informática',
        'Enseñanza de fundamentos de programación y herramientas ofimáticas',
        'Desarrollo de contenido didáctico adaptado a diferentes niveles',
        'Evaluación y seguimiento del progreso estudiantil'
      ]
    },
    {
      period: '2023 – 2024',
      title: 'Profesor de Programación',
      company: 'Centro de e-Learning UTN FRBA',
      achievements: [
        'Impartición de cursos de desarrollo web full-stack',
        'Enseñanza de tecnologías modernas: React, TypeScript, Node.js',
        'Mentoría a estudiantes en proyectos prácticos',
        'Actualización constante de materiales educativos'
      ]
    },
    {
      period: '2022 – 2023',
      title: 'Profesor de informática',
      company: 'Escuela Internacional Natán Gesang',
      achievements: [
        'Enseñanza de informática a nivel secundario',
        'Desarrollo de habilidades digitales en estudiantes',
        'Integración de tecnología en el proceso educativo'
      ]
    },
    {
      period: '2022',
      title: 'Pasante',
      company: 'Grupo MSA',
      achievements: [
        'Apoyo en proyectos de desarrollo de software',
        'Aprendizaje de metodologías ágiles',
        'Colaboración en equipo de desarrollo'
      ]
    },
  ]

  return (
    <section id="experiencia" className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experiencia</h2>
        <p className="section-subtitle">Mi trayectoria profesional</p>

        <div className="relative">
          {/* Timeline line - Desktop only */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-violet-600"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - Desktop only */}
                <div className="hidden md:block absolute left-6 top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 shadow-aero-glow"></div>

                {/* Card */}
                <div className="card-aero p-6 md:p-8 ml-0 md:ml-16 hover:translate-y-[-4px] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">{exp.title}</h3>
                      <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-cyan-300 font-semibold text-sm md:text-base">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

