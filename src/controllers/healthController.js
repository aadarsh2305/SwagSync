const { sequelize } = require('../utils/db');

const getHealthCheck = async (req, res) => {
  try {
    // Checking database
    await sequelize.authenticate();
    res.status(200).json({
      status: 'UP',
      database: 'CONNECTED',
    });
  } catch (error) {
    res.status(500).json({
      status: 'DOWN',
      database: 'DISCONNECTED',
      error: error.message,
    });
  }
};

module.exports = { getHealthCheck };
