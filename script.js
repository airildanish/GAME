document.addEventListener("DOMContentLoaded", function() {
    const audioButton = document.querySelector(".audio-y-btn");
    if (audioButton) { // Check if the element exists
        audioButton.addEventListener("click", function() {
            this.classList.toggle("toggled"); // Adds or removes "toggle" class
            console.log(this.classList); // Log the current classes
        });
    } else {
        console.error("Element with class 'audio-y-btn' not found.");
    }
});

function playaudio() {
    document.getElementById("musicbg").volume = 0.5;
    let audio = document.getElementById("musicbg");
    if (audio.paused) {
    audio.play();   
    } else {
        audio.pause();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start-btnjs");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const targetUrl = button.getAttribute("data-url"); // Get the URL from data attribute
        
        const glitchScreen = document.getElementById("transition-fade");
        glitchScreen.classList.add("fades-out");

        let audio = document.getElementById("musicbg");
        audio.pause()

        setTimeout(() => {
            window.location.href = "modeselect.html";
        }, 3000); // Matches the CSS animation duration
    });
});