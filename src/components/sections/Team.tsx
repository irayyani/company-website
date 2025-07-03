import Card from '../ui/Card'

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Technical expert specializing in scalable architecture and innovation.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating exceptional user experiences.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Wilson',
      role: 'UX Designer',
      bio: 'Creative designer focused on user-centered design and accessibility.',
      image: '/api/placeholder/300/300'
    }
  ]

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience and passion for innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team