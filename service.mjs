// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "apix-platform",
  deps: {},
  build: node({ module: import.meta.url, entry: "server.js", dependencies: "external" }),
});
