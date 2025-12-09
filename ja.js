function createParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;
  
    const particleCount = 30;
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
  
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
  
      // Random position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
  
      // Random animation delay and duration
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
  
      particlesContainer.appendChild(particle);
    }
  }
  // Initialize
  document.addEventListener("DOMContentLoaded", function () {
    createParticles();
    setPageBackground();
  
    // Smooth internal links
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute("href"));
        if (t) t.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  let stepCount = 0;
  const stepElements = document.querySelectorAll(".number");
  const totalSteps = stepElements.length;
  const stepCountElement = document.getElementById("stepCount");
  const trackFillElement = document.querySelector(".track-progress-fill");
  const trackLabelElement = document.getElementById("trackLabel");
  
  function updateProgressDisplay() {
  
    const percentage = Math.round((stepCount / totalSteps) * 100);
  
    if (stepCountElement) {
      stepCountElement.textContent = `${stepCount} / ${totalSteps} steps`;
    }
  
    if (trackFillElement) {
      trackFillElement.style.width = `${(stepCount / totalSteps) * 100}%`;
    }
  
    if (trackLabelElement) {
      trackLabelElement.textContent = `${percentage}% Complete`;
    }
      if (percentage <= 33) {
        trackFillElement.style.backgroundColor = "red";
      } else if (percentage <= 66) {
        trackFillElement.style.backgroundColor = "yellow";
      } else {
        trackFillElement.style.backgroundColor = "green";
      }
    
  }
  
  const pageName = window.location.pathname.split('/').pop() || 'web.html';
  const savedStepCount = parseInt(localStorage.getItem(`progress_${pageName}`)) || 0;
  stepCount = savedStepCount;
  
  const savedStepsState = JSON.parse(localStorage.getItem(`stepsState_${pageName}`)) || [];
  stepElements.forEach((step, index) => {
    if (savedStepsState[index]) {
      step.classList.add("active");
      step.style.backgroundColor = "#10b981";
      step.style.border = "3px solid #10b981";
      step.textContent = "✔";
    }
  });
  
  updateProgressDisplay();
  stepElements.forEach(function (step) {
    step.originalText = step.textContent;
  
    step.addEventListener("click", function () {
     
      const isActive = this.classList.contains("active");
  
      if (!isActive) {
        stepCount++;
        this.classList.add("active");
        this.style.backgroundColor = "#10b981";
        this.style.border = " 3px solid  #10b981";
  
        this.textContent = "✔";
      } else {
        stepCount--;
        this.classList.remove("active");
        this.style.backgroundColor = "";
        this.textContent = this.originalText;
        this.style.border = " 3px solid  #D1D5DC";
      }
  
      updateProgressDisplay();
      localStorage.setItem(`progress_${pageName}`, stepCount);
      const stepsState = Array.from(stepElements).map(step => step.classList.contains("active"));
      localStorage.setItem(`stepsState_${pageName}`, JSON.stringify(stepsState));
    });
  });
  
  updateProgressDisplay();
  
