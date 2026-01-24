import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Resources.css';
import resourcesData from '../../assets/resources.json';
import ResourceCard from '../../components/jsx/ResourceCard';

function Resources() {
  // State for managing the active filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter resources based on the active filter
  const filteredResources = activeFilter === 'all' 
    ? resourcesData 
    : resourcesData.filter(resource => resource.type === activeFilter);
  
  // Handle filter button click
  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero-overlay">
          <h1 className="resources-title">Free Resources</h1>
          <p className="resources-subtitle">
            Transparency is key to building trust. Here are some of the resources we use ourselves
            and share with our clients to help them achieve their fitness goals.
          </p>
        </div>
      </section>

      <section className="resources-intro">
        <Container>
          <div className="intro-content">
            <h2>Knowledge Should Be Accessible</h2>
            <p>
              At D&E P.T., we believe everyone deserves access to quality fitness information. 
              Browse our curated collection of free training programs, nutrition guides, and educational 
              videos. Resources here are designed by or endorsed by us based on proven principles 
              and years of experience. These resources are the same ones we base our coaching on.
              If you have any questions about how to implement them, feel free to reach out!
            </p>
          </div>
        </Container>
      </section>

      <section className="resources-filter">
        <Container>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              <i className="fas fa-th"></i> All Resources
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'program' ? 'active' : ''}`}
              onClick={() => handleFilterClick('program')}
            >
              <i className="fas fa-book"></i> Programs
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'book' ? 'active' : ''}`}
              onClick={() => handleFilterClick('book')}
            >
              <i className="fas fa-book"></i> Books
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`}
              onClick={() => handleFilterClick('video')}
            >
              <i className="fas fa-video"></i> Videos
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'website' ? 'active' : ''}`}
              onClick={() => handleFilterClick('website')}
            >
              <i className="fas fa-globe"></i> Websites
            </button>
          </div>
        </Container>
      </section>

      <section className="resources-grid-section">
        <Container>
          <div className="resources-grid">
            {filteredResources.map(resource => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="resources-cta">
        <Container>
          <div className="cta-content">
            <h2>Want Personalized Coaching?</h2>
            <p>
              While these resources are great for self-guided training, nothing beats 
              personalized coaching tailored to your unique goals and needs.
            </p>
            <a href="/de-pt-web/contact" className="cta-btn">
              Apply for Coaching
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Resources;
