// Set the date we're counting down to
var countDownDate = new Date("2023-12-16").getTime();
var colors = ["blue", "yellow", "red", "purple", "green", "grey"];

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="diaCasorio"
  document.getElementById("dias").innerHTML = formatNumber(days);
  document.getElementById("horas").innerHTML =formatNumber(hours);
  document.getElementById("minutos").innerHTML = formatNumber(minutes);
  document.getElementById("segundos").innerHTML = seconds;


  document.getElementById("diaCasorio").innerHTML = formatNumber(days) + "d " + formatNumber(hours) + "h "
  + formatNumber(minutes) + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("diaCasorio").innerHTML = "EXPIRED";
  }
}, 1000);

function formatNumber(number){
  let strNumber = number.toString()
  let targeted_length = 2
  let result = ''
  // padding zeros
  if(strNumber.length < targeted_length){
     let padding = new Array(targeted_length - strNumber.length +
     1).join('0')
     result = padding + strNumber
  }else{
     result = strNumber
  }

  return result;
}