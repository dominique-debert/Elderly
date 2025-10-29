import { Router } from 'express';
import { getWeather } from '@/controllers/weather.controller';
const router = Router();
router.get('/', (req, res, next) => {
    Promise.resolve(getWeather(req, res))
        .catch(next);
});
export default router;
