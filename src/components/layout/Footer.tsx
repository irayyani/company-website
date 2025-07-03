const Footer = () => {
  return (
    <footer className="bg-primary text-background section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="text-accent">
              Building innovative solutions for the modern world.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent hover:text-background">Web Development</a></li>
              <li><a href="#" className="text-accent hover:text-background">Mobile Apps</a></li>
              <li><a href="#" className="text-accent hover:text-background">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent hover:text-background">About</a></li>
              <li><a href="#" className="text-accent hover:text-background">Team</a></li>
              <li><a href="#" className="text-accent hover:text-background">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-accent">hello@company.com</li>
              <li className="text-accent">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accent mt-8 pt-8 text-center">
          <p className="text-accent">© 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer