/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from 'http';
dotenv.config();

/**
 * App Variables
 */
const port: number = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
const server = http.createServer(app);
server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Service running on port ${port}`);
});