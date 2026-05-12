// import some stuff
import {canvas,ctx,debuger} from "./assets/do_page_settup.js";
import {spawn_zombies,zombie} from "./assets/files/zombie_spawner.js";



let player = {
    // player settings (can be changed)
    y: 750,
    image_src: "./assets/images/player_spritesheet.png",
    // player variables (can not change)
    x: canvas.width/2,
    image: new Image()
}



// this will load the graphics (image) for the player
player.image.src = player.image_src;
player.image.onerror = ()=>{
    player.image.src = zombie.image_src;
}



// start game loop
game_loop();

function game_loop() {
ctx.clearRect(0,0,canvas.width,canvas.height);
spawn_zombies();

    // draw_player
    draw_player();
    
requestAnimationFrame(game_loop);
};



function draw_player() {
    let md = Infinity;
    player.a = 0;
    for (let i = zombie.active.length - 1; i >= 0; i--) {  
        let z = zombie.active[i];
        z.dx = player.x - z.x;          // later based on Gate position
        z.dy = player.y - z.y;          // later based on Gate position
        z.a = Math.atan2(z.dy,z.dx) - 1.6;
        if (z.dy > 0 && z.dy < md) {
            player.a = z.a;
            md = z.dy;
            if (debuger == true) {
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = "blue";
                ctx.moveTo(player.x, player.y); 
                ctx.lineTo(z.x,z.y); 
                ctx.stroke(); 
            }
        }
    }
    ctx.save();
    ctx.translate(player.x,player.y);
    ctx.rotate(player.a);
    ctx.drawImage(player.image,128,0,64,64,-32,-32,64,64);
    ctx.restore();
    if (debuger == true) {
        ctx.font = "15px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("zd: " + Math.floor(md),player.x + 30,player.y);
        ctx.fillText("pa: " + Math.floor(player.a * (180/Math.PI)) + "°",player.x + 30,player.y + 20);
    }
}
