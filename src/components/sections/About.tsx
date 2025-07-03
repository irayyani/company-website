const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Our Company</h2>
          <p className="text-lg text-accent mb-8 leading-relaxed">
            We are a forward-thinking technology company dedicated to creating innovative solutions 
            that empower businesses and individuals to achieve their goals. With years of experience 
            and a passion for excellence, we deliver cutting-edge products and services that make a 
            real difference in the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-accent">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-accent">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-accent">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About