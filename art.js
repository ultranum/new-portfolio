// RANDOM ART

// Declare Global Variables
var paintTool;
var level;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    background(255);

    // Initialize Global Variables
    level = 1;

    paintTool = {
        x: width / 2,
        y: height / 2,
        w: 25,
        h: 25
    };
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    if (level == 1) {
        levelOne()
    } else if (level == 2) {
        levelTwo()
    } else if (level == 3) {
        levelThree()
    } else if (level == 4) {
        levelFour()
    }
}

// EVENT FUNCTIONS
function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        // Go to next level, loop if needed
        level++;
        if (level > 4) {
            level = 1;
        }

        // Set Background for New Level
        if (level == 1) {
            background(255);
        } else if (level == 2) {
            background(85);
        } else if (level == 3) {
            background(0);
        } else if (level == 4) {
            background(255);
        }
    } else if (keyCode == LEFT_ARROW) {
        // Go to previous level, loop if needed
        level--;
        if (level < 1) {
            level = 4;
        }

        // Set Background for New Level
        if (level == 1) {
            background(255);
        } else if (level == 2) {
            background(85);
        } else if (level == 3) {
            background(0);
        } else if (level == 4) {
            background(255);
        }
    } else if (keyCode == 83) { // 's' for save
        saveCanvas();
    }
}

function mousePressed() {
    paintTool.x = mouseX;
    paintTool.y = mouseY;
}