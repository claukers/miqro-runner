import {startWatch} from "./watch-util";

export const main = (): void => {
  startWatch("start-api", `usage: npx miqro runner:watch-api [nodes=1] [mode=simple] <microservice.js>`);
}
