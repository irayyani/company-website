interface TimelineItem {
  title: string
  description: string
  date: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <div key={index} className="mb-8 flex items-start">
          <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-accent text-sm mb-2">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline