const slider = document.getElementById("slider");
const images = [
  "assets/images/image1.jpg",
  "assets/images/image2.jpg",
  "assets/images/image3.jpg",
  "assets/images/image2.jpg",
];
let index = 0;

function changeSlide() {
  slider.classList.remove("zoom");
  void slider.offsetWidth;
  slider.style.backgroundImage = `url('${images[index]}')`;
  slider.classList.add("zoom");
  index = (index + 1) % images.length;
}

changeSlide();
setInterval(changeSlide, 5000);













   document.addEventListener("DOMContentLoaded", function() {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const steps = 80;
        const increment = target / steps;
        let current = 0;
        let count = 0;

        const update = () => {
          current += increment;
          if (count < steps) {
            counter.innerText = Math.ceil(current);
            count++;
            setTimeout(update, duration / steps);
          } else {
            counter.innerText = target + "+";
          }
        };

        update();
      });
    });