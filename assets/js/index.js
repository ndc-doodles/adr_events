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




    

  // const swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   loop: true,
  //   grabCursor: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   on: {
  //     slideChangeTransitionEnd: function () {
  //       const slides = document.querySelectorAll('.swiper-slide');
  //       slides.forEach(slide => {
  //         slide.classList.remove('scale-100', 'z-20');
  //         slide.classList.add('scale-95', 'z-10');
  //       });
  //       const active = document.querySelector('.swiper-slide-active');
  //       if (active) {
  //         active.classList.remove('scale-95', 'z-10');
  //         active.classList.add('scale-100', 'z-20');
  //       }
  //     },
  //   },
  // });

  // window.addEventListener('load', () => {
  //   const active = document.querySelector('.swiper-slide-active');
  //   if (active) {
  //     active.classList.add('scale-100', 'z-20');
  //   }
  // });




   
  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2.5,
      slideShadows: false,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });