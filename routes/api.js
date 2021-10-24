const router = require('express').Router();
let users = require('./api/users');

console.log('a')
router.use('/users', users);

module.exports = router;
