var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
console.log(ctx);
var CANVAS_WIDTH = canvas.width = 600;
var CANVAS_HEIGHT = canvas.height = 600;

var playerstate = "idle";
var dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function(e) {
    playerstate = e.target.value;
})

// Sprite animation

var playerImage = new Image();
console.log(playerImage);
playerImage.src = 'shadow_dog.png';
// calculating the image sprite width

var spriteWidth = 575;
var spriteHeight = 523;
// Making Animation along x direction
// var frameX = 0;
// Making Animation along y direction
// var frameY = 3;
var gameFrame = 0;
var staggerFrames = 5;


var spriteAnimations = [];
var animationState = [{
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 9,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
];
animationState.forEach((state, index) => {
    var frames = {

        loc: [],

    }
    for (var j = 0; j < state.frames; j++) {
        var positionX = j * spriteWidth;
        var positionY = index * spriteHeight;
        frames.loc.push({
            x: positionX,
            y: positionY
        })
    }
    spriteAnimations[state.name] = frames;
})
console.log(spriteAnimations);





// animate function


function animate() {
    // Clear Rect will clear all the existing drawing on the canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Fill Rect will draw the existing drawing on the specified location
    // ctx.fillRect(100, 50, 100, 100);
    // Draw Image Method is used for drawing the sprite sheet on canvas. You can pass 3,5, 9 arguments dpending on how much control you want to have on your image

    // ctx.drawImage(Image,sx,sy,sw,sh, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Applying condition for frameX
    // if (gameFrame % staggerFrames == 0) {
    //     if (frameX < 4) {
    //         frameX++
    //     } else {
    //         frameX = 0;
    //     }
    // }

    var position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerstate].loc.length;
    var frameX = spriteWidth * position;
    var frameY = spriteAnimations[playerstate].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);




    gameFrame++;


    requestAnimationFrame(animate);
}

// Calling the function
animate();