import './styles/index.css'
import Footer from './components/Footer'
import Tagline from './components/Tagline'
import Accordian from './components/Accordian'
import Accordian2 from './components/Accordian2'
import PrimaryBtnBlue from './components/PrimaryBtnBlue'
import PrimaryBtnYellow from './components/PrimaryBtnYellow'
import ArrowLeft from './assets/ArrowLeftWhite.svg'
import ArrowRight from './assets/ArrowRightWhite.svg'

function App() {

  return (
    <>
    <section className='first-section'>
      <Tagline />
      </section>
      <br/>
      <PrimaryBtnYellow text='Eleveate Your Production' leftIcon={ArrowLeft} rightIcon={ArrowRight}/>
      <br/>
      
      <PrimaryBtnBlue text="Button Content" leftIcon={ArrowLeft} rightIcon={ArrowRight}/>
      <Accordian />
      <Accordian2 />
     <Footer />
    </>
  )
}

export default App
