import React, { useEffect, useRef, useState } from 'react';
import int from './assets/C Certificate.png';
import ud from './assets/Web Certificate.png';
import r from './assets/react.jpg';
import p from './assets/java Certificate.png';
import q from './assets/Unified.jpg';

const CertificateCard = ({ cert }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        transition: 'all 0.6s ease-out',
        margin: '20px',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
        textAlign: 'center',
        maxWidth: '360px',
      }}
    >
      <img
        src={cert.img}
        alt={cert.title}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '16px',
        }}
      />
      <h3 style={{ fontSize: '20px', color: '#3f51b5', marginBottom: '8px' }}>
        {cert.title}
      </h3>
      <p style={{ fontSize: '15px', color: '#444' }}>{cert.description}</p>
    </div>
  );
};

const Certificates = () => {
  const certificateList = [
    {
      title: 'C Programming Course',
      description: '🎉 Excited to share that I have successfully completed the C Programming course from "Great learning" This journey has been a remarkable experience, deepening my understanding of C programming and equipping me with essential skills. In this i have learned the fundamentals of programming using the C language. The course covered key concepts such as variables, data types, operators, loops, functions, arrays, pointers, and file handling. Through hands-on practice, I developed a strong foundation in logical thinking and problem-solving using C..',
      img: int,
    },
    {
      title: 'MERN stack course',
      description: 'Thrilled to share that I have completed “The Complete Full-Stack Web Development Bootcamp” by Dr. Angela Yu on Udemy This 61.5-hour journey covered everything from front-end to back-end technologies — including HTML  CSS JavaScript Nodejs, Express, MongoDB, and more. It’s been a rewarding experience, and I’m excited to apply these skills to real-world projects and continue growing as a developer.A big thanks to Angela Yu for her excellent instruction and to everyone supporting me on this learning path.Lets build something great!.',
      img: ud,
    },
    {
      title: 'React course',
      description: '🎉 Excited to share that I have successfully completed the React and Redux course from Knowledge Gate! 🛠️ Throughout the course, I gained hands-on experience with: React fundamentals and component architecture State management using Redux Building dynamic web applications A big thank you to Prashant Jain Sir and the Knowledge Gate team for this comprehensive learning experience..',
      img: r,
    },
    {
      title: 'Java Programming',
      description: '🎉 Excited to share that I have successfully completed the Java course from "Great learning" This journey has been a remarkable experience, deepening my understanding of java programming and equipping me with essential skills. In this i have gained a solid understanding of object-oriented programming concepts such as classes, objects, inheritance, polymorphism, and encapsulation. I also learned to write Java programs using loops, arrays, functions, and exception handling. This course has improved my coding skills and enhanced my ability to build real-world Java applications.!',
      img: p,
    },
    {
      title: 'Unified mentor pvt.ltd',
      description: 'I m excited to share that I have completed my internship at Unified Mentor Private Limited ! This experience has been instrumental in helping me grow both professionally and personally. Ihave developed a strong foundation in frontend development and have gained a deeper understanding of the industry I am thankful for the support and guidance of my colleagues and look forward to staying connected Unified Mentor Private Limited.',
      img: q,
    },
    // {
    //   title: 'UI/UX Basics',
    //   description: 'Designed accessible and user-friendly interfaces.',
    //   img: 'https://via.placeholder.com/600x350?text=UI+UX+Certificate',
    // },
  ];

  return (
    <div
      style={{
        padding: '60px 20px',
        background: 'linear-gradient(to bottom right, #e3f2fd, #fce4ec)',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '36px',
          marginBottom: '40px',
          color: '#6a1b9a',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px #fff',
        }}
      >
        Certificates & Achievements
      </h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {certificateList.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
