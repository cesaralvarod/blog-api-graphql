const { User } = require('../../models')
const { createJWTToken } = require('../../utils/auth')

const signIn = async params => {
  const { email, password } = params

  let user = await User.findOne({ email }).select('+password')

  if (!user) throw new Error('Invalid Credentials')

  const validPassword = await user.comparePassword(password, user.password)

  if (!validPassword) throw new Error('Invalid Credentials')

  delete user.password

  const token = createJWTToken(user)

  return token
}

module.exports = { signIn }
