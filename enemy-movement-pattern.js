/** @type {HTMLCanvasElement}  */
// The autocomplete feature in vs code does not show any built in methods 
// 2:12:33
// and properties for canvas element so we need to use line no 1
// in this way i can tell vs code that it is canvas project
// First we need to finish width and height of the canvas so as to adjust the correct scale of drawing

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
console.log(ctx)
var CANVAS_WIDTH = canvas.width = 500;
var CANVAS_HEIGHT = canvas.height = 600;
// Let us create a number of enemies
var numberOfEnemies = 40;
// I want to create a factory function that will produce many similar objects for me each of these objects will be one animated enemy for me
// before we create enemies lets just build a custom enemy variable where we store the values of an object
// here x and y represent the horizontal and vertical coordinates of the canvas respectively.
// currently our bats fly away from canvas and never return back
var enemiesArray = [];
// Let us create a custom image in the js
// First I need to bring new image into js project to do it i create a custom image variable called enemyImage and I set it equal to new image
// var enemyImage = new Image();
// This should be made javascript property
// enemyImage.src = 'enemy1.png'
var gameFrame = 0;

// So we did endless horizontal movements by assigning sine wave to it.what if we are adding some trignometry for vertical x coordinate
// we can make them move in different shapes and pattern let me show you



// var enemy_1 = {
//     x: 0,
//     y: 0,
//     width: 100,
//     height: 100
// }

// Lets comment out this temporary object and convert it into class to create large number of enemies at once.

class Enemy {
    // constructor is a mandatory method every class must have it will contain a blueprint based on which every enemy will be created
    // 
    constructor() {
            this.image = new Image();
            // this.image.src = 'enemy1.png';
            // Lets change the sprite sheet 
            this.image.src = 'enemy4.png';
            // accordingly sprite height and width will decrease



            // randomised speed
            // this.speed = Math.random() * 4 - 2;
            // Sprite width and height for the first image
            // this.spriteWidth = 293; 
            // this.spriteHeight = 155;
            // Sprite width and height for the second image
            this.spriteWidth = 213;
            this.spriteHeight = 212;
            this.width = this.spriteWidth / 2.5;
            this.height = this.spriteHeight / 2.5;
            this.frame = 0;
            this.speed = Math.random() * 4 + 1
                // To fix their frequency
            this.flapSpeed = Math.floor(Math.random() * 3 + 1);
            // In order to adjust the bat with canvas
            // this.x = Math.random() * (CANVAS_WIDTH - this.width);
            this.x = Math.random() * (CANVAS_WIDTH - this.width);
            this.newx = Math.random() * (CANVAS_WIDTH - this.width);
            this.y = Math.random() * (CANVAS_HEIGHT - this.height);
            this.newy = Math.random() * (CANVAS_HEIGHT - this.height);
            this.interval = Math.floor(Math.random() * 250 + 50);
            // Now I replace hardcoded 100 with this.interval

            // I will create a this.angle property in my class constructor and set it to 0
            // this.angle = 0;
            // this.angle = Math.random() * 2;

            // I can randomize this.angle property to decide the starting position of my enemies
            // I am commenting this.angle and this.angleSpeed
            // this.angle = Math.random() * 500;
            // this.angleSpeed = Math.random() * 1.5 + 0.5;
            // Thus by changing the value of this.angleSpeed the value can be changed otherwise.
            // Let us call this.curve 

            // I can also change my angleSpeed on line 74 this will also reflect on this,angle

            // this.curve = Math.random() * 200 + 50;
            // Now if I want to have space in the middle we know that this.curve determines the radius of the circle in which my characters are moving in that values are randomized for each one.
            // So lets make it a random number between 50 and 250 
            // Let us make this.curve to be a random number between 0 and 200
            // Let us make this.angle a bit dynamic 

            // by this.curve some of them will have barely a vertical movement and some of them may have any

            // Let us make randomize the increment value of a speed 

            // the reason it doesnt work because Math.randow return decimal numbers so gameFrame is never divisble with that specific numbers 
            // with a remainder of zero and frames never increase to fix that we need to wrap it in Math.floor
            // These will make the bats look perfect may be I want to make it larger lets try with 2.5
            // Now lets add additional four arguments to drawImage methods to tell it what area we want to crop out from this sprite sheet
            // to display only one frame
            // We are creating a random number bewteen 0 and 4 and substracting -2 will get to the range of -2 and 2
        }
        // The update method will update the coordinates of the object it will handle position calculation and movement
    update() {
            // Inside the update method I will create a condition for gameFrame variable
            // It will not work becasue this.interval results in random numer with decimal points so in order to work for this we will use Math.floor to make it intyegers. Now we can see each enemies are moving on its own rhythym
            if (gameFrame % this.interval === 0) {
                this.newx = Math.random() * (CANVAS_WIDTH - this.width);
                this.newy = Math.random() * (CANVAS_HEIGHT - this.height);
            }
            // Now I will calculate for variable dx that is distance on horizontal x axis
            var dx = this.x - this.newx;
            var dy = this.y - this.newy;
            // Now when we have distance between current position and new position i can make characters move towards that new position by saying 
            this.x -= dx / 70;
            this.y -= dy / 70;
            // Now its resetting too fast lets change 30 to 60
            // Now the current position is always moving towards the new position by 20 th of their distance of every aninmation frame
            // we can increase the denominator of dx and dy to 70 and i can also increase the interval by 100. Postion resets for vevery 100 frames at the same time but it look so weird. I want each character to reset at its own randomized interval.
            // I create a property this.interval


            // I will use this.speed in update method 
            // I will replace hardcoded 100 with this.curve on line no 96
            // Now to acheive new movement pattern i will also set this.x and this.y again back to zero
            // this.x = canvas.width / 2 * Math.sin(this.angle * Math.PI / 80) + (canvas.width / 2 - this.width / 2);
            // this.x = 0;
            // while the horizontal position does two cycle whereas the horizontal does only one.
            // Now they are centered horizontally. Lets also do this on line no 30 for this.y
            // Now some of them move in a large range and some move in a small area
            // It will give some horizontal movement to bats
            // I want to center them horizontally, I need to offset them by the amount of their width
            // As this.angle is an ever increasing value on line104
            // this.y = canvas.height / 2 * Math.cos(this.angle * Math.PI / 480) + (canvas.height / 2 - this.height / 2);
            // this.y = 0;
            // Thus by changing the denominator of Math.PI we can manipulate the wave pattern
            // Math.sin and Math.cos helps in circular movememnt of the bats
            // The pattern which we are getting on the screen is weird this is why cosine comes in.
            // what if i want to make curve more prominent
            // this.y += this.curve * Math.sin(this.angle)
            // By using sin and cosine we can make the bats move around the circular path. but they are not filling the vertical space.
            // This can be done by using this.curve which is a random number between 50 and 250 and it makes them move within that range.
            // we will replace this.curve with canvas width and heighon line no 198 and 101

            // right now sine and cosine are even what i mean is they cycle between the same set of values over and over again
            // which results in even circular movements what if i make the horizontal position to cycle at half the speed of the vertical position
            // So in this.x we will replace Math.PI/180 to Math.PI/360


            // Lets comment out this.x and this.y which will stop our character from moving out.
            // If I put 10 times in this it will be very difficult to avoid them
            // Instead ogf hardcoding it to 10 i will be randomizing it so that it will look more prominenet so i will replace with this.curve
            // It will cycle between -3 and +3 the sine wave of enemy movement is more prominent
            // I am commenting out this.angle 
            // this.angle += this.angleSpeed;
            // This will create a wavy motion of bats and by creating math.random each enemy will have a random value of the bat.
            // If line no 78 is commented then bats fly at horizontal position and never returns back so now lets do a condition chck
            if (this.x + this.width < 0) {
                this.x = CANVAS_WIDTH;
            }
            // Now we have endless right to left movement that is awesome but what if I want to sway up and down and flap their wings making it a bit more dynamic and if this were enemies in my javascript game may be it would be difficult for a player to avoid them.How do I create a wavy movement.
            // Do you know What Sine Wave is.
            // Today we will look at math.sine and math.cosine built in js methods
            // Lets use the ternary operator to recycle the animation

            if (gameFrame % this.flapSpeed == 0) {
                // Here we need to replace 2 with this.flapSpeed due to which their frequencies will not match
                // Only then serve animation frame
                this.frame > 4 ? this.frame = 0 : this.frame++
            }
            // Now this condition helps the bat to move slower but their wings move at the same frequency
            // But the problem is bat is flying at a very higher speed rate in order to fix that theres a proper way to time animation frame using requestanimationframemethod and delta time

            // This will help the rectangles to move in different directions
        }
        // The drawing code can also be used in the seperate method so that we can draw all enemies at the same time we can also give them animated sprites and so on
    draw() {
        // Instead of hard coding this one I will use the dynamic values so that I can create n number of enemies at once
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        // We can also pass width and height arguments which will scale the entire image into that specified size
        // Right now we are displaying only frame 1 because of this hardcoded values 0,0 lets cycle through all frames and animate our character
        // Instead of putting zero we multiply this.frame and multiply with this.spriteWidth
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
            // So in this version of draw image method we are passing nine arguments in total the first is the image we want to draw the next 4 represent the area we want to crip out 
            // from the source spriteSheet and these last four arguments represent where in canvas we want to place that cropped out frame onto. The bats are slightly distorted because we want to fit it in 100*100 which are unrelated to my bat dimension but in order to
            // preserve the aspect ratio of the bat we need to maintain the individual bat width and height
            // fillRect will create the black rectangle we can create many rectangle and so on we dont really want that we only want to crop out one frame at a time and we want to be jumping by the amount of sprite width to the right to display the next sprite frame
            // we want to go frame by frame from left to right until we reach the last frame then we want to jump back to the first one and start again we can do this with the draw image method because it offers additional four optional
            // arguments we can pass to it. Lets go inside the enemy constructor to create a property known as sprite width i check my spritesheets divide its width by number of frames
            // and I can see the width of single frame is 1758/6 which is 293


    }
}
// The first project will have bats flying in different patterns



// var enemy1 = new Enemy();
// How do I create different enemies 
// So I will run for loop
for (var i = 0; i < numberOfEnemies; i++) {
    // I want this loop to run 100 times and create 100 enemies for me usinf my custom enemy class but how do i store enemy objects and properties such as their x and y values.So now we will create enemiesArray
    enemiesArray.push(new Enemy());
    // how do i access all thses hundreds of objects i just pushed into my enemies array and how do I trigger their update and draw method one by one so that they can be animated on canvas
}
// var enemy2 = new Enemy();
// The new keyword creates a blank object and assigns properties and methods based on the blue print we have given to it.

console.log(enemiesArray);
// So as I said the goal now is to cycle through all the hundred enemy objects inside enemies array and to trigger their update and draw method this will need to happen for every animation frame over and over again because we need update method to constantly recalculate the position and draw method to draw them at the new position

// Javascript class is a kind of template to create many similar objects its a factory and everytime we ask it will produce one new object for us based on blueprint we give it
// Classes are new syntax for older javascript prototypes

// This is a simple js object storing the position and size of the enemy

// Creating animation
// Inside this I will call built in method fillRect method

// But n number of enemies will be starting at same x and y position so it will be difficult to make it look distinct.
// So every time I can create a new enemy horizontal x will be Math.random *canvas width
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)


    enemiesArray.forEach((enemy) => {
        // It will respond to the each object

        enemy.draw()
        enemy.update();
    })



    // if (enemy2.x > CANVAS_WIDTH) {
    //     enemy2.x = 0;
    // }
    // if (enemy2.y > CANVAS_HEIGHT) {
    //     enemy2.y = 0;
    // }

    // But it will create a repetition once we have large number of enemies. so line number 71 to 74 can be dynamically set to method in the class



    // ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    // ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    // It will look the same but now it is re-usable and scalable


    // The arguments it accepts horizontal x and y coordinates and width and height of the image respectively
    // Now to create animation loop we will call built in method requestanimationFrameMethod 
    // I also need to delete old paint previous frames from canvas I do it by using built in clear rect method
    // Inside animation loop I increaea the game frame by 1
    gameFrame++;

    requestAnimationFrame(animate)
}

animate();