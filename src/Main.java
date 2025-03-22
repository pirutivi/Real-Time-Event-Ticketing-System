import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get user input with validation
        int totalTickets = 0;
        while (totalTickets <= 0) {
            System.out.print("Enter total number of tickets: ");
            while (!scanner.hasNextInt()) {
                System.out.println("The character that you have entered is an Invalid input. Please enter a positive integer.");
                scanner.next();
            }
            totalTickets = scanner.nextInt();
        }

        int ticketReleaseRate = 0;
        while (ticketReleaseRate <= 0) {
            System.out.print("Enter ticket release rate (tickets per second): ");
            while (!scanner.hasNextInt()) {
                System.out.println("The character that you have entered is an Invalid input. Please enter a positive integer.");
                scanner.next();
            }
            ticketReleaseRate = scanner.nextInt();
        }

        int customerPurchaseRate = 0;
        while (customerPurchaseRate <= 0) {
            System.out.print("Enter customer purchase rate (customers per second): ");
            while (!scanner.hasNextInt()) {
                System.out.println("The character that you have entered is an Invalid input. Please enter a positive integer.");
                scanner.next();
            }
            customerPurchaseRate = scanner.nextInt();
        }

        int maxTicketCapacityLimit = 0;
        while (maxTicketCapacityLimit <= 0) {
            System.out.print("Enter maximum ticket capacity limit: ");
            while (!scanner.hasNextInt()) {
                System.out.println("The character that you have entered is an Invalid input. Please enter a positive integer.");
                scanner.next();
            }
            maxTicketCapacityLimit = scanner.nextInt();
        }

        TicketPool ticketPool = new TicketPool(maxTicketCapacityLimit);


        for (int i = 0; i < 5; i++) {
            new Thread(new Vendor(ticketPool, ticketReleaseRate, totalTickets)).start();
            new Thread(new Customer(ticketPool, customerPurchaseRate, totalTickets)).start();
        }
    }
}

