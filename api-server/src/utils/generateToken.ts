import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in your .env file.");
  process.exit(1);
}

const userId = process.argv[2];

if (!userId) {
  console.error(
    "Please provide a userId as an argument.\nUsage: npm run generate-token <userId>"
  );
  process.exit(1);
}

const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
