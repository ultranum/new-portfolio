"use strict"
let x, farx, farthestx, y, speed;

function setup() {
    createCanvas(800, 600)
    x = []
    y = []
    farx = []
    farthestx = []
    speed = 2
    for (let i = 0; i < 300; i++) {
        x.push(random(-2000 * 7, 2000 * 7))
        farx.push(random(-2000 * 3, 2000 * 3))
        farthestx.push(random(-2000, 2000))
        y.push(random(0, height))
    }
}

function draw() {
    if (keyIsDown(RIGHT_ARROW)) {
        for (let i = 0; i < x.length; i++) {
            x[i] -= speed
            farx[i] -= speed / 4
            farthestx[i] -= speed / 7
        }
    } else if (keyIsDown(LEFT_ARROW)) {
        for (let i = 0; i < x.length; i++) {
            x[i] += speed
            farx[i] += speed / 4
            farthestx[i] += speed / 7
        }
    }
    background(0, 0, 0);
    noStroke()
    fill(255, 255, 255, 255)
    for (let i = 0; i < x.length; i++) {
        ellipse(x[i], y[i], 9)
        ellipse(farx[i], y[i], 5)
        ellipse(farthestx[i], y[i], 3)
    }
}