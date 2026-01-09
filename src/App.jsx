import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Services from "./components/sections/Services"
import Testimonials from "./components/sections/Testimonials"
import Contact from './components/sections/Contact'
import Footer from "./components/layout/Footer"
const App = () => {
  return (
    <div className="min-h-screen bg-black ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div >
  )
}

export default App
