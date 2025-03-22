import React from "react";

function TicketDisplay({ currentTickets }) {
  return (
    <div className="ticket-display">
      <h3>Tickets Available:</h3>
      <p>{currentTickets}</p>
    </div>
  );
}

export default TicketDisplay;
