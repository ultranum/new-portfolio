// P5.JS TEMPLATE - COMMENTS
"use strict";

// Declare Global Variables
let x, y
let bg
// function preload(){
// bg = loadImage ('images/')
// }
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize Global Variables
    x = []
    y = []
    for (let n = 0; n < 100; n++) {
        x.push(random(width))
        y.push(random(height))
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // RUN LOGIC
    for (let i = 0; i < y.length; i++) {
        y[i] += 2
        if (y[i] > height) {
            y[i] = random(-50, 0)
            x[i] = random(width)
        }
    }
    // DRAW FRAME
    background(0);
    noStroke()
    fill(255)
    for (let i = 0; i < x.length; i++) {
        ellipse(x[i], y[i], 10)
    }

}