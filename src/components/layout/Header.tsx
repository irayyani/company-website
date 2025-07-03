const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Logo</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-primary hover:text-accent">About</a>
            <a href="#services" className="text-primary hover:text-accent">Services</a>
            <a href="#technologies" className="text-primary hover:text-accent">Technologies</a>
            <a href="#team" className="text-primary hover:text-accent">Team</a>
            <a href="#contact" className="text-primary hover:text-accent">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header