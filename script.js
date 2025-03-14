// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Слайдер для галереи
const sliderImages = document.querySelectorAll(".slider-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function showImage(index) {
  sliderImages.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : sliderImages.length - 1;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex < sliderImages.length - 1 ? currentIndex + 1 : 0;
  showImage(currentIndex);
});

// Инициализация первого изображения
showImage(currentIndex);
