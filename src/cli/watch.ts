import {startWatch} from "./watch-util";

export const main = (): void => {
  startWatch("start", `usage: npx miqro runner:watch [nodes=1] [mode=simple] <microservice.js>`);
}
