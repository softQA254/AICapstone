const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});