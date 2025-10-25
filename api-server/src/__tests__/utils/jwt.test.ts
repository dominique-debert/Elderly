import jwt from "jsonwebtoken";
import { generateToken, verifyToken } from "@/utils/jwt";

jest.mock("jsonwebtoken");
const mockedJwt = jwt as jest.Mocked<typeof jwt>;

describe("jwt utils", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, JWT_SECRET: "testsecret" };
    jest.clearAllMocks();
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should throw error if no secret is set", () => {
    process.env.JWT_SECRET = "";
    process.env.SECRET = "";
    // Re-require the module to get a fresh instance
    const jwtUtils = require("@/utils/jwt");
    expect(() => jwtUtils.generateToken({ userId: 1 })).toThrow(
      "JWT secret is not set. Set JWT_SECRET (or SECRET) in your environment or .env file."
    );
  });

  it("should generate token with string expiresIn", () => {
    (mockedJwt.sign as jest.Mock).mockReturnValue("signed-token");
    const token = generateToken({ userId: 1 }, "1h");
    expect(token).toBe("signed-token");
    expect(mockedJwt.sign).toHaveBeenCalledWith({ userId: 1 }, "testsecret", {
      expiresIn: "1h",
    });
  });

  it("should generate token with SignOptions", () => {
    (mockedJwt.sign as jest.Mock).mockReturnValue("signed-token");
    const token = generateToken(
      { userId: 2 },
      { expiresIn: "2h", algorithm: "HS256" }
    );
    expect(token).toBe("signed-token");
    expect(mockedJwt.sign).toHaveBeenCalledWith({ userId: 2 }, "testsecret", {
      expiresIn: "2h",
      algorithm: "HS256",
    });
  });

  it("should verify token", () => {
    (mockedJwt.verify as jest.Mock).mockReturnValue({ userId: 1 });
    const payload = verifyToken("sometoken");
    expect(payload).toEqual({ userId: 1 });
    expect(mockedJwt.verify).toHaveBeenCalledWith("sometoken", "testsecret");
  });
});
