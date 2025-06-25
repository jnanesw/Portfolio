import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">You can reach me through any of the platforms below 👇</p>
      </div>

      <div className="contact-info">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div>
            <p className="contact-label">Email</p>
            <p className="contact-value">jnaneswarraonerella@gmail.com</p>
          </div>
        </div>
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <div>
            <p className="contact-label">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/jnaneswarrao7794/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/jnaneswarrao7794
            </a>
          </div>
        </div>
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <div>
            <p className="contact-label">GitHub</p>
            <a
              href="https://github.com/jnanesw"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/jnaneswar
            </a>
          </div>
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <div>
            <p className="contact-label">Phone</p>
            <p className="contact-value">+91 63097 37794</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
