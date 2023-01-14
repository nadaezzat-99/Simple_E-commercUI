
var navbar_state = "close";

function toggle_navigation() {

  if (navbar_state === "close") {
    navbar_state = "open"
    document.getElementsByClassName("Nav-Bar")[0].classList.add("Nav-Bar-Responsive")
    let nav_items = document.getElementsByClassName("Nav-Item")
    for (let i = 0; i < nav_items.length; i++) {
      nav_items[i].classList.add("Nav-Item-Responsive");

    }
  }

  else {
    navbar_state = "close"
    document.getElementsByClassName("Nav-Bar")[0].classList.remove("Nav-Bar-Responsive")
    let nav_items = document.getElementsByClassName("Nav-Item")
    for (let i = 0; i < nav_items.length; i++) {
      nav_items[i].classList.remove("Nav-Item-Responsive");
    }
  }

  console.log(navbar_state);
}

var footer_section = ['close', 'close'];

function show(section_num) {
  if (footer_section[section_num] === 'close') {
    console.log(footer_section);
    console.log(document.getElementsByClassName("footer-section"));
    footer_section[section_num] = 'open';
    document.getElementsByClassName("footer-section")[section_num].style.display = "block";
  }
  else {

    footer_section[section_num] = 'close';
    document.getElementsByClassName("footer-section")[section_num].style.display = "none";
  }

  if (footer_section[1 - section_num] === "close") {
    document.getElementsByClassName("footer-section")[1 - section_num].style.display = "none";
  }
  else {
    document.getElementsByClassName("footer-section")[1 - section_num].style.display = "block";

  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500);} // Change image every 2 seconds