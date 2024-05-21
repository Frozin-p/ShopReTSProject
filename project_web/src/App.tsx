// import React, { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SneakerList from './components/SneakerList';



const App: React.FC = () => {
  return (
      <div className="App">
          <Navbar />
          <main>
            <h2>Air Jordans</h2>
              <SneakerList />
          </main>
      </div>
  );
};

export default App;