import '../styles/index.css';
import ArrowRight from '../assets/ArrowRightBlack.svg';
import ArrowLeft from '../assets/ArrowLeftBlack.svg';

interface PrimaryBtnYellowProps {
  text: string;
  leftIcon?: string;  // Optional left icon
  rightIcon?: string; // Optional right icon
}

const PrimaryBtnYellow: React.FC<PrimaryBtnYellowProps> = ({ text, leftIcon, rightIcon }) => {
  return (
    <button className="primary-btn-yellow">
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

export default PrimaryBtnYellow;
