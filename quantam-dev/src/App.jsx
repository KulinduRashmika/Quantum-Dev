import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Features  from './components/Features'
import Team      from './components/Team'
import TechStack from './components/TechStack'
import Vision    from './components/Vision'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
        <TechStack />
        <Vision />
      </main>
      <Footer />
    </>
  )
}
