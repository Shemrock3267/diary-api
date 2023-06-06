import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

import connectDB from './config/db.js';

const PORT = process.env.PORT || 4000;

dotenv.config();
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err.message));

const app = express();
app.use(express.json());

app.use('/api/posts', postRoutes);
