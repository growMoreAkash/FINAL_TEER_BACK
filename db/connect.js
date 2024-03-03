import mongoose from "mongoose";
import ENV from '../config.js'
import 'dotenv/config'

const DB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.pkemegp.mongodb.net/Teer_db?retryWrites=true&w=majority&appName=Cluster0`

const connect = async () => {
    const database = await mongoose.connect(DB, {
        // useUnifiedTopology: true
    })
    console.log("DB connected")
    return database;
}
export default connect