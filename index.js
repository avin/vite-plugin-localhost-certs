const fs = require('fs');
const path = require('path');
const localhostCerts = require('localhost-certs');

module.exports = () => ({
  name: 'vite-plugin-localhost-certs',
  enforce: 'pre',
  config: (config) => {
    config.server.https = localhostCerts();
  },
});
