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

let pinkButton, pinkBg, glassCase, blueButton, brownButton, greenButton, rainyHearts, enchantedSword, littleLego;

// // questions to ask the player
// let questions = {};

let state = "start";

function setup(){
  createCanvas(windowWidth, windowHeight);

}

// buttons

function preload(){
  // images
  pinkBg = loadImage("images/pink bg.png");
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
let startButton = new Button(width/2, height/2, width/4, height/7, pinkButton);


function draw(){
  if (state === "start"){
    startScreen();
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

function mousePressed(){
  // change state - start to menu
  if (startButton.insideButton()){
    state = "menu";
  }
}


function startScreen() {
  // background for start
  imageMode(CENTER);
  background("#fee2e1");
  image(pinkBg, width/2.05, height/2, width*0.75, height*0.8);
  
  // title/name of the game
  textSize(60);
  textFont(littleLego);
  text("AVERAGE OTOME GAME", width/4.7, height/3);
  
  //start button
  startButton.display();
}

function menuScreen() {
  if (state === "menu"){
    background("black");
  }
}