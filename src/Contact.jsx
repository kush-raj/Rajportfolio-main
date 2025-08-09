import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Let Formsubmit handle the data submission
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div className="blr" id="blrtwo"></div>
      <div className="blr" id="blrone"></div>

      <div className="contact-container" style={{
        maxWidth: '650px',
        margin: '0 auto',
        padding: '30px',
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        fontFamily: "'Segoe UI', sans-serif"
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '32px',
          marginBottom: '30px',
          color: '#6a1b9a',
          textShadow: '1px 1px 2px rgba(255,255,255,0.5)'
        }}>Contact Us</h2>

        <form
          action="https://formsubmit.co/rajkushwaha.work@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="contact-form"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input type="hidden" name="_captcha" value="false" />

          <label style={{ marginBottom: '15px', fontWeight: 600, color: '#333' }}>
            Name:
            <input type="text" name="name" required style={inputStyle} />
          </label>

          <label style={{ marginBottom: '15px', fontWeight: 600, color: '#333' }}>
            Email:
            <input type="email" name="email" required style={inputStyle} />
          </label>

          <label style={{ marginBottom: '15px', fontWeight: 600, color: '#333' }}>
            Message:
            <textarea name="message" rows="5" required style={inputStyle}></textarea>
          </label>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p style={{ marginTop: '20px', color: 'green', fontWeight: '600', textAlign: 'center' }}>
            ✅ Your message was sent successfully!
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginTop: '6px',
  border: '2px solid #d1c4e9',
  borderRadius: '8px',
  fontSize: '1rem',
  backgroundColor: '#fafafa',
  transition: 'border 0.3s ease'
};

const buttonStyle = {
  marginTop: '20px',
  padding: '14px',
  background: 'linear-gradient(to right, #7e57c2, #42a5f5)',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s'
};

export default Contact;
