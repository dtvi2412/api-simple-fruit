import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { readFile } from 'fs/promises';

const json = JSON.parse(
  await readFile(new URL('./data.json', import.meta.url))
);

dotenv.config();
const app = express();

app.use(cors());

app.get('/api/fruit', (req, res) => {
  res.status(200).json({
    success: true,
    data: json,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running port ${process.env.PORT || 5000}`);
});
