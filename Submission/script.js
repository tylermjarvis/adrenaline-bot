/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

// Stored Name Variable
let storedName;

// Saving User's Name to Variable
const getName = (name) => {
  if (storedName === undefined) {
    storedName = name;
  }

  return storedName;
};

getName();

// Global Variable
let level = 1;
let path = 0;
let option = 0;

// Edge Cases Path 1
const userInputIsYesAnswers = ["yes", "yup", "yeah", "y"];
const userInputIsNoAnswers = ["no", "nah", "n", "nope"];
const userInputIsBigHeightAnswers = [
  "big heights",
  "bigheights",
  "bigheight",
  "big height",
  "big",
  "heights",
  "height",
];
const userInputIsSkyHighAnswers = ["sky high", "skyhigh", "sky", "high"];
const userInputIsSkyDiveAnswers = ["sky dive", "skydive", "dive"];
const userInputIsRockClimbingAnswers = [
  "rock climbing",
  "rock-climbing",
  "rockclimbing",
  "rock",
  "climbing",
];

// Edge Cases Path 2
const userInputIsFastSpeedsAnswers = [
  "fast speeds",
  "fastspeeds",
  "fastspeed",
  "fast speed",
  "fast",
  "speeds",
  "speed",
];
const userInputIsDoItYourselfAnswers = [
  "do it yourself",
  "doityourself",
  "doit yourself",
  "do ityourself",
];

const getBotReply = (msg) => {
  const changeToLowerCase = msg.toLowerCase();
  const userInputIsRestart = changeToLowerCase === "restart";
  const userInputIsHelp = changeToLowerCase === "help";
  const userInputIsFact = changeToLowerCase === "fact";
  let userInputIsYes = changeToLowerCase;
  let userInputIsNo = changeToLowerCase;

  // Path 1 Variables
  let userInputIsBigHeight = changeToLowerCase;
  let userInputIsSkyHigh = changeToLowerCase;
  const userInputIsBungy = changeToLowerCase === "bungy";
  let userInputIsSkyDive = changeToLowerCase;
  const userInputIsPhysical = changeToLowerCase === "physical";
  let userInputIsRockClimbing = changeToLowerCase;
  const userInputIsCanyoning = changeToLowerCase === "canyoning";

  // Path 2 Variables
  let userInputIsFastSpeeds = changeToLowerCase;
  const userInputIsMotor = changeToLowerCase === "motor";
  let userInputIsDoItYourself = changeToLowerCase;
  const userInputIsWater = changeToLowerCase === "water";
  const userInputIsLand = changeToLowerCase === "land";
  const userInputIsWet = changeToLowerCase === "wet";
  const userInputIsDry = changeToLowerCase === "dry";

  // If Statements for Edge Cases Yes and No
  if (userInputIsYesAnswers.includes(changeToLowerCase)) {
    userInputIsYes = true;
  } else {
    userInputIsYes = false;
  }

  if (userInputIsNoAnswers.includes(changeToLowerCase)) {
    userInputIsNo = true;
  } else {
    userInputIsNo = false;
  }

  // If Statements for Edge Cases Path 1
  if (userInputIsBigHeightAnswers.includes(changeToLowerCase)) {
    userInputIsBigHeight = true;
  } else {
    userInputIsBigHeight = false;
  }

  if (userInputIsSkyHighAnswers.includes(changeToLowerCase)) {
    userInputIsSkyHigh = true;
  } else {
    userInputIsSkyHigh = false;
  }

  if (userInputIsSkyDiveAnswers.includes(changeToLowerCase)) {
    userInputIsSkyDive = true;
  } else {
    userInputIsSkyDive = false;
  }

  if (userInputIsRockClimbingAnswers.includes(changeToLowerCase)) {
    userInputIsRockClimbing = true;
  } else {
    userInputIsRockClimbing = false;
  }

  // If Statements for Edge Cases Path 2
  if (userInputIsFastSpeedsAnswers.includes(changeToLowerCase)) {
    userInputIsFastSpeeds = true;
  } else {
    userInputIsFastSpeeds = false;
  }

  if (userInputIsDoItYourselfAnswers.includes(changeToLowerCase)) {
    userInputIsDoItYourself = true;
  } else {
    userInputIsDoItYourself = false;
  }

  // Storing Name to be Reused
  if (storedName === undefined) {
    storedName = msg;

    return `Nice to meet you ${storedName}! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.`;
  }

  // Return to the Start
  if (userInputIsRestart) {
    level = 1;
    path = 0;
    option = 0;

    return `Welcome back to the start ${storedName}!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.`;
  }

  // Help
  if (userInputIsHelp) {
    return `To use the Adrenaline Bot please respond to the questions with the suggested input. For example, if the question is "What floats your boat more, big heights or fast speeds?" Please type either 'big heights' or 'fast speeds'. When an option has been suggested, the correct input is 'yes' or 'no'. For example, if the question is "Would you be interested in trying a jet boat ride at Huka Falls?" please type 'yes' or 'no'. You may also use the word 'fact' when the Adrenaline Bot has suggested an activity, to find out more about the location of an activity or a fact about the activity. If you do type the incorrect input the Adrenaline Bot will inform you that the input is incorrect and suggest the appropriate input. If you would like to return to the start of the Adrenaline Bot to select a different option, please type 'restart'. To get back into the action, please type one of the inputs given by the Adrenaline Bot in the previous dialogue above. For example 'yes' or 'big heights'.`;
  }

  // First Level
  if (level === 1) {
    if (userInputIsBigHeight) {
      level = 2;
      path = 1;
      return "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    }

    if (userInputIsFastSpeeds) {
      level = 2;
      path = 2;
      return "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    }
  }

  // Path 1 - Level 2
  if (path === 1) {
    if (level === 2) {
      if (userInputIsSkyHigh) {
        level = 3;

        return "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
      }

      if (userInputIsPhysical) {
        level = 3;
        option = 2;

        return "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
      }
    }

    if (level === 3) {
      if (userInputIsBungy) {
        level = 4;
        option = 1;

        return "The bungy is a great option! Just the right amount of thrill! What better place to try it than where it all started, Kawarau Bridge Bungy. Would you be interested in trying this bungy jump? Type 'yes' or 'no' or type 'fact' to learn more about the Kawarau Bridge Bungy.";
      }

      if (userInputIsSkyDive) {
        level = 4;
        option = 2;

        return "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō.";
      }

      if (userInputIsRockClimbing) {
        level = 4;
        option = 3;

        return "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb.";
      }

      if (userInputIsCanyoning) {
        level = 4;
        option = 4;

        return "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan.";
      }
    }

    if (level === 4) {
      if (option === 1) {
        if (userInputIsFact) {
          return `The world's first commercial bungy operation opened at the Kawarau Bridge in November 1988. A couple of young Kiwis, AJ Hackett and Henry van Asch, set up New Zealand's first commercial bungy jumping operation, with a jump from the historic Kawarau Bridge near Queenstown. Since then, New Zealand has become the home of bungy. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the Kawarua Bridge Bungy website if you would like more information and to check out the prices! Enjoy the drop!! <a href="https://www.bungy.co.nz/queenstown/kawarau-bungy-centre/kawarau-bridge-bungy/" target="_blank">www.bungy.co.nz</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 1;

          return "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower.";
        }
      }

      if (option === 2) {
        if (userInputIsFact) {
          return `Lake Taupo is the largest lake in New Zealand spanning about 622 km²; this is about the size of Singapore. Lake Taupo was formed by a series of eruptions. The main Taupo eruption occurred in 181 AD. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the Taupō Tandem Skydive website if you would like more information and to check out the prices! Say hi to the birds for me!! <a href="https://www.taupotandemskydiving.com/skydive-tandem/" target="_blank">www.taupotandemskydiving.com</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 1;

          return "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower.";
        }
      }

      if (option === 3) {
        if (userInputIsFact) {
          return `The technical name for our cable-climb activity is: via ferrata. This term originates in Italy. Via means “way or path” and ferrata comes from ferrous or “Iron”. When you put them together it becomes the ‘iron path’. A via ferrata is a climbing path, where climbers attach themselves to a cable that is fixed to the rock along the route, climbers then climb the path on a series of metal rungs, pegs and ladders. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the Wild Wire website if you would like more information about the climb and to check out the prices! Those views are not to be missed!! <a href="https://www.wildwire.co.nz/" target="_blank">www.wildwire.co.nz</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 2;

          return "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier.";
        }
      }

      if (option === 4) {
        if (userInputIsFact) {
          return `As soon as you’re wrapped up in our warm thick wetsuits and jackets you will be driven through the picturesque town of Raglan and up to the edge of Mt Karioi. Here you will begin your descent down the Karioi Canyon. Challenge yourself to scramble, rock climb and abseil the cascading waterfalls all whilst experiencing the magic the canyon has to offer. The ancient lava flow is surrounded by native bush and natural beauty. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the Raglan Rock Canyoning website if you would like more information and to check out the prices! Enjoy!! <a href="https://www.raglanrock.com/canyoning/" target="_blank">www.raglanrock.com/canyoning</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 2;

          return "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier.";
        }
      }
    }

    if (level === 5) {
      if (option === 1) {
        if (userInputIsFact) {
          return `The Auckland Sky Tower is 328 meters (1,076 feet) tall, making it the tallest building in not just the city, but the whole of New Zealand! It's also the second-tallest free-standing structure in the Southern Hemisphere. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `I am glad I can help! Here is the Skyjump & Skywalk website if you would like more information and to check out the prices! Don't look down! <a href="https://www.bungy.co.nz/auckland/sky-tower/skywalk" target="_blank">www.bungy.co.nz</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          return `I am sorry ${storedName}, but that is all my New Zealand free-falling ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.`;
        }
      }

      if (option === 2) {
        if (userInputIsFact) {
          return `Franz Josef is the steepest and fastest-moving glacier in New Zealand. The steep form of the glacier creates the perfect conditions for ice flow. The glacier has been recorded as moving up to 4 metres per day. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `I am glad I can help! Here is the Franz Josef Glacier Guides NZ website if you would like more information and to check out the prices! Stay frosty! <a href="https://www.franzjosefglacier.com/" target="_blank">www.franzjosefglacier.com</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          return `I am sorry ${storedName}, but that is all my New Zealand climbing high ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.`;
        }
      }
    }
  }

  // Path 2 - Level 2
  if (path === 2) {
    if (level === 2) {
      if (userInputIsMotor) {
        level = 3;

        return "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
      }

      if (userInputIsDoItYourself) {
        level = 3;
        option = 2;

        return "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
      }
    }

    if (level === 3) {
      if (userInputIsWater) {
        level = 4;
        option = 1;

        return "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls.";
      }

      if (userInputIsLand) {
        level = 4;
        option = 2;

        return "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience.";
      }

      if (userInputIsWet) {
        level = 4;
        option = 3;

        return "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river.";
      }

      if (userInputIsDry) {
        level = 4;
        option = 4;

        return "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand.";
      }
    }

    if (level === 4) {
      if (option === 1) {
        if (userInputIsFact) {
          return `Huka Falls are created by water that has flowed through a wide riverbed around 100 metres wide and four metres deep, which is then confined to a narrow river section about 15 metres in width and 10 metres deep. The most impressive part of the Huka Falls is watching extensive amounts of water flow over a cliff 11 metres (35 ft) high. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the Hukafalls Jet website if you would like more information and to check out the prices! Hold on for those 360-degree spins!! <a href="https://www.hukafallsjet.com/" target="_blank">www.hukafallsjet.com</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 1;

          return "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs.";
        }
      }

      if (option === 2) {
        if (userInputIsFact) {
          return `Strapped into your seat with helmet and protective gear on, brace yourself for the power and brute force of an all-terrain monster 4X4 truck. No roof, no doors – there’s nothing between you and the great outdoors. Tackling obstacles such as The Loggers Long Drop, The Widow Maker, The Roll Me Over and The Log Climb! Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the Off Road NZ website if you would like more information and to check out the prices! Enjoy the bumpy ride!! <a href="https://www.offroadnz.co.nz/" target="_blank">www.offroadnz.co.nz</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 1;

          return "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs.";
        }
      }

      if (option === 3) {
        if (userInputIsFact) {
          return `Get stuck into the Kaituna Waterfall river adventure in the heart of the best rafting region of Rotorua, New Zealand. Tighten your grip as you plunge down Tutea Falls - the world's highest commercially rafted waterfall boasting an almighty 7-metre drop. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the Rotorua Rafting website if you would like more information and to check out the prices! Paddle hard!! <a href="https://www.rotorua-rafting.co.nz/kaituna-river-rafting" target="_blank">www.rotorua-rafting.co.nz</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 2;

          return "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms.";
        }
      }

      if (option === 4) {
        if (userInputIsFact) {
          return `For all mountain biking information in New Zealand, follow this website. It includes what bike you need, where to get a bike from, how to choose a track and how to get around New Zealand. <a href="https://www.newzealand.com/sg/feature/how-to-mountain-bike-in-new-zealand/" target="_blank">www.newzealand.com/</a> Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `Here is the New Zealand website if you would like more information about mountain biking locations and track difficulty. Rip some dirt!! <a href="https://www.newzealand.com/sg/feature/top-10-mountain-biking-tracks-in-new-zealand/" target="_blank">www.newzealand.com</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          level = 5;
          option = 2;

          return "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms.";
        }
      }
    }

    if (level === 5) {
      if (option === 1) {
        if (userInputIsFact) {
          return `Hanmer Springs is a small town in the Canterbury region of the South Island of New Zealand. The Māori name for Hanmer Springs is Te Whakatakanga o te Ngārahu o te ahi a Tamatea, which means “where the ashes of Tamate's fire lay”, referring to Tamatea, the captain of the canoe Tākitimu. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `I am glad I can help! Here is the Hanmer Springs Attractions website if you would like more information and to check out the prices! Enjoy the ride! <a href="https://www.hanmerspringsattractions.nz/quad-biking-and-buggies/" target="_blank">www.hanmerspringsattractions.nz</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          return `I am sorry ${storedName}, but that is all my New Zealand high powered ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.`;
        }
      }

      if (option === 2) {
        if (userInputIsFact) {
          return `Glowworms glow because the chemicals and enzymes from their bodies are reacting with oxygen in the air to create light. There is a sac surrounding the light organ that provides oxygen and helps concentrate the reflection of the light. Beyond being pretty to look at, the bioluminescent glow is also used to attract prey. Smaller insects and flies are drawn to the light and fly towards it. Please type 'yes' or 'no' if you are interested in this activity.`;
        }

        if (userInputIsYes) {
          return `I am glad I can help! Here is the Waitomo Caves website if you would like more information and to check out the prices! Enjoy the light show! <a href="https://www.waitomo.com/black-water-rafting/legendary-black-water-rafting-co-black-abyss" target="_blank">www.waitomo.com</a> Type 'restart' to return to the start.`;
        }

        if (userInputIsNo) {
          return `I am sorry ${storedName}, but that is all my New Zealand adventurous ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.`;
        }
      }
    }
  }

  return "Ah sorry mate, I didn't quite catch that! Please enter the specific words suggested by the Adrenaline Bot. Alternatively, you can type 'help' for help and 'restart' to return to the start of the Adrenaline Bot.";
};

export { getBotReply };
