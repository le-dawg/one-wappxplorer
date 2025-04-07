import React from 'react';
import { useTimelineStore } from '../../store/timelineStore';
import { formatDateLabel } from '../../utils/dateUtils';

const TimelineLabels: React.FC = () => {
  const { timelineStart, timelineEnd } = useTimelineStore();
  
  return (
    <div className="timeline-labels">
      <span>{formatDateLabel(timelineStart)}</span>
      <span>{formatDateLabel(timelineEnd)}</span>
    </div>
  );
};

export default TimelineLabels;