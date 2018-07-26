let chasers = [new Ball(200, 300, 4, 1, 5), new Ball(200, 300, 4, 0.06, 5)];
document.getElementById("simulator").addEventListener("click", implosion)
document.getElementById("clearall").addEventListener("click", screenClear)
let clickedImplosion = false

function setup() {
    createCanvas(800, 600);

    noStroke()

}

function draw() {
    background(80)
    for (let i = 0; i < chasers.length; i++) {

        chasers[i].show()
        chasers[i].chaser2()

        if (chasers[i].catchMouse()) {
            chasers.splice(i, 1);
            if (clickedImplosion == false) {
                chasers.splice(i, 1);
            }
            chasers.push(new Ball(random(width), random(height), random(1, 5), random(0.03, 0.1), random(1, 3)))
            chasers.push(new Ball(random(width), random(height), random(1, 5), random(0.03, 0.1), random(1, 3)))

        }

    }
    // console.log(mouseX, mouseY);

}

function implosion() {
    if (clickedImplosion == false) {
        clickedImplosion = true
    } else {
        clickedImplosion = false
    }
}

function screenClear() {
    for (let i = 0; i < chasers.length; i++)
        chasers.splice(i, chasers.length - 2)
}