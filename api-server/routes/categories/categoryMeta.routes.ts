// routes/categoryMeta.routes.ts
import { Router } from 'express';
import { fetchCategoryChapters, fetchCategoryTypes } from '@/controllers/categories//categoryMeta.controller';

const router = Router();

router.get('/chapters', fetchCategoryChapters);
router.get('/types', fetchCategoryTypes);

export default router;
