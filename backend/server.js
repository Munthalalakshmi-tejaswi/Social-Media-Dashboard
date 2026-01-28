const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ 
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {} 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\u2705 Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
