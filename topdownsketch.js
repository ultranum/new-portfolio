// TOP DOWN PLAYER

// Declare Global Variables
let player1, player2;
let ball1, ball2, ball3, ball4;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);
	// DRAW

	// Initialize Global Variables

	player1 = new player(200, height / 2, 15, 0, 65, 68, 87, 83)
	player2 = new player(600, height / 2, 15, 255, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW)
	let ball1 = new ball(width / 2, 100, random(10, 30), 1, -1, random(5), random(5))
	let ball2 = new ball(width / 2, 300, random(10, 30), -1, 1, random(5), random(5))
	let ball3 = new ball(width / 2, 400, random(10, 30), 1, 1, random(5), random(5))
	let ball4 = new ball(width / 2, 500, random(10, 30), -1, -1, random(5), random(5))
	balls = [ball1, ball2, ball3, ball4]
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	background(140, 197, 66);
	// Player 1 Movementss
	player1.move()
	player1.drawplayer()
	player1.wrap()
	player1.contact()
	player2.move()
	player2.drawplayer()
	player2.wrap()
	player2.contact()
	for (let i = 0; i < balls.length; i++) {
		balls[i].drawball()
		balls[i].moveball()
		balls[i].bounceball()
	}
}