import java.util.concurrent.atomic.AtomicInteger;
public class Vendor implements Runnable {
    private final TicketPool ticketPool;
    private final int releaseRate;
    private final AtomicInteger nextTicketNumber = new AtomicInteger(1);
    private final int totalTickets;

    public Vendor(TicketPool ticketPool, int releaseRate, int totalTickets) {
        this.ticketPool = ticketPool;
        this.releaseRate = releaseRate;
        this.totalTickets = totalTickets;
    }

    @Override
    public void run() {
        while (nextTicketNumber.get() <= totalTickets) {
            try {
                Thread.sleep(1000 / releaseRate);
                Ticket ticket = new Ticket(nextTicketNumber.getAndIncrement(), "MusicConcert", "2023-11-23");
                ticketPool.addTicket(ticket);
                System.out.println("Vendor added a ticket: " + ticket.getTicketNumber());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
