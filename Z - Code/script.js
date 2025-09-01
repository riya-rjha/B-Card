// script.js

// Optional: Play sound (add your own .mp3 file in the same directory)
const birthdaySound = new Audio('happy-birthday.mp3');
birthdaySound.volume = 0.5;

// Play sound after a short delay
setTimeout(() => {
  birthdaySound.play().catch(e => {
    console.log("Autoplay blocked. User interaction needed.");
  });
}, 3000);

// Add twinkling stars
function createStarField() {
  const starContainer = document.querySelector('.galaxy');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starContainer.appendChild(star);
  }
}

createStarField();

// Make age balloons pop on hover
const balloons = document.querySelectorAll('.balloon');
balloons.forEach(balloon => {
  balloon.addEventListener('mouseover', () => {
    balloon.style.transition = 'transform 0.2s ease';
    balloon.style.transform = 'scale(1.5)';
    setTimeout(() => {
      balloon.style.transform = 'scale(1)';
    }, 200);
  });
});
