const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let eventState = {
  isRunning: false,
  tickets: [],
  totalTickets: 0,
  releaseRate: 0,
  purchaseRate: 0,
  maxCapacity: 0,
};

app.get("/", (req, res) => {
  res.send("Welcome to the Real Time Event Ticketing System API! Use /api/events for event operations.");
});

// Start Event
app.post("/api/events/start", (req, res) => {
  const { totalTickets, releaseRate, retrievalRate, maxCapacity } = req.body;


  if (!totalTickets || !releaseRate || !retrievalRate || !maxCapacity) {
    return res.status(400).json({
      message: "All required inputs must be provided",
    });
  }

  eventState.isRunning = true;
  eventState.totalTickets = totalTickets;
  eventState.releaseRate = releaseRate;
  eventState.purchaseRate = retrievalRate;
  eventState.maxCapacity = maxCapacity;
  eventState.tickets = []; // Reset tickets
  console.log("Event started with configuration:", eventState);


  res.status(200).json({ message: "Event initiated successfully!" });
});


// Stop Event
app.post("/api/events/stop", (req, res) => {
  if (!eventState.isRunning) {
    return res.status(400).json({ message: "No ongoing event ! " });
  }

  // Reset event state
  eventState.isRunning = false;
  eventState.tickets = [];
  eventState.totalTickets = 0;
  eventState.releaseRate = 0;
  eventState.purchaseRate = 0;
  eventState.maxCapacity = 0;

  console.log("Event terminated and state reset.");
  res.status(200).json({ message: "Event terminated successfully!" });
});

// Add Tickets (Simulates ticket release by the vendor)
app.post("/api/tickets/add", (req, res) => {
  const { count } = req.body;

  if (!eventState.isRunning) {
    return res.status(400).json({ message: "Cannot add tickets. No event is running." });
  }

  if (eventState.tickets.length + count > eventState.maxCapacity) {
    return res.status(400).json({ message: "Cannot add tickets. Exceeds max capacity." });
  }

  for (let i = 0; i < count; i++) {
    eventState.tickets.push({
      ticketNumber: eventState.tickets.length + 1,
      eventName: "Sample Event",
      eventDate: new Date().toISOString(),
    });
  }

  console.log(`Added ${count} tickets. Total tickets: ${eventState.tickets.length}`);
  res.status(200).json({ message: `${count} tickets added successfully!` });
});

// Purchase Tickets (Simulates customer ticket purchase)
app.post("/api/tickets/purchase", (req, res) => {
  const { count } = req.body;

  if (!eventState.isRunning) {
    return res.status(400).json({ message: "Cannot purchase tickets. No event is running." });
  }

  if (count > eventState.tickets.length) {
    return res.status(400).json({ message: "Not enough tickets available to fulfill the request." });
  }

  const purchasedTickets = eventState.tickets.splice(0, count);
  console.log(`Customer purchased ${count} tickets.`);
  res.status(200).json({ message: `${count} tickets purchased successfully!`, tickets: purchasedTickets });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
