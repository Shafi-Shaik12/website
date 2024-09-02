

import React, { useRef } from 'react';
import discover1 from '../assest/discover1.jpg';
import discover2 from '../assest/discover2.jpg';
import discover3 from '../assest/discover3.jpg';
import experience1 from '../assest/experience1.jpg';
import experience2 from '../assest/experience2.jpg';
import videoFile from '../assest/video.mp4';
import './discover.css';

const Discover = React.forwardRef(({ style }, ref) => {
  const videoRef = useRef(null);

  return (
    <div style={style} ref={ref} className="container text-center">
      <h3>Discover the most
      attractive places</h3>
      <div className="col">
        <div className="wrapper">
          <div className="parent">
            <div className="child">
              <img className="img" src={discover1} alt="Beach 1" />
              <div className="text-overlay">
                White Heaven
                <p>32 tours available</p>
              </div>
            </div>
            <div className="child">
              <img className="img" src={discover2} alt="Beach 2" />
              <div className="text-overlay">
                Bali
                <p>32 tours available</p>
              </div>
            </div>
            <div className="child">
              <img className="img" src={discover3} alt="Beach 3" />
              <div className="text-overlay">
                Hawaii
                <p>15 tours available</p>
              </div>
            </div>
          </div>
        </div>
        <h3>With Our Experience, We Will Serve You</h3>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              20 Years of Experience
            </div>
            <div className="col">
              75 Complete Tours
            </div>
            <div className="col">
              650+ Tourist Destinations
            </div>
          </div>

          <div className="experience__overlay">
            <img className="experience__img-one" src={experience1} alt="Experience 1" />
            <img className="experience__img-two" src={experience2} alt="Experience 2" />
          </div>

        </div>
      </div>
      
      <div className="video-section">
        <h3>Video Tour</h3>
        <p>Find out more with our video of the most beautiful and pleasant places for you and your family.</p>
        <video ref={videoRef} className="video-player" controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
});

export default Discover;

