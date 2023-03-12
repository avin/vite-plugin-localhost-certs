import localhostCerts from "localhost-certs";

export default function localhostCertsPlugin() {
  return {
    name: "vite-plugin-localhost-certs" as const,
    enforce: "pre" as const,
    config: (config) => {
      if(config.server){
        config.server.https = localhostCerts();
      }
    },
  };
}
