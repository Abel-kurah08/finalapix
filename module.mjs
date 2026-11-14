// @ts-check
import { module } from "@prisma/composer";
import apixPlatformService from "./service.mjs";

export default module("finalapix", ({ provision }) => {
  provision(apixPlatformService, { id: "apixplatform" });
});
