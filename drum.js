// DRUM KIT (Modified Wes Bos JS30 Challenge)
document.addEventListener('keydown', playSound)

function audioplay(sound, letter) {
    let audio = document.getElementById(sound)
    audio.currentTime = 0
    audio.play();
    document.getElementById(letter).classList.add("playing")
}

function playSound(event) {
    console.log(event.keyCode)
    if (event.keyCode == 65) {
        audioplay("clap", "A")
    } else if (event.keyCode == 83) {
        audioplay("hihat", "S")
    } else if (event.keyCode == 68) {
        audioplay("kick", "D")
    } else if (event.keyCode == 70) {
        audioplay("openhat", "F")
    } else if (event.keyCode == 71) {
        audioplay("boom", "G")
    } else if (event.keyCode == 72) {
        audioplay("ride", "H")
    } else if (event.keyCode == 74) {
        audioplay("snare", "J")
    } else if (event.keyCode == 75) {
        audioplay("tom", "K")
    } else if (event.keyCode == 76) {
        audioplay("tink", "L")
    }
}
let elems = document.querySelectorAll('.key')
for (let i = 0; i < elems.length; i++)
    elems[i].addEventListener('transitionend', removePlay)

function removePlay() {
    this.classList.remove("playing")
}