import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', ()=> console.log("Database Connected"))

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin',
        ssl: true,
        dbName: 'DocZap'  // Specify database name separately
    });
}

export default connectDB