import { PrismaClient } from "@/prisma/client";
import argon2 from "argon2";
import { createHttpError } from "@/utils/httpError";
import { generateToken } from "@/utils/jwt";
import { signUpSchema, signInSchema } from "@/validators/auth.validator";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();
const accessTokenExpiry = process.env.JWT_EXPIRES_IN || "15m";
const refreshTokenExpiryDays = parseInt((process.env.REFRESH_TOKEN_EXPIRES_IN || "7d").replace(/\D/g, "")) ||
    7;
const signToken = (userId, type) => {
    const expiresIn = type === "access" ? accessTokenExpiry : `${refreshTokenExpiryDays}d`;
    return generateToken({ userId }, expiresIn);
};
export const signUp = async (req, res, next) => {
    try {
        const { error } = signUpSchema.validate(req.body);
        if (error)
            throw createHttpError(400, "Invalid data", error.details);
        const { email, password, firstName, lastName, birthDate, isAdmin, latitude, longitude, } = req.body;
        const avatarFromBody = req.body.avatar;
        let uploadedAvatar = req.file?.filename;
        // If the client sent a desired filename (avatarFilename), try to move/rename
        // the uploaded temp file (multer) to that name. This handles the case where
        // multer processed the file before form fields were available in storage.filename.
        const desiredFilename = req.body.avatarFilename;
        if (uploadedAvatar && desiredFilename && req.file?.path) {
            try {
                // sanitize desired filename
                const safeBase = path.basename(desiredFilename).replace(/[^a-zA-Z0-9._-]/g, "-");
                const avatarsDir = path.join(process.cwd(), "public", "images", "avatars");
                // ensure extension
                const ext = path.extname(safeBase) || path.extname(uploadedAvatar) || ".jpg";
                const finalName = safeBase.endsWith(ext) ? safeBase : `${safeBase}${ext}`;
                const oldPath = req.file.path;
                const newPath = path.join(avatarsDir, finalName);
                // If destination already exists, avoid overwriting by adding a unique suffix
                let uniqueNewPath = newPath;
                let counter = 1;
                while (fs.existsSync(uniqueNewPath)) {
                    const nameOnly = finalName.replace(/\.[^.]+$/, "");
                    uniqueNewPath = path.join(avatarsDir, `${nameOnly}-${counter}${ext}`);
                    counter++;
                }
                fs.renameSync(oldPath, uniqueNewPath);
                uploadedAvatar = path.basename(uniqueNewPath);
            }
            catch (err) {
                console.warn("Could not rename uploaded avatar to desired filename:", err);
                // keep uploadedAvatar as-is (multer-generated name)
            }
        }
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing)
            throw createHttpError(409, "Email already in use");
        const passwordHash = await argon2.hash(password);
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                firstName,
                lastName,
                avatar: uploadedAvatar ?? avatarFromBody ?? null,
                birthDate,
                isAdmin,
                latitude: latitude ?? null,
                longitude: longitude ?? null,
            },
        });
        console.debug("signUp - created user (raw):", JSON.stringify(user));
        const accessToken = signToken(user.id, "access");
        const refreshToken = signToken(user.id, "refresh");
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + refreshTokenExpiryDays);
        await prisma.session.create({
            data: {
                refreshToken,
                userId: user.id,
                expiresAt,
                ipAddress: req.ip,
                userAgent: req.headers["user-agent"],
            },
        });
        res.status(201).json({
            accessToken,
            refreshToken,
            expiresIn: accessTokenExpiry,
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            avatar: user.avatar,
            birthDate: user.birthDate,
            isAdmin: user.isAdmin,
            latitude: user.latitude,
            longitude: user.longitude,
        });
    }
    catch (error) {
        next(error);
    }
};
export const signIn = async (req, res, next) => {
    try {
        const { error } = signInSchema.validate(req.body);
        if (error)
            throw createHttpError(400, "Invalid data", error.details);
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user)
            throw createHttpError(401, "Utilisateur inconnu !");
        if (!(await argon2.verify(user.passwordHash, password))) {
            throw createHttpError(401, "Mot de passe incorrect !");
        }
        const accessToken = signToken(user.id, "access");
        const refreshToken = signToken(user.id, "refresh");
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + refreshTokenExpiryDays);
        await prisma.session.create({
            data: {
                refreshToken,
                userId: user.id,
                expiresAt,
                ipAddress: req.ip,
                userAgent: req.headers["user-agent"],
            },
        });
        res.json({
            accessToken,
            refreshToken,
            expiresIn: accessTokenExpiry,
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            avatar: user.avatar,
            latitude: user.latitude,
            longitude: user.longitude,
            birthDate: user.birthDate,
            isAdmin: user.isAdmin,
        });
    }
    catch (error) {
        next(error);
    }
};
export const logout = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken)
            throw createHttpError(400, "Refresh token required");
        await prisma.session.deleteMany({ where: { refreshToken } });
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
