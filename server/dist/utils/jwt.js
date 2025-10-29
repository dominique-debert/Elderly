import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || '';
export function generateToken(payload, expiresIn) {
    // Create options object with expiresIn only if it's provided
    const options = expiresIn ? { expiresIn: expiresIn } : {};
    // Pass the options object (which might be empty but never undefined)
    return jwt.sign(payload, JWT_SECRET, options);
}
export function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}
