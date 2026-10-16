import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Перейти до вмісту
      </a>
      <Header />
      <main id="main">
        <Hero />
      </main>
    </>
  )
}

export default App
