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

let startButton = new Button(width/2, height/2, width/4, height/7, pinkButton);

function draw(){
  if (state === "start"){
    startBackground();
  }
  if (state === "menu"){
    background("black");
  }
}

function mousePressed(){
  if (state === "start" && startButton.isInside(mouseX, mouseY)){
    state = "menu";
  }
}

function startBackground() {
  // background for start
  imageMode(CENTER);
  background("#fee2e1");
  image(pinkBg, width/2.05, height/2, width*0.75, height*0.8);

  // title
  textSize(60);
  textFont(littleLego);
  text("AVERAGE OTOME GAME", width/3.9, height/3);

  //start button
  startButton.display();
}