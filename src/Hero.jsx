import React from 'react';
import hi from './assets/sayHi.png';
import res from './assets/resume btn.png';
import some from './assets/something.png';

function Hero() {
  return (
    <>
      <style>
        {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .text-Area {
          margin: 30px auto;
          padding: 0 5vw;
          text-align: center;
          max-width: 900px;
        }

        #id1 {
          font-family: cursive;
          font-size: 2.5rem;
          color: #7564cb;
          margin-bottom: 1rem;
        }

        .crsv {
          font-style: italic;
          color: #ff69b4;
        }

        .image-contaiber {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .img-src {
          width: 150px;
          max-width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .img-src:hover {
          transform: scale(1.1);
        }

        .image-contaiber img {
          max-width: 120px;
          width: 100%;
          height: auto;
        }

        .something {
          text-align: center;
          padding: 3rem 1rem;
        }

        .something img {
          width: 100%;
          max-width: 600px;
          height: auto;
        }

        .textt {
          text-align: center;
          font-family: cursive;
          padding: 2rem 1rem;
        }

        .textt h1 {
          font-size: 1.8rem;
        }

        .connect {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          box-shadow: 0 4px 20px rgba(72, 148, 110, 0.486);
          background-color: #0eb152;
          color: white;
          border: none;
          border-radius: 50px;
          margin-top: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .connect:hover {
          background-color: #0a8f43;
        }

        .collab {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
          display: block;
          height: auto;
        }

        .love-para {
          text-align: center;
          font-size: 0.95rem;
          color: #444;
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          #id1 {
            font-size: 2rem;
          }

          .textt h1 {
            font-size: 1.5rem;
          }

          .img-src {
            width: 120px;
          }
        }

        @media (max-width: 480px) {
          #id1 {
            font-size: 1.6rem;
          }

          .textt h1 {
            font-size: 1.2rem;
          }

          .connect {
            width: 90%;
            font-size: 0.9rem;
          }

          .something img {
            padding: 0;
          }

          .img-src {
            width: 100px;
          }
        }
          .body-src img {
  width: 200px;     /* adjust as needed */
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.body-src img:hover {
  transform: scale(1.05);
}
          
        `}
      </style>

      <div className="text-Area">
        <h1 id="id1">
          Passionate about crafting
          <br />
          <span className="crsv">"flawless"</span> beautiful, responsive web interfaces.
        </h1>
        <p>
          I am a MERN stack Developer from Prayagraj, India. I love to create great website user
          experiences & website designs for brands. Other than that...
        </p>
      </div>

      <div className="image-contaiber">
        <a href="https://wa.me/7991286639?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
          <img className="img-src" src={hi} alt="Say Hi on WhatsApp" />
        </a>
        <a className='body-src' href="/sumit_kushwaha.pdf" download="Resume.pdf">
          <img src={res} alt="Download Resume" />
        </a>
      </div>

      <div className="something">
        <img src={some} alt="Decorative" />
      </div>

      <div className="textt">
        <h1>Let's work together, and create something</h1>
        <h1>really amazing.</h1>
        <button
          className="connect"
          onClick={() =>
            window.open('https://www.linkedin.com/in/sumit-kushwaha-046265291', '_blank')
          }
        >
          Connect with me
        </button>
      </div>

      <div>
        <img className="collab" src="/collaborationart.png" alt="Collaboration Art" />
      </div>

      <p className="love-para">created with 💗 by me</p>
    </>
  );
}

export default Hero;























// import React from 'react'
// import hi from './assets/sayHi.png'
// import res from './assets/resume btn.png'
// import some from './assets/something.png'

// function Hero() {
//   return (
//     <>
//     <div className='text-Area'>
//     <h1 id='id1' >Passionate about crafting 
//         <br />  
//         <span className='crsv' >"flawless"</span>
//      beautiful, responsive web interfaces.
        
//     </h1>
//    <p>I am Mern stack Developer from Prayagraj, India. I love to create great website user experiences
// & website designs for brands, other than that</p>
//     </div>

// <div className='image-contaiber'>
//    <a href="https://wa.me/917607696315?text=Hello%20there!" target="_blank">


// <img className='img-src' src={hi} alt="" srcset="" />
//   </a>
//  <a href="/Resume.pdf" download="Resume.pdf">
// <img src={res} alt="" srcset="" />
// </a>
// </div>
// <div className='something'>
// <img src={some} alt="" srcset="" />

// </div>
// <div className='textt'>
//   <h1>Let's work together, and create something</h1>
// <h1>really amazing.</h1>

// <button className='connect' onClick={() => window.open('https://www.linkedin.com/in/sumit-kushwaha-046265291', '_blank')}>
//   Connect with me
// </button>

// </div>
// <div>
// <img  className='collab' src="/collaborationart.png" alt="" />

// </div>
// <p className='love-para '>created with 💗 by me</p>
// </>
//   )
// }

// export default Hero
