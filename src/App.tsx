import React from 'react';
import './App.css'
import Calendar from './components/calender';

const App: React.FC = () => {
  const currentDate = new Date();
  return (
    <div className="App">
      <h2>My Calendar App</h2>
      <Calendar date={currentDate} />
    </div>
  );
};

export default App;
