export interface Conflict {
  id: number;
  title: string;
  keyDates: string[];
  summary: string;
  color: string;
}

export interface MarkerInfo {
  conflictId: number;
  date: string;
  percent: number;
}

export interface TimelineState {
  conflicts: Conflict[];
  markers: MarkerInfo[];
  activeConflictId: number | null;
  activeDate: string | null;
  sliderValue: number;
  timelineStart: Date;
  timelineEnd: Date;
  
  // Actions
  setActiveConflict: (conflictId: number | null, date: string | null) => void;
  setSliderValue: (value: number) => void;
  initializeTimeline: () => void;
  findClosestMarker: (percent: number) => MarkerInfo | null;
}