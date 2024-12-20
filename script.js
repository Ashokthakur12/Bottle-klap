let score = 0;
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let selectedColor = null;

// Utility Functions
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function drawBottle(x, y, width, height, color = 'white') {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#000';
  ctx.strokeRect(x, y, width, height);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateScore(points) {
  score += points;
  document.getElementById('score').innerText = score;
}

// Event Handlers
document.getElementById('color-picker').addEventListener('click', () => {
  selectedColor = getRandomColor();
  alert(`Color selected: ${selectedColor}`);
});

document.getElementById('fill-bottle').addEventListener('click', () => {
  if (!selectedColor) {
    alert('Pick a color first!');
    return;
  }
  drawBottle(100, 100, 50, 200, selectedColor);
  updateScore(10);
  selectedColor = null;
});

document.getElementById('customize-btn').addEventListener('click', () => {
  const newTitle = prompt('Enter a new game name:', 'Bottle Filling Game');
  if (newTitle) {
    document.getElementById('game-title').innerText = newTitle;
  }
});

// Ad Redirection
setInterval(() => {
  window.open('https://www.profitablecpmrate.com/szzecg3n?key=5aef42f02f7fda344aacbb6245bb9b27', '_blank');
}, 15000);

// Initial Setup
function initGame() {
  clearCanvas();
  drawBottle(100, 100, 50, 200);
}

initGame();
