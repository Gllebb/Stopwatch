document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

let timer;
let seconds = 0;
let tens = 0;

function startTimer() {
    document.getElementById("start").disabled = true;
    timer = setInterval(runTimer, 10);
}

function runTimer() {
    tens++;
    if(tens >= 100) {
        seconds++;
        tens = 0;
    }
    if (tens <= 9){
        document.getElementById("tens").innerHTML = "0" + tens;
    } else{
        document.getElementById("tens").innerHTML = tens;
    }
    
    if (seconds <= 9){
        document.getElementById("seconds").innerHTML = "0"+ seconds;
    } else{
        document.getElementById("seconds").innerHTML = seconds;
    }
}


function stopTimer() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    tens = 0;
    seconds = 0;
    document.getElementById("tens").innerHTML = "0" + tens;
    document.getElementById("seconds").innerHTML = "0" + seconds;
    document.getElementById("start").disabled = false;
}