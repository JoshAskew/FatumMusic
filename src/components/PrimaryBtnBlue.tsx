import '../styles/index.css';
import ArrowLeft from '../assets/ArrowLeftWhite.svg';
import ArrowRight from '../assets/ArrowRightWhite.svg';

interface PrimaryBtnProps {
  text: string;
  leftIcon?: string;  // Optional left icon
  rightIcon?: string; // Optional right icon
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ text, leftIcon, rightIcon }) => {
  return (
    <button className="primary-btn-blue">
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

export default PrimaryBtn;
