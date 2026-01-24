import React from 'react';
import ProgramCard from './ProgramCard';
import VideoCard from './VideoCard';
import '../css/ResourceCard.css';
import WebsiteCard from './WebsiteCard';

function ResourceCard({ resource }) {
  // Route to the appropriate card component based on resource type
  if (resource.type === 'program') {
    return <ProgramCard resource={resource}  />;
  } else if (resource.type === 'video') {
    return <VideoCard resource={resource} />;
  } else if (resource.type === 'website') {
    return <WebsiteCard resource={resource} />;
  }
  
  // Fallback for unknown types
  return null;
}

export default ResourceCard;
