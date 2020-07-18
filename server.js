const express = require("express")

const mongoose = require("mongoose")
const app = express()
const port = 1234

const authRoute= require('./routes/auth');
mongoose.connect("mongodb+srv://laclass:laclass11213@cluster0.qdfum.mongodb.net/root?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true

})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongoDB")
})

mongoose.connection.on("error",(err)=>{
    console.log("error: ",err)
})
app.use(express.json())
app.use('/api/user', authRoute)
app.listen(port,()=>{
    console.log("connecting to port: ",port)
})

