import mongoose from "mongoose";
import ENV from '../config.js'
// import 'dotenv/config'

const DB = `mongodb+srv://${ENV.MONGO_USER}:${ENV.MONGO_PASS}@cluster0.4wuwm.mongodb.net/Teer_db?retryWrites=true&w=majority&appName=Cluster0`

const connect = async () => {
    const database = await mongoose.connect(DB, {
        // useUnifiedTopology: true
    })
    console.log("DB connected")
    return database;
}
export default connect
