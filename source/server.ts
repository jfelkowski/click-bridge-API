import express from 'express';
import router from './router';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log('TEST');
  res.status(200);
  res.json({message: 'SERVER TEST'});
});

app.use('/api', router);

app.use((err, req, res, next) => {
  if (err.type === 'input') {
    res.status(400).json({message: 'Error: invalid input'});
  } else {
    res.status(500).json({message: 'Error: something went wrong'})
  }
}); 

export default app;
