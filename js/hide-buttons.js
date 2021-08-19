/* HIDE-BUTTONS.JS */
const app = document.querySelector(".app")
const _video = document.querySelector(".video")


const inactiveTime = 3000


// last time the mouse has moved
let mouseLastMoveTime = new Date()

document.addEventListener("mousemove",() => {
 mouseLastMoveTime = new Date()
 document.body.style.cursor = "auto"

    app.classList.remove("inactive")
    _video.classList.remove("inactiveVideoBg")
})


// Deactive app
function deactiveApp() {
    // check if the use was inactive for a certain amount of time
    let now = new Date()
    let deltaTime = now - mouseLastMoveTime
    if(deltaTime >= inactiveTime) {
        // Hide app
        app.classList.add("inactive")
        _video.classList.add("inactiveVideoBg")

        // hide cursor
        document.body.style.cursor = "none"
    }

    requestAnimationFrame(deactiveApp)
}

deactiveApp()