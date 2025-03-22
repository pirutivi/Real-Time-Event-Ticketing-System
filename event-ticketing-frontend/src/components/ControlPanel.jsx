import React from "react";

function ControlPanel({ handleStart, handleStop, isStarted }) {
  return (
    <div className="button-group">
      <button
        type="button"
        onClick={handleStart}
        className="start-button"
        disabled={isStarted}
      >
        Start
      </button>
      <button
        type="button"
        onClick={handleStop}
        className="stop-button"
        disabled={!isStarted}
      >
        Stop
      </button>
    </div>
  );
}

export default ControlPanel;
