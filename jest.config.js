module.exports = {
  roots: ["<rootDir>/src"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  modulePaths: ["src"],
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],
}
