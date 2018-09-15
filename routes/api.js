const router = require('express').Router();
const { Password, User } = require('../controllers/controller')


router.get('/passwords', (req, res) => {
    Password.get(res)
})

router.get('/users', (req, res) => {
    User.get(res)
})

router.post('/passwords', (req, res) => {
    Password.create(req, res)
})

router.put('/passwords', (req, res) => {
    Password.update(req, res)
})

router.delete('/passwords', (req, res) => {
    Password.delete(req, res)
})

module.exports = router