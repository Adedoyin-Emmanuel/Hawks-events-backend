const express = require('express');
const router = express.Router();

const {createGroup} = require('../controller/group')

router.post('/create-group', createGroup)

module.exports = router;