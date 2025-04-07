import { create } from 'zustand';
import { conflicts } from '../data/conflicts';
import { TimelineState, MarkerInfo } from '../types';
import { getTimelineRange, calculatePercentage } from '../utils/dateUtils';

export const useTimelineStore = create<TimelineState>((set, get) => ({
  conflicts,
  markers: [],
  activeConflictId: null,
  activeDate: null,
  sliderValue: 0,
  timelineStart: new Date(),
  timelineEnd: new Date(),

  setActiveConflict: (conflictId, date) => {
    set({ activeConflictId: conflictId, activeDate: date });
  },

  setSliderValue: (value) => {
    set({ sliderValue: value });
    
    // Find if we're close to a marker
    const percent = value / 10;
    const closestMarker = get().findClosestMarker(percent);
    
    if (closestMarker && Math.abs(closestMarker.percent - percent) < 2.0) {
      set({ 
        activeConflictId: closestMarker.conflictId,
        activeDate: closestMarker.date
      });
    } else {
      set({ 
        activeConflictId: null,
        activeDate: null
      });
    }
  },

  initializeTimeline: () => {
    const allDates = conflicts.flatMap(c => c.keyDates);
    const [timelineStart, timelineEnd] = getTimelineRange(allDates);
    
    // Generate marker data
    const markers: MarkerInfo[] = [];
    
    conflicts.forEach(conflict => {
      conflict.keyDates.forEach(date => {
        const percent = calculatePercentage(date, timelineStart, timelineEnd);
        
        if (percent >= 0 && percent <= 100) {
          markers.push({
            conflictId: conflict.id,
            date,
            percent
          });
        }
      });
    });
    
    set({
      timelineStart,
      timelineEnd,
      markers,
      sliderValue: 0,
      activeConflictId: null,
      activeDate: null
    });
  },

  findClosestMarker: (percent) => {
    const { markers } = get();
    if (markers.length === 0) return null;
    
    let closestMarker = markers[0];
    let minDistance = Math.abs(percent - markers[0].percent);
    
    markers.forEach(marker => {
      const distance = Math.abs(percent - marker.percent);
      if (distance < minDistance) {
        minDistance = distance;
        closestMarker = marker;
      }
    });
    
    return closestMarker;
  }
}));