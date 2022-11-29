// Project Title
// Nuha Maisara
// 28/11/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// reference for objects = https://www.youtube.com/watch?v=LQGTb112N_c

let pinkBackground, pinkButton, blueButton, brownButton, greenButton;
let state = "start";

// questions to ask the player
let questions = {};

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
  // background for start
  image(pinkBackground, 0, 0, windowWidth*1.02, windowHeight*1.02);
}
