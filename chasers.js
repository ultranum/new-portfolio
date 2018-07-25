class Ball {
    constructor(x, y, speed, ease) {
        this.x = x
        this.y = y
        this.r = 5
        this.speed = speed
        this.ease = ease
    }
    show() {
        noStroke()
        ellipse(this.x, this.y, 2 * this.r)
        fill(255)


    }
    chaser11() {
        if (this.x < mouseX) {
            this.x += this.speed
        }
        if (this.x > mouseX) {
            this.x -= this.speed
        }
        if (this.y < mouseY) {
            this.y += this.speed
        }
        if (this.y > mouseY) {
            this.y -= this.speed
        }

    }
    chaser2() {
        var dx = mouseX - this.x;
        this.x += dx * this.ease;


        var dy = mouseY - this.y;
        this.y += dy * this.ease;
    }

    catchMouse() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
};