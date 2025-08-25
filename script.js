// Typing animation

const texts = ["Web Developer", "Designer", "Coder", "Tech Enthusiast"];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

function type() {

  if (count === texts.length) {

    count = 0;

  }

  currentText = texts[count];

  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {

    count++;

    index = 0;

    setTimeout(type, 1500);

  } else {

    setTimeout(type, 150);

  }

}

type();

// Scroll reveal

function reveal() {

  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {

    let windowHeight = window.innerHeight;

    let elementTop = reveals[i].getBoundingClientRect().top;

    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {

      reveals[i].classList.add("active");

    }

  }

}

window.addEventListener("scroll", reveal);