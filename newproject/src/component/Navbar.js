
import React from 'react';
import { MdBrightness3 } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './navbar.css';
import home2 from '../assest/home2.jpg'
const Navbar = ({ toggleDarkMode, aboutRef, discoverRef, placeref }) => {

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Travel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => scrollToSection(aboutRef)} to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => scrollToSection(discoverRef)} to='/discover'>Discover</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => scrollToSection(placeref)} to='/places'>Places</Link>
                            </li>
                            <li className="nav-item">
                                <MdBrightness3 onClick={toggleDarkMode} style={{ cursor: 'pointer', color: 'white' }} />
                            </li>
                        </ul>
                    </div>
                </div>

                
                <div className="text-content">
                    <p className="subtitle">Discover your place</p>
                    <h1 className="main-title">Explore The<br />Best Beautiful<br />Beaches</h1>
                    <button className="explore-button">Explore</button>

                </div>
                <div className="home__info">
                    <p>5 best places to visit</p>
                    <img src={home2}  className='sideimage'alt='noimage'/>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
