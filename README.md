# React Appointment Booking Screen

## Overview

This is a React application that allows users to view and book appointments based on the available timeslots fetched from a mock API.

## Hosted Link
https://majestic-piroshki-6c91ef.netlify.app/


## Features

- **Dynamic Calendar View:** Users can select a date and view the available timeslots for that day.
- **User Feedback:** Provides appropriate feedback to the user while data is loading.
- **Appointment Booking:** Users can select a timeslot and proceed to book an appointment.
- **Error Handling:** Includes error handling for a seamless user experience.

## Integration with Backend

The application makes an HTTP request to a mock API endpoint to fetch available timeslots.

**API Endpoint:**
GET https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30








## Installation

1. **Clone the repository:**

   git clone https://github.com/your-username/react-appointment-booking.git

   
2. **Navigate to the project directory:**

cd react-appointment-booking


3. **Install dependencies:**

npm install



4. **Start the development server:**

npm start



## folder structure

```bash
react-appointment-booking/
|-- src/
|   |-- components/
|   |   |-- Calendar.js
|   |   |-- AppointmentBooking.js
|   |   |-- UI components...
|-- context/
|   |-- DateContextProvider.js
|-- App.js
|-- index.js
|-- styles.css
|-- public/
|-- ...
|-- README.md
```

## Design/ logic implementation challenges

For the Calendar implementation (working model), I had to to read a few articles about the date-fns library for easy date management and watch youtube tutorials for its logical implantation



