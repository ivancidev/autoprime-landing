import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalogo from './components/Catalogo'
import Servicios from './components/Servicios'
import Testimonios from './components/Testimonios'
import CtaBanner from './components/CtaBanner'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Catalogo />
      <Servicios />
      <Testimonios />
      <CtaBanner />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
