import { motion } from 'framer-motion'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-gray-50">
      <div className="container mx-auto container-padding text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-balance"
        >
          Building the Future with
          <span className="text-accent"> Innovation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-accent mb-8 max-w-3xl mx-auto"
        >
          We create exceptional digital experiences that drive growth and transform businesses in the modern world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero