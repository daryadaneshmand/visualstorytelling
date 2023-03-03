// Get the radio buttons and the image element
const redButton = document.getElementById('red');
const orangeButton = document.getElementById('orange');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const indigoButton = document.getElementById('indigo');
const violetButton = document.getElementById('violet');
const rainbowButton = document.getElementById('rainbow');
const photo = document.getElementById('photo');

// Add event listeners to the radio buttons
redButton.addEventListener('change', function() {
  photo.src = 'images/red.jpg';
});

orangeButton.addEventListener('change', function() {
  photo.src = 'images/orange.jpg';
});

yellowButton.addEventListener('change', function() {
  photo.src = 'images/yellow.jpg';
});

greenButton.addEventListener('change', function() {
  photo.src = 'images/green.jpg';
});

blueButton.addEventListener('change', function() {
  photo.src = 'images/blue.jpg';
});

indigoButton.addEventListener('change', function() {
  photo.src = 'images/indigo.jpg';
});

violetButton.addEventListener('change', function() {
  photo.src = 'images/violet.jpg';
});

rainbowButton.addEventListener('change', function() {
  photo.src = 'images/rainbow.jpg';
});