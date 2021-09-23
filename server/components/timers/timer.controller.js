const service = require('./timer.service');
const {getSessionId} = require('../../util/validation')

const insertTimeCtrl = async (req,res) => {
  try {
    // const id = getSessionId(req)
    const tempName = "test"
    const {time} = req.body
    const {total,today,timelog} = await service.insertTime(tempName,time)
    const status = timelog ? 201 : 500
    res.status(status).json({total,today,timelog})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}

module.exports = {insertTimeCtrl}