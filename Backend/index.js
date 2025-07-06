import express from 'express';
import { initDB } from './DBconnection/ContactDB.js';
import ContactRouter from './Routes/ContactRouter.js';
import cors from 'cors';

const PORT = 3030;
const app = express();

await initDB();

app.use(cors());
app.use(express.json()); 
app.use('/api/v1', ContactRouter);

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
})