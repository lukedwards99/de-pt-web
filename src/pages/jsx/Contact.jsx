import { Container, Row, Col } from 'react-bootstrap';
import '../css/Contact.css';

function Contact() {

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1 className="contact-title">Start Your Transformation</h1>
          <p className="contact-subtitle">Email us at <a href="mailto:info@bdept.com">info@bdept.com</a> and we'll get back to you within 24 hours</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
