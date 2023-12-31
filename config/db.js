import mongoose from "mongoose";
import color  from "colors";


const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To MongoDB Database ${conn.connection.host}`.bgBlue.white);

        
    } catch (error) {
        console.log(`Error in MongoDb ${error}`.bgRed.white);
    }
}

export default connectDB;