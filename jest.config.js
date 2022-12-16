module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/index.js',
    '!src/e2e.spec.js',
    '!src/lib/runner.js',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: [
    '/bin',
    '/build',
    '/node_modules/',
    'src/e2e.spec.js',
  ],
};
