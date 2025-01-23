import PlaceHolder from '../assets/VideoPlaceHolder.png';
import PrimaryBtnBlue from './PrimaryBtnBlue';
import ArrowRight from '../assets/ArrowRightBlack.svg';
import Logo from '../assets/Fatum-TDJB Logo.svg'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


function Tagline() {
  return (
    <div className='hero'>
      <img src={Logo} alt="DJ Blueprint Logo" className="logo" />
      <h1 className="tagline-h1"> Turn Your Instagram Into Your<br/>Most&nbsp;&nbsp;
        <span className="highlight-span">Powerful</span>&nbsp; Career Asset
      </h1>
      <div className='tagline-container'>
      <h5 className='tagline-h5'>A proven system for building an engaged audience that opens doors to festivals, label deals, brand partnerships, and more - without compromising your artistic integrity</h5>
      </div>
      <PrimaryBtnBlue className='cta-1' rightIcon={ArrowRight} text='Scale my music career' />
      <br/>
      <img src={PlaceHolder} alt="Video Place Holder" className="video-place-holder" />
      <div className='avatar-container'>
      <AvatarGroup spacing="small">
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <div className='avatar-text'>Join X+ student already growing
  their Instagram account</div>
</AvatarGroup>
      </div>
    </div>
  );
}

export default Tagline;
