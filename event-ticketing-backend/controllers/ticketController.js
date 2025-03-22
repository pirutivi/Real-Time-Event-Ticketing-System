const Ticket = require('../models/ticket');

// Sample ticket pool
let ticketPool = [];

const addTicket = (req, res) => {
  const { ticketNumber, eventName, eventDate } = req.body;
  const newTicket = new Ticket(ticketNumber, eventName, eventDate);
  ticketPool.push(newTicket);
  res.status(201).json(newTicket);
};

const getTickets = (req, res) => {
  res.status(200).json(ticketPool);
};

module.exports = {
  addTicket,
  getTickets,
};