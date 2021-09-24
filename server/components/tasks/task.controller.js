const service = require('./task.service');
const {getSessionId} = require('../../util/validation')

const addTaskCtrl = async (req,res) => {
  try {
      // const id = getSessionId(req)
    const tempName = "test"
    const {task} = req.body
    const {tasklist} = await service.pushTaskList(tempName, task);
    const status = tasklist ? 201 : 500
    res.status(status).json({tasklist:[...tasklist,task]})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}

const showTaskCtrl = async (req,res) => {
  try {
      // const id = getSessionId(req)
    const tempName = "test"
    const {tasklist} = await service.getTaskList(tempName);
    const status = tasklist ? 201 : 500
    res.status(status).json({tasklist})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}

const deleteTaskCtrl = async (req,res) => {
  try {
      // const id = getSessionId(req)
    const tempName = "test"
    const {task} = req.body
    const result = await service.deleteTaskList(tempName, task);
    const status = result ? 201 : 500
    res.status(status).json({msg:'success'})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}
module.exports = {addTaskCtrl,showTaskCtrl,deleteTaskCtrl}