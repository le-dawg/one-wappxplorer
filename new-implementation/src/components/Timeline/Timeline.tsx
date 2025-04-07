import React, { useEffect } from 'react';
import { useTimelineStore } from '../../store/timelineStore';
import TimelineMarker from './TimelineMarker';
import TimelineSlider from './TimelineSlider';
import TimelineLabels from './TimelineLabels';
import { formatKeyDate } from '../../utils/dateUtils';

const Timeline: React.FC = () => {
  const { 
    initializeTimeline, 
    markers, 
    conflicts,
    activeDate
  } = useTimelineStore();
  
  useEffect(() => {
    initializeTimeline();
    
    // Re-initialize on window resize
    const handleResize = () => {
      initializeTimeline();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initializeTimeline]);
  
  return (
    <div className="timeline-container">
      <div className="key-date-label">
        {activeDate && `Key Date: ${formatKeyDate(activeDate)}`}
      </div>
      <div className="timeline-track">
        {markers.map((marker, index) => {
          const conflict = conflicts.find(c => c.id === marker.conflictId);
          if (!conflict) return null;
          
          return (
            <TimelineMarker
              key={`${marker.conflictId}-${marker.date}-${index}`}
              conflictId={marker.conflictId}
              date={marker.date}
              percent={marker.percent}
              color={conflict.color}
            />
          );
        })}
      </div>
      <TimelineSlider />
      <TimelineLabels />
    </div>
  );
};

export default Timeline;