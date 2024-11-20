window.onload = function() {
    // Get elements from the DOM
    var merrywrap = document.getElementById("merrywrap");
    var cake = document.getElementById("cake");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var ano_novo = document.getElementById("ano_novo_2");

    var step = 1;
    var stepMinutes = [1000, 7000, 2000, 2000];

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
        ano_novo.className = 'date-step-' + step;
    }

    // Open the box
    function openBox() {
        if (step === 1) {
            // Remove event listener when step is 1
            box.removeEventListener("click", openBox, false);const container = document.getElementById("ano_novo_2");
        }

        // Call the stepClass function
        stepClass(step);
        if (step === 2) {
            const container = document.getElementById("ano_novo_2");
            const htmlContent = "<div id=\"ano_novo\" class=\"ano_novo\"><span>1</span><span class=\"seis\">7</span><span class=\"sete\">8</span><div id=\"balao\" class=\"balao\"></div></div><div id=\"fogos\" class=\"fogos\"><div class=\"f1\"><span><i></i></span><span><i></i></span><span><i></i></span></div><div class=\"f2\"><span><i></i></span><span><i></i></span><span><i></i></span></div><div class=\"f3\"><span><i></i></span><span><i></i></span><span><i></i></span></div><div class=\"f4\"><span><i></i></span><span><i></i></span><span><i></i></span></div></div>";
            container.innerHTML = htmlContent;
        }

        if (step === 3) {
            // Do something when step is 3
            const text = document.getElementById("text-birthday");
            const htmlContent = "<div class=\"row\"><span>D</span><span>e</span><span>a</span><span>r</span><span> </span><span>S</span><span>u</span><span>s</span><span>u</span></div><div class=\"row\"><span class=\"letter\">H</span><span class=\"letter\">a</span><span class=\"letter\">p</span><span class=\"letter\">p</span><span class=\"letter\">y</span><span class=\"letter\">B</span><span class=\"letter\">i</span><span class=\"letter\">r</span><span class=\"letter\">t</span><span class=\"letter\">h</span><span class=\"letter\">d</span><span class=\"letter\">a</span><span class=\"letter\">y</span></div>\n";
            text.innerHTML = htmlContent;
        }

        if (step === 4) {
            // Return when step is 4
            // Get the element where you want to add the HTML
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
}

