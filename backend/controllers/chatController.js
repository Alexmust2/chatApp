const ChatMessage = require('../models/ChatMessage');
const User = require('../models/User');
const Chat = require('../models/Chat');

exports.createMessage = async (req, res) => {
  const { message, userId, chatId } = req.body;

  try {
    const chatMessage = await ChatMessage.create({ message, userId, chatId });
    res.status(201).json(chatMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};