// 실질적인로직이 실행되는곳
const model = require('./users.model');

const getUserData = id =>{
  const userList = model.findUserAll(id);

  return {1:'당근'}
}