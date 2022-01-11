const routes = require('express').Router();

const Exercise1 = require('./app/controllers/Exercise1');
const Exercise2 = require('./app/controllers/Exercise2');

routes.get('/exercise1', Exercise1.index);

routes.get('/exercise2', Exercise2.index);

routes.get('/', (_, res) => {
  return res.status(200).json({
    message: 'Welcome',
  });
});

module.exports = routes;
