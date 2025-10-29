// server/utils/generateToken.test.ts
import jwt from "jsonwebtoken";

describe("generateToken script (CLI module)", () => {
  const ORIGINAL_ENV = { ...process.env };
  const ORIGINAL_ARGV = [...process.argv];

  let exitSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
    process.argv = [...ORIGINAL_ARGV];
    // Make process.exit throw so requiring the module doesn't terminate the test runner
    exitSpy = jest.spyOn(process, "exit").mockImplementation(((
      code?: number
    ) => {
      throw new Error("process.exit:" + (code ?? 0));
    }) as any);
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    exitSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    process.env = { ...ORIGINAL_ENV };
    process.argv = [...ORIGINAL_ARGV];
    jest.clearAllMocks();
  });

  test("exits with error when JWT_SECRET is missing", () => {
    // ensure env is empty for this test so dotenv won't restore JWT_SECRET
    process.env = {};
    // provide a userId so the script reaches the JWT_SECRET check
    process.argv[2] = "some-user";
    expect(() => {
      jest.isolateModules(() => {
        // prevent dotenv from loading a .env file for this require
        jest.doMock("dotenv", () => ({ config: () => ({}) }));
        require("../../utils/generateToken");
      });
    }).toThrow(/process\.exit:1/);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("JWT_SECRET is not defined")
    );
  });

  test("exits with usage message when userId argument is missing", () => {
    process.env.JWT_SECRET = "test-secret";
    // ensure no argv[2]
    process.argv = [...ORIGINAL_ARGV.slice(0, 2)];
    expect(() => {
      jest.isolateModules(() => {
        require("../../utils/generateToken");
      });
    }).toThrow(/process\.exit:1/);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Please provide a userId")
    );
  });

  test("calls jwt.sign with expected payload, secret, and options when userId provided", () => {
    process.env.JWT_SECRET = "test-secret";
    process.argv[2] = "user-42";

    const jwtMock = { sign: jest.fn().mockReturnValue("fake-token") };
    jest.isolateModules(() => {
      // replace 'jsonwebtoken' with our mock so the module under test uses it
      jest.doMock("jsonwebtoken", () => jwtMock);
      require("../../utils/generateToken");
    });
    expect(jwtMock.sign).toHaveBeenCalledWith(
      { userId: "user-42" },
      "test-secret",
      { expiresIn: "7d" }
    );
  });
});
