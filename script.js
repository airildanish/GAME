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
    document.getElementById("musicbg").volume = 0.15;
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
        }, 2950); // Matches the CSS animation duration
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".diff-btn");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetUrl = button.getAttribute("data-url"); // Get the URL from data attribute
            const game = localStorage.getItem("game-key");
            
            const glitchScreen = document.getElementById("transition-fade");
            glitchScreen.classList.add("fades-out");

            setTimeout(() => {
                if (game === "rps") {
                    window.location.href = "rock-paper-scissors.html";
                } else if (game === "tr") {
                    window.location.href = "type-racer.html";
                } else {
                    window.location.href = "modeselect.html"; // Default page if no match
                }
            }, 2950); // Matches the CSS animation duration
        });
    });
});


window.addEventListener("load", () => {
    document.getElementById("transition-fade-in").classList.add("fades-in");
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".paralax .layer").forEach(layer => {
        let image = layer.getAttribute("data-image");
        if (image) {
            layer.style.backgroundImage = `url(${image})`;
        }
    });
});


function moveImage() {
    document.getElementById("difficulty").textContent = "SELECT DIFFICULTY";
    document.getElementById("catmoves").style.transform = "translate3d(70vw, 0, 0)  scale(8)";
}

function moveImageAgain() {
    document.getElementById("catmoves").style.transform = "translate3d(100vw, 0, 0) scale(8)";
}

function hideAndShow() {
    const first = document.getElementById("first");
    const second = document.getElementById("second");

    // Hide the first element
    first.classList.add("hidden");

    // Wait for the transition to finish, then show the second element
    setTimeout(() => {
        second.classList.add("show");
    }, 500); // Waits 0.5 seconds (same as CSS transition)
}

const buttons = document.querySelectorAll(".diff-btn");
const textDisplay = document.getElementById("difficultyText");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        textDisplay.textContent = button.getAttribute("data-text");
        textDisplay.style.color = window.getComputedStyle(button).backgroundColor; // Get background color
    });

    button.addEventListener("mouseout", () => {
        textDisplay.textContent = ""; // Clears text when not hovering
        textDisplay.style.color = ""; // Reset color
    });
});

function storeValue(key, value) {
    localStorage.setItem(key, value); // Store value in localStorage
}

document.addEventListener("DOMContentLoaded", () => {
    let attackButtons = document.querySelectorAll("input[type='image']");

    attackButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent form submission if inside a form

            let idleSprite = document.getElementById("playerIdleJS");
            let attackSprite = document.getElementById("playerAttackJS");

            // Hide idle, show attack
            idleSprite.style.display = "none";
            attackSprite.style.display = "block";

            // After attack animation duration, switch back
            setTimeout(() => {
                idleSprite.style.display = "block";
                attackSprite.style.display = "none";
            }, 1300); // Adjust based on animation timing
        });
    });
});
