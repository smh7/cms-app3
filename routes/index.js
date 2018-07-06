const Router = require('koa-router');
const router = new Router();
const {
  Card,
  User
} = require('../controllers');

// User Routes
router.post('/signup', User.create);
router.post('/login', User.login);

module.exports = router;