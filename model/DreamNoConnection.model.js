import mongoose from "mongoose";

const modelName = 'Dream';

const DreamSchema = new mongoose.Schema({
    Direct: [String],
    Number: [String],
    House: [String],
    Ending: [String],
});

export default mongoose.models["dream"] || mongoose.model("dream", DreamSchema);
