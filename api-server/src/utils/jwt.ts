import jwt from "jsonwebtoken";

const getJwtSecret = (): string => {
  const secret = process.env.JWT_SECRET || process.env.SECRET;
  if (!secret) {
    throw new Error(
      "JWT secret is not set. Set JWT_SECRET (or SECRET) in your environment or .env file."
    );
  }
  return secret;
};

// Accept either a SignOptions object or a string (expiresIn)
export const generateToken = (
  payload: object,
  expiresInOrOptions?: string | jwt.SignOptions
) => {
  const secret = getJwtSecret();

  let signOptions: jwt.SignOptions | undefined;
  if (typeof expiresInOrOptions === "string") {
    signOptions = {
      expiresIn: expiresInOrOptions as jwt.SignOptions["expiresIn"],
    };
  } else {
    signOptions = expiresInOrOptions;
  }

  return jwt.sign(payload, secret, signOptions);
};

export function verifyToken(token: string) {
  const secret = getJwtSecret();
  return jwt.verify(token, secret);
}
