const { Router } = require('express')
const { authenticate } = require('../middlewares/auth.middleware')

const router = Router()

router.use('/graphql', [authenticate], require('./graphql'))

module.exports = router
