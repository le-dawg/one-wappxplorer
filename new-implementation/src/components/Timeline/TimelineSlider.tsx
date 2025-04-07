import React, { useRef } from 'react';
import { useTimelineStore } from '../../store/timelineStore';

const TimelineSlider: React.FC = () => {
  const { 
    sliderValue, 
    setSliderValue, 
    markers,
    findClosestMarker
  } = useTimelineStore();
  
  const sliderRef = useRef<HTMLInputElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSliderValue(value);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      
      const currentValue = sliderValue;
      const currentPercent = currentValue / 10.0;
      
      // Find the next marker based on direction
      let nextMarker;
      if (e.key === 'ArrowRight') {
        // Find next marker to the right
        nextMarker = markers.find(marker => marker.percent > currentPercent + 0.1);
        // If no marker found to the right, stay at current position
        if (!nextMarker && currentPercent < 0.1) {
          // If we're at the start, move to first marker
          nextMarker = markers[0];
        }
      } else {
        // Find next marker to the left
        const reversedMarkers = [...markers].reverse();
        nextMarker = reversedMarkers.find(marker => marker.percent < currentPercent - 0.1);
        // If no marker found to the left, stay at current position
        if (!nextMarker && currentPercent > 99.9) {
          // If we're at the end, move to last marker
          nextMarker = markers[markers.length - 1];
        }
      }
      
      if (nextMarker) {
        const newValue = Math.round(nextMarker.percent * 10.0);
        setSliderValue(newValue);
      }
    }
  };
  
  // Snap to closest marker on mouseup
  const handleMouseUp = () => {
    const currentPercent = sliderValue / 10.0;
    const closestMarker = findClosestMarker(currentPercent);
    
    if (closestMarker) {
      const snappedValue = Math.round(closestMarker.percent * 10.0);
      setSliderValue(snappedValue);
    }
  };
  
  return (
    <input
      ref={sliderRef}
      type="range"
      min="0"
      max="1000"
      value={sliderValue}
      className="timeline-slider"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onMouseUp={handleMouseUp}
    />
  );
};

export default TimelineSlider;