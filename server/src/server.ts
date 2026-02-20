import express, { Application, Request, Response } from "express";
import { errorHandler } from "@/middlewares";
import routes from "@/routes";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

// Load .env as early as possible
dotenv.config();

// Fail fast if JWT secret is missing
if (!process.env.JWT_SECRET && !process.env.SECRET) {
  console.error(
    "FATAL: JWT secret is not set. Set JWT_SECRET (or SECRET) in server/.env or your environment."
  );
  process.exit(1);
}

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://0.0.0.0:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      // Allow localhost and any IP from local network (192.168.x.x)
      if (
        allowedOrigins.includes(origin || "") ||
        /^http:\/\/(192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}):\d{1,5}$/.test(
          origin || ""
        )
      ) {
        callback(null, true);
      } else {
        console.log(`CORS blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "CSRF-Token",
      "X-CSRF-Token",
    ],
  })
);

// Routes
app.use("/api", routes);

// Distribution of static files (avatars, etc.) from the public folder
const publicPath = path.join(process.cwd(), "public");
app.use("/public", express.static(publicPath));

// Distribution of files under /images/... from the public/images folder
app.use(
  "/images",
  express.static(path.join(process.cwd(), "public", "images"), {
    maxAge: "1d",
  })
);

// Error handling middleware
app.use(errorHandler);

// Server startup
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
