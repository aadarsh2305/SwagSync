const { sequelize } = require('../utils/db');

const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    return 'connected';
  } catch (err) {
    return 'disconnected';
  }
};

module.exports = {
  checkDatabaseConnection,
};
