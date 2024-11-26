const { checkDatabaseConnection } = require('../services/healthService');

const getHealthStatus = async (req, res) => {
  try {
    const dbStatus = await checkDatabaseConnection();

    res.status(200).json({
      status: 'healthy',
      database: dbStatus,
    });
  } catch (err) {
    res.status(500).json({
      status: 'unhealthy',
      database: 'disconnected',
    });
  }
};

module.exports = {
  getHealthStatus,
};
