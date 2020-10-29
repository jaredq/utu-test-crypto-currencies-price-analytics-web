import React from 'react';
import loading from './loading.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Crypto Currency Price Analytics
      </header>
      <img src={loading} className="App-loading" alt="loading" />
    </div>
  );
}

export default App;
