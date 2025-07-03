import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Technologies from './components/sections/Technologies'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div className="relative">
      <Header />
      <Parallax pages={7} className="relative">
        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0.5}>
          <Hero />
        </ParallaxLayer>

        {/* About Section */}
        <ParallaxLayer offset={1} speed={0.2}>
          <About />
        </ParallaxLayer>

        {/* Services Section */}
        <ParallaxLayer offset={2} speed={0.5}>
          <Services />
        </ParallaxLayer>

        {/* Technologies Section */}
        <ParallaxLayer offset={3} speed={0.2}>
          <Technologies />
        </ParallaxLayer>

        {/* Team Section */}
        <ParallaxLayer offset={4} speed={0.5}>
          <Team />
        </ParallaxLayer>

        {/* Contact Section */}
        <ParallaxLayer offset={5} speed={0.2}>
          <Contact />
        </ParallaxLayer>

        {/* Footer Section */}
        <ParallaxLayer offset={6} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App