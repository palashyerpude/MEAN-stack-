const express= require('express')
const userRouter=require('./router/user')
const multer = require('multer');
//const User = require('./model/user')

require('./db/mongoose')
const app=express()

const PORT = process.env.PORT||3000
app.use(express.json());
app.use(multer({ dest: './uploads' }));
app.use(userRouter)

app.listen(PORT,()=>{
    console.log(`server is connection on ${PORT}`)
})