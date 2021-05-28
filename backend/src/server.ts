/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from 'http';
dotenv.config();

// Import routes
import * as doc from './routes/docs';

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
app.use('/docs',doc.getDocument)

/**
 * Server Activation
 */
const server = http.createServer(app);
server.listen(port);