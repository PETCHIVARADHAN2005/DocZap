import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', ()=> console.log("Database Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/DocZap`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // If using MongoDB Atlas, you might need:
        retryWrites: true,
        w: 'majority'
    }).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}

export default connectDB