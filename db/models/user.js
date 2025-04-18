'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const sequelize = require('../../config/database');



module.exports = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  userType: {
  type: Sequelize.ENUM('0', '1', '2')
},
firstName: {
  type: Sequelize.STRING
},
lastName: {
  type: Sequelize.STRING
},
email: {
  type: Sequelize.STRING
},
password: {
  type: Sequelize.STRING
},
createdAt: {
  allowNull: false,
  type: Sequelize.DATE
},
updatedAt: {
  allowNull: false,
  type: Sequelize.DATE
},
deletedAt: {
  type: Sequelize.DATE,
  allowNull: true,
}
}, {
  paranoid: true,
  freezeTableName: true,
  modelName: 'user'
})