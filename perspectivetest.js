"use strict"
let x, farx, farthestx, y, speed;

function setup() {
    createCanvas(800, 600)
    x = []
    y = []
    farx = []
    farthestx = []
    speed = 3
    for (let i = 0; i < 200; i++) {
        x.push(random(-9000, 9000))
        farx.push(random(-6000, 6000))
        farthestx.push(random(-3000, 3000))
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