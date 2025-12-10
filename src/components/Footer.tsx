const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950/80 border-t border-slate-800/50 py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} Ignacio Ravettini Novellino. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer

