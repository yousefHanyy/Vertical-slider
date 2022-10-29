const sliderContainer = document.querySelector(".slider-container");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = rightSlider.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const slidesHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  rightSlider.style.transform = `translateY(-${
    activeSlideIndex * slidesHeight
  }px)`;
  leftSlider.style.transform = `translateY(${
    activeSlideIndex * slidesHeight
  }px)`;
};
