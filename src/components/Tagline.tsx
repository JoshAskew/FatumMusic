
import PrimaryBtnBlue from './PrimaryBtnBlue';
import ArrowRight from '../assets/ArrowRightBlack.svg';
import Logo from '../assets/Fatum-TDJB Logo.svg'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
// import Rating from '@mui/material/Rating';


function Tagline() {
  return (
    <div className='hero'>
      <img src={Logo} alt="DJ Blueprint Logo" className="logo" />
      <h1 className="tagline-h1"> Amplify Your Music Career<br/>by&nbsp;&nbsp;
        <span className="highlight-span">Mastering</span>&nbsp; Instagram
      </h1>
      <div className='tagline-container'>
      <h5 className='tagline-h5'>Learn the exact Instagram strategy that helped 500+ artists build powerful personal brands and unlock opportunities they never thought possible (even if you're starting from zero)</h5>
      </div>
      <PrimaryBtnBlue className='cta-1' rightIcon={ArrowRight} text='Scale my music career' />
      <br/>
      <div className="video-container">
        <iframe className='video-container'
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/W2afI0n8pUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='avatar-container'>
      {/* <Rating className= 'rating' name="read-only" value={5} readOnly /> */}
      <AvatarGroup spacing="small">
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <div className='avatar-text'>Join 70,000+ followers who are already growing their careers

  </div>
</AvatarGroup>
      </div>
    </div>
  );
}

export default Tagline;
