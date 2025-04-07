import React from 'react';
import Timeline from './components/Timeline/Timeline';
import Popup from './components/Popup/Popup';
import SummaryDisplay from './components/Summary/SummaryDisplay';
import Legend from './components/Legend/Legend';

const App: React.FC = () => {
  return (
    <>
      <h1>IAESTE Hamburg Conflict Timeline</h1>
      <Timeline />
      <SummaryDisplay />
      <Popup />
      <Legend />
    </>
  );
};

export default App;