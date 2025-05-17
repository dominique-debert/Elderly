// routes/categoryMeta.routes.ts
import { Router } from 'express';
import { getCategoryChapters, getCategoryTypes } from '@/controllers/categories//categoryMeta.controller';

const router = Router();

router.get('/chapters', getCategoryChapters);
router.get('/types', getCategoryTypes);

export default router;
