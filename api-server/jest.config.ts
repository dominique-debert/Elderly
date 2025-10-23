import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: [
    "**/__tests__/controllers/**/*.test.ts",
    "**/__tests__/routes/**/*.test.ts",
    "**/__tests__/middlewares/**/*.test.ts",
    "**/__tests__/utils/**/*.test.ts",
    "**/__tests__/validators/**/*.test.ts",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "index\\.ts$"],
  collectCoverageFrom: [
    "controllers/**/*.ts",
    "routes/**/*.ts",
    "middlewares/**/*.ts",
    "utils/**/*.ts",
    "validators/**/*.ts",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/__tests__/**",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  verbose: true,
};

export default config;
