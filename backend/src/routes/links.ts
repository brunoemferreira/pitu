import {Router} from 'express';
import linksController from '../controllers/links';

const router = Router();
/*
 * a pasta Controllers vai ficar toda regra de negócio das rotas por isso 
 * quando passamos a rota o segundo parametro aponta para o controller onde 
 * será executado o processamento da rota  
 */
router.post('/links', linksController.postLink);

router.get('/links/:code', linksController.getLink);

router.get('/links/:code/stats', linksController.hitLink);

export default router;