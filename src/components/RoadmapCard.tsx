
import '../styles/index.css';

interface CardProps {
  image: string; // URL of the image
  header: string; // Card header text
  text: string; // Card description text
}

const Card: React.FC<CardProps> = ({ image, header, text }) => {
  return (
    <div className="card">
      <img src={image} alt={header} className="card-image" />
      <h3 className="card-header">{header}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
