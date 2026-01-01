import React from 'react';
import '../css/ResourceCard.css';

function ProgramCard({ resource }) {
  return (
    <div className="resource-card" data-type={resource.type}>
      <div className="resource-image">
        <img src={resource.image} alt={resource.title} />
        <div className="resource-type-badge">
          <i className="fas fa-book"></i>
          Program
        </div>
        {resource.thirdParty && (
          <div className="third-party-badge" title="Third-party resource">
            <i className="fas fa-external-link-alt"></i>
          </div>
        )}
      </div>
      <div className="resource-content">
        <h3 className="resource-title">{resource.title}</h3>
        <p className="resource-description">{resource.description}</p>
        <div className="resource-footer">
          <span className="resource-price">{resource.price}</span>
          <a 
            href={resource.downloadLink} 
            className="download-btn"
          >
            <i className="fas fa-download"></i> Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
