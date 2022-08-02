require('dotenv').config()
const express = require('express');
const path = require('path');
const connDB = require('./DB/connection');
const moduleRouter  = require('./modules/index.router');
const app =express();
const port = process.env.PORT
app.use(express.json())
app.use("/uploads" , express.static(path.join(__dirname,'./uploads')) )

app.use(moduleRouter.userRouter,
    moduleRouter.messageRouter,
    moduleRouter.authRouter)


    connDB()


app.listen(port,()=>{console.log(`server is running on port ...${port}`);})


