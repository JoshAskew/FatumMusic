import '../styles/index.css';
import ArrowRight from '../assets/ArrowRightWhite.svg';
import ArrowLeft from '../assets/ArrowLeftWhite.svg';

interface PrimaryBtnBlueProps {
  text: string;
  leftIcon?: string;  // Optional left icon
  rightIcon?: string; // Optional right icon
}

const BlueButtonMini: React.FC<PrimaryBtnBlueProps> = ({ text, leftIcon, rightIcon }) => {
  return (
    <button className="mini-btn-blue">
      {leftIcon && (
        <img 
          src={ArrowLeft} 
          alt="left-icon" 
          style={{ marginRight: '10px' }}
        />
      )}
      {text}
      {rightIcon && (
        <img
          src={ArrowRight}
          alt="right-icon"
          style={{ marginLeft: '10px' }}
        />
      )}
    </button>
  );
};

export default BlueButtonMini;
