// index.js
const express = require('express');
const connection = require('./process');
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json()); // For parsing application/json
app.use(cors());

// CREATE: Add a new user
app.post('/users', (req, res) => {
    const { id,name, jersey_number, role } = req.body;
    connection.query('INSERT INTO apis (id,name, jersey_number, role) VALUES (?, ?, ?, ?)', [id,name, jersey_number, role], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id, name, jersey_number, role });
    });
});

// READ: Get all users
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM apis', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// UPDATE: Update a user by ID
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ id, name, email });
    });
});

// DELETE: Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM apis WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).send(`Deleted the ${id} succesfuuly`); // No content
    });
});

// Start the server
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
