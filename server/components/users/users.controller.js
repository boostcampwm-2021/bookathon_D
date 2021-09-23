const service = require('./users.service');

const register = () => (req, res, next) => {
  res.json({'response': 'register'});
}

const login = (req, res, next) => {
  res.json({'response': 'login'});
}

const logout = (req, res, next) => {
  res.json({'response': 'logout'});
}

module.exports = {
  register,
  login,
  logout
}
