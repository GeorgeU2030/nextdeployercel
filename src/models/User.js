import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

export default mongoose.models.User || mongoose.model("User",schema)