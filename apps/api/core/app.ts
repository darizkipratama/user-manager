import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from '../routes/userRoute';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

//Route
app.use('/api/users', userRoutes);

app.listen(port, () => {    
    console.log(`Server running on port ${port}`);
}); 