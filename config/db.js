const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb connected");
        
    } catch (err) {
        console.log(err);
        
    }
}

module.exports = connectDb