import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';

export function generateToken(payload: object, expiresIn?: string): string {
  // Create options object with expiresIn only if it's provided
  const options: jwt.SignOptions = expiresIn ? { expiresIn: expiresIn as jwt.SignOptions['expiresIn'] } : {};
  
  // Pass the options object (which might be empty but never undefined)
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
