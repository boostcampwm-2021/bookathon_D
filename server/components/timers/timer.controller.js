const service = require('./timer.service');
const {getSessionId} = require('../../util/validation')

const insertTimerCtrl = async (req,res) => {
  try {
    // const id = getSessionId(req)
    const tempName = "test"
    const {time,task} = req.body
    const {total,today,timelog} = await service.insertTime(tempName,time,task)
    const status = timelog ? 201 : 500
    res.status(status).json({total,today,timelog})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}

const AllTimerCtrl = async (req,res) => {
  try {
    // const id = getSessionId(req)
    const tempName = "test"
    const {total,today,timelog} = await service.showAllTimer(tempName)
    const status = timelog ? 201 : 500
    res.status(status).json({total,today,timelog})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}

const dailyTimerCtrl = async (req,res) => {
  try {
    // const id = getSessionId(req)
    const tempName = "test"
    const {timelog} = await service.showAllTimer(tempName)
    const status = timelog ? 201 : 500
    res.status(status).json(timelog)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}

const topCtrl = async (req,res) => {
  try {
    // const id = getSessionId(req)
    const {limit} = req.query
    const toptenList = await service.showTopList(limit*1)
    const status = toptenList ? 201 : 500
    res.status(status).json(toptenList)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:'serverError'}) 
  }
}
module.exports = {insertTimerCtrl,AllTimerCtrl,dailyTimerCtrl,topCtrl}
