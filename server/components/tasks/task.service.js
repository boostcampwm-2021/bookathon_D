// 실질적인로직이 실행되는곳// 몽고 모델 불러오고 쿼리를 이용한 로직들 db접근 로직
const User = require('../../models/user')

const pushTaskList = async (name,task) => {
  try {
    const docs = await User.findOneAndUpdate({name},{
      $push:{tasklist:task}
    });
    return docs
  } catch (error) {
    console.log(error);
    return false
  }
}

const getTaskList = async (name,task) => {
  try {
    const docs = await User.findOne({name});
    return docs
  } catch (error) {
    console.log(error);
    return false
  }
}

const deleteTaskList = async (name,task) => {
  try {
    const docs = await User.findOneAndUpdate({name},{
      $pull:{tasklist:task}
    });
    return docs
  } catch (error) {
    console.log(error);
    return false
  }
}

module.exports = {pushTaskList,getTaskList, deleteTaskList}