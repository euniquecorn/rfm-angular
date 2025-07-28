import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/orders', orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
