import {SERVER_CONFIG} from "~/utils/config.server";
import mongoose from "mongoose";

const mongoDB = String.raw`mongodb+srv://${SERVER_CONFIG.MONGO_DB.USERNAME}:${SERVER_CONFIG.MONGO_DB.PASSWORD}@${SERVER_CONFIG.MONGO_DB.DATABASE}.mongodb.net/?retryWrites=true&w=majority`

const connectToDb = async () => {
    await mongoose.connect(mongoDB, {})
        .then(() => console.log('MongoDB Connected!'))
        .catch(e => console.error('Not connected', e));
}
let isConnected = false
if (!isConnected) {
    await connectToDb();
    isConnected = true;
}