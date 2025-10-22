import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests", "<rootDir>/controllers"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverageFrom: [
    "controllers/**/*.ts",
    "routes/**/*.ts",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage",
  verbose: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};

export default config;
