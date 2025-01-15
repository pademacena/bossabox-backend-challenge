import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { MongodbConnect } from './database';
import { routes } from './routes';
import { errorHandling } from './middleware/error.middleware';

class App {
  public express: express.Application;
  public mongodb = new MongodbConnect;
  

  public constructor() {
    this.express = express();
    this.primaryConfig();
    this.mongodb.connect();
  }

  public primaryConfig(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
    this.express.use(errorHandling);
  }
}

export default new App().express