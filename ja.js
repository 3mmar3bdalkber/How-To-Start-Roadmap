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
  
