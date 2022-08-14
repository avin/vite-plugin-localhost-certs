# vite-plugin-localhost-certs

Use HTTPS [localhost-certs](https://github.com/avin/certs) in [Vite](https://vitejs.dev/).

## Install

```sh
npm install vite-plugin-localhost-certs
```

## Usage

vite.config.ts: 

```js
import { defineConfig } from 'vite';
import localhostCerts from 'vite-plugin-localhost-certs';

export default defineConfig({
  plugins: [
    localhostCerts(),
  ],
});
```
