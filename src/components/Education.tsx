const Education = () => {
  const education = [
    {
      title: 'Diplomatura en Desarrollo web FULL-STACK',
      institution: 'Centro de e-Learning UTN FRBA',
      period: 'mar. 2023 – dic. 2023',
      technologies: [
        'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'React',
        'jQuery', 'SQL Server', 'MongoDB', 'Node.js', 'APIs'
      ],
      description: 'Formación completa en desarrollo web full-stack, abarcando desde el frontend con tecnologías modernas hasta el backend con bases de datos relacionales y no relacionales.'
    },
  ]

  return (
    <section id="educacion" className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Educación</h2>
        <p className="section-subtitle">Formación académica y profesional</p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="card-aero p-6 md:p-8 hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-1">{edu.title}</h3>
                  <p className="text-lg text-gray-300 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-4">{edu.description}</p>
                </div>
                <span className="text-cyan-300 font-semibold text-sm md:text-base whitespace-nowrap">{edu.period}</span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-3">Tecnologías trabajadas:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

