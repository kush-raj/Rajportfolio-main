import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "An beautiful sleek personal portfolio built with MERN stack and GSAP animations.",
    tags: ["React", "GSAP", "CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/img1project.png",
    github: "https://github.com/kush-raj/Rajportfolio-main.git",
  },
  {
    title: "E-commerce store(BAGGIFY)",
    description: "MERN-stack app with Node.js , MongoDB and  payment gateway integration.",
    tags: ["Node.js", "MongoDB", "Express","React.js","Gsap","css","stripe  "],
    image: "/img2proj.png.png",
    github: "https://github.com/Sumitt7607/Baggify",
  },
  // {
  //   title: "LoG-Tantra ",
  //   description: "An platForm where people can express their thoughts, feelings.",
  //   tags: ["React", "redux","BootStrap"],
  //   image: "/img3proj.png",
  //   github: "https://github.com/Sumitt7607/logtantra",
  // },
   // {
   //  title: "Pintrest ",
   //  description: "An Pintrest clone ",
   //  tags: ["ejs", "node.js","express.js","mongodb","tailwind Css"],
   //  image: "/imgpint.png",
   //  github: "https://github.com/Sumitt7607/pinrest.git",
  // },
   // {
   //  title: "Todo App",
   //  description: "An platForm where people can make the list of things to be done.",
   //  tags: ["React","BootStrap"],
   //  image: "/img4proj4.png",
   //  github: "https://github.com/Sumitt7607/Todo-app.git",
  // },
   {
    title: "Weather App",
    description: "An platForm which gives the weather information",
    tags: ["Html","css","javaScript"],
    image: "/img5proj.png",
    github: "https://github.com/kush-raj/weather-main.git",
  },
  {
    title: "Tic-Tac-Toe game",
    description: "tic tac toe game ",
    tags: ["Html","css","javaScript"],
    image: "/ticTac.png",
    github: "https://github.com/kush-raj/TIc_TAC_TOE-main.git",
  },

  // Add more projects here...
];

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, rgb(129, 120, 177) 0%, rgb(48, 116, 115) 100%)",
    padding: "4rem 2rem",
    fontFamily: "Segoe UI, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#ffffff",
    marginBottom: "3rem",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: "1.5rem",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  cardHover: {
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  cardDescription: {
    color: "#ddd",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  tag: {
    fontSize: "0.8rem",
    padding: "0.4rem 0.8rem",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    borderRadius: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "180px",
    objectFit: "contain",
    borderRadius: "16px",
    margin: "0 auto 1rem auto",
    background: "#fff",
  },
  githubLink: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    background: "#000",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "background 0.3s ease",
  },
};

const ProjectCard = ({ project }) => (
  <div
    style={styles.card}
    onMouseEnter={(e) =>
      Object.assign(e.currentTarget.style, styles.cardHover)
    }
    onMouseLeave={(e) =>
      Object.assign(e.currentTarget.style, {
        transform: "scale(1)",
        boxShadow: styles.card.boxShadow,
      })
    }
  >
    <h3 style={styles.cardTitle}>{project.title}</h3>
    <p style={styles.cardDescription}>{project.description}</p>
    <div style={styles.tagsContainer}>
      {project.tags.map((tag, i) => (
        <span key={i} style={styles.tag}>{tag}</span>
      ))}
    </div>
    <img src={project.image} alt={project.title} style={styles.image} />
    <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
      🔗 View on GitHub
    </a>
  </div>
);

const Projects = () => (
  <div style={styles.page}>
    <div style={styles.container}>
      <h2 style={styles.title}>🌈 Featured Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
