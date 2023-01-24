// Project Title
// Nuha Maisara
// 28/11/22

// reference for ids, containers, classes = https://www.youtube.com/watch?v=wXUhTZpF_HQ&ab_channel=DaniKrossing
// basic html review = https://www.youtube.com/watch?v=MDLn5-zSQQI&ab_channel=Simplilearn
// buttons with html = https://www.youtube.com/watch?v=_2wARy-oevQ&t=3s&ab_channel=BroCode
// reference for css, html and js function = https://www.w3schools.com/
// css basics = https://www.youtube.com/watch?v=1PnVor36_40&ab_channel=WebDevSimplified
// website where I got my fonts = https://www.dafont.com/
// an extension was needed to be downloaded for the fonts - stxr.iconfont-preview


// for the code in my sketch js, I referenced this vid https://www.youtube.com/watch?v=R1S_NhKkvGA&t=568s&ab_channel=WebDevSimplified

let pinkBg, glassCase, littleLego;

const dialogueText = document.getElementById("text");
const buttonOption = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function preload(){
  // images
  pinkBg = loadImage("images/pink bg.png");
  glassCase = loadImage("images/letter in case.PNG");
  
  // fonts
  littleLego = loadFont("fonts/littlelego.ttf");
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  dialogueText.innerText = textNode.text;
  while (buttonOption.firstChild) {
    buttonOption.removeChild(buttonOption.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("button");
      button.addEventListener("click", () => selectOption(option));
      buttonOption.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: "You walk through the ridiculously lavish corridors of your school. Everything and everyone in this place was unnecessarily sparkly. As you head to the headmaster's office, you spot a mirror. What do you see in the mirror?",
    options: [
      {
        text: "A girl, about 16-17 years old, with green eyes and long brown hair",
        nextText: 2
      },
      {
        text: "A girl, about 16-17 years old, with brown eyes and long brown hair",
        nextText: 2
      },
      {
        text: "A girl, about 16-17 years old, with blue eyes and, you guessed it, long brown hair",
        nextText: 2
      }
      // {
      //   text: "Test try",
      //   setState: { variable: true },
      //   nextText: 2
      // },
      // {
      //   text: "test try 2",
      //   nextText: 2
      // }
    ]
  },
  {
    id: 2,
    text: "text",
    options: [
      {
        text: "text",
        requiredState: (currentState) => currentState.variable,
        setState: { variable: false, thing: true },
        nextText: 3
      },
      {
        text: "text",
        requiredState: (currentState) => currentState.variable,
        setState: { variable: false, thing2: true },
        nextText: 3
      },
      {
        text: "text",
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "text",
    options: [
      {
        text: "text",
        nextText: 4
      },
      {
        text: "text",
        nextText: 5
      },
      {
        text: "text",
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: "text",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: "text",
    options: [
      {
        text: "Play Again",
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: "text",
    options: [
      {
        text: "text",
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: "text",
    options: [
      {
        text: "text",
        nextText: 8
      },
      {
        text: "text",
        requiredState: (currentState) => currentState.thing,
        nextText: 9
      },
      {
        text: "text",
        requiredState: (currentState) => currentState.thing2,
        nextText: 10
      },
      {
        text: "text",
        requiredState: (currentState) => currentState.variable,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: "text",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: "text",
    options: [
      {
        text: "Play Again",
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: "text",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: "text",
    options: [
      {
        text: "Play Again.",
        nextText: -1
      }
    ]
  }
];

startGame();

// function draw(){ 
//   if (state === "start"){
//     startScreen();
//   }
//   else if (state === "menu"){
//     menuScreen();
//   }
// }

// class Button {
//   constructor(x, y, width, height){
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     // this.img = img;
//   }
  
//   display() {
//     image(this.img, this.x, this.y, this.width, this.height);
//     fill("white");
//     // rect(this.x, this.y, this.width, this.height);

//   }
  
//   insideButton(x, y) {
//     // faulty button
//     let leftSide = this.x;
//     let rightSide = this.x + this.width;
//     let topSide = this.y;
//     let bottomSide = this.y + this.height;

//     return x >= leftSide && x <= rightSide && y >= topSide && y <= bottomSide;
//     // return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
//   }
// }

// function startScreen() {
//   // background for start
//   imageMode(CENTER);
//   background("#fee2e1");
//   image(pinkBg, width/2.05, height/2, width*0.75, height*0.8);

//   // title
//   fill("black");
//   textSize(60);
//   textFont(littleLego);
//   text("AVERAGE OTOME GAME", width/4.5, height/3);
  
//   //start button
//   startButton.display();
    
//   // start txt
//   fill("black");
//   textSize(60);
//   textFont(littleLego);
//   text("Start", width/2.4, height/1.95);
// }

// function menuScreen() {
//   background("black");
// }

// function mousePressed(){
//   // change state - start to menu
//   if (startButton.insideButton(mouseX, mouseY)){
//     state = "menu";
//   }
// }