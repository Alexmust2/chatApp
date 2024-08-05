const express = require('express');
const { Sequelize } = require('sequelize');
const WebSocket = require('ws');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});