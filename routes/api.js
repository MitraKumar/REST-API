const router = require('express').Router();
const { Password, User } = require('../controllers/controller')

router.get('/passwords', Password.getAll)
router.get('/passwords/:_id', Password.get)
router.post('/passwords', Password.create)
router.put('/passwords/:_id', Password.update)
router.delete('/passwords?:_id', Password.delete)

router.get('/users', User.getAll)
router.get('/users/:_id', User.get)
router.post('/users', User.create)
router.put('/users/:_id', User.update)
router.delete('/users/:_id', User.delete)

module.exports = router