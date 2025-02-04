import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', ()=> console.log("Database Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/DocZap`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin',
            ssl: true,
            sslValidate: true
          });
}

export default connectDB