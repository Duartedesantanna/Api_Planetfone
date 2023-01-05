const express = require('express');
const testApiRoutes = require('./routes/testApiRoutes')();
const userRoutes = require('./routes/userRoutes')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../config/swagger.json');

const routes = express();

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/api/testApi', testApiRoutes);
routes.use('/api/user', userRoutes)

module.exports = routes;