import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

export class MongodbConnect {
  public async connect() {

    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGOCONNECT ?? 'mongodb://user:password@localhost:27017/');
  }

  public async disconnect() {
    mongoose.disconnect();
  }
}