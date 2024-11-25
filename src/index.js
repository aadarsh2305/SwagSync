const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./utils/db');
const setupSwagger = require('./utils/swagger');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);


setupSwagger(app);

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
    });
  });
}

module.exports = app; 