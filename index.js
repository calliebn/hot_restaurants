// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing (also called middleware)
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Reservation info (DATA)

const reservations = [
    {
    name: 'Bugs Bunny',
    phoneNumber: '555-765-2309',
    email: 'bbunny@gmail.com',
    uniqueId: '786',
    }
];

// Routes

// Basic route that sends the user to the Home page

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/make', (req, res) => res.sendFile(path.join(__dirname, 'make.html')));

app.get('/view', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

// Displays all tables
app.get('/api/view', (req, res) => res.json(reservations));

// Creates a new reservation
app.post('/api/make', (req,res) => {
console.log(req.body)
    const newReservation = req.body;

    reservations.push(newReservation);
    console.log(reservations)
    res.json(newReservation);

});

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`));