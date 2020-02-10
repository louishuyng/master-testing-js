const path = require('path')

module.exports = {
  testEnviroment: 'jest-enviroment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock'),
  },
  snapshotSerializers: ['jest-emotion'],
}
