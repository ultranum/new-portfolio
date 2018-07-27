function initGlobals() {
    player1 = new jumping(000, 100, BLUE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW)
    // player2 = new jumping(600, 580, RED, 65, 68, 87)
    let platform1 = new platform(00, 300, 200, 30, 2, 0)
    let platform2 = new platform(0, 100, 500, 40, 0, 0)
    let platform3 = new platform(300, 200, 5000, 40, 0, 0)
    let platform4 = new platform(500, 340, 250, 300, 0, 0)
    let platform5 = new platform(200, 450, 200, 20, 0, 0)
    let platform6 = new platform(9999, 9999, 0, 20, 0, 0)
    let platform7 = new platform(9999, 9999, 0, 20, 0, 0)
    let platform8 = new platform(9999, 9999, 0, 20, 0, 0)
    // platformStopper1 = new platformStopper(500,280,10,60)
    platforms = [platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8];
    let spikeStrip1 = new spikeStrip(999, 999, 30, 30)
    let spikeStrip2 = new spikeStrip(999, 999, 10, 10)
    spikeStrips = [spikeStrip1, spikeStrip2]
    levelEnd1 = new levelEnd(width-50, 580, 50, 20)
}

function moveObjects() {
    player1.update()
    // player2.update()
    player1.prevent()
}

function drawObjects() {
    player1.show()
    // player2.show()

    // powerUp(300, 100, "?")
    // door(200, 100, ORANGE)
    // item(40, 50, ORANGE, BLUE)
    // spike(10, 20, RED)
    // bridge(300, 200, 20, BLUE)


}


function checkLevelEnd1() {
    if (rectIntersect(player1, levelEnd1)) {
        level++
        
    }
}

function drawLevel1() {
    
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].move();
        platforms[i].show();
    }
    levelEnd1.show()
}
function drawLevel2() {
    platforms[0] =new platform(200, 250, 200, 20, 0, 0)
    platforms[1]= new platform(300, 350, 200, 20, 0, 0)
    platforms[2]= new platform(400, 450, 200, 20, 0, 0)
    platforms[3] = new platform(99999999, 99999, 00, 20, 0, 0)
    platforms[4] = new platform(99999, 99999, 00, 20, 0, 0)
    levelEnd1 = new levelEnd(200,100,20,20)
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].show();
    }
    levelEnd1.show()
}
function drawLevel3() {
    platforms[0] =new platform(50, 230, 200, 20, 0, 0)
    platforms[1]= new platform(50, 330, 200, 20, 0, 0)
    platforms[2]= new platform(50, 430, 200, 20, 0, 0)
    platforms[3] = new platform(400, 230, 200, 20, 0, 0)
    platforms[4] = new platform(50, 530, 200, 20, 0, 0)
    
    levelEnd1 = new levelEnd(500,100,20,20)
    if (drew3 == false){
    player1 = new jumping(000, 580, BLUE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW)
    drew3 = true
    }
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].move();
        platforms[i].show();
    }
    levelEnd1.show()
}
function drawLevelFinal(){
    platforms[0] =new platform(100, 100, 25, 200, 0, 0)
    platforms[1]= new platform(100, 300, 150, 20, 0, 0)
    platforms[2]= new platform(165, 100, 25, 200, 0, 0)
    platforms[3] = new platform(225, 100, 25, 200, 0, 0)
    platforms[4] = new platform(350, 100, 25, 220, 0, 0)
    platforms[5] = new platform(500, 100, 25, 220, 0, 0)
    platforms[6] = new platform(500, 100, 150, 20, 0, 0)
    platforms[7] = new platform(650, 100, 25, 220, 0, 0)
    levelEnd1 = new levelEnd(5030,100,20,20)
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].move();
        platforms[i].show();
    }
}