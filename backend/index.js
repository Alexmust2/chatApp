const express = require('express');
const WebSocket = require('ws');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', chatRoutes);

sequelize.sync();

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