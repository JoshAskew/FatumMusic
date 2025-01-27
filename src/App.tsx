import './styles/index.css'
import Footer from './components/Footer'
import Tagline from './components/Tagline'
import Recognition from './components/Recognition'
import Introducing from './components/Introducing'
// import Timer from './components/Timer'
// import Toggle from './components/DarkModeToggle'

function App() {

  return (
    <>
      {/* <Toggle /> */}
      <Tagline />
      <Recognition />
      <Introducing />
      {/* <Timer /> */}
     <Footer />
    </>
  )
}

export default App
