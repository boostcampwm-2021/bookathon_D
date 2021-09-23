// 실질적인로직이 실행되는곳
const model = require('./users.model');

const isUserExist = (name) => new Promise((resolve) => {
  model.User.exists({
    'name': name
  }, (_, exist) => {
    resolve(!!exist);
  });
});

const addUser = (name, pwd) => new Promise((resolve) => {
  const user = new model.User({
    name: name,
    pwd: pwd,
    sessionid: 0
  })
  user.save((err) => {
    resolve(true);
  });
});

module.exports = {
  isUserExist,
  addUser
}
