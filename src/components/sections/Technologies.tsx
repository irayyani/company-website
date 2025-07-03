const Technologies = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Git', category: 'Version Control' }
  ]



  return (
    <section id="technologies" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust and scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-primary mb-1">{tech.name}</h3>
              <p className="text-sm text-accent">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies