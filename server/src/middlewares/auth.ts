import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.redirect("/login");
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        if (req.accepts("html")) {
          return res.redirect("/login");
        } else {
          return res
            .status(401)
            .json({ message: "Token expired. Please log in again." });
        }
      }
      return res.status(403).json({ message: "Invalid token" });
    }
    (req as any).user = user;
    next();
  });
}
