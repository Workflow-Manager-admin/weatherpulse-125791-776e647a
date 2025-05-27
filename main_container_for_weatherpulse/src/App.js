import React from 'react';
import './App.css';
import WeatherPulseContainer from './WeatherPulseContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> WeatherPulse
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Powered by KAVIA AI
            </span>
          </div>
        </div>
      </nav>

      <main>
        <WeatherPulseContainer />
      </main>
    </div>
  );
}

export default App;