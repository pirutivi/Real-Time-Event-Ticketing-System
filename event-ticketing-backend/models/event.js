class Event {
  constructor(totalTickets, releaseRate, retrievalRate, maxCapacity) {
    this.totalTickets = totalTickets;
    this.releaseRate = releaseRate;
    this.retrievalRate = retrievalRate;
    this.maxCapacity = maxCapacity;
    this.status = 'stopped';
  }
}

module.exports = Event;