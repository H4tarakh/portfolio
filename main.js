var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("I");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("I")
    }
    event.currentTarget.classList.add("I");
    document.getElementById(tabname).classList.add("I")
}

var sidemeu = document.getElementById("sidemenu");

function openMenu() {
    sidemeu.style.right = "0";
}

function closeMenu() {
    sidemeu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menuIcon");
    var navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });
});

// https://script.google.com/macros/s/AKfycbx18lEP5tVVeKxgizqOgeSf9etgiZJHm1cL8L8EMj9vhvJDfofIDT-4QZ3tOyOj-WlQ4w/exec
  
const scriptURL = 'https://script.google.com/macros/s/AKfycbx18lEP5tVVeKxgizqOgeSf9etgiZJHm1cL8L8EMj9vhvJDfofIDT-4QZ3tOyOj-WlQ4w/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message Sent Successfully!";
      setTimeout(function(){
        msg.innerHTML = ""
      },3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message));
});


