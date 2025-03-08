// Place.js
import { useParams } from 'react-router-dom';

const Place = ({ components }) => {
  const { place } = useParams();
  
  // Convert URL slug back to formatted place name
  const formatPlaceName = (slug) => {
    return slug.replace(/-/g, ' ')
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
  };

  const placeName = formatPlaceName(place);
  const filteredComponents = components.filter(comp => comp.place === placeName);

  return (
    <div className="place-container">
      <h2>{placeName} Devices</h2>
      <div className="components-list">
        {filteredComponents.map(component => (
          <div key={component.id} className="component-card">
            <h3>{component.name}</h3>
            <p>Type: {component.type}</p>
            <p>Status: {component.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Place;