// Project Title
// Nuha Maisara
// 28/11/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// reference for objects = https://www.youtube.com/watch?v=LQGTb112N_c
// website where I got my fonts = https://www.dafont.com/
// an extension was needed to be downloaded for the fonts - stxr.iconfont-preview


let pinkButton, blueButton, brownButton, greenButton, purplePillars, rainyHearts, enchantedSword, littleLego;

// // questions to ask the player
// let questions = {};

let state = "start";

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  // images
  purplePillars = loadImage("images/purple pillars.png");
  pinkButton = loadImage("images/pink strip.png");
  blueButton = loadImage("images/blue strip.png");
  brownButton = loadImage("images/brown strip.png");
  greenButton = loadImage("images/green strip.png");

  // fonts
  littleLego = loadFont("fonts/littlelego.ttf");
  rainyHearts = loadFont("fonts/rainyhearts.ttf");
  enchantedSword = loadFont("fonts/EnchantedSword.ttf");

}

function draw(){
  if (state === "start"){
    startBackground();
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

function startBackground() {
  // background for start
  background("#a393fa");

  imageMode(CENTER);
  image(purplePillars, width/2, height/2, width*0.5, height*0.999);

  textSize(50);
  textFont(littleLego);
  text("AVERAGE OTOME GAME", 100, 200);
}