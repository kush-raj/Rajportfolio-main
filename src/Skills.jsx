import React, { useEffect, useState } from "react";

const Skills = () => {
  const skillsData = [
    { name: "HTML5", level: 95, color: "#E34F26", img: "/HTML5.png" },
    { name: "CSS3", level: 90, color: "#1572B6", img: "/css.jpeg" },
    { name: "JavaScript", level: 85, color: "#F7DF1E", img: "/js.png" },
    { name: "React.js", level: 80, color: "#61DAFB", img: "/React.webp" },
    { name: "Bootstrap", level: 90, color: "#88CE02", img: "/bootstrap.jpg" },
    { name: "Node.js", level: 75, color: "#339933", img: "/Node.png" },
    { name: "Express.js", level: 70, color: "#000000", img: "/ExpressJS.png" },
    { name: "MongoDB", level: 70, color: "#47A248", img: "/mongodb.png" },
    { name: "Java", level: 65, color: "#ff33c7", img: "/java.png  " },
    { name: "Figma", level: 80, color: "#4233ff", img: "/figma.png  " },
    { name: "Canva", level: 80, color: "#96ff33", img: "/Canva.jpg  " },
    { name: "C", level: 65, color: "#A8B9CC", img: "/c.png" },
  ];

  const [animatedLevels, setAnimatedLevels] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedLevels((prev) =>
        prev.map((val, i) => (val < skillsData[i].level ? val + 1 : val))
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    page: {
      background: "linear-gradient(to right,rgb(187, 162, 231),rgb(144, 201, 248))",
      minHeight: "100vh",
      padding: "2rem 0",
    },
    container: {
      padding: "2rem",
      maxWidth: "700px",
      margin: "auto",
      fontFamily: "Segoe UI, sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "2rem",
      marginBottom: "2rem",
      color: "#fff",
    },
    skillCard: {
      display: "flex",
      flexDirection: "column",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      marginBottom: "1rem",
      transition: "transform 0.2s",
    },
    skillLabel: {
      display: "flex",
      alignItems: "center",
      fontSize: "1rem",
      marginBottom: "0.5rem",
      color: "#333",
    },
    logo: {
      width: "32px",
      height: "32px",
      marginRight: "0.75rem",
      objectFit: "contain",
    },
    skillBar: {
      height: "12px",
      background: "#eee",
      borderRadius: "6px",
      overflow: "hidden",
    },
    skillBarFill: {
      height: "100%",
      borderRadius: "6px",
      transition: "width 0.4s ease",
    },
    skillLevel: {
      textAlign: "right",
      fontSize: "0.85rem",
      color: "#777",
      marginTop: "0.4rem",
    },
  };

  return (
    <>
   
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>🚀 My Skills</h2>
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            style={styles.skillCard}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={styles.skillLabel}>
              <img src={skill.img} alt={skill.name} style={styles.logo} />
              {skill.name}
            </div>
            <div style={styles.skillBar}>
              <div
                style={{
                  ...styles.skillBarFill,
                  width: `${animatedLevels[index]}%`,
                  backgroundColor: skill.color,
                }}
              ></div>
            </div>
            <div style={styles.skillLevel}>{animatedLevels[index]}%</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Skills;
