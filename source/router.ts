import { Router } from 'express';
import { getSearchResults } from './handlers/clickstream';

const router = Router();

router.get('/search', getSearchResults);

router.use((err, req, res, next) => {
  console.log(err);
  res.json({message: 'Routing Error'});
});

export default router;