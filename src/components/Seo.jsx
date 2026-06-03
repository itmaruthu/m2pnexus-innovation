import { useEffect } from 'react';

export default function Seo({ title, description }) {
  useEffect(() => {
    // Dynamic page title
    document.title = `${title} | M2P Nexus - From Root to Success`;
    
    // Dynamic page description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation.';
    
    // Dynamic Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = `${title} | M2P Nexus`;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description || 'Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation.';
  }, [title, description]);

  return null;
}
