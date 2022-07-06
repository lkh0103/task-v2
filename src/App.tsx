import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {

  const test = () => {
    // I dont have any thing which is running in "/api"  
    // Simply called fetch with "/api" because setupPorxy.js  is looking my request or not 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        alert('test pri')
        console.log('res', res)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={test}>Test</button>
      </header>
    </div>
  );
}

export default App;
