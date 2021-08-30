const express = require('express')
const cors = require('cors')
const app = express();
const SERVER_PORT = 4000
app.use(express.json())
app.use(cors())

app.get('/api/users',(req,res) =>{
  let friends = ['Jake','Nate','Tyler']
  res.status(200).send(friends)
})

app.get('/weather/:temperature',(req,res)=> {
  const {temperature} = req.params;
  const phrase = `<h3> It was  ${temperature} today</h3>`
  res.status(200).send(phrase)
})

app.listen(SERVER_PORT,()=> console.log(`server up and running on port ${SERVER_PORT}`))