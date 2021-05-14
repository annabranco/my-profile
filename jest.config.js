module.exports = {
  coverageDirectory: 'test-reports/jest-coverage',
  // coverageReporters: ['json'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assets/assetsTransformer.js'
  },
  modulePathIgnorePatterns: ['integration'],
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/tests/jest-setup.js'],
  silent: false,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest'
  },
  verbose: false
};
