
import React, { useEffect, useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setShow(true);

    // Detect screen width for responsive styles
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profileImg ="/Profile Photo.png";

   const introVideo ="/video.mp4";

   const gallery = [
    {
      src: "/icicpru.jpg",
      caption: "won ₹50,000 cash price in icici pru exam organised by icici pvt.ltd.",
    },
    {
      src: "/ngo.jpg",
      caption: "worked in Abopt foundation NGO for helping deaf anf blind childrens.",
    },
    {
      src: "/exhb.jpg",
      caption: "won the district level science exhibition show.",
    },
    {
      src: "/inno.jpg",
      caption: "won the Innovisionary 2.0 organised in college.",
    },
    {
      src: "/st.jpg",
      caption: "won Art and Craft competition.",
    },
    {
      src: "/kps.jpg",
      caption: "won first price in swimming.",
    },
  ];

  const styles = {
    sectionBase: {
      width: "100%",
      fontFamily: "'Inter', system-ui, sans-serif",
    },

    heroSection: {
      minHeight: "100vh",
      padding: "3rem 1rem",
      background:
        "linear-gradient(135deg, #7f7fd5 0%, #86a8e7 50%, #91eae4 100%)",
      backgroundAttachment: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    card: {
      maxWidth: 1000,
      width: "90%",
      background: "#ffffff",
      borderRadius: 16,
      boxShadow: "0 6px 18px rgba(0,0,0,.12), 0 3px 6px rgba(0,0,0,.05)",
      overflow: "hidden",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(30px)",
      transition: "all .9s ease",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "minmax(200px, 1fr) 2fr",
      gap: "1rem",
    },

    img: {
      width: "100%",
      height: isMobile ? 250 : "100%",
      objectFit: "cover",
      display: "block",
      borderRadius: isMobile ? "16px 16px 0 0" : "16px 0 0 16px",
    },

    content: {
      padding: isMobile ? "1.5rem 1rem" : "2rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },

    headline: {
      fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
      fontWeight: 700,
      margin: 0,
    },

    paragraph: {
      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
      lineHeight: 1.6,
      color: "#444c56",
      margin: 0,
    },

    accent: { color: "#0077ff", fontWeight: 600 },

    bannerSection: {
      background: "#fff",
      padding: "4rem 1rem",
      textAlign: "center",
    },

    bannerWrap: {
      width: "90%",
      maxWidth: 1000,
      margin: "0 auto",
      lineHeight: 1,
    },

    bannerTop: {
      fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
      fontWeight: 500,
      margin: 0,
    },

    bannerBig: {
      fontSize: "clamp(2.5rem, 6vw, 6rem)",
      fontWeight: 800,
      margin: "0.15em 0",
      letterSpacing: "-.03em",
    },

    bannerBottom: {
      fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
      fontWeight: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: ".35rem",
      margin: 0,
    },

    videoSection: { background: "#0000", padding: "3rem 1rem" },

    videoWrap: {
      width: "90%",
      maxWidth: 1000,
      margin: "0 auto",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 6px 16px rgba(0,0,0,.12)",
    },

    video: {
      width: "100%",
      height: "auto",
      maxHeight: isMobile ? 300 : 500,
      display: "block",
    },

    gallerySection: { background: "", padding: "4rem 1rem" },

    grid: {
      width: "90%",
      maxWidth: 1100,
      margin: "0 auto",
      display: "grid",
      gap: "1.5rem",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    },

    cardImg: {
      width: "100%",
      height: 180,
      objectFit: "contain",
    },

    cardCaption: {
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      fontWeight: 500,
      color: "#1b1b1f",
      background: "#fff",
    },

    galleryCard: {
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      overflow: "hidden",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <>
      {/* <div className="blr" id="blrtwo"></div>
      <div className="blr" id="blrone"></div> */}

      {/* HERO “about me” CARD */}
      <section style={{ ...styles.sectionBase, ...styles.heroSection }}>
        <div style={styles.card}>
          <img src={profileImg} alt="Raj Kushwaha" style={styles.img} />
          <div style={styles.content}>
            <h1 style={styles.headline}>
              Hi, I’m <span style={styles.accent}>Raj Kushwaha</span>.
            </h1>
            <p style={styles.paragraph}>
              A passionate Full Stack Developer specializing in the MERN stack
              (MongoDB, Express.js, React, and Node.js). I build dynamic,
              responsive, and scalable web applications that deliver seamless
              user experiences and robust backend solutions.
              <br />
              <br />
              With hands-on experience in both frontend development—creating
              clean, intuitive user interfaces with React—and backend
              architecture—designing secure APIs and managing databases with
              Node.js and MongoDB—I bring a holistic approach to web
              development.
              <br />
              <br />
              I enjoy turning ideas into real-world products, solving problems
              through code, and continuously learning new technologies to stay
              up-to-date with the evolving tech landscape.
            </p>
          
          </div>
        </div>
      </section>

      {/* “NOT SO BORING” BANNER */}
      <section style={{ ...styles.sectionBase, ...styles.bannerSection }}>
        <div style={styles.bannerWrap}>
          <p style={styles.bannerTop}>Not so</p>
          <h1 style={styles.bannerBig}>Boring</h1>
          <p style={styles.bannerBottom}>
            about me section{" "}
            <span role="img" aria-label="chat">
              💬
            </span>
          </p>
        </div>
      </section>

      {/* ---- VIDEO SECTION ----
      <section style={{ ...styles.sectionBase, ...styles.videoSection }}>
        <div style={styles.videoWrap}>
          <video
            src={introVideo}
            style={styles.video}
            controls
            playsInline
            poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AUBCiU6TfrKygAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABfSURBVHja7cExAQAAAMKg9U9tCF8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYJ8CYwAB276FegAAAABJRU5ErkJggg=="
          >
            Sorry, your browser doesn’t support embedded videos.
          </video>
        </div>
    </section> */}

     {/* ---- GALLERY SECTION ---- 
      <section style={{ ...styles.sectionBase, ...styles.gallerySection }}>
        <center style={styles.bannerBig}>Additional activities</center>
        <div style={styles.grid}>
          {gallery.map(({ src, caption }, idx) => (
            <figure key={idx} style={styles.galleryCard}>
              <img src={src} alt={caption} style={styles.cardImg} />
              <figcaption style={styles.cardCaption}>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default About;
