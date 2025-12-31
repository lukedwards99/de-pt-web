import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    experience: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    // You can replace this with Google Forms integration or backend API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        goal: '',
        experience: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1 className="contact-title">Start Your Transformation</h1>
          <p className="contact-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {submitted && (
                <div className="alert alert-success" role="alert">
                  <i className="fas fa-check-circle"></i> Thank you! We've received your inquiry and will contact you soon.
                </div>
              )}

              {/* 
                NOTE: This is a React-based form for now.
                To integrate with Google Forms:
                1. Create a Google Form
                2. Get the form's prefilled link
                3. Either embed it using an iframe or link to it directly
                
                Example iframe integration:
                <iframe src="YOUR_GOOGLE_FORM_URL" width="100%" height="800px" frameborder="0">Loading...</iframe>
              */}

              <div className="contact-card">
                <h2 className="form-title">Coaching Application Form</h2>
                <p className="form-description">
                  Tell us about yourself and your fitness goals. The more details you provide, 
                  the better we can customize your training program.
                </p>

                <form onSubmit={handleSubmit} className="coaching-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fas fa-phone"></i> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="goal">
                      <i className="fas fa-bullseye"></i> Primary Fitness Goal *
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      className="form-control"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your goal...</option>
                      <option value="muscle-gain">Build Muscle</option>
                      <option value="fat-loss">Lose Fat</option>
                      <option value="strength">Increase Strength</option>
                      <option value="athletic">Athletic Performance</option>
                      <option value="general">General Fitness</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">
                      <i className="fas fa-dumbbell"></i> Training Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="form-control"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your experience level...</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="fas fa-comment"></i> Tell Us About Yourself
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current fitness level, any injuries or limitations, and what you hope to achieve through personal training..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <i className="fas fa-paper-plane"></i> Submit Application
                  </button>
                </form>

                <div className="alternative-contact">
                  <p className="text-center mt-4">
                    <strong>Prefer to reach out directly?</strong>
                  </p>
                  <div className="contact-methods">
                    <div className="contact-method">
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@dept.com">info@dept.com</a>
                    </div>
                    <div className="contact-method">
                      <i className="fas fa-phone"></i>
                      <a href="tel:+15551234567">(555) 123-4567</a>
                    </div>
                  </div>
                  {/* 
                    TODO: Replace this link with your actual Google Form URL
                    <p className="text-center mt-3">
                      <a href="YOUR_GOOGLE_FORM_URL" target="_blank" rel="noopener noreferrer" className="google-form-link">
                        <i className="fab fa-google"></i> Fill out our Google Form instead
                      </a>
                    </p>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
