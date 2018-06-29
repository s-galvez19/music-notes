// create variables at the top
var keys = document.querySelectorAll(".key")
var notes = {
    cKey: document.querySelector("#cAudio"),
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector(`#bAudio`),

}



//define functions in the middle
function playNote(key) {
    notes[key].currentTime = 0
    notes[key].play()
 
 }
// call functions and/or add Event Listeners 
keys.forEach(function (key) {
    key.addEventListener("click", function () {
        playNote(key.id)
        console.log("key was clicked")
    })
})



    //console.log(event)
   
document.addEventListener('keydown', function (event) {
    if (event.key == "a") {
        playNote("cKey")
    }
    if (event.key == "d") {
        playNote("dKey")
    }
    if (event.key == "e") {
        playNote("eKey")
    }
    if (event.key == "f") {
        playNote("fKey")
    }
    if (event.key == "g") {
        playNote("gKey")
    }
    if (event.key == "c") {
        playNote("aKey")
    }
    if (event.key == "b") {
        playNote("bKey")
    }
 
 
 })

