import "dotenv/config";
import {connect} from "mongoose";

async function dbConnect(): Promise<void>{
    //DB_URI => String para conectarse a Mongo
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}

export default dbConnect;