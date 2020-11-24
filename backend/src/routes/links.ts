import {Router} from 'express';
import linksController from '../controllers/links';

const router = Router();
/*
 * a pasta Controllers vai ficar toda regra de negócio das rotas por isso 
 * quando passamos a rota o segundo parametro aponta para o controller onde 
 * será executado o processamento da rota  
 */
router.post('/links', linksController.postLink);

router.get('/links/:code', linksController.hitLink);

router.get('/links/:code/stats', linksController.getLink);

export default router;