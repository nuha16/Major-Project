/* eslint-disable indent */
// Project Title
// Nuha Maisara
// 28/11/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// reference for objects = https://www.youtube.com/watch?v=LQGTb112N_c
// website where I got my fonts = https://www.dafont.com/
// an extension was needed to be downloaded for the fonts - stxr.iconfont-preview


let pinkButton, princessBg, glassCase, blueButton, brownButton, greenButton, rainyHearts, enchantedSword, littleLego;

// // questions to ask the player
// let questions = {};

let state = "start";

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  // images
  princessBg = loadImage("images/princess aesthetic.jpg");
  pinkButton = loadImage("images/pink strip.png");
  blueButton = loadImage("images/blue strip.png");
  brownButton = loadImage("images/brown strip.png");
  greenButton = loadImage("images/green strip.png");
  glassCase = loadImage("images/letter in case.PNG");

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
  imageMode(CENTER);
  image(princessBg, width/2, height/2, width*0.85, height*0.9);

  textSize(50);
  textFont(littleLego);
  
  text("AVERAGE OTOME GAME", 100, 200);

    //start button
  let startButton = new Button(width/2, height/2, width/4, height/7, pinkButton);
  startButton.display();
}