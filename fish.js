// TITLE
"use strict"; // Use strict mode
let numFish = 0
let numFish2 = 0
let numFish3 = 0
let numFish4 = 0
let numJunk = 0
let numTreasure = 0
let total = 0
document.getElementById('button').addEventListener("click", catchFish)
document.getElementById('plus10').addEventListener("click", plus10)
document.getElementById('hundredtreasure').addEventListener('click', hundredtreasure)
document.getElementById('thousand').addEventListener('click', thousand)

function catchFish() {
    let randNum = Math.random()
    if (randNum < 0.85) {
        let randFish = Math.random()

        if (randFish < 0.5) {
            document.getElementById('results').innerHTML += '<img src="images/RawFish.png">'
            numFish++
            total++
            document.getElementById('total').innerHTML = total
            document.getElementById('fish').innerHTML = numFish
        } else if (randFish < 0.7) {
            document.getElementById('results').innerHTML += '<img src="images/Raw_Salmon.png">'
            numFish2++
            total++
            document.getElementById('total').innerHTML = total
            document.getElementById('fish2').innerHTML = numFish2
        } else if (randFish < 0.9) {
            document.getElementById('results').innerHTML += '<img src="images/Clownfish.png">'
            numFish3++
            total++
            document.getElementById('total').innerHTML = total
            document.getElementById('fish3').innerHTML = numFish3
        } else if (randFish < 1) {
            document.getElementById('results').innerHTML += '<img src="images/Pufferfish_old.png">'
            numFish4++
            total++
            document.getElementById('total').innerHTML = total
            document.getElementById('fish4').innerHTML = numFish4
        }
    } else if (randNum < 0.95) {
        document.getElementById('results').innerHTML += '<img src="images/leatherboots.png">'
        numJunk++
        total++
        document.getElementById('total').innerHTML = total
        document.getElementById('junk').innerHTML = numJunk
    } else {
        document.getElementById('results').innerHTML += '<img src="images/Bow.png">'
        numTreasure++
        total++
        document.getElementById('total').innerHTML = total
        document.getElementById('treasure').innerHTML = numTreasure
    }
}

function plus10() {
    for (let n = 0; n < 10; n++) {
        catchFish()
    }
}

function hundredtreasure() {
    while (numTreasure < 100)
        catchFish()
}

function thousand() {
    for (let n = 0; n < 1000; n++) {
        catchFish()
    }
}