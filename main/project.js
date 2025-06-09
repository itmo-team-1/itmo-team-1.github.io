// Swiper — проекты
new Swiper('.projectSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });
  
  // Swiper — отзывы
  new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
  
  // Анимация появления и прогрессов
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
  
        // Прогресс-бары (если есть)
        if (entry.target.classList.contains('skills-section')) {
          document.querySelectorAll('.progress-bar').forEach(bar => {
            bar.classList.add('animate');
          });
        }
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.section-fade-in').forEach(el => observer.observe(el));
  
  // Бургер-меню
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');
  
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  