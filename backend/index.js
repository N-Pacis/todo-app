const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers',  'Content-Type');
   next();
})

app.use(express.json());
     
app.use(bodyParser.urlencoded({extended: true}))
app.use(require("./routes/createTodo"))

mongoose.connect("mongodb://localhost/mern-crud",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true})
  .then(()=>{console.log("Connected to mongodb successfully...")})
  .catch(err=>{console.log("Failed to connect due to ",err)})

const port = process.env.PORT || 4000

app.listen(port,()=>{
   console.log(`listening to port ${port}....`)
})