class Bubble {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = random(10, 50)
    }
    move() {
        this.x += random(-1, 1);
        this.y += random(-1, 1)
    }
    show() {
        noFill();
        stroke(255, 180);
        strokeWeight(3);
        ellipse(this.x, this.y, 2 * this.r);
    }
    clicked() {
        let d = dist(mouseX, mouseY, this.x, this.y)
        if (d < this.r)
            this.r = random(10, 50)
    }
}