const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/artwork', require('./artwork'))
router.use('/prompt', require('./prompt'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
