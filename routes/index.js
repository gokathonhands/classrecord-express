const router = require('express').Router()
const user = require('./user')
const data = require('./data')

router.use('/user',user)
router.use('/data',data)

module.exports = router
