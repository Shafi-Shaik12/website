
import React from 'react';
import place1 from '../assest/place1.jpg';
import place2 from '../assest/place2.jpg';
import place3 from '../assest/place3.jpg';
import place4 from '../assest/place4.jpg';
import place5 from '../assest/place5.jpg';
import sponsors1 from '../assest/sponsors1.png'
import sponsors2 from '../assest/sponsors2.png'
import sponsors3 from '../assest/sponsors3.png'
import sponsors4 from '../assest/sponsors4.png'
import sponsors5 from '../assest/sponsors5.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

import './place.css'
import { Link } from 'react-router-dom';
const Places = React.forwardRef(({ style }, ref) => {
  return (
    <div style={style} ref={ref}>

      <div className="container text-center">\
      <div className="col">
        <div className="wrapper">
          <div className="parent">
            <div className="child">
              <img className="img" src={place1} alt="Beach 1" />
              <div className="text-overlay">
                White Heaven
                <p>32 tours available</p>
              </div>
            </div>
            <div className="child">
              <img className="img" src={place2} alt="Beach 2" />
              <div className="text-overlay">
                Bali
                <p>32 tours available</p>
              </div>
            </div>
            <div className="child">
              <img className="img" src={place3} alt="Beach 3" />
              <div className="text-overlay">
                Hawaii
                <p>15 tours available</p>
              </div>
              
            </div>
          </div>
        </div>
       
      
      </div>
      </div>
      <div className="container ">
      <div className="col">
        <div className="wrapper">
          <div className="parent">
            <div className="child">
              <img className="img" src={place4} alt="Beach 1" />
              <div className="text-overlay">
                White Heaven
                <p>32 tours available</p>
              </div>
            </div>
            <div className="child">
              <img className="img" src={place5} alt="Beach 2" />
              <div className="text-overlay">
                Bali
                <p>32 tours available</p>
              </div>
            </div>
           
          </div>
        </div>
       
      
      </div>
      </div>
      <div className="sucrible">
        <div className=" section__title title">
          <h2>Subscribe Our
Newsletter
</h2>

<div className='subscribe__description'>
Subscribe to our newsletter and get a special 30% discount.
</div>
<from className="subscribe__form">
  <input type='text' className='subscribe__from'/>
  <button>subscribe</button>

</from>
        </div>
      </div>
      <div className='sponsor section'>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <img src={sponsors1}  className='sponsor__img'alt="Place 3" />
    </div>
    <div class="col">
    <img src={sponsors2} className='sponsor__img' alt="Place 3" />
    </div>
    <div class="col">
    <img src={sponsors3}  className='sponsor__img'alt="Place 3" />
    </div>
    <div class="col">
    <img src={sponsors4} className='sponsor__img' alt="Place 3" />
    </div>
    <div class="col">
    <img src={sponsors5} className='sponsor__img' alt="Place 3" />
    </div>
  </div>
</div>
      </div>
    
<div className="footer text-center">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h6>Travel</h6>
              <p>Travel you choose the destination, we offer you the experience.</p>
              <div className="footer-social-links">
              <FaFacebook  />
              <FaTwitter  />
              <FaYoutube />
              <CiInstagram/>
              </div>
            </div>
            <div className="col">
              <h6>About</h6>
              <ul>
                <li><Link className='footer-link' to="/about">About Us</Link></li>
                <li><Link className='footer-link' to="/features">Features</Link></li>
                <li><Link className='footer-link' to="/blog">News & Blog</Link></li>
              </ul>
            </div>
            <div className="col">
              <h6>Company</h6>
              <ul>
                <li><Link className='footer-link' to="/team">Team</Link></li>
                <li><Link className='footer-link' to="/pricing">Plan y Pricing</Link></li>
                <li><Link className='footer-link' to="/membership">Become a member</Link></li>
              </ul>
            </div>
            <div className="col">
              <h6>Support</h6>
              <ul>
                <li><Link className='footer-link' to='/faqs'>FAQs</Link></li>
                <li><Link className='footer-link' to='/support'>Support Center</Link></li>
                <li><Link className='footer-link' to='/contact'>Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    


    </div>
  );
});

export default Places;
