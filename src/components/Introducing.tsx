import Frame from '../assets/Frame1.svg'
import Card from '../components/RoadmapCard.tsx'
import Ellipse from '../assets/Ellipse4.svg'
import PrimaryBtnBlue from './PrimaryBtnBlue.tsx';
import ArrowRight from '../assets/ArrowRightBlack.svg';


function Introducing() {
  return (
    <div className='introducing'>
     <img className='banner-img' src={Frame} alt='Frame' />  
        <h1 className='introducing-h1'>Introducing the Instagram <span className='accelerator-span'>Accelerator</span> System</h1>
       <h3 className='introducing-h3'>Your Roadmap from Struggling Artist to Industry Stand-out</h3>
       <h5 className='introducing-h5'>A proven 5-stage framework that turns your Instagram into a career-launching platform (even if you're starting from zero)</h5>
       <div className='card-container'>
       <Card 
        image= {Ellipse}
        header="Master the Foundation" 
        text="Learn the essentials of the Instagram algorithm and profile optimization that 99% of artists miss. Stand out in a crowded market with a profile that captures attention and converts views into opportunities." 
      />
      <Card 
        image= {Ellipse}
        header="Create & Convert" 
        text="Transform your phone into a content powerhouse with our pre-validated frameworks. Create a month's worth of engaging posts in one afternoon - perfect for busy artists balancing music with real life." 
      />
      <Card 
        image= {Ellipse}
        header="Build Your Engine" 
        text="Stop posting randomly and hoping for results. Use our data-driven approach to understand exactly what content drives growth, and create a system that works while you sleep." 
      />
      </div>
      <div className='path-container'>
        <h5 className='path-h5'>The Path to Industry Recognition Is Simpler Than You Think</h5>
        <PrimaryBtnBlue rightIcon={ArrowRight} text='Start my transformation' />
        </div>
    </div>
  );
}

export default Introducing;
