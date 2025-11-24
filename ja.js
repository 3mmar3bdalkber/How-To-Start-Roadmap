// // Create floating particles
// function createParticles() {
//   const particlesContainer = document.getElementById('particles');
//   if (!particlesContainer) return;
  
//   const particleCount = 30;
  
//   for (let i = 0; i < particleCount; i++) {
//     const particle = document.createElement('div');
//     particle.classList.add('particle');
    
//     // Random size
//     const size = Math.random() * 5 + 2;
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;
    
//     // Random position
//     particle.style.left = `${Math.random() * 100}vw`;
//     particle.style.top = `${Math.random() * 100}vh`;
    
//     // Random animation delay and duration
//     const delay = Math.random() * 15;
//     const duration = Math.random() * 10 + 10;
//     particle.style.animationDelay = `${delay}s`;
//     particle.style.animationDuration = `${duration}s`;
    
//     particlesContainer.appendChild(particle);
//   }
// }

// // Set page-specific background
// function setPageBackground() {
//   const path = window.location.pathname;
//   const page = path.split('/').pop();
  
//   document.body.classList.remove('cyber-page', 'web-page', 'data-page', 'home-page');
  
//   if (page === 'cyber.html') {
//     document.body.classList.add('cyber-page');
//   } else if (page === 'web.html') {
//     document.body.classList.add('web-page');
//   } else if (page === 'dataanalysis.html') {
//     document.body.classList.add('data-page');
//   } else {
//     document.body.classList.add('home-page');
//   }
// }

// // Initialize
// document.addEventListener('DOMContentLoaded', function() {
//   createParticles();
//   setPageBackground();
  
//   // Smooth internal links
//   document.querySelectorAll('a[href^="#"]').forEach(function(a) {
//     a.addEventListener('click', function(e) {
//       e.preventDefault();
//       const t = document.querySelector(this.getAttribute('href'));
//       if (t) t.scrollIntoView({behavior: 'smooth'});
//     });
//   });

//   // Console hook for clicks on primary buttons (placeholder for analytics)
//   document.querySelectorAll('.btn.primary').forEach(function(b) {
//     b.addEventListener('click', function(e) {
//       console.log('Primary CTA clicked:', this.innerText);
//     });
//   });
// });