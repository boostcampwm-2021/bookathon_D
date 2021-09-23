// 실질적인로직이 실행되는곳// 몽고 모델 불러오고 쿼리를 이용한 로직들 db접근 로직
const User = require('../../models/user')

const insertTime = async (name, time) =>{
  try {
    const todayString = new Date().toJSON()
    const timeData = {}
    timeData[todayString] = time
    const docs = await User.findOneAndUpdate({name},{
      $inc:{today:time,total:time},
      $push:{timelog:timeData}
    });
    return docs
  } catch (error) {
    console.log(error);
    return false
  }
}



module.exports = {insertTime}