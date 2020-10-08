import {startWatch} from "./watch-util";

export const main = (): void => {
  startWatch("start-script", `usage: npx miqro runner:watch-script [nodes=1] [mode=simple] <microservice.js>`);
}
