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

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
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

const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  slidesPerView: 1.2,
  breakpoints: {
    640: { slidesPerView: 1.5 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// form validation

  const form = document.getElementById('contactForm');

  const responseDiv = document.createElement('div');
  responseDiv.id = 'responseMessage';
  responseDiv.className = 'text-center mt-4 text-lg font-medium';
  form.parentNode.appendChild(responseDiv); 

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); 

    let isValid = true;
    document.querySelectorAll('.text-red-600').forEach(el => el.textContent = '');
    responseDiv.textContent = '';
    responseDiv.className = 'text-center mt-4 text-lg font-medium';

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();


    if (!/^[A-Za-z\s]+$/.test(name)) {
      document.getElementById('nameError').textContent = 'Only letters and spaces allowed.';
      isValid = false;
    }
    if (!/^\d{10}$/.test(phone)) {
      document.getElementById('phoneError').textContent = 'Phone must be exactly 10 digits.';
      isValid = false;
    }


    const emailRegex = /^[\w\.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Enter a valid email address.';
      isValid = false;
    } else {
      const tld = email.split('.').pop().toLowerCase();
      const allowedTLDs = ['com', 'in', 'org', 'net'];
      if (!allowedTLDs.includes(tld)) {
        document.getElementById('emailError').textContent = 'Only .com, .in, .org, or .net domains are allowed.';
        isValid = false;
      }
    }


    if (!/^[A-Za-z\s.,]+$/.test(message)) {
      document.getElementById('messageError').textContent = 'Message can only contain letters, spaces, commas, and periods.';
      isValid = false;
    }

 
    if (isValid) {
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          responseDiv.textContent = 'Message sent successfully!';
          responseDiv.classList.add('text-[#016db7]');
          form.reset();

     
          setTimeout(() => location.reload(), 2000);
        } else {
          responseDiv.textContent = '❌ Failed to send: ' + result.message;
          responseDiv.classList.add('text-red-600');
        }
      } catch (error) {
        responseDiv.textContent = '❌ An error occurred. Please try again.';
        responseDiv.classList.add('text-red-600');
      }
    }
  });

