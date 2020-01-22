import React from 'react';
import './App.css';
import Navbar from './components/app/Navbar'
import Home from './components/app/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
