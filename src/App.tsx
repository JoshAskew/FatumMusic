import './styles/index.css'
import Footer from './components/Footer'
import Tagline from './components/Tagline'
import Accordian from './components/Accordian'
import Accordian2 from './components/Accordian2'
import PrimaryBtnBlue from './components/PrimaryBtnBlue'
import PrimaryBtnYellow from './components/PrimaryBtnYellow'

function App() {

  return (
    <>
    <section className='first-section'>
      <Tagline />
      </section>
      <br/>
      <PrimaryBtnYellow text='Button Content'/>
      <br/>
      
      <PrimaryBtnBlue text="Button Content"/>
      <Accordian />
      <Accordian2 />
     <Footer />
    </>
  )
}

export default App
