import React, { useEffect, useRef, useState } from 'react';
import { useTimelineStore } from '../../store/timelineStore';

const Popup: React.FC = () => {
  const { activeConflictId, conflicts } = useTimelineStore();
  const [visible, setVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeConflictId !== null) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [activeConflictId]);
  
  const activeConflict = activeConflictId !== null 
    ? conflicts.find(c => c.id === activeConflictId) 
    : null;
  
  if (!activeConflict) {
    return <div ref={popupRef} className="popup-bubble" />;
  }
  
  return (
    <div 
      ref={popupRef}
      className={`popup-bubble ${visible ? 'visible' : ''}`}
      dangerouslySetInnerHTML={{ __html: activeConflict.summary }}
    />
  );
};

export default Popup;