const redis = require('redis');
const winston = require('./logger');

let client;

async function connectRedis(){
    client = redis.createClient({
        url: process.env.REDIS_URL,
    })
    client.on('error', (err) => winston.error('Redis Error', err));
    await client.connect();
    winston.info('[Redis] conectado correctamente');
}

module.exports = { connectRedis, getRedisClient: () => client };