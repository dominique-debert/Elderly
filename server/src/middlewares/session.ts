import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

export const currentSession = session({
  secret: process.env.JWT_SECRET || "default_secret", // fallback au cas où la variable n'est pas définie
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // à passer à true en production avec HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 jour
  },
});
