module.exports = {
  // add test-utils direct import
  moduleDirectories: ['node_modules', 'test'],
  // add jest-dom and emotion's extra matchers
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  // coverage
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  // ignore cypress folder
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  // jest 27 introduced 'node' as new default `testEnvironment`
  // this can be set on a per-file basis: https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',
};
