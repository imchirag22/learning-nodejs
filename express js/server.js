const express = require('express') // importing a express server and saving in a variable
const app = express() // calling a new instance of an express server and assigned the instance to a const 'app' object which we will use to configure server, assign routes and more. This the central point of the backend

// to tanslate the user raw data into json readable format
app.use(express.json()) // type of middleware

//app.get(routes,(res/req){} a callback function which runs whenever get request is made. res=msg from client & res=msg from server)
app.get('/',(req,res) => {
  res.send('Hello World!')
})
// app.post()
app.post('/api/users',(req,res) =>{
    console.log('body',req.body) 
    res.json(req.body)
})

const PORT = process.env.PORT || 3000 // defining port at which the server will run

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
})