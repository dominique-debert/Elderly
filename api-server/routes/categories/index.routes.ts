import { Router } from "express";
import categoryMetaRouter from "./categoryMeta.routes";
import activityCategoriesRouter from "./activityCategory.routes";
import badgeCategoriesRouter from "./badgeCategory.routes";
// ...other imports...

const router = Router();

// Specific category subrouters (relative paths)
router.use("/activities", activityCategoriesRouter);
router.use("/badges", badgeCategoriesRouter);
router.use("/cognitive", cognitiveCategoriesRouter);
router.use("/forum", forumCategoryRouter);
router.use("/help", helpCategoriesRouter);
router.use("/urban-issues", issueCategoriesRouter);
router.use("/nutrition", nutritionCategoriesRouter);
router.use("/programs", programCategoriesRouter);
router.use("/projects", projectCategoriesRouter);
router.use("/resources", resourceCategoriesRouter);
router.use("/services", serviceCategoriesRouter);
router.use("/skills", skillCategoriesRouter);
router.use("/wellness", wellnessCategoriesRouter);

// Meta routes at /categories (chapters/types)
router.use("/", categoryMetaRouter);

export default router;
