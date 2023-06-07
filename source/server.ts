import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('TEST');
  res.status(200);
  res.json({message: 'SERVER TEST'});
});

export default app;
