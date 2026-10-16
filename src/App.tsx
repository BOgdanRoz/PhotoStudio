import Header from './components/Header/Header'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Перейти до вмісту
      </a>
      <Header />
      <main id="main" />
    </>
  )
}

export default App
