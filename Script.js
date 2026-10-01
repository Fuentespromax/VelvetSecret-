let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
}

setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 3000);

showSlide(index);

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
});
