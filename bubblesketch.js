// BUBBLE - Functions in Objects

// Declare Global Variables
let bubble;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	bubble = new Bubble(200, 400, 20);
	bubble2 = new Bubble(400, 344, 50);
	bubble3 = new Bubble(600, 100, 10);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	// Move Bubble Randomly
	bubble.move()
	bubble2.move()
	bubble3.move()
	// DRAW
	background(0);

	// Draw Bubble
	bubble.show()
	bubble2.show()
	bubble3.show()
}

function mousePressed() {
	bubble.clicked()
	bubble2.clicked()
	bubble3.clicked()
}