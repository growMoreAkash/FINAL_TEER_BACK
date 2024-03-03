import express from "express";
import cors from 'cors'
import morgan from 'morgan'
const app = express();
import connect from "./db/connect.js";
import { commonRouter } from "./router/common.js";
import { dreamRouter } from "./router/dream.js";
import { previousRouter } from "./router/previous.js"




//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

// app.use(express.static('build'))

app.use('/api', commonRouter)
app.use('/api', dreamRouter)
app.use('/api', previousRouter)



const port = process.env.PORT || 8000;

//start the server when the db is connected
connect().then(() => {
    app.get('/', (req, res) => {
        res.status(200).json("Server started at port " + port);
    })
    app.listen(port, (req, res) => {
        console.log("Server started at port " + port)
    })
}).catch(e => console.log(e));










