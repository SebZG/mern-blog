import express from 'express';

const app = express();

app.listen(3500, () => {
  console.log('Server running on port 3500');
})