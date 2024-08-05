const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/messages', chatController.createMessage);

module.exports = router;