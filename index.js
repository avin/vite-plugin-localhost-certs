const fs = require('fs');
const path = require('path');

module.exports = () => ({
  name: 'vite-plugin-localhost-certs',
  enforce: 'pre',
  config: (config) => {
    const rootPath = path.dirname(require.resolve('localhost-certs/package.json'));
    const keyPath = path.resolve(rootPath, 'files', 'server.key');
    const certPath = path.resolve(rootPath, 'files', 'server.crt');
    config.server.https = {
      key: fs.readFileSync(keyPath, 'utf8'),
      cert: fs.readFileSync(certPath, 'utf8'),
    };
  },
});
