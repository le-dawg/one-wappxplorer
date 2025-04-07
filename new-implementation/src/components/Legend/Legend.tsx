import React from 'react';
import { useTimelineStore } from '../../store/timelineStore';

const Legend: React.FC = () => {
  const { conflicts } = useTimelineStore();
  
  return (
    <div className="legend">
      <h4>Conflict Key</h4>
      {conflicts.map(conflict => (
        <div key={conflict.id} className="legend-item">
          <span 
            className={`legend-color bg-${conflict.color}`}
          />
          <span>{conflict.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;