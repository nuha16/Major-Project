// Project Title
// Nuha Maisara
// 28/11/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pinkBackground, pinkButton, blueButton, brownButton, greenButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  pinkBackground = loadImage("images/pink cloud background.png");
  pinkButton = loadImage("images/pink strip.png");
  blueButton = loadImage("images/blue strip.png");
  brownButton = loadImage("images/brown strip.png");
  greenButton = loadImage("images/green strip.png");
}

function draw() {
  image(pinkBackground, 0, 0, windowWidth*1.0002, windowHeight*1.02);
}
