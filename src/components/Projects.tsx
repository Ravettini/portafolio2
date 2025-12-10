const Projects = () => {
  const placeholderProjects = [
    {
      name: 'Proyecto 1',
      description: 'Descripción del proyecto se agregará próximamente. Este es un placeholder para mostrar la estructura de las tarjetas de proyectos.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'Proyecto 2',
      description: 'Descripción del proyecto se agregará próximamente. Este es un placeholder para mostrar la estructura de las tarjetas de proyectos.',
      technologies: ['Next.js', 'MongoDB', 'Node.js'],
    },
    {
      name: 'Proyecto 3',
      description: 'Descripción del proyecto se agregará próximamente. Este es un placeholder para mostrar la estructura de las tarjetas de proyectos.',
      technologies: ['React', 'SQL Server', 'APIs'],
    },
  ]

  return (
    <section id="proyectos" className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Los proyectos se agregarán próximamente. Por ahora, puedes ver la estructura de cómo se mostrarán.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project, index) => (
            <div
              key={index}
              className="card-aero p-6 hover:translate-y-[-4px] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="chip text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  disabled
                  className="btn-primary opacity-50 cursor-not-allowed text-sm px-4 py-2"
                >
                  Ver demo
                </button>
                <button
                  disabled
                  className="btn-secondary opacity-50 cursor-not-allowed text-sm px-4 py-2"
                >
                  Ver código
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

