import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title display-1 display-md-1">BDE P.T.</h1>
            <h2 className="hero-subtitle h3 h-md-2">Buckwinkler, Douglas, & Edwards Personal Training</h2>
            {/* <p className="hero-tagline">Transform Your Body, Transform Your Life</p> */}
            <a href="/de-pt-web/contact" className="hero-btn">Start Your Journey</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <Container>
          <h2 className="section-title">Meet Your Trainers</h2>
          <Row>
            <Col md={6} className="trainer-card">
              <div className="trainer-image-wrapper">
                {/* PLACEHOLDER IMAGE - Replace with actual photo of Luke */}
                <img 
                  src="https://via.placeholder.com/400x400/1a1a1a/dc143c?text=Luke+Edwards" 
                  alt="Luke Edwards - Personal Trainer" 
                  className="trainer-image"
                />
              </div>
              <div className="trainer-info">
                <h3>Luke Edwards</h3>
                <p className="trainer-title">Co-Founder & Head Trainer</p>
                <p className="trainer-bio">
                  Luke brings a wealth of knowledge and passion to every training session. 
                  With years of experience in bodybuilding and strength training, he specializes 
                  in helping clients build muscle, increase strength, and achieve their fitness goals. 
                  His approach combines scientific principles with practical application to deliver 
                  real, sustainable results.
                </p>
                <div className="trainer-specialties">
                  <span className="specialty-badge">Strength Training</span>
                  <span className="specialty-badge">Bodybuilding</span>
                  <span className="specialty-badge">Nutrition</span>
                </div>
              </div>
            </Col>

            <Col md={6} className="trainer-card">
              <div className="trainer-image-wrapper">
                {/* PLACEHOLDER IMAGE - Replace with actual photo of Kyle */}
                <img 
                  src="https://via.placeholder.com/400x400/1a1a1a/dc143c?text=Kyle+Douglas" 
                  alt="Kyle Douglas - Personal Trainer" 
                  className="trainer-image"
                />
              </div>
              <div className="trainer-info">
                <h3>Kyle Douglas</h3>
                <p className="trainer-title">Co-Founder & Head Trainer</p>
                <p className="trainer-bio">
                  Kyle is a dedicated fitness professional with a passion for transforming lives 
                  through personalized training programs. His expertise in bodybuilding and athletic 
                  performance has helped countless clients reach new heights in their fitness journey. 
                  Kyle's motivational approach and attention to detail ensure that every client 
                  receives the guidance they need to succeed.
                </p>
                <div className="trainer-specialties">
                  <span className="specialty-badge">Athletic Performance</span>
                  <span className="specialty-badge">Body Composition</span>
                  <span className="specialty-badge">Functional Training</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <Container>
          <h2 className="section-title">Our Story</h2>
          <Row className="story-content">
            <Col lg={6} md={12} className="story-text">
              <p className="story-paragraph">
                Our journey began in 2019 at Northern Illinois University, where Luke and Kyle 
                first met as roommates. What started as a simple living arrangement quickly evolved 
                into a deep friendship built on mutual respect and a shared passion for fitness.
              </p>
              <p className="story-paragraph">
                Kyle, already deeply immersed in the world of bodybuilding, introduced Luke to the 
                sport that would change both of their lives forever. Through early morning gym sessions, 
                late-night meal prep, and countless conversations about training philosophy, they 
                discovered that they shared not just a love for fitness, but a calling to help others 
                transform their lives through proper training and nutrition.
              </p>
              <p className="story-paragraph">
                Years of learning, growing, and competing together led to the creation of D&E P.T. 
                Our studio represents the culmination of our shared journey—a place where we can pass 
                on the knowledge and passion that brought us together, helping others discover their 
                own strength and potential.
              </p>
            </Col>
            <Col lg={6} md={12} className="story-image-wrapper">
              {/* PLACEHOLDER IMAGE - Replace with photo of Luke and Kyle together */}
              <img 
                src="https://via.placeholder.com/600x400/1a1a1a/dc143c?text=D%26E+P.T.+Story" 
                alt="D&E P.T. Origin Story" 
                className="story-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <Container>
          <h2 className="section-title">Our Studio & Results</h2>
          <Row className="gallery-grid">
            {/* PLACEHOLDER IMAGES - Replace with actual studio and client transformation photos */}
            <Col lg={4} md={6} sm={12} className="mb-4 gallery-item">
              <img 
                src="https://via.placeholder.com/400x300/1a1a1a/dc143c?text=Studio+1" 
                alt="D&E P.T. Studio Interior 1" 
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4 gallery-item">
              <img 
                src="https://via.placeholder.com/400x300/1a1a1a/dc143c?text=Studio+2" 
                alt="D&E P.T. Studio Interior 2" 
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4 gallery-item">
              <img 
                src="https://via.placeholder.com/400x300/1a1a1a/dc143c?text=Training+Session" 
                alt="Personal Training Session" 
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4 gallery-item">
              <img 
                src="https://via.placeholder.com/400x300/1a1a1a/dc143c?text=Equipment" 
                alt="Studio Equipment" 
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4 gallery-item">
              <img 
                src="https://via.placeholder.com/400x300/1a1a1a/dc143c?text=Transformation+1" 
                alt="Client Transformation 1" 
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4 gallery-item">
              <img 
                src="https://via.placeholder.com/400x300/1a1a1a/dc143c?text=Transformation+2" 
                alt="Client Transformation 2" 
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
