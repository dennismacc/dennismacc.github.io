import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Certificates from './components/Certificates'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        {/* <Certificates /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
