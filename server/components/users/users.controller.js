const service = require('./users.service');

const register = async (req, res, next) => {
  await service.addUser(req.body.name, req.body.pwd);
  res.json({'status': 'success'});
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
