const express = require('express')
const connectDB = require('./ConnectDb/DB')
const notfound = require('./Middleware/notFound');
const UserRoute = require('./Routes/Routes')
const errorHandler = require("./Middleware/errorHandler")


require('dotenv').config()

const app = express()
app.use(express.json())
app.use("/user",UserRoute)
app.use(notfound);
app.use(errorHandler);

const port = process.env.PORT || 8980

const startApp=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to database');
        app.listen(port,()=>{
            console.log('server running on port 8980');
        })
        
    } catch (error) {
        console.log(error);
    } 
}


startApp()