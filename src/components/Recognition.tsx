
import Eyeglass from '../assets/Eyeglasses.svg';
import Graph from '../assets/graph.svg';
import Watch from '../assets/watch.svg';

function Recognition() {
  return (
    <>
    <div className='recognition-container'>
      <h1 className="recognition-h1">Your Music <span className="highlight-deserves">Deserves</span> More Recognition</h1>
      <p className="recognition-p1">
      If you're making great music but still struggling to break through, you're probably facing one of these three roadblocks...
      </p>
      <div className="recognition-list">
        <div className="recognition-list-item">
        <div className="recognition-content">
        <div className="ellipse-wrapper">
      <div className='recognition-ellipse'><img src={Eyeglass} alt="Eyeglass" className="recognition-eyeglass"/></div>
      </div>
          <div className='recognition-text'>
          <h5 className="recognition-h5"> The Visibility Trap </h5>
          <p className="recognition-p">Your music is incredible, but in today's crowded industry, talent alone isn't enough. While less talented artists gain traction through strategic social media presence, you're stuck wondering why great music isn't enough anymore.</p>
          </div>
          </div>
          </div>
          </div>
          <div className="recognition-list">
        <div className="recognition-list-item">
        <div className="recognition-content">
        <div className="ellipse-wrapper">
      <div className='recognition-ellipse'><img src={Graph} alt="Graph" className="recognition-graph"/></div>
      </div>
          <div className='recognition-text'>
          <h5 className="recognition-h5"> The Algorithm Overwhelm </h5>
          <p className="recognition-p">You're posting content, but it feels like shouting into the void. Your reach is limited, engagement is low, and those career-changing opportunities seem to always go to others who've cracked the code.</p>
          </div>
          </div>
          </div>
          </div>
          <div className="recognition-list">
        <div className="recognition-list-item">
        <div className="recognition-content">
        <div className="ellipse-wrapper">
      <div className='recognition-ellipse'><img src={Watch} alt="Watch" className="recognition-watch"/></div>
      </div>
          <div className='recognition-text'>
          <h5 className="recognition-h5"> The Time-Content Balance </h5>
          <p className="recognition-p">Between creating music, managing your current obligations, and trying to build a social media presence, you're stretched thin. You know Instagram is crucial, but you can't figure out how to make it work without sacrificing your artistic focus.</p>
          </div>
          </div>
          </div>
          </div>
    </div>
          </>
  );
}

export default Recognition;