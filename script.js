// Confetti effect using canvas-confetti
function launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#f8b500', '#fceabb', '#e74c3c', '#27ae60'],
      scalar: 1.2
    });
  }
  
  // Launch confetti when the page is loaded
  window.addEventListener('load', () => {
    launchConfetti();
  });
  