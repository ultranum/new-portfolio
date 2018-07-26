class player {
	constructor(x, y, r, col, lk, rk, uk, dk) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.speed = 5;
		this.col = col;
		this.left = lk;
		this.right = rk;
		this.up = uk;
		this.down = dk;
	}

	move() {
		if (keyIsDown(this.left)) {
			this.x += -this.speed;
		} else if (keyIsDown(this.right)) {
			this.x += this.speed;
		} else if (keyIsDown(this.up)) {
			this.y += -this.speed;
		} else if (keyIsDown(this.down)) {
			this.y += this.speed;
		}
	}
	drawplayer() {

		// Draw Player 1
		fill(this.col);
		noStroke();
		ellipse(this.x, this.y, 2 * this.r);
	}

	teleport() {
		if (keyCode == 32) {
			this.x = random(width)
			this.y = random(height)
		}
	}
	wrap() {
		if (this.x > width) {
			this.x = 0 + this.r
		} else if (this.x < 0) {
			this.x = width - this.r
		} else if (this.y > height) {
			this.y = 0 + this.r
		} else if (this.y < 0) {
			this.y = height - this.r
		}
	}
	contact() {
		for (let i = 0; i < balls.length; i++) {
			if (circleIntersect(this, balls[i])) {
				balls[i].x = random(0, width)
				balls[i].y = random(0, height)
				balls[i].r = random(10, 30)
				balls[i].dirx = random([-1, 1])
				balls[i].diry = random([-1, 1])
				balls[i].speedx = random(2, 5)
				balls[i].speedy = random(2, 5)
			}
		}
	}
}