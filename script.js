// Image URLs to display
const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3"
];

let currentImageIndex = 0; // Track current image index
let countdown = 5; // Countdown time for ad (in seconds)

// Function to change the image
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
  document.getElementById("image-display").src = images[currentImageIndex];
}

// Function to update the countdown timer
function updateCountdown() {
  document.getElementById("countdown").textContent = countdown;
  countdown--;

  if (countdown < 0) {
    // Open ad in a new tab after 5 seconds
    window.open("https://www.profitablecpmrate.com/szzecg3n?key=5aef42f02f7fda344aacbb6245bb9b27", "_blank");
    countdown = 5; // Reset countdown
  }
}

// Change image every 5 seconds
setInterval(changeImage, 5000);

// Update countdown every second
setInterval(updateCountdown, 1000);
