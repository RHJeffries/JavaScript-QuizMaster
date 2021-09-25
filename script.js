//timer
var timerEl = document.getElementById("timer");

function timer() {
var timeRemain = 30;

var timeLeft = setInterval(function ()  {
    
    if (timeRemain > 1) {
        timerEl.textContent = timeRemain;
        timeRemain--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeLeft);
    }
}, 1000);

}
timer();