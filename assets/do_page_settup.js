// do canvas settup
const canvas = document.getElementsByClassName("game_canvas")[0];
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;



// system functions
function get_random(min, max) {
  return Math.random() * (max - min) + min;
}



// debugger toggle
let debuger = true;



// export things
export {canvas,ctx,get_random,debuger};