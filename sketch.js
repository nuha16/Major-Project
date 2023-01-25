// Project Title
// Nuha Maisara
// 28/11/22

// reference for ids, containers, classes = https://www.youtube.com/watch?v=wXUhTZpF_HQ&ab_channel=DaniKrossing
// basic html review = https://www.youtube.com/watch?v=MDLn5-zSQQI&ab_channel=Simplilearn
// buttons with html = https://www.youtube.com/watch?v=_2wARy-oevQ&t=3s&ab_channel=BroCode
// reference for css, html and js function = https://www.w3schools.com/
// css basics = https://www.youtube.com/watch?v=1PnVor36_40&ab_channel=WebDevSimplified

// for the code in my sketch js, I referenced this vid https://www.youtube.com/watch?v=R1S_NhKkvGA&t=568s&ab_channel=WebDevSimplified

const dialogueText = document.getElementById("text");
const buttonOption = document.getElementById("option-buttons");

let state = {};

let stateForStartScreen = "start"

// starts the game
function startGame() {
  state = {};
  showTextNode(1);
}

//text
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
    
    ]
  },
  {
    id: 2,
    text: "What did you expect? Actual customization options in an otome game? Moving forward, what will you do next?",
    options: [
      {
        text: "Knock politely, and enter the headmaster's room", //Enter Headmaster's Room
        nextText: 3
      },
      {
        text: "Kick the door open, because you're crazy apparently", //Kick Down Door
        nextText: 4
      },
      {
        text: "Leave this place at once", //Road to Home
        nextText: 5
      }
    ]
  },
  {
    // enter headmaster's room
    id:3,
    text: "You enter the room, expecting someone in at least in their 40s. But no, it was a boy not much older than you.",
    options: [
      {
        text: "Ask him where the headmaster is", //ticked off headmaster
        nextText: 6
      },
      {
        text: "'Wow you're handsome...'", //ticked off headmaster
        nextText: 6
      },
      {
        text: "'What are you doing here kid'", //thrown out ending
        nextText: 7
      }
    ]
  },
  {
    // ticked off headmaster
    id: 6,
    text: "The headmaster frowns and deducts points from your overall grade.", //working hard ending
    options: [
      {
        text: "Next...",
        nextText: 8
      }
    ]
  },
  {
    // thrown out ending
    id: 7,
    text: "You get thrown out of the Academy.", //working hard ending
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    // working hard ending
    id: 8,
    text: "You spend the rest of you time at the Academy drowning in schoolwork and extracurriculars. You work hard and maintain your scholarship and good grades. You graduate with flying colours, and go off to work under a prestigious university as a professor.",
    options: [
      {
        text: "Play Again",
        nextText: -1
       }
    ]
  },
  {
    // kick down door
    id:4,
    text: "Feeling a bit feisty, you decide to assert your dominance by kicking the door open. However, in the seat of the headmaster, there sat a boy not much older than you, frowning.",
    options: [
      {
        text: "What are ya doing here kiddo?", //thrown out ending
        nextText: 7
      },
      {
        text: "Ah, so you are the one I must challenge", //become headmaster ending
        nextText: 9
      },
      {
        text: "Tsk, look like a weakling", //thrown out ending
        nextText: 7
      }
    ]
  },
  {
    // become headmaster ending
    id:9,
    text: "You defeat the headmaster and take over the Academy. Your reign is one of terror. You go down as the worst Headmaster of the Academy.",
    options: [
      {
        text: "Play Again",
        nextText: -1
      }
    ]
  },
  {
    // road to home
    id:5,
    text: "You had a bad feeling about this place, despite it's splendor. Some may call you an idiot, to give up a full ride scholarship to such a decorated institution like the Academy over something like nerves.",
    options: [
      {
        text: "Next...", //bad feeling
        nextText: 10
      }
    ]
  },

  {
    // bad feeling
    id: 10,
    text: "You head out the main entrance of the Academy. Which way are you going?",
    options: [
      {
        text: "Turn left, and walk home", //walk home
        nextText: 11
      },
      {
        text: "Rob a bank, buy a porshe 911, (in pink, of course) drive it home", //rob bank
        nextText: 14
      }
    ]
  },

  {
    // walk home
    id:11,
    text: "You walk out the gates of the Academy, not even turning back once.",
    options: [
      {
        text: "Next...", // sound
        nextText: 15
      }
    ]
  },
  {
    // sound
    id:15,
    text: "You call your mother, telling her that wouldn't be attending the Academy after all. After you end the call, you think about which school to apply to next. Even if your tuition was covered in the Academy, uniform and texbooks would be costly anyways, not to mention additional fees for things like clubs and school trips. So in a way, this was a good thing. Suddenly, you hear a noise in the bushes beside you.",
    options: [
      {
        text: "Check Bushes", //bushes
        nextText: 16
      },
      {
        text: "No, are you kidding, this is how horror movies start", //boring and peaceful ending
        nextText: 17
      }
    ]
  },
  {
    // bushes
    id:16,
    text: "You go and check behind the bushes. And you were right, it was only a cat. What are you, the main character or something? As if danger awaits you at every turn. 'Thud!' You hear another sound nearby, only louder.",
    options: [
      {
        text: "But I AM the main character, so no, that's enough looking around", // boring and peaceful ending
        nextText: 17
      },
      {
        text: "Of course, what could happen?", //check again
        nextText: 18
      }
    ]
  },
  {
    // check again
    id:18,
    text: "Once again, there was nothing crazy there. It must have been another cat, or some small animal.",
    options: [
      {
        text: "That's enough exploring, there's obviously nothing here", // boring and peaceful ending
        nextText: 17
      },
      {
        text: "My spider senses are tingling, there must be something", // spider senses
        nextText: 19
      }
    ]
  },
  {
    // spider senses
    id: 19,
    text: "At this point even I am annoyed that this main character is so persistent. And despite your needless curiosity, there was nothing here, just like before. You approach the forest-like area besides the bushes. Continue searching?",
    options: [
      {
        text: "Ok maybe I am being paranoid", // boring and peaceful ending
        nextText: 17
      },
      {
        text: "Yes, my gut feeling has never betrayed me before", // gut feeling
        nextText: 20
      }
    ]
  },
  {
    // gut feeling
    id:20,
    text: "As you venture into the forest, you see nothing at all. I don't know why you still want to keep looking. There obviously isn't anything here, just go home, I'm begging you.",
    options: [
      {
        text: "You feel bad for the author and return home", // boring and peaceful ending
        nextText: 17
      },
      {
        text: "There must be something here", // persistent protagonist
        nextText: 21
      }
    ]
  },
  {
    // persistent protagonist
    id:21,
    text: "Good thing you don't care about my feelings, because if you did you wouldn't have stumbled across a woman leaning on a tree, with a stab wound on the side of her stomach. She looked pale, but it didn't seem fatal. However, she gave off a dangerous aura.",
    options: [
      {
        text: "Leave, because you don't have a heart", // boring and peaceful ending
        nextText: 17
      },
      {
        text: "Hey are you alri-", // assasination ending
        nextText: 22
      }
    ]
  },
  {
    // boring and peaceful ending
    id:17,
    text: "You return home, safe and sound. You attend a normal school and graduate very normally, get a normal job and live a normal live. You live until your 90s, and die a peaceful death.",
    options: [
      {
        text: "Play Again",
        nextText: -1
      }
    ]
  },
  {
    // assasination ending
    id:22,
    text: "Before you can even finish your sentence, with a swift flick of her wrist, she throws a bloody dagger at you. It pierces your your chest, and your vision starts to dim. 'Ah she was a civilian' She clicks her tongue. Yeah, you died. I tried to warn you.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    // rob bank
    id:14,
    text: "You make it very obvious that you are impulsive, and even unhinged, because why is someone who was about to go to school suddenly deciding to rob a bank? As the main character, you have combat abilities too apparently. You are born with an innate talent for anything you choose to do, including robbing a bank.",
    options: [
      {
        text: "You realize that what you did was insane, return the money to the bank and apologize", // return the money
        nextText: 23
      },
      {
        text: "Now that I'm a criminal... Might as well become a good one", //robin hood ending
        nextText: 24
      },
      {
        text: "I guess I can retire and lay low now that I'm rich", //retire young ending
        nextText: 25
      }
    ]
  },
  {
    // 
    id:23,
    text: "The police takes the money from you, confused. But since you since you're a minor, you get off easy.",
    options: [
      {
        text: "Next..", // boring and peaceful ending
        nextText: 17
      }
    ]
  },
  {
    // Robin Hood ending
    id:24,
    text: "You live the rest of your life stealing from rich corporations and donating that money to all sorts of charities. You beome an infamous Robin Hood of sorts.",
    options: [
      {
        text: "Play Again",
        nextText: -1
      }
    ]
  },
  {
    // 
    id:25,
    text: "Being the main character you are, the police never end up catching you. Consider it plot armour. You buy a small island, and spend the rest of your life on vacation mode. You even pick up youtube and become a widely known online personality. You travel to many countries and die as a happy and fulfilled woman at the age of 97.",
    options: [
      {
        text: "Play Again",
        nextText: -1
      }
    ]
  },
];

startGame();