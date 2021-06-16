// Imports
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from 'http';
dotenv.config();

// Import routes
import * as doc from './routes/docs';

//App settings
const port: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

//API routes
app.use('/docs',doc.getDocument)

//Server activation
const server = http.createServer(app);
server.listen(port);