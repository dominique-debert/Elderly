import { Router } from 'express';
import { getWeather } from '@/controllers/weather.controller';
import { Request, Response, NextFunction } from 'express';

const router = Router();
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(getWeather(req, res))
	.catch(next);
});
export default router;
