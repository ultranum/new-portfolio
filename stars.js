let x, y, speed

function setup() {
    createCanvas(800, 600)

    x = []
    y = []
    speed = 3
    for (let i = 0; i < 3000; i++) {
        x.push(random(-4000, 4000))
        y.push(random(-4000, 4000))
    }
}

function draw() {
    if (keyIsDown(RIGHT_ARROW)) {
        for (let i = 0; i < x.length; i++) {
            x[i] -= speed
        }
    } else if (keyIsDown(LEFT_ARROW)) {
        for (let i = 0; i < x.length; i++) {
            x[i] += speed
        }
    } else if (keyIsDown(UP_ARROW)) {
        for (let i = 0; i < y.length; i++) {
            y[i] += speed
        }
    } else if (keyIsDown(DOWN_ARROW)) {
        for (let i = 0; i < y.length; i++) {
            y[i] -= speed
        }
    }
    background(0);
    noStroke()
    fill(255, 255, 255, random(0, 255))
    for (let i = 0; i < x.length; i++) {
        ellipse(x[i], y[i], 7)
    }
}