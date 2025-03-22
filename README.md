# Real-Time Event Ticketing System

## 1. Introduction
It is a real-time event ticketing system that simulates sales and ticket purchases via a multi-threaded producer-consumer model. The system allows users to setup the total number of tickets, release rate, purchase rate, and maximum capacity.CLI part is given. Front end is developed to have user input of these parameters and visualize a simulation. Backend is also developed.


---

## 2. Setup Instructions

### 2.1 Prerequisites
Ensure you have the following installed:
- **Java:** Version 17
- **Node.js:** Version 18+ or 20+
- **Vite React**

### 2.2 Installation Steps

#### Backend
1. Create a new directory
   ```bash
   mkdir event-ticketing-backend

2. Open the terminal of that directory and install dependencies
   ```bash
   npm init -y
   npm install express

3. Start the backend server
   ```bash
   node server.js


#### Frontend

1. Create a new directory
   ```bash
   mkdir event-ticketing-frontend

2. Open the terminal of that directory and install dependencies
   ```bash
   npm create vite@latest
3. Start the frontend server
   ```bash
   npm run dev

## 3. Usage Instructions

### 3.1 Configuring and Starting the System
   
Open the application in your browser at:
   http://localhost:5173/

Fill out the form with the following details:
- **Total Tickets** : Total number of tickets.
- **Release Rate** : Number of tickets released per second.
- **Purchase Rate** : Number of tickets purchased per second.
- **Maximum Ticket Capacity** : Maximum number of tickets.
   
Click the Start button and monitor the logs in the Log Display section for confirmation.

To terminate the event, click the Stop button and verify logs for termination confirmation.
   
### 3.2 Explanation of UI Controls

Configuration form is located in the center of the screen. this form collects all the required details about the event.

There are 4 fields in the form .Such as ,
- **Total Tickets** : Total number of tickets.
- **Release Rate** : Tickets released per second.
- **Purchase Rate** : Tickets purchased per second.
- **Maximum Ticket**  Capacity: Maximum tickets allowed.

Ticket Display: It shows the current number of tickets.

Control Panel: It includes Start and Stop buttons.

Log Display: It display the real time event ticketing system logs such as event initiate or terminate confirmations and error messages.

## 4. Additional Information
API Endpoints:
- **Start Event** : http://localhost:5000/api/events/start
- **Stop Event** : http://localhost:5000/api/events/stop
   
Contact Information:
For questions or issues,
- **email** : pirutivi.20232061@iit.ac.lk
