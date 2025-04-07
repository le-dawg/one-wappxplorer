import React from 'react';
import { useTimelineStore } from '../../store/timelineStore';

interface TimelineMarkerProps {
  conflictId: number;
  date: string;
  percent: number;
  color: string;
}

const TimelineMarker: React.FC<TimelineMarkerProps> = ({ 
  conflictId, 
  date, 
  percent, 
  color 
}) => {
  const setActiveConflict = useTimelineStore(state => state.setActiveConflict);
  
  const handleMouseEnter = () => {
    setActiveConflict(conflictId, date);
  };
  
  const handleMouseLeave = () => {
    setActiveConflict(null, null);
  };
  
  return (
    <div 
      className={`timeline-marker bg-${color}`}
      style={{ 
        left: `${percent}%`
      }}
      data-conflict-id={conflictId}
      data-date={date}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default TimelineMarker;