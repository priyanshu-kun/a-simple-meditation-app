const play = document.querySelector(".play")
const pause = document.querySelector(".pause")

const audio = document.querySelector(".audio audio")


play.addEventListener("click", () => {
    audio.play()
    update()
})

pause.addEventListener("click", () => {
    audio.pause()
})

// select seasons
const seasons = document.querySelectorAll(".season")
const video = document.querySelector(".video video")

seasons.forEach(se => {
    se.addEventListener("click", (e) => {
        video.src = se.getAttribute("video-src")
    })
})


const duration = document.querySelectorAll(".duration")

let defaultAudioDuration = 120;

// change audio duraction
duration.forEach(dur => {
    dur.addEventListener("click", () => {
        defaultAudioDuration = dur.getAttribute("audio-duration")
        update()
    })
})


const path = document.querySelector(".rect")
const remainingTime = document.querySelector(".audio-remaining-time")


// total length of the path (parimeter of the rect)
const pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength;


function update() {
    console.log(path)
    if (audio.currentTime >= defaultAudioDuration) {
        audio.pause()
        audio.currentTime = 0
    }
    let remainingTimeInSec = defaultAudioDuration - audio.currentTime
    renderRemainingTime(remainingTimeInSec)
    if (!audio.paused) {
        let portionPlayed = audio.currentTime / defaultAudioDuration
        path.style.strokeDashoffset = -portionPlayed * pathLength;
        requestAnimationFrame(update)
    }
}

update()

function renderRemainingTime(timeInSec) {
    let min = Math.floor(timeInSec/60);
    let sec = Math.floor(timeInSec%60)
    min = min < 10 ? `0${min}`: min 
    sec = sec < 10 ? `0${sec}` : sec
    remainingTime.innerHTML = `${min}:${sec}`
}