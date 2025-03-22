const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.post("/api/events/start", (req, res) => {
  console.log("Request body:", req.body);
  const { totalTickets, releaseRate, retrievalRate, maxCapacity } = req.body;

  if (!totalTickets || !releaseRate || !retrievalRate || !maxCapacity) {
    return res.status(400).json({
      message: "All required inputs must be provided.",
    });
  }

  console.log("Event started with the following details:");
  console.log(`Total Tickets: ${totalTickets}`);
  console.log(`Release Rate: ${releaseRate}`);
  console.log(`Retrieval Rate: ${retrievalRate}`);
  console.log(`Max Capacity: ${maxCapacity}`);

  res.status(200).json({ message: "Event initiated successfully!" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

module.exports = app;
