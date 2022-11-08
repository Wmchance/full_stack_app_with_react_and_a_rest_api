import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const url = 'http://localhost:5000/api/courses';
  const [courseInfo, updateInfo] = useState('hello');
  
  fetch(url)
    .then((res) => res.json())    
    .then((res) => {
        console.log(res)
        updateInfo(res.courses[1].User.firstName)
    })
    .catch((error) => {
        console.error('Error:', error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {courseInfo}
        </a>
      </header>
    </div>
  );
}

export default App;
