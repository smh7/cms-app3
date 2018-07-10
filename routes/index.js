const Router = require('koa-router');
const router = new Router();
const {
  Card,
  User
} = require('../controllers');

// User Routes
router.post('/signup', User.create)
      .get('/login', User.login);

router.post('/login', User.login)
      .get('/cms', Card.find);

// Card Routes
router.get('/cards', Card.find);
// To be protected Routes
router.post('/card', Card.create);

module.exports = router;