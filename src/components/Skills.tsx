const Skills = () => {
  const skillCategories = [
    {
      title: 'Desarrollo Web',
      skills: [
        'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'TypeScript',
        'React', 'Next.js', 'jQuery', 'Responsive Design'
      ]
    },
    {
      title: 'Back-end y Bases de Datos',
      skills: [
        'SQL Server', 'MongoDB', 'APIs', 'CRUD', 'Node.js', 'Express',
        'RESTful Services'
      ]
    },
    {
      title: 'Análisis de Datos',
      skills: [
        'Manejo de datos', 'Consultas SQL', 'Limpieza y tratamiento de datos',
        'Visualizaciones', 'Elaboración de informes', 'Análisis estadístico'
      ]
    },
    {
      title: 'Educación y Comunicación',
      skills: [
        'Diseño de contenido didáctico', 'Planificación de currículas',
        'Comunicación técnica', 'Documentación'
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Comunicación clara', 'Trabajo en equipo', 'Organización',
        'Orientación a resultados', 'Mejora continua', 'Resolución de problemas'
      ]
    },
  ]

  return (
    <section id="habilidades" className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Tecnologías y herramientas que domino</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-aero p-5 md:p-6 hover:translate-y-[-4px] transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

