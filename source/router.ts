import { Router } from 'express';
import { getSearchResults } from './handlers/clickstream';
import { testAddData } from './handlers/test_add_data';

const router = Router();

router.get('/search', getSearchResults);

router.post('/test', testAddData);

router.use((err, req, res, next) => {
  console.log(err);
  res.json({message: 'Routing Error'});
});

export default router;