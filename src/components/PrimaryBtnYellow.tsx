import '../styles/index.css'
import ArrowRight from '../assets/ArrowRightBlack.svg'
import ArrowLeft from '../assets/ArrowLeftBlack.svg'


const PrimaryBtnYellow = ({ text }: { text: string }) => {
    return (
      <button className='primary-btn-yellow'>
         <img src={ArrowLeft} alt='arrow-left' style={
          {marginRight: '10px'}
       }/>
      {text}
       <img src={ArrowRight} alt='arrow-right' style={
          {marginLeft: '10px'}
       } />
      </button>
    );
  };

    export default PrimaryBtnYellow;