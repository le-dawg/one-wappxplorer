import { format, startOfMonth, addMonths } from 'date-fns';

export const formatDateLabel = (date: Date): string => {
  return format(date, 'MMM yyyy');
};

export const formatKeyDate = (date: string): string => {
  return format(new Date(date), 'dd.MM.yyyy');
};

export const getTimelineRange = (dates: string[]): [Date, Date] => {
  if (dates.length === 0) {
    return [
      startOfMonth(new Date('2024-06-01')),
      startOfMonth(addMonths(new Date('2025-04-06'), 1))
    ];
  }

  const timestamps = dates.map(d => new Date(d).getTime());
  const minTimestamp = Math.min(...timestamps);
  const maxTimestamp = Math.max(...timestamps);

  const timelineStart = startOfMonth(new Date(minTimestamp));
  const timelineEnd = startOfMonth(addMonths(new Date(maxTimestamp), 1));

  return [timelineStart, timelineEnd];
};

export const calculatePercentage = (date: string, startDate: Date, endDate: Date): number => {
  const dateTime = new Date(date).getTime();
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const totalDuration = endTime - startTime;

  if (totalDuration <= 0) return 0;
  
  const datePosition = dateTime - startTime;
  return (datePosition / totalDuration) * 100;
};