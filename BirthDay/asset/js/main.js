window.onload = function() {
    // Get elements from the DOM
    var merrywrap = document.getElementById("merrywrap");
    var cake = document.getElementById("cake");
    var box = merrywrap.getElementsByClassName("giftbox")[0];

    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];

    // Initialize the function
    function init() {
        // Add event listener to the box
        box.addEventListener("click", openBox, false);
        // document.getElementById('audio').play();
    }

    // Change class based on step
    function stepClass(step) {
        merrywrap.className = 'merrywrap';
        merrywrap.className = 'merrywrap step-' + step;
        cake.className = 'container';
        cake.className = 'container step-' + step;
    }

    // Open the box
    function openBox() {
        if (step === 1) {
            // Remove event listener when step is 1
            box.removeEventListener("click", openBox, false);
        }

        // Call the stepClass function
        stepClass(step);

        if (step === 3) {
            // Do something when step is 3
        }

        if (step === 4) {
            // Return when step is 4
            return;
        }

        // Set timeout for next step
        setTimeout(openBox, stepMinutes[step - 1]);
        step++;
    }

    // Call the init function

    init();
}

var x = document.getElementById("myAudio");
var z = document.getElementById("play-button");
var y = document.getElementById("giftbox");
var w = document.getElementById("play-button-content");
var b =document.getElementsByClassName("before");
function playAudio() {
    x.play();
    z.style.display = "none";
    y.style.display = "block";
    w.style.display = "none";
    // b.classList.remove("before");
    // console.log(b);
    // b.classList.add("behavior");

}
//
let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 100; // Max number paper confetti
const particles = [];

const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson"
];

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(20, 30); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color =
        possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function() {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        return context.stroke();
    };
}

function Draw() {
    const results = [];

    // Magical recursive functional love
    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
        results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
        particle = particles[i];

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= H) remainingFlakes++;

        // If a confetti has fluttered out of view,
        // bring it back to above the viewport and let if re-fall.
        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
    }

    return results;
}

window.addEventListener(
    "resize",
    function() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    },
    false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();
