import express from 'express';
import * as dotenv from 'dotenv';
import router from './router.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(router);



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});