import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class TicketPool {
    private final BlockingQueue<Ticket> ticketQueue;
    private final int capacityLimit;

    public TicketPool(int maxCapacity) {
        this.capacityLimit = maxCapacity;
        ticketQueue = new LinkedBlockingQueue<>(maxCapacity);
    }

    public void addTicket(Ticket ticket) {
        try {
            ticketQueue.put(ticket);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public Ticket removeTicket() {
        try {
            return ticketQueue.take();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        }
    }

    public int getCurrentCapacity() {
        return ticketQueue.size();
    }
}
