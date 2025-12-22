import mongoose from 'mongoose';
import app from './index.js';
import dotenv from 'dotenv';

dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL as string);
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
