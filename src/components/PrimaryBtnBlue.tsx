import '../styles/index.css'
import ArrowLeft from '../assets/ArrowLeftWhite.svg'
import ArrowRight from '../assets/ArrowRightWhite.svg'

const PrimaryBtn = ({ text }: { text: string }) => {
    return (
      <button className='primary-btn-blue'>
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

    export default PrimaryBtn;