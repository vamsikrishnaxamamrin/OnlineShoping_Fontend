const collectCoverageFrom = [
  '<rootDir>/src/**/*.{js,jsx}',
  '!**/node_modules/**',
];
const moduleNameMapper = {};
const coverageReporters = ['html', 'lcovonly', 'text-summary'];
const modulePath = '<rootDir>/src/**/*.test.{js,jsx}';
const testEnvironment = 'jest-environment-jsdom';

module.exports = {
  collectCoverageFrom,
  moduleNameMapper,
  coverageReporters,
  collectCoverage: true,
  testMatch: [modulePath],
  testEnvironment,
};
