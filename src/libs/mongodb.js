import mongoose from 'mongoose'
 
export async function connectdb(){
    await mongoose.connect(process.env.MONGODB_URL);
}