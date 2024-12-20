// Play Button Click Event
document.getElementById('play-button').addEventListener('click', function() {
  // Open ad URL in a new tab
  window.open('https://goto.now/rXlwr', '_blank');
  
  // Start the countdown timer
  let countdown = 5;
  const countdownElement = document.getElementById('countdown');
  
  // Update countdown every second
  const interval = setInterval(function() {
    countdownElement.textContent = countdown;
    countdown--;
    
    if (countdown < 0) {
      clearInterval(interval); // Stop the countdown
      countdownElement.textContent = 'Ad Opened!'; // After countdown, show message
    }
  }, 1000);
});
