import { Router } from 'express';
import { getSearchResults } from './handlers/clickstream';
import { testAddDataHandler } from './handlers/test_add_data';
import { testDeleteDataHandler } from './handlers/test_delete_data';

const router = Router();

// ?? In order to search by a specific article... eventually being a user's form input - "Article" ... 
// need this router.param to capture user input for "Article" ? then route path and handler are adjusted 

// router.param('article', function (req, res, next, article) {
//   console.log('ARTICLE SEARCH'); 
//   next();
// });

// or 
// app.param('article', f() {...}); 

// and in the route handler...
// am I trying to access the input for "Article" via req.body? route params?  query params? ... req.params.article or req.query.article ?  

// should the query string be...  /api/search/?article=Albert_Einstein  .. if using req.query ?
//                            or  /api/search/?Albert_Einstein          .. if using req.params ?

router.get('/search', getSearchResults);
//         '/search/:article' ?

router.post('/test', testAddDataHandler);

router.post('/testDelete', testDeleteDataHandler);

router.use((err, req, res, next) => {
  console.log(err);
  res.json({message: 'Routing Error'});
});

export default router;