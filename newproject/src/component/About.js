
import React from 'react';
import about1 from '../assest/about1.jpg';
import about2 from '../assest/about2.jpg';
import './about.css';

const About = React.forwardRef(({ style }, ref) => {
  return (
    <div style={style} ref={ref}>
      <div className="container text-center">
        <div className="row">
          <div className="col mb-5">
            <h4 className="mb-6 heading">More Information About The Best Beaches</h4>
            <p className="mb-6 para">
              You can find the most beautiful and pleasant places at the best prices with special discounts. Choose the place, and we will guide you all the way. Get your place now.
            </p>
            <button className="but ">Reserve a Place</button>
          </div>
          <div className="col">
            <div className="wrapper">
              <div className="parent">
                <div className="child1">
                  <img className="img" src={about1} alt="Beach 1" />
                </div>
                <div className="child2">
                  <img className="img" src={about2} alt="Beach 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
