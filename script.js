function randomNumber(max, output) {
  //   var max = Number(document.getElementById("max").value);
  var number = Math.floor(Math.random() * max);
  document.getElementById(output).innerHTML = number;
}
