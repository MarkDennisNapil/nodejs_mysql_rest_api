import express from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import cors from 'cors';
import userRoutes from './routes/user.js';

const app = express();
const server = createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);

const port = 4000;
server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});