const h2 = document.createElement("h2");

h2.textContent = "My name is Kiran Phillips, I was originally born in Zimbabwe and since lived in 7 countries before settling in South Africa. I have been working in hospitality for many years but made the leap to the tech world and pursued Software engineering through Flatiron.In this page you will learn about me and how I got to this point Infront of you."
document.querySelector("body").appendChild(h2);

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
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}