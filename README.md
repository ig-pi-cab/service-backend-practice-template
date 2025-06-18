# ServiceHub Backend Template

Este proyecto es un template base para desarrollar aplicaciones backend en Node.js con una arquitectura modular, usando Express, MongoDB, Redis, RabbitMQ y validaciones con Zod. Está pensado para práctica diaria y rápida replicación.

---

## Tecnologías utilizadas

- Node.js + Express
- MongoDB + Mongoose
- Zod (validaciones)
- JWT (autenticación)
- Redis (caching)
- RabbitMQ (colas asincrónicas)
- Docker Compose (entorno local)

---

## Pasos para iniciar el proyecto desde cero

### 1. Clona este repositorio (o copia el template vacío)

git clone https://github.com/tu-usuario/servicehub-backend.git  
cd servicehub-backend

---

### 2. Instala las dependencias

npm install

---

### 3. Configura las variables de entorno

Crea un archivo `.env` en la raíz y copia el siguiente contenido:

PORT=3000  
MONGODB_URI=mongodb://localhost:27017/servicehub  
JWT_SECRET=supersecret  
REDIS_URL=redis://localhost:6379  
RABBITMQ_URL=amqp://localhost

---

### 4. Levanta los servicios con Docker (MongoDB, Redis, RabbitMQ)

docker-compose up -d

Esto levantará:
- MongoDB en localhost:27017
- Redis en localhost:6379
- RabbitMQ en localhost:5672 (panel en http://localhost:15672)

---

### 5. Inicia el servidor en modo desarrollo

npm run dev

---

### 6. Estructura base del proyecto

/src  
  /config         → Conexiones a Mongo, Redis, Rabbit  
  /controllers    → Lógica de respuesta HTTP  
  /models         → Esquemas de Mongoose  
  /routes         → Definición de rutas Express  
  /services       → Lógica de negocio  
  /validations    → Esquemas de validación Zod  
  /middlewares    → Auth, validación, errores  
  /queues         → Consumer RabbitMQ  
  /utils          → Funciones reutilizables (ej: generar tokens)  

---

## Flujo para agregar una funcionalidad nueva (ej: crear servicio)

1. Crear el modelo Mongoose en `/models/`
2. Definir esquema Zod en `/validations/`
3. Escribir lógica en `/services/`
4. Crear controlador Express en `/controllers/`
5. Registrar ruta en `/routes/`
6. Aplicar middlewares (`validateBody`, `requireAuth`, etc.)

---

## Comandos útiles

Comando                | Descripción                        
----------------------|------------------------------------
npm run dev           | Inicia servidor con nodemon         
npm start             | Inicia servidor sin reinicio        
docker-compose up -d  | Levanta Mongo, Redis y RabbitMQ     
docker-compose down   | Detiene y elimina contenedores      

---
