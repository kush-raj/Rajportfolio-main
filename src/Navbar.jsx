import React, { useState, useEffect } from 'react';
import  {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import Contact from './Contact';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile drawer if the user resizes back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);




  return (
    <>
      <style>
        {`
        /* ----- base layout ----- */
        .navbar {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 10px 20px;
          position: relative;
          z-index: 999;
        }

        /* logo & name */
        .nav-logo {
          font-size: 3.75rem;           /* 60 px on desktop */
          font-weight: 900;
          margin-right: 3px;
          line-height: 1;
          animation: fadeIn 3s ease-in-out;
        }
        .surname { font-weight: 100; }

        .portName {
          margin-left: 15px;
          padding: 6px 30px;
          background-color: #8ED7EE;
          border: none;
          border-radius: 100px;
          box-shadow: 0 5px 40px 3px #8ed8eebe;
          color: #fff;
          font-size: 0.85rem;
        }

        /* desktop links */
        .nav-links { display: flex; gap: 15px; }
        .nav-links a {
          color: #000;
          text-decoration: none;
          padding: 8px 12px;
          font-size: 1rem;
          transition: background-color 0.3s;
        }
        .nav-links a:hover {
          background-color: #1edcdc;
          border-radius: 4px;
        }

        /* hamburger */
        .nav-toggle {
          display: none;                /* hidden on desktop */
          flex-direction: column;
          cursor: pointer;
        }
        .nav-toggle .bar {
          width: 25px;
          height: 3px;
          background-color: #000;
          margin: 4px 0;
          transition: 0.4s;
        }

        /* ---------- mobile & tablet ---------- */
        @media (max-width: 768px) {
          .nav-logo       { font-size: 2.3rem; }     /* shrink logo */
          .portName       { padding: 4px 18px; font-size: 0.75rem; }

          .nav-links {
            position: absolute;
            top: 100%;              /* just below navbar */
            right: 0;
            width: 100%;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);






            flex-direction: column;
            max-height: 0;          /* collapsed by default */
            overflow: hidden;
            transition: max-height 0.3s ease-in;
          }
          .nav-links a     { color: #fff; padding: 12px 16px; }

          .nav-links.open  { max-height: 320px; }    /* expand when open */

          .nav-toggle      { display: flex; }        /* show hamburger */
        }

        /* extra‑small screens */
        @media (max-width: 480px) {
          .nav-logo { font-size: 1.8rem; }
        }

        /* fade‑in animation for the logo */
        @keyframes fadeIn {
          0%   { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>

      <nav className="navbar">
        <div className="nav-logo">
          Raj <span className="surname">Kushwaha</span>
          <span className="portName">Portfolio</span>
        </div>

        {/* links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/about"     onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link  to="/project"    onClick={() => setIsOpen(false)}>Projects</Link>

          <Link to="/certificates"  onClick={() => setIsOpen(false)}>Certificates</Link>
          <Link to="/contact" >Contact</Link>
       
          <a href="https://github.com/kush-raj?tab=repositories" target="_blank" onClick={() => setIsOpen(false)}><FaGithub /></a>
        </div>

        {/* hamburger */}
        <div
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;































//     import React, { useState } from 'react';


// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//      <div className="nav-logo">
//   Sumit <span className="surname">Kushwaha</span>
//   <span className="portName">Portfolio</span>
// </div>
//       <div className={`nav-links ${isOpen ? 'open' : ''}`}>
//         <a href="#home">About</a>
//         <a href="#features">Skills</a>
//         <a href="#about">projects</a>
//         <a href="#contact">Certificates</a>
//          <a href="#contact">contact</a>
//           <a href="#contact">github</a>
//       </div>
//       <div className="nav-toggle" onClick={toggleMenu}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
