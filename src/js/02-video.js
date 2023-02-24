import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY_TIME = "videoplayer-current-time",
  videoplayer = document.querySelector("#vimeo-player");

const player = new Player(videoplayer);
initTime();
function initTime() {
  let getTime = localStorage.getItem(LOCALSTORAGE_KEY_TIME);
  if (getTime) {
    let setTime = JSON.parse(getTime);
    player.setCurrentTime(setTime);
  }
}
player.on("timeupdate", throttle(timeUpdate, 1000));
function timeUpdate(e) {
  localStorage.setItem(LOCALSTORAGE_KEY_TIME, JSON.stringify(e.seconds));
}
