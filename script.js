window.onscroll = function() {scrollFunction()};
var header = document.querySelector('nav-link');
var elements = document.querySelectorAll('a.nav-link');
var svg = document.body.firstElementChild.querySelectorAll('path');

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "white";
    [].slice.call(elements).forEach(function(elem) {elem.style.color = 'black';}); 
    [].slice.call(svg).forEach(function(svg) {svg.style.fill = 'black';});

  } else {  
    document.getElementById("header").style.backgroundColor = "transparent";
    [].slice.call(elements).forEach(function(elem) {elem.style.color = 'white'; }); 
    [].slice.call(svg).forEach(function(svg) {svg.style.fill = 'white';});
}
}

function mOver(obj) {
    obj.style.backgroundColor = "white";
    [].slice.call(elements).forEach(function(elem) {
      elem.style.color = 'black';
  });  
  [].slice.call(svg).forEach(function(svg) {svg.style.fill = 'black';});
  }
  
  function mOut(obj)
   {
    obj.style.backgroundColor = "transparent";
    [].slice.call(elements).forEach(function(elem) {
      elem.style.color = 'white';
  });   
  [].slice.call(svg).forEach(function(svg) {svg.style.fill = 'white';});
} 
  

function toggleBtn() {
  const Btns = document.querySelector(".btns");
  const add = document.getElementById("add");
  const remove = document.getElementById("remove");
  const btn = document.querySelector(".btns").querySelectorAll("a");
  Btns.classList.toggle("open");
  if (Btns.classList.contains("open")) {
    remove.style.display = "block";
    add.style.display = "none";
    btn.forEach((a, i) => {
      setTimeout(() => {
        bottom = 40 * i;
        a.style.bottom = bottom + "px";
        console.log(a);
      }, 100 * i);
    });
  } else {
    add.style.display = "block";
    remove.style.display = "none";
    btn.forEach((a) => {
      a.style.bottom = "0px";
    });
  }
}  