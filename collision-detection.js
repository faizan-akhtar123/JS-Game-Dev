// Lets say we have rectangle 1 and rectangle 2

var rect1 = {
    x: 5,
    y: 5,
    width: 50,
    height: 50
}
var rect2 = {
        x: 20,
        y: 10,
        width: 10,
        height: 10
    }
    // both of these objects have x and y coordinates and width and height

// To chevk for collision detection

if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) {
    // No collison
} else {
    // Collision detected
}

// Let us flip the logic with or operator

if (rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height > rect2.y) {
    // No collisoon detected
}

// Collision detection is important when element interacts with each other or when you are building javascript games when you want to detect
// when two objects collide or maybe if you want your canvas animation to interact with your regular elements.
// There are three collision detection techniques
// Collision between circles, rectangles and polygons

// Collison detection between two circles
// It takes the distance of two centre points of our circles and checks if the distance between them is less than the radii of two circles added  together
// If distance between two center points of the circle is greator than the radii of the circle then the circle will not collide
// If distance between two center points of the circle is less than the radii of the circle then the circle will collide
// If distance between two center points of the circle is equal to the radii of the circle then the circle will overlap with each other

var circle1 = {
    x: 10,
    y: 10,
    radius: 300
}
var circle2 = {
    x: 500,
    y: 500,
    radius: 150
}
var dx = circle2.x - circle1.x;
var dy = circle2.y - circle1.y;
// Hypotonuse as the distance between two center points
var dz = Math.sqrt(dx * dx + dy * dy);
var sumofRadii = circle1.radius + circle2.radius;
if (dz > sumofRadii) {
    // Circle will not collide
}
if (dz < sumofRadii) {
    // Circle will collide
}
if (dz == sumofRadii) {
    // circle will overlap
}

// Visual and audio feedback that reacts to player actions and in game events is really important if you want your javascript to feel good
//You can attach sound and animation whenever collision happens. You can use this technique to make score points float from defeated enemies
// or from collected items