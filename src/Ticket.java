public class Ticket {
    private final int ticketNumber;
    private final String eventName;
    private final String eventDate;

    public Ticket(int id, String event, String date) {
        this.ticketNumber = id;
        this.eventName = event;
        this.eventDate = date;
    }

    // Getters
    public int getTicketNumber() {
        return ticketNumber;
    }

    public String getEventName() {
        return eventName;
    }

    public String getEventDate() {
        return eventDate;
    }
}
