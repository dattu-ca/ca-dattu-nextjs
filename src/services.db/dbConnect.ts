// Source: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.ts
import mongoose from 'mongoose';
import {SERVER_CONFIG} from "~/utils/config.server";
declare global {
    var mongoose: any // This must be a `var` and not a `let / const`
}

const MONGODB_URI =  SERVER_CONFIG.MONGO_DB.MONGODB_URI; //String.raw`mongodb+srv://${SERVER_CONFIG.MONGO_DB.USERNAME}:${SERVER_CONFIG.MONGO_DB.PASSWORD}@${SERVER_CONFIG.MONGO_DB.DATABASE}.mongodb.net/${SERVER_CONFIG.SERVER_CONSTANTS.ENVIRONMENT}?retryWrites=true&w=majority`

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variables inside .env.local'
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log('MongoDb Connected');
            return mongoose
        })
    }
    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default dbConnect
