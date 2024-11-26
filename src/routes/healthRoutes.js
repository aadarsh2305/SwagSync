const express = require('express');
const { getHealthCheck } = require('../controllers/healthController');

const router = express.Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Perform a health check
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: UP
 *                 database:
 *                   type: string
 *                   example: CONNECTED
 *       500:
 *         description: API is unhealthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: DOWN
 *                 database:
 *                   type: string
 *                   example: DISCONNECTED
 *                 error:
 *                   type: string
 */
router.get('/health', getHealthCheck);

module.exports = router;
