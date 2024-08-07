const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Chat = require('./Chat');

const ChatMessage = sequelize.define('chatmessage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  chatId: {
    type: DataTypes.INTEGER,
    references: {
      model: Chat,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});

User.hasMany(ChatMessage, { foreignKey: 'userId' });
Chat.hasMany(ChatMessage, { foreignKey: 'chatId' });
ChatMessage.belongsTo(User, { foreignKey: 'userId' });
ChatMessage.belongsTo(Chat, { foreignKey: 'chatId' });

module.exports = ChatMessage;