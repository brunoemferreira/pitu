import {Router} from 'express';

const router = Router();

router.post('/links', (req, res) => {
  res.send('POST');
})

router.get('/links/:code', (req,res) => {
  res.send('GET');
})

router.get('/links/:code/stats', (req,res) => {
  res.send('GET stats');
}) 

export default router;