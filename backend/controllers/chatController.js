const ChatMessage = require("../models/ChatMessage");
const User = require("../models/User");
const Chat = require("../models/Chat");

exports.createMessage = async (req, res) => {
  const { message, userId, chatId } = req.body;

  try {
    const chatMessage = await ChatMessage.create({ message, userId, chatId });
    res.status(201).json(chatMessage);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const chatMessages = await ChatMessage.findAll({
      where: { chatId: req.params.chatId },
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(chatMessages);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const chatMessage = await ChatMessage.findByPk(req.params.messageId);
    if (!chatMessage)
      return res.status(404).json({ error: "Message not found" });
    await chatMessage.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
const sequelize = require('../config/database');
exports.getChats = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query("SELECT * FROM Chats");
    console.log("Raw query results:", results);
    
    if (results.length === 0) {
      return res.status(404).json({ message: "No chats found" });
    }
    
    res.status(200).json(results);
  } catch (error) {
    console.error("Error in getChats:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
};