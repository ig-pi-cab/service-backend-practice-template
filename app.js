const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('./src/config/logger');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Aquí se pueden agregar las rutas de tus módulos
// app.use('/api/auth', require('./routes/authRoutes'));

module.exports = app;
