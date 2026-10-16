import Header from './components/Header/Header'
import SideRails from './components/SideRails/SideRails'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Studio from './components/Studio/Studio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Перейти до вмісту
      </a>
      <SideRails />
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
        <Services />
        <Studio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
