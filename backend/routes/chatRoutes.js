const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/messages', chatController.createMessage);
router.get('/chat', chatController.getChats);

module.exports = router;