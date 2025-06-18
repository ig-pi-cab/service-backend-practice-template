const amqp = require('amqplib');
const winston = require('./logger');

let connection = null;
let channel = null;

/**
 * Conecta a RabbitMQ y crea un canal único reutilizable
 */
async function connectRabbit() {
  try {
    connection = await amqp.connect(process.env.RABBITMQ_URL);
    channel = await connection.createChannel();

    connection.on('error', (err) => {
      winston.error('[RabbitMQ] Connection error:', err);
    });

    connection.on('close', () => {
      winston.warn('[RabbitMQ] Connection closed. Reconnecting...');
      setTimeout(connectRabbit, 2000);
    });

    winston.info('[RabbitMQ] Conectado correctamente');
  } catch (err) {
    winston.error('[RabbitMQ] Error al conectar:', err);
    setTimeout(connectRabbit, 2000);
  }
}

/**
 * Retorna el canal actual de RabbitMQ
 */
function getRabbitChannel() {
  if (!channel) {
    throw new Error('[RabbitMQ] Canal no inicializado');
  }
  return channel;
}

module.exports = {
  connectRabbit,
  getRabbitChannel,
};
