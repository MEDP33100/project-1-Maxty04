document.addEventListener("DOMContentLoaded", () => {
    let popup = document.getElementById("popup-overlay");
    let continueBtn = document.getElementById("btn");
    let audio = document.getElementById("background-audio");
    let clickSound = document.getElementById("click-sound");

    continueBtn.addEventListener("click", () => {
        clickSound.play();
        popup.style.display = "none";

        setTimeout(() => {
            audio.play().catch(error => console.log("Playback failed:", error));
        }, 200);
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            clickSound.play();
            popup.style.display = "none";

            setTimeout(() => {
                audio.play().catch(error => console.log("Playback failed:", error));
            }, 200);
        }
    });
});
