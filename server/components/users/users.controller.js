const service = require('./users.service');

const register = async (req, res, next) => {
  if (await service.isUserExist(req.body.name)) {
    res.json({'status': 'fail', 'message': '해당 유저가 이미 존재합니다.'})
  } else {
    await service.addUser(req.body.name, req.body.pwd);
    res.json({'status': 'success'});
  }
}

const login = async (req, res, next) => {
  if (!await service.isUserExist(req.body.name)) {
    res.json({'status': 'fail', 'message': '해당 유저가 존재하지 않습니다.'})
  } else if (await service.wrongPwd(req.body.name, req.body.pwd)) {
    res.json({'status': 'fail', 'message': '비밀번호가 다릅니다.'})
  } else {
    res.json({'status': 'success'});
  }
}

const logout = (req, res, next) => {
  res.json({'response': 'logout'});
}

module.exports = {
  register,
  login,
  logout
}
