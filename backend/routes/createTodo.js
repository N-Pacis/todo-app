const express = require('express');
const {validate,Todo}= require('../models/createTodoModel')
const router = express.Router();

router.get('/',async (req,res)=>{
   try{
       const todo = await Todo.find()
       res.send(todo)
   }
   catch(ex){
       res.status(400).send(ex.message)
   }
})
router.get('/edit/:id',async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        res.send(todo)
    }
    catch(ex){
        res.status(404).send(ex.message)
    }
})
router.post('/create',async(req,res)=>{
    try{
        const {error} = await validate(req.body)
        const newTodo = new Todo({
            todo: req.body.todo, 
            priority:req.body.priority
       })
        try{
            const todo = await newTodo.save()
            res.send(todo)
        }
        catch(ex){
            res.status(400).send(ex.message)
        }
    }
    catch(error) {
        res.status(400).send(error.details[0].message)
    }
})
router.post('/edit/:id',async (req,res)=>{
    try{
        const {error} = await validate(req.body)
        try{
            const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,{
            todo:req.body.todo,
            priority:req.body.priority
            },{new:true})
            res.send(updatedTodo)
        }
        catch(ex){
            res.status(400).send(ex.message)
        }
    }
    catch(error){
        res.status(400).send(error.details[0].message)
    }
})
router.delete('/delete/:id',async (req,res)=>{
    try{
        const deletedTodo = await Todo.findByIdAndRemove(req.params.id)
        res.send(deletedTodo)   
    }
    catch(ex){
        res.status(404).send(ex.message)
    }
})
module.exports = router;