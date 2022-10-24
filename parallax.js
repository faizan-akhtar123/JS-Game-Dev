var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
console.log(ctx);
var CANVAS_WIDTH = canvas.width = 800;
var CANVAS_HEIGHT = canvas.height = 500;
// Scroll speed
var gameSpeed = 10;
// to bring image into our canvas sheet
// We can calculate position x differently by creating game fram variable
// var gameFrame = 0;

var backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png'
var backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png'
var backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png'
var backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png'
var backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

// On Page Load Event
window.addEventListener('load', () => {
    var slider = document.getElementById('slider');
    slider.value = gameSpeed;
    var showGameSpeed = document.getElementById('gameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener('change', (e) => {
            gameSpeed = e.target.value
            showGameSpeed.innerHTML = e.target.value;


        })
        // var x = 0;
        // var x2 = 2400;

    // Parallax Effect when foreground Layer moves faster than the background layer
    // Javascript classes are used when you used to create many similar objects in our case we will create five image layer object.Javascript class is a blueprint.
    // I will define it whenever I call it it will create one instance of that object based on my custome blueprint. The similar object means
    // the object will have shared properties and methods attached to it but some of the properties have different values. The images
    // we are using will have same width of 2400px each layer object will have same image and speed property but each layer have different image assigned to it and different speed values.
    // Javascript class have one mandatory method called constructor. In OOP when we say method means function attached to an object.
    // The function of the constructor is to trigger itself it will create one new blank object and it will assign values and properties to that new blank object based on blue print inside the constructor.
    // Constructor runs only one per object everytime the javascript class is called using the new keyword.
    class Layer {
        // Constructor will accept two arguments, the image we want to assign and speed modifier because I want each layer to scroll at slightly different speed.
        constructor(image, speedModifier) {
                this.x = 0;
                this.y = 0;
                this.width = 2400;
                this.height = 700;
                // the second image needs to start where my first image ends
                // this.x2 = this.width;
                this.image = image;
                this.speedModifier = speedModifier;
                this.speed = gameSpeed * this.speedModifier;
            }
            // Update Method is to move the layers horizontally by changing their this.x and this.x2 properties and it will reset them when the layers move off screens
        update() {
                this.speed = gameSpeed * this.speedModifier

                // Now I can replace this if statement with different calculation
                // this.x = gameFrame * this.speed % this.width
                // range of x will be 0 to width of image
                if (this.x <= -this.width) {
                    // this.x needs to be offset by the current value of x2
                    // this.x = this.width + this.x2 - this.speed;
                    this.x = 0;
                }
                // if (this.x2 <= -this.width) {
                //     // this.x2 needs to be offset by the current value of x
                //     this.x2 = this.width + this.x - this.speed;
                // }
                // if they are not resetting I just want my x property to decrease by the amount of this.speed from line 41 to make my background layer move to the left
                // I will wrap it in Math.floor to make sure we have no decimal points in there.
                this.x = Math.round(this.x - this.speed)
                    // this.x2 = Math.round(this.x2 - this.speed)
                    // Now I can take new x and x2 coordinates and I draw two identical images next to each other like we did before y using drawImage built in canvas method

            }
            // draw method is to take information about this layer object and draw it on canvas everytime update method runs to change hrizontal x position draw will  run again to redraw the image after the new position to make sure the game speed is dynamic and always reacting to the current value of my global gamespeed variable from line
        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
                // ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
                // Layer class is complete and we have a blueprint inside the constructor and my layer objects have access to custom updates and draw
                // and draw methods

        }

    }
    // A new variable by the name of layer 4 and I set it to new Layer like this
    // The new keyword is the special command in js it will look for that class with that name in our code
    // and it will trigger its constructor on line 32 my constructor needs two arguments image and speed modifier
    // I need to pass in line 75 when I am creating an instance of my class
    // Now I can pass different speed modifier to make my image move faster
    var layer4 = new Layer(backgroundLayer4, 0.5);
    var layer5 = new Layer(backgroundLayer5, 1);
    var layer3 = new Layer(backgroundLayer3, 1.5);
    var layer2 = new Layer(backgroundLayer2, 2);
    var layer1 = new Layer(backgroundLayer1, 2.2);

    // Layer 4 is a new blank object for us with its specified properties and values I defined in my blue print between line 33 to 41 and then it saved the new Layer object inside the Layer 4 variable
    // My Layer class has an access to upadate method and to draw method
    // I can just go inside my animation loop and can use layer 4 variable and I can call upadte and draw like this.
    console.log(layer4)
        // I create a new variable called gameObject
    var gameObject = [layer1, layer2, layer3, layer4, layer5];
    console.log(gameObject);

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            // I will call this array with for each method will simply run through all the elements in the array and it will apply whatever call back function I will give it to each of these elements each of the layers
            // first I need to declare How I need to approach the object which is inside the gameObject array
        gameObject.forEach((object) => {
                object.update();
                object.draw();
            })
            // Layer 2,3,4,5 relative speed changes and we have parallax effect by changing the value of speed modifier. The speed modifier takes game speed and adjusts it 
            // layer1.update();
            // layer1.draw();
            // ctx.drawImage(backgroundLayer4, x, 0);
            // ctx.drawImage(backgroundLayer4, x2, 0);
            // if (x < -2400) {
            //     x = 2400 + x2 - gameSpeed;
            // } else {
            //     x -= gameSpeed;
            // }
            // if (x2 < -2400) {
            //     x2 = 2400 + x - gameSpeed;
            // } else {
            //     x2 -= gameSpeed;
            // }
            // gameFrame--;
        requestAnimationFrame(animate);

    }
    animate();

})