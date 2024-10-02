// confetti.js

// Function to create confetti
function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");

    // Define an array of specific colors
    const predefinedColors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a","#ffffff"];

    // Use setInterval to create a new confetti piece every 200 milliseconds
    const confettiInterval = setInterval(() => {
        const confetti = document.createElement("div");
        confetti.className = "confetti";

        // Select a color randomly from the predefined colors
        const randomColor = getRandomColor(predefinedColors);
        confetti.style.backgroundColor = randomColor;

        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 4 + 2}s`; // Vary animation duration
        confettiContainer.appendChild(confetti);

        // Clear the interval after a certain number of confetti pieces to control the duration
        if (confettiContainer.children.length >= 50) {
            clearInterval(confettiInterval);
        }
    }, 100);
}

// Function to select a color randomly from an array
function getRandomColor(colorArray) {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

// Run the confetti function when the page loads
document.addEventListener("DOMContentLoaded", createConfetti);