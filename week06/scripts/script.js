// This is the main funtion which fires immediately
// as the window is loaded.
window.onload = function () {
  
  // These declare all of the different variables used in the script.
  let seconds = 00; 
  let tens = 00;
  let interval; 

  // These declare the different variables in the HTML document
  // and attach them to the specified elements.
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');

  // This function is fired once the "Start" button is clicked.
  buttonStart.onclick = function() {

    // Clears the interval timer which is nothing.
    clearInterval(interval);

    // Sets the interval variable as the current number.
    interval = setInterval(startTimer, 10);
  }

    // This function is fired once the "Stop" button is clicked.
    // Clears the interval timer.
    buttonStop.onclick = function() {
    clearInterval(interval);
  }

  // This function is fired once the "Reset" button is clicked.
  buttonReset.onclick = function() {

    // Clears the interval timer and resets the tens and seconds variables.
    clearInterval(interval);
    tens = "00";
  	seconds = "00";

    // Updates it on the front end.
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }

  // This function starts the timer when the buttonStart function is
  // fired.
  function startTimer () {
    tens++;

    // If tens is greater than or equal to 9, updates the front end to have
    // a "0" before the number.
    if(tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    // If tens is greater than 9, updates the front end to be the number in
    // tens.
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    // If tens is greater than 99, continues to by updating front end to
    // numbers above 99.
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    // If seconds is greater than 9, updates the front end to show where
    // the seconds are at.
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}