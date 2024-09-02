
// import React, { useState, useRef } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Navbar from './Navbar';
// import About from './About';
// import Discover from './Discover';
// import Places from './Places';

// const Routers = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const aboutRef = useRef(null);
//     const discoverRef = useRef(null);
//    const placeref=useRef(null)


//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     const darkModeStyle = {
//         backgroundColor: isDarkMode ? 'black' : 'white',
//         color: isDarkMode ? 'white' : 'black',
//     };

//     return (
//         <div>
//             <BrowserRouter>
//                 <Navbar toggleDarkMode={toggleDarkMode} aboutRef={aboutRef} discoverRef={discoverRef} placeref={placeref} />
//                 <div className="content">
//                     <About ref={aboutRef} style={darkModeStyle} />
//                     <Discover ref={discoverRef} style={darkModeStyle} />
//                     <Places style={darkModeStyle}/>

//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default Routers;
import React, { useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Discover from './Discover';
import Places from './Places';

const Routers = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const aboutRef = useRef(null);
    const discoverRef = useRef(null);
    const placeref = useRef(null);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const darkModeStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
    };

    return (
        <div>
            <BrowserRouter>
                <Navbar toggleDarkMode={toggleDarkMode} aboutRef={aboutRef} discoverRef={discoverRef} placeref={placeref} />
                <div className="content">
                    <About ref={aboutRef} style={darkModeStyle} />
                    <Discover ref={discoverRef} style={darkModeStyle} />
                    <Places ref={placeref} style={darkModeStyle} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Routers;
