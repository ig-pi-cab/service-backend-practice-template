require('dotenv').config();
const app = require('./app');
const winston = require('./src/config/logger');
const { connectMongo } = require('./src/config/mongo');
const { connectRedis } = require('./src/config/redis');
const { connectRabbit } = require('./src/config/rabbit');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectMongo();
    await connectRedis();
    await connectRabbit();

    app.listen(PORT, () => {
      winston.info(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    winston.error('Error iniciando servidor:', error);
    process.exit(1);
  }
}

startServer();
