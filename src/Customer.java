public class Customer implements Runnable {
    private final TicketPool ticketPool;
    private final int purchaseRate;
    private final int totalTickets;

    public Customer(TicketPool ticketPool, int retrievalRate, int totalTickets) {
        this.ticketPool = ticketPool;
        this.purchaseRate = retrievalRate;
        this.totalTickets = totalTickets;
    }

    @Override
    public void run() {
        int ticketsPurchased = 0;
        while (ticketsPurchased < totalTickets) {
            try {
                Thread.sleep(1000 / purchaseRate);
                Ticket ticket = ticketPool.removeTicket();
                if (ticket != null) {
                    System.out.println("Customer purchased a ticket: " + ticket.getTicketNumber());
                    ticketsPurchased++;
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}