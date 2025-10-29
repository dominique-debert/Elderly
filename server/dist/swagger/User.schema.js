"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
  *       required:
 *         - email
 *         - password_hash
 *         - first_name
 *         - last_name
 *         - birth_date
 *       properties:
 *         id:
 *           type: string
 *           description: ID unique de l'utilisateur
 *         email:
 *           type: string
 *           format: email
 *           description: Adresse email unique de l'utilisateur
 *         password_hash:
 *           type: string
 *           description: Hash du mot de passe
 *         first_name:
 *           type: string
 *           description: Prénom de l'utilisateur
 *         last_name:
 *           type: string
 *           description: Nom de famille de l'utilisateur
 *         birth_date:
 *           type: string
 *           format: date
 *           description: Date de naissance de l'utilisateur
 *         address:
 *           type: string
 *           description: Adresse physique de l'utilisateur
 *         gps_coordinates:
 *           type: string
 *           description: Coordonnées GPS de l'utilisateur (point)
 *         phone:
 *           type: string
 *           description: Numéro de téléphone de l'utilisateur
 *         profile_picture:
 *           type: string
 *           description: URL de la photo de profil
 *         registration_date:
 *           type: string
 *           format: date-time
 *           description: Date d'inscription de l'utilisateur
 *         account_verified:
 *           type: boolean
 *           description: Indique si le compte a été vérifié
 *         interface_preferences:
 *           type: string
 *           description: Préférences d'interface utilisateur (format JSON)
 *         two_factor_authentication:
 *           type: boolean
 *           description: Indique si l'authentification à deux facteurs est activée
 *         help_points:
 *           type: integer
 *           description: Points d'aide accumulés par l'utilisateur
 *         reduced_mobility:
 *           type: boolean
 *           description: Indique si l'utilisateur a une mobilité réduite
 *         activity_level:
 *           type: string
 *           enum: [sedentary, moderate, active]
 *           description: Niveau d'activité de l'utilisateur
 *         emergency_contact_name:
 *           type: string
 *           description: Nom du contact d'urgence
 *         emergency_contact_phone:
 *           type: string
 *           description: Téléphone du contact d'urgence
 *         status:
 *           type: string
 *           enum: [active, inactive, suspended]
 *           description: Statut du compte utilisateur
 *       example:
 *         id: cm9fdr0ax0000tbpivb08e7aj
 *         email: utilisateur@exemple.com
 *         password_hash: $2b$10$abcdefghijklmnopqrstuvwxyz123456789
 *         first_name: Pierre
 *         last_name: Dupont
 *         birth_date: 1990-01-01
 *         address: 123 Rue de l'Exemple, Paris
 *         gps_coordinates: null
 *         phone: +33123456789
 *         profile_picture: /images/1.jpg
 *         registration_date: 2023-01-01T12:00:00.000Z
 *         account_verified: true
 *         interface_preferences: '{"theme":"dark","notifications":true}'
 *         two_factor_authentication: false
 *         help_points: 150
 *         reduced_mobility: false
 *         activity_level: active
 *         emergency_contact_name: Marie Dupont
 *         emergency_contact_phone: +33987654321
 *         status: active
 */ 
