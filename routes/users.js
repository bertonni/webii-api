const express = require('express');
const router = express.Router();

const usersService = require('../services/users.service');
router.get('/users', usersService.getUsers);

module.exports = router;