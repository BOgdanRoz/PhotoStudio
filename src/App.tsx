import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Studio from './components/Studio/Studio'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Перейти до вмісту
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
        <Services />
        <Studio />
      </main>
    </>
  )
}

export default App
