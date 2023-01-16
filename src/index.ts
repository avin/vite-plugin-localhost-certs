import localhostCerts from "localhost-certs";

export default function localhostCertsPlugin() {
  return {
    name: "vite-plugin-localhost-certs",
    enforce: "pre",
    config: (config) => {
      config.server.https = localhostCerts();
    },
  };
}
