import React from 'react';
import './App.css';

function App() {
  const [stops, setStops] = React.useState<any[]>([]);
  const [input, setInput] = React.useState<string>('');
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  const fetchStops = async () => {
    try {
      const response = await fetch(`http://localhost:5001/stops?route_short_name=${input}`);
      const data = await response.json();
      if (data.error){
        setErrorMsg(data.error);
        return;
      }
      setStops(data.stops);
      setErrorMsg('');
    } catch {
      setErrorMsg('Error fetching data');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='Enter in a Translink line'  onChange={(event) => {setInput(event.target.value)}}>
        </input>
        <button onClick={() => {fetchStops()}}>
          Submit
        </button>
        <p>{errorMsg}</p>
        <ul>
          {stops.map((stop, index) => {
            return <li key={index}>{stop.stop_name || ""}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
