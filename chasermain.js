 let chasers = [new Ball(200, 300, 4, 1), new Ball(200, 300, 4, 0.06)];

 // 
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
             chasers.splice(i, 1);
             chasers.push(new Ball(random(width), random(height), random(1, 5), random(0.03, 0.1)))
             chasers.push(new Ball(random(width), random(height), random(1, 5), random(0.03, 0.1)))

         }

     }
     console.log(mouseX, mouseY);
 }