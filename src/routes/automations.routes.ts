import { Router, Request, Response } from 'express';
import AutomationsRepository from '../repositories/Automation';

const router = Router();
const automationsRepository = new AutomationsRepository();

router.post('/', (request: Request, response: Response) => {
  const automation = automationsRepository.create(2, 'teste');
  return response.json(automation)
})

router.get('/', (request: Request, response: Response) => {
  const automations = automationsRepository.list();
  return response.json(automations)
})
export default router;