import React from "react";

function LogDisplay({ logs }) {
  return (
    <div className="log-display">
      <h3>Logs:</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default LogDisplay;
