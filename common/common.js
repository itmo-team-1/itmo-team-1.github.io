 // Бургер-меню
 const burger = document.getElementById('burger');
 const navMenu = document.getElementById('navMenu');
 
 burger.addEventListener('click', () => {
   navMenu.classList.toggle('active');
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