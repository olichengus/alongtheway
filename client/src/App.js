import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.users)});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Users:</p>
        <ul>
          {data.map((user, index) => {
            return <li key={index}>{user}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
