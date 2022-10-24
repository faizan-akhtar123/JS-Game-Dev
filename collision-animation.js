/** @type {HTMLCanvasElement}  */


var canvas = document.getElementById('canvas1')
var ctx = canvas.getContext('2d');
// getContext will instantiate object that will hold all 2d methods and properties

var CANVAS_WIDTH = canvas.width = 500;
var CANVAS_HEIGHT = canvas.height = 700;
var explosions = [];
// we have explosion array that will hold all current explosion objects.The goal is to use explosion class and when we click we push new object into this array.
// We cycle through all these frames using update methods we draw each step to display the animations and when we reach the last frame we delete an object from it and we remove it

var canvasPosition = canvas.getBoundingClientRect();

// getBoundingClientRect() is a very useful javascript built in methods it returns an object provided information about the size of an element and its 
// position relative to the view port


// // Let us draw something
// ctx.fillStyle = 'white';
// ctx.fillRect(50, 50, 100, 150);

// I create an array called explosion which will hold an explosion object which I create which will be done by using javascript class
class Explosion {
    constructor(x, y) {
        // Contructor will expect x and y coordinate coming from outside this is important because we want the animation to be triggered at the specific location
        // where the event happens. for example we want to animate at coordinates where two elements collided or at coordinates of mouse click
        // I will pass x and y coordinates to the constructor whenever I want to trigger new animation and create new object using this class

        this.x = x;
        this.y = y;
        // Width of the spritesheet/Number of frames
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteWidth / 2;
        // My Sprite Sheet
        // It will create new blank HTML element
        this.image = new Image()
        this.image.src = 'boom.png';
        // TO animate the sprite sheet I will crop out one frame and I will jumping to the right by the amount of spritewidth 
        // frame by frame to do that i willl need this.frame variable
        this.frame = 0;
        // We will also need to add some behavior to the class we need methods one to update the coordinares and to draw
    }
    update() {
        // Now its main function to increase teh frame one by one
        this.frame++
    }
    draw() {
        // draw method will take the values from the constructor and it will draw current frame of animation on canvas we will use drawImage method
        // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)

        // sx sy sw sh represents area you want to crop out from the source sprite sheet
        // dx,dy,dw,dh represents where on destination canvas you want to place out that cropped image
        // We are multiplying sprite sheets with game farame s it increased with each animation
        // souce y is zero as such there is only one row
        // source width is this.spriteWidth
        // source height is this.spriteHeight
        // so now we have told javascript what sprite sheet we want to draw and what we want to crop it.
        // Now I have to tell WHere I have to draw on canvas
        // dx,dy,dw,dh
    }
}
// Now our class is complete this is all we need to trigger that on event

window.addEventListener('click', (e) => {
    // Draw a simple rect
    // Let us store the offset calculation in these variables
    var positionX = e.x - canvasPosition.left
    var positionY = e.y - canvasPosition.top
        // ctx.fillStyle = 'white'
        // ctx.fillRect(e.x - canvasPosition.left-25, e.y - canvasPosition.top-25, 50, 50)

    // e is having all the information about the click evevnt especially the coordinates we are clicking on it but its not being drawn under mouse
    // because e.x does not account for margin that is top and left of my webpage and start of canvas what i need to do is to offset my coordinates which account for it.
    // Good way to do that is to measure the canvas position first you can do this with one line of code you can create a custom variable
    // if i want to draw my white rectangle under current mouse position I need to offset e.x and e.y by top and left margin between viewport and canvas 
    // Now if I want my mouse in the middle both vertically and horizontally i need to do one more small tweak here i offset my position by half of width and height
    // Inside the click event i call explosions array and i call push on it
    explosions.push(new Explosion(positionX, positionY))
        // Push is a built in array method it will take whatever we pass to it as an argument and it will push it to the end of the array
        // The new keyword will find my class Explosion and will run its constructor to create a new object based on its classes blueprint,
        // The constructor expects two arguments x and y arguments this is important we need to know where on canvas we need to trigger thsi animation so here we will pass positionX and positionY as an argumnt


})

// animation loop using a custom function called animate

function animate() {
    // Now to only see the current frames I call built in rect method to clear the entire canvas
    // If you look at closely we are skipping frame 0 because the update method increases the frame variable by 1 before we draw the first frame I want to have 
    // each triggered animation to have its own timer in that way we can stagger the animation speed
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    for (var i = 0; i < explosions.length; i++) {

        // for each object in an array we will call its update method and draw method

        explosions[i].update();
        explosions[i].draw();

    }

    // to craete animation loop I call built in animation frame function

    requestAnimationFrame(animate);
}
// Calling animate
// we are seeing old frames because we are not clearing the old ones 
animate();