class ball {
    constructor(x, y, r, dirx, diry, speedx, speedy) {
        this.x = x
        this.y = y
        this.r = r
        this.dirx = dirx
        this.diry = diry
        this.speedx = speedx
        this.speedy = speedy
    }
    moveball() {
        this.x += this.speedx * this.dirx
        this.y += this.speedy * this.diry
    }
    drawball() {
        // DRAW
        fill(50)
        noStroke();
        ellipse(this.x, this.y, 2 * this.r);
    }
    bounceball() {
        if (this.x > width - this.r) {
            this.dirx = -1
        } else if (this.x < 0 + this.r) {
            this.dirx = 1
        } else if (this.y > height - this.r) {
            this.diry = -1
        } else if (this.y < 0 + this.r) {
            this.diry = 1
        }
    }
}