const { verifyToken } = require('../utils/auth')

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  try {
    const verified = verifyToken(token)

    req.verifiedUser = verified

    next()
  } catch (err) {
    next()
  }
}

module.exports = { authenticate }
