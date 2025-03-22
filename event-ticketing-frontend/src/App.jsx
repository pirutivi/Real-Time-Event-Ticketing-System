import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import leftImage from "./assets/ticket1.png";
import rightImage from "./assets/ticket2.png";
import ConfigurationForm from "./components/ConfigurationForm";
import TicketDisplay from "./components/TicketDisplay";
import ControlPanel from "./components/ControlPanel";
import LogDisplay from "./components/LogDisplay";

function App() {
  const [inputs, setInputs] = useState({
    totalTickets: "",
    releaseRate: "",
    retrievalRate: "",
    maxCapacity: "",
  });
  const [errors, setErrors] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [logs, setLogs] = useState([]);
  const [currentTickets, setCurrentTickets] = useState(0);

  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  const handleStart = async () => {
    if (
      !inputs.totalTickets ||
      !inputs.releaseRate ||
      !inputs.retrievalRate ||
      !inputs.maxCapacity
    ) {
      alert("All required inputs must be provided");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/events/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const result = await response.json();

      if (response.ok) {
        addLog("Event initiated successfully.");
        setIsStarted(true);
        setCurrentTickets(inputs.totalTickets);
      } else {
        addLog(result.message || "Failed to start event.");
      }
    } catch (error) {
      addLog("Error initiating event: " + error.message);
    }
  };

  const handleStop = async () => {
    if (isStarted) {
      try {
        const response = await fetch("http://localhost:5000/api/events/stop", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (response.ok) {
          addLog("Event terminated successfully.");
          setIsStarted(false);
        } else {
          addLog(result.message || "Failed to stop event.");
        }
      } catch (error) {
        addLog("Error terminating event: " + error.message);
      }
    } else {
      addLog("No ongoing event !");
    }
  };


  return (
    <div>
      <header>
        <h1>Ticket Booking System</h1>
      </header>
      <main>
        <h2>Welcome to the Event Ticket Booking System</h2>
        <img src={logo} alt="Logo" className="main-logo" />


        <div className="form-container">
          <img src={leftImage} alt="Left Side" className="form-left-image" />
          <ConfigurationForm
            inputs={inputs}
            setInputs={setInputs}
            errors={errors}
            setErrors={setErrors}
          />
          <img src={rightImage} alt="Right Side" className="form-right-image" />
        </div>


        <TicketDisplay currentTickets={currentTickets} />


        <ControlPanel
          handleStart={handleStart}
          handleStop={handleStop}
          isStarted={isStarted}
        />


        <LogDisplay logs={logs} />
      </main>
      <footer>
        Buy the ticket ; Experience the magic ; Cherish the memory
      </footer>
    </div>
  );
}

export default App;
