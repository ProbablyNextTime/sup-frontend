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
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/assetsTransformer.ts",
    "\\.(css|less)$": "<rootDir>/src/assetsTransformer.ts",
  },

  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],
}
