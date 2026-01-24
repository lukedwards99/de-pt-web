import React from 'react';
import '../css/ResourceCard.css';

function ResourceCard({ resource }) {
  // Get badge text and icon from resource, or use defaults based on type
  const getBadgeText = () => {
    if (resource.badgeText) return resource.badgeText;
    
    // Default badge text based on type
    const defaults = {
      program: 'Program',
      video: 'Video',
      website: 'Website'
    };
    return defaults[resource.type] || 'Resource';
  };

  const getBadgeIcon = () => {
    if (resource.badgeIcon) return resource.badgeIcon;
    
    // Default icons based on type
    const defaults = {
      program: 'fa-book',
      video: 'fa-video',
      website: 'fa-globe'
    };
    return defaults[resource.type] || 'fa-file';
  };

  const getButtonText = () => {
    if (resource.buttonText) return resource.buttonText;
    return resource.thirdPartyLink ? 'View on Third Party' : 'Download';
  };

  const getButtonIcon = () => {
    if (resource.buttonIcon) return resource.buttonIcon;
    return resource.thirdPartyLink ? 'fa-external-link-alt' : 'fa-download';
  };

  return (
    <div className="resource-card" data-type={resource.type}>
      <div className="resource-image">
        <img src={resource.image} alt={resource.title} />
        <div className="resource-type-badge">
          <i className={`fas ${getBadgeIcon()}`}></i>
          {getBadgeText()}
        </div>
      </div>
      <div className="resource-content">
        <h3 className="resource-title">{resource.title}</h3>
        <p className="resource-description">{resource.description}</p>
        <div className="resource-footer">
          <a
            href={resource.downloadLink}
            className={`download-btn ${resource.thirdPartyLink ? 'third-party-link' : ''}`}
            target={resource.thirdPartyLink ? '_blank' : undefined}
            rel={resource.thirdPartyLink ? 'noopener noreferrer' : undefined}
          >
            <i className={`fas ${getButtonIcon()}`}></i> {getButtonText()}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;
