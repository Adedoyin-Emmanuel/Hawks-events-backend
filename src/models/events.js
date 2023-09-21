const { DataTypes } = require("sequelize");
const Sequelize = require('../../db/database')

const Event = Sequelize.define('Event', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
 },
  title: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1024),
    allowNull: false,
  },
  creator_id: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(1024),
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: 'Url to the thumbnail',
  },
});

// Define associations
Event.belongsTo(User, { foreignKey: 'creator_id', allowNull: false });

module.exports = Event;
