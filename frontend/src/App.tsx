"use client";
import React from 'react';
import './App.css';
import {
  APIProvider,
  Map,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

export default function App() {
  const [stops, setStops] = React.useState<any[]>([]);
  const [input, setInput] = React.useState<string>('');
  const [errorMsg, setErrorMsg] = React.useState<string>('');
  const position = { lat: 49.2827, lng: -123.1207 };

  const fetchStops = async () => {
    try {
      const response = await fetch(`http://localhost:5001/stops/?route_short_name=${input}`);
      const data = await response.json();
      if (data.error) {
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
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
      <div style={{height: "100vh", width: "100%" }}>
        {/* Top-left overlay div */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "100px",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
          }}
        >
          <input
            placeholder="Enter in a Translink line"
            onChange={(event) => setInput(event.target.value)}
            style={{ marginRight: "8px" }}
          />
          <button onClick={fetchStops}>Submit</button>
          <p>{errorMsg}</p>
          <ul>
            {stops.map((stop, index) => (
              <li key={index}>{stop.stop_name || ""}</li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <Map zoom={12} center={position}>
           </Map>
      </div>
    </APIProvider>
  );
}
