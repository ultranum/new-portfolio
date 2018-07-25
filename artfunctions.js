function levelOne() {
    // LEVEL 1 LOGIC
    paintTool.x += random(-10, 10);
    paintTool.y += random(-10, 10);

    // DRAW LEVEL 1
    noFill();
    stroke(100, 0, 100, 80);
    ellipse(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
}

function levelTwo() {
    // LEVEL 2 LOGIC
    paintTool.x += random(-20, 20);

    // DRAW LEVEL 2
    fill(200, 180, 0, 50);
    noStroke();
    rect(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
}

function levelThree() {
    // LEVEL 3 LOGIC
    paintTool.x = random(0, width);
    paintTool.y = random(0, height);

    // DRAW LEVEL 3
    fill(random(255), random(255), random(255), 120);
    stroke(random(255), random(255), random(255));
    ellipse(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
}

function levelFour() {
    paintTool.x = random(0, width)
    paintTool.y = random(0, height)
    fill(random(255), random(255), random(255), random(255))
    noStroke()
    rect(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
}