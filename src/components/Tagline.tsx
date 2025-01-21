import PlaceHolder from '../assets/VideoPlaceHolder.png';
import PrimaryBtnYellow from './PrimaryBtnYellow';
import ArrowRight from '../assets/ArrowRightBlack.svg';
import Vector1 from '../assets/Vector1.svg'

function Tagline() {
  return (
    <div className='hero'>
       <img src={Vector1} alt="Background Vector" className="background-svg" />
      <PrimaryBtnYellow rightIcon={ArrowRight} text='Eleveate Your Production' />
      <h1 className="tagline-h1">
        <span className="stop-span">Stop</span>&nbsp; Fighting the Algorithm, &nbsp;
        <br />
        <span className="highlight-span">Start Building</span>&nbsp; Your Empire
      </h1>
      <img src={PlaceHolder} alt="Video Place Holder" className="video-place-holder" />
    </div>
  );
}

export default Tagline;
