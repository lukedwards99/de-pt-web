import React, { useState } from 'react';
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

  const handleDownload = (e, resource) => {
    e.preventDefault();
    // Placeholder for actual download logic
    // You would typically redirect to a download page or trigger a file download
    alert(`Downloading: ${resource.title}\n\nNote: This is a placeholder. Replace with actual download links.`);
  };

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero-overlay">
          <h1 className="resources-title">Free Resources</h1>
          <p className="resources-subtitle">
            Quality training programs and educational content at no cost
          </p>
        </div>
      </section>

      <section className="resources-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Knowledge Should Be Free</h2>
            <p>
              At D&E P.T., we believe everyone deserves access to quality fitness information. 
              Browse our collection of free training programs, nutrition guides, and educational 
              videos. All resources are designed by us based on proven principles and years of experience.
            </p>
          </div>
        </div>
      </section>

      <section className="resources-filter">
        <div className="container">
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
              className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`}
              onClick={() => handleFilterClick('video')}
            >
              <i className="fas fa-video"></i> Videos
            </button>
          </div>
        </div>
      </section>

      <section className="resources-grid-section">
        <div className="container">
          <div className="resources-grid">
            {filteredResources.map(resource => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                onDownload={handleDownload}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="resources-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want Personalized Coaching?</h2>
            <p>
              While these free resources are great for self-guided training, nothing beats 
              personalized coaching tailored to your unique goals and needs.
            </p>
            <a href="/de-pt-web/contact" className="cta-btn">
              Apply for Coaching
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
