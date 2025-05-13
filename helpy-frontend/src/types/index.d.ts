import { User } from '@prisma/client'; // si tu veux le type complet

declare global {
  namespace Express {
    interface Request {
      user?: User 
    }
  }
}