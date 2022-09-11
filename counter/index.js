var counter = document.getElementById("span");
var counter = 0;
// increasing counter
function makeIncrease() {
  counter++;
  document.getElementById("span").innerHTML = counter;

  // change background color to white
  if (counter > 0) {
    document.body.style.backgroundColor = "#ffefc1";
  }
}

// decreasing counter
function makeDecrease() {
  counter--;
  document.getElementById("span").innerHTML = counter;

  // change background color to red
  if (counter < 0) {
    document.body.style.backgroundColor = "#d3321d";
  }
}

// reseting counter
function makeReset() {
  counter = 0;
  document.getElementById("span").innerHTML = counter;

  // change background color to white
  if (counter === 0) {
    document.body.style.backgroundColor = "#ffefc1";
  }
}
