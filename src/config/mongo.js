const mongoose = require('mongoose');
const winston = require('./logger');

async function connectMongo() {
  const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri);
  winston.info('[MongoDB] conectado correctamente');
}

module.exports = { connectMongo };
