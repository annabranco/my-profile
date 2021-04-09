module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assets/assetsTransformer.js'
  },
  setupFiles: ['<rootDir>/testing/jest-setup.js'],
  silent: false,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true
};
