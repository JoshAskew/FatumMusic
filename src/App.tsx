import './styles/index.css'
import Footer from './components/Footer'
import Tagline from './components/Tagline'
import Recognition from './components/Recognition'
import Introducing from './components/Introducing'
// import Timer from './components/Timer'

function App() {

  return (
    <>
      <Tagline />
      <Recognition />
      <Introducing />
      {/* <Timer /> */}
     <Footer />
    </>
  )
}

export default App
