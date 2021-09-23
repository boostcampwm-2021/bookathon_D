/* 임시 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * paymentSchema
 * date: 일자
 * category: 분류
 * content: 내용
 * method: 결제수단
 * price: 금액
 */
const paymentSchema = new Schema({
  date: { type: Date, default: Date.now },
  category: String,
  content: String,
  method: String,
  price: Number
});

module.exports = mongoose.model('payment', paymentSchema);
