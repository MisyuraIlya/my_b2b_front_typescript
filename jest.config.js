/* eslint-disable n/no-path-concat */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: true
    },
    NODE_ENV: "test"
  },
  setupFilesAfterEnv: [`${__dirname}/src/setupTests.ts`],
  moduleDirectories: ["node_modules", 'src'],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true,
  moduleNameMapper: {
    '^axios$': require.resolve('axios')
  },
  transformIgnorePattern: [
    '<rootDir>/node_modules/(?!axios)/'
  ]
};