import mongoose from "mongoose"

const connectDB = async () => {
  const uri = process.env.MONGO_URI
    try {
        const connection = await mongoose.connect(uri,
            { useNewUrlParser: true, useUnifiedTopology: true })
        const url = `${connection.connection.host} : ${connection.connection.port}`;

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB