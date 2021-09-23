const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true},
  pwd: {type: String, required: true},
  sessionid: {type:Number, required:true},
  total:{type:Number,default:0},
  today:{type:Number,default:0},
  timelog:{type:Array,default:[]}
});

module.exports = mongoose.model('user', userSchema)
