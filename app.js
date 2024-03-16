var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  speed: 500,
  loop: true,
  rotate: true,
  mousewheel: {
  invert: false,
},
});


var modal = document.getElementById("myModal1");
var btn = document.getElementById("btn1");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("btn3");
var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal3.style.display = "none";
  }
}


var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("btn4");
var span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal4.style.display = "none";
  }
}



var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("btn5");
var span5 = document.getElementsByClassName("close5")[0];

btn5.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal5.style.display = "none";
  }
}


var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("btn6");
var span6 = document.getElementsByClassName("close6")[0];

btn6.onclick = function() {
  modal6.style.display = "block";
}

span6.onclick = function() {
  modal6.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal6.style.display = "none";
  }
}

var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("btn7");
var span7 = document.getElementsByClassName("close7")[0];

btn7.onclick = function() {
  modal7.style.display = "block";
}

span7.onclick = function() {
  modal7.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal7.style.display = "none";
  }
}


var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("btn8");
var span8 = document.getElementsByClassName("close8")[0];

btn8.onclick = function() {
  modal8.style.display = "block";
}

span8.onclick = function() {
  modal8.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}


// SCROLL REVEAL ANİMATİONS

ScrollReveal().reveal('main-section')