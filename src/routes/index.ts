import { Router } from 'express';

import automationRouter from './automations.routes';

const routes = Router();

routes.use('/automation', automationRouter);

export default routes;