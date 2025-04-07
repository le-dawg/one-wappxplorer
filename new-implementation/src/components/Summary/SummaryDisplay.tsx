import React from 'react';
import { useTimelineStore } from '../../store/timelineStore';

const SummaryDisplay: React.FC = () => {
  const { activeConflictId, conflicts } = useTimelineStore();
  
  const activeConflict = activeConflictId !== null 
    ? conflicts.find(c => c.id === activeConflictId) 
    : null;
  
  return (
    <div className="summary-display">
      {activeConflict ? (
        <div dangerouslySetInnerHTML={{ __html: activeConflict.summary }} />
      ) : (
        <p>Move the slider to a marker to see conflict details.</p>
      )}
    </div>
  );
};

export default SummaryDisplay;