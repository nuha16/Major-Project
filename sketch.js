// Project Title
// Nuha Maisara
// 28/11/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// reference for objects = https://www.youtube.com/watch?v=LQGTb112N_c

let pinkBackground, pinkButton, blueButton, brownButton, greenButton, purplePillars;
let state = "start";

// questions to ask the player
let questions = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  purplePillars = loadImage("images/start screen pillar.png");
  pinkBackground = loadImage("images/pink cloud background.png");
  pinkButton = loadImage("images/pink strip.png");
  blueButton = loadImage("images/blue strip.png");
  brownButton = loadImage("images/brown strip.png");
  greenButton = loadImage("images/green strip.png");
}

function draw() {
  if (state === "start"){
    startBackground();
  }

  if (state === "menu"){
    menuBackground();
  }
}

class Button {
  constructor(x, y, width, height, img){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  insideButton(x, y) {
    return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
  }
}

function menuBackground() {
  // background for main menu
  imageMode(CENTER);
  image(pinkBackground, width/2, height/2, windowWidth*0.9, windowHeight*0.999);
}

function startBackground() {
  // background for start
  background("#a393fa");

  imageMode(CENTER);
  image(purplePillars, width/2, height/2, width*0.5, height*0.999);

  
}