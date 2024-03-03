import mongoose from "mongoose";

export const PreviousSchema = new mongoose.Schema({
    Date: String,
    Timing: {
        type: String,
        enum: ["Day", "Night"]
    },
    FR: String,
    SR: String
})

export default mongoose.model('Previous', PreviousSchema)