const mongoose = require('mongoose');
const Joi = require('joi');

const todoSchema = new mongoose.Schema({
  todo:{
      type:String,
      minLength:3,
      maxLength:250,
      required:true
  },
  priority:{
      type:String,
      minLength:0,
      maxLength:25,
      lowercase:true,
      enum:['high','medium','low'],
      required:true
  }
})

function validateTodo(todoData){
  const schema= {
    todo:Joi.string().min(3).required(),
    priority:Joi.string().min(2).required()
  }
  return Joi.validate(todoData,schema)
}
const Todo = mongoose.model('todo',todoSchema)
exports.validate = validateTodo
exports.Todo = Todo;