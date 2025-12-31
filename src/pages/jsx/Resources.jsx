import React from 'react';
import './Resources.css';
import resourcesData from '../assets/resources.json';

function Resources() {
  // Placeholder resource data - these would be "free" downloads
  const resources = resourcesData;

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
            <button className="filter-btn active" data-filter="all">
              <i className="fas fa-th"></i> All Resources
            </button>
            <button className="filter-btn" data-filter="program">
              <i className="fas fa-book"></i> Programs
            </button>
            <button className="filter-btn" data-filter="video">
              <i className="fas fa-video"></i> Videos
            </button>
          </div>
        </div>
      </section>

      <section className="resources-grid-section">
        <div className="container">
          <div className="resources-grid">
            {resources.map(resource => (
              <div key={resource.id} className="resource-card" data-type={resource.type}>
                <div className="resource-image">
                  {/* PLACEHOLDER IMAGES - Replace with actual thumbnails */}
                  <img src={resource.image} alt={resource.title} />
                  <div className="resource-type-badge">
                    <i className={resource.type === 'program' ? 'fas fa-book' : 'fas fa-video'}></i>
                    {resource.type === 'program' ? 'Program' : 'Video'}
                  </div>
                </div>
                <div className="resource-content">
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-footer">
                    <span className="resource-price">{resource.price}</span>
                    <a 
                      href={resource.downloadLink} 
                      className="download-btn"
                      onClick={(e) => handleDownload(e, resource)}
                    >
                      <i className="fas fa-download"></i> Download
                    </a>
                  </div>
                </div>
              </div>
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
