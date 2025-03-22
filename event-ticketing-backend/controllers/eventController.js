const Event = require('../models/event');

// Sample event object
let event = new Event(100, 2, 1, 50); // totalTickets, releaseRate, purchaseRate, maxCapacity

const startEvent = (req, res) => {
  if (event.status === 'running') {
    return res.status(400).json({ message: 'Event already in progress!' });
  }

  event.status = 'running';
  res.status(200).json({ message: 'Event initiated successfully', event });
};

const stopEvent = (req, res) => {
  if (event.status === 'stopped') {
    return res.status(400).json({ message: 'No ongoing event!' });
  }

  event.status = 'stopped';
  res.status(200).json({ message: 'Event terminated successfully', event });
};

module.exports = {
  startEvent,
  stopEvent,
};
