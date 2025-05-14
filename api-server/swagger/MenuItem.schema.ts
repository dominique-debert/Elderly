/**
 * @swagger
 * components:
 *   schemas:
 *     MenuItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Identifiant unique du MenuItem
 *           format: cuid
 *         label:
 *           type: string
 *           description: Label du MenuItem
 *         icon:
 *           type: string
 *           description: Nom de l'icône
 *         key:
 *           type: string
 *           description: Clé
 *       example:
 *         label: Expert
 *         icon: mdiHeartSettingsOutline
 *         key: mood
*/