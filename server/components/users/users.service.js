// 실질적인로직이 실행되는곳
const model = require('./users.model');

const addUser = (id, password) => new Promise((resolve) => {
  const user = new model.User({
    id: id,
    password: password
  })
  user.save((err) => {
    resolve(true);
  });
});

module.exports = {
  addUser
}
