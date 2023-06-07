import express from 'express';
import router from './router';

const app = express();

app.get('/', (req, res) => {
  console.log('TEST');
  res.status(200);
  res.json({message: 'SERVER TEST'});
});

app.use('/api', router);

export default app;
