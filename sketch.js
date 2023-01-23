/* eslint-disable indent */
// Project Title
// Nuha Maisara
// 28/11/22

// reference for ids, containers, classes = https://www.youtube.com/watch?v=wXUhTZpF_HQ&ab_channel=DaniKrossing
// basic html review = https://www.youtube.com/watch?v=MDLn5-zSQQI&ab_channel=Simplilearn
// buttons with html = https://www.youtube.com/watch?v=_2wARy-oevQ&t=3s&ab_channel=BroCode
// reference for css function = https://www.w3schools.com/css/default.asp
// css basics = https://www.youtube.com/watch?v=1PnVor36_40&ab_channel=WebDevSimplified
// website where I got my fonts = https://www.dafont.com/
// an extension was needed to be downloaded for the fonts - stxr.iconfont-preview

// https://www.youtube.com/watch?v=LQGTb112N_c

let pinkButton, pinkBg, glassCase, blueButton, brownButton, greenButton, rainyHearts, enchantedSword, littleLego, startButton;
let state = "start";

// // questions to ask the player
// let questions = {};

function setup(){
  createCanvas(windowWidth, windowHeight);
  startButton = new Button(width/2, height/2, width/4, height/7, pinkButton);
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

function draw(){
  if (state === "start"){
    startScreen();
  }
  else if (state === "menu"){
    menuScreen();
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
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide &&
           y > topSide && y < bottomSide;
    // return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
  }
}

function startScreen() {
  // background for start
  imageMode(CENTER);
  background("#fee2e1");
  image(pinkBg, width/2.05, height/2, width*0.75, height*0.8);

  // title
  textSize(60);
  textFont(littleLego);
  text("AVERAGE OTOME GAME", width/4.5, height/3);
  
  //start button
  startButton.display();
    
  // start txt
  textSize(60);
  textFont(littleLego);
  text("Start", width/2.4, height/1.95);
}

function menuScreen() {
  background("black");
}

function mousePressed(){
  // change state - start to menu
  if (startButton.insideButton(mouseX, mouseY)){
    state = "menu";
  }
}