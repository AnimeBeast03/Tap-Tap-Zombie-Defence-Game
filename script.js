
// import some stuff
import {canvas,ctx} from "./assets/do_page_settup.js";
import {spawn_zombies} from "./assets/zombie/spawner.js";



// start game loop
game_loop();




function game_loop() {
ctx.clearRect(0,0,canvas.width,canvas.height);
    
    spawn_zombies();
    
requestAnimationFrame(game_loop);
};



