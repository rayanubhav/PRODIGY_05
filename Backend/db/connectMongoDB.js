import mongoose from 'mongoose';

const connectMongoDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected:${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connection to mongoDB:${error.message}`);
    }
}

export default connectMongoDB;