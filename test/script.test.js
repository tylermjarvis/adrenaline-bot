// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  // Start Path 1; Kawarua Bridge Bungy - yes
  it("should reply with - name big heights sky high bungy yes - Here is the Kawarua Bridge Bungy website if you would like more information and to check out the prices! Enjoy the drop!! www.bungy.co.nz", () => {
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("bungy");
    const expectedReply4 =
      "The bungy is a great option! Just the right amount of thrill! What better place to try it than where it all started, Kawarau Bridge Bungy. Would you be interested in trying this bungy jump? Type 'yes' or 'no' or type 'fact' to learn more about the Kawarau Bridge Bungy.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the Kawarua Bridge Bungy website if you would like more information and to check out the prices! Enjoy the drop!! <a href="https://www.bungy.co.nz/queenstown/kawarau-bungy-centre/kawarau-bridge-bungy/" target="_blank">www.bungy.co.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Kawarua Bridge Bungy - fact
  it("should reply with - name big heights sky high bungy fact - The world's first commercial bungy operation opened at the Kawarau Bridge in November 1988.", () => {
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("bungy");
    const expectedReply4 =
      "The bungy is a great option! Just the right amount of thrill! What better place to try it than where it all started, Kawarau Bridge Bungy. Would you be interested in trying this bungy jump? Type 'yes' or 'no' or type 'fact' to learn more about the Kawarau Bridge Bungy.";
    const botReply5 = getBotReply("fact");
    const expectedReply5 =
      "The world's first commercial bungy operation opened at the Kawarau Bridge in November 1988. A couple of young Kiwis, AJ Hackett and Henry van Asch, set up New Zealand's first commercial bungy jumping operation, with a jump from the historic Kawarau Bridge near Queenstown. Since then, New Zealand has become the home of bungy. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Kawarua Bridge Bungy - no && SkyTower SkyWalk and SkyJump - yes
  it("should reply with - name big heights sky high bungy no yes - I am glad I can help! Here is the Skyjump & Skywalk website if you would like more information and to check out the prices! Don't look down! www.bungy.co.nz/auckland/sky-tower/skywalk", () => {
    // Input: "big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "sky high"
    // Output: "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'."
    // Input: "bungy"
    // Output: "The bungy is a great option! Just the right amount of thrill! What better place to try it than where it all started, Kawarau Bridge Bungy. Would you be interested in trying this bungy jump? Type 'yes' or 'no' or type 'fact' to learn more about the Kawarau Bridge Bungy."
    // Input: "no"
    // Output: "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower."
    // Input: "yes"
    // Output: "I am glad I can help! Here is the Skyjump & Skywalk website if you would like more information and to check out the prices! Don't look down! <a href="https://www.bungy.co.nz/auckland/sky-tower/skywalk" target="_blank">www.bungy.co.nz</a> Type 'restart' to return to the start."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("bungy");
    const expectedReply4 =
      "The bungy is a great option! Just the right amount of thrill! What better place to try it than where it all started, Kawarau Bridge Bungy. Would you be interested in trying this bungy jump? Type 'yes' or 'no' or type 'fact' to learn more about the Kawarau Bridge Bungy.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Skyjump & Skywalk website if you would like more information and to check out the prices! Don't look down! <a href="https://www.bungy.co.nz/auckland/sky-tower/skywalk" target="_blank">www.bungy.co.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Kawarua Bridge Bungy - no && SkyTower SkyWalk and SkyJump - no
  it("should reply with - name big heights sky high bungy no no - I am sorry, but that is all my New Zealand free-falling ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input: "big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "sky high"
    // Output: "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'."
    // Input: "bungy"
    // Output: "The bungy is a great option! Just the right amount of thrill! What better place to try it than where it all started, Kawarau Bridge Bungy. Would you be interested in trying this bungy jump? Type 'yes' or 'no' or type 'fact' to learn more about the Kawarau Bridge Bungy."
    // Input: "no"
    // Output: "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower."
    // Input: "no"
    // Output: "I am sorry ${name}, but that is all my New Zealand free-falling ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("bungy");
    const expectedReply4 =
      "The bungy is a great option! Just the right amount of thrill! What better place to try it than where it all started, Kawarau Bridge Bungy. Would you be interested in trying this bungy jump? Type 'yes' or 'no' or type 'fact' to learn more about the Kawarau Bridge Bungy.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand free-falling ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Taupō Tandem Skydive - yes
  it("should reply with - name big heights sky high sky dive yes - Here is the Taupō Tandem Skydive website if you would like more information and to check out the prices! Say hi to the birds for me!! www.taupotandemskydiving.com/skydive-tandem/", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "sky high"
    // Output: "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'."
    // Input: "sky dive"
    // Output: "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō."
    // Input: "yes"
    // Output: "Here is the Taupō Tandem Skydive website if you would like more information and to check out the prices! Say hi to the birds for me!! <a href="https://www.taupotandemskydiving.com/skydive-tandem/" target="_blank">www.taupotandemskydiving.com</a> Type 'restart' to return to the start."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("sky dive");
    const expectedReply4 =
      "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the Taupō Tandem Skydive website if you would like more information and to check out the prices! Say hi to the birds for me!! <a href="https://www.taupotandemskydiving.com/skydive-tandem/" target="_blank">www.taupotandemskydiving.com</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Taupō Tandem Skydive - fact
  it("should reply with - name big heights sky high sky dive fact - Lake Taupo is the largest lake in New Zealand spanning about 622 km²; this is about the size of Singapore.", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "sky high"
    // Output: "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'."
    // Input: "sky dive"
    // Output: "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō."
    // Input: "fact"
    // Output: "Lake Taupo is the largest lake in New Zealand spanning about 622 km²; this is about the size of Singapore. Lake Taupo was formed by a series of eruptions. The main Taupo eruption occurred in 181 AD. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("sky dive");
    const expectedReply4 =
      "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō.";
    const botReply5 = getBotReply("fact");
    const expectedReply5 =
      "Lake Taupo is the largest lake in New Zealand spanning about 622 km²; this is about the size of Singapore. Lake Taupo was formed by a series of eruptions. The main Taupo eruption occurred in 181 AD. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Taupō Tandem Skydive - no - && SkyTower SkyWalk and SkyJump - yes
  it("should reply with - name big heights sky high sky dive no yes - I am glad I can help! Here is the Skyjump & Skywalk website if you would like more information and to check out the prices! Don't look down! www.bungy.co.nz/auckland/sky-tower/skywalk", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "sky high"
    // Output: "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'."
    // Input: "sky dive"
    // Output: "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō."
    // Input: "no"
    // Output: "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower."
    // Input: "yes"
    // Output: "I am glad I can help! Here is the Skyjump & Skywalk website if you would like more information and to check out the prices! Don't look down! <a href="https://www.bungy.co.nz/auckland/sky-tower/skywalk" target="_blank">www.bungy.co.nz</a> Type 'restart' to return to the start."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("sky dive");
    const expectedReply4 =
      "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Skyjump & Skywalk website if you would like more information and to check out the prices! Don't look down! <a href="https://www.bungy.co.nz/auckland/sky-tower/skywalk" target="_blank">www.bungy.co.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Taupō Tandem Skydive - no - && SkyTower SkyWalk and SkyJump - no
  it("should reply with - name big heights sky high sky dive no no - I am sorry, but that is all my New Zealand free-falling ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "sky high"
    // Output: "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'."
    // Input: "sky dive"
    // Output: "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō."
    // Input: "no"
    // Output: "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower."
    // Input: "no"
    // Output: "I am sorry ${name}, but that is all my New Zealand free-falling ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("sky dive");
    const expectedReply4 =
      "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand free-falling ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Taupō Tandem Skydive - no - && SkyTower SkyWalk and SkyJump - fact
  it("should reply with - name big heights sky high sky dive no fact - The Auckland Sky Tower is 328 meters (1,076 feet) tall, making it the tallest building in not just the city, but the whole of New Zealand!", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "sky high"
    // Output: "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'."
    // Input: "sky dive"
    // Output: "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō."
    // Input: "no"
    // Output: "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower."
    // Input: "fact"
    // Output: "The Auckland Sky Tower is 328 meters (1,076 feet) tall, making it the tallest building in not just the city, but the whole of New Zealand! It's also the second-tallest free-standing structure in the Southern Hemisphere. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("sky high");
    const expectedReply3 =
      "So, you love the sinking feeling you get in your stomach when you drop? Well, you've come to the right place. The right place being New Zealand, home of the bungy! Would you like to try a bungy, or something a little higher, like a skydive? Please type 'bungy' or 'sky dive'.";
    const botReply4 = getBotReply("sky dive");
    const expectedReply4 =
      "Someone's extreme! We love it! How does skydiving over a massive lake sound? The views over Lake Taupō will blow you away, literally! Would you be interested in trying a skydive with Taupō Tandem Skydive? Type 'yes' or 'no' or type 'fact' to learn more about Taupō.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "I thought that was going to be your cup of tea! No stress, I have another option you might like. Maybe something that still has a drop, but controls you on the way down? Would you be interested in the Skyjump & Skywalk at the Skytower in Auckland? Type 'yes' or 'no' or type 'fact' to learn more about the Skytower.";
    const botReply6 = getBotReply("fact");
    const expectedReply6 =
      "The Auckland Sky Tower is 328 meters (1,076 feet) tall, making it the tallest building in not just the city, but the whole of New Zealand! It's also the second-tallest free-standing structure in the Southern Hemisphere. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Wild Wire - yes
  it("should reply with - name big heights physical rock climbing yes - Here is the Wild Wire website if you would like more information about the climb and to check out the prices! Those views are not to be missed!! www.wildwire.co.nz", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "rock climbing"
    // Output: "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb."
    // Input: "yes"
    // Output: "Here is the Wild Wire website if you would like more information about the climb and to check out the prices! Those views are not to be missed!! <a href="https://www.wildwire.co.nz/" target="_blank">www.wildwire.co.nz</a> Type 'restart' to return to the start."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("rock climbing");
    const expectedReply4 =
      "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the Wild Wire website if you would like more information about the climb and to check out the prices! Those views are not to be missed!! <a href="https://www.wildwire.co.nz/" target="_blank">www.wildwire.co.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Wild Wire - fact
  it("should reply with - name big heights physical rock climbing fact - The technical name for our cable-climb activity is: via ferrata. This term originates in Italy. Via means “way or path” and ferrata comes from ferrous or “Iron”. When you put them together it becomes the ‘iron path’.", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "rock climbing"
    // Output: "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb."
    // Input: "fact"
    // Output: "The technical name for our cable-climb activity is: via ferrata. This term originates in Italy. Via means “way or path” and ferrata comes from ferrous or “Iron”. When you put them together it becomes the ‘iron path’. A via ferrata is a climbing path, where climbers attach themselves to a cable that is fixed to the rock along the route, climbers then climb the path on a series of metal rungs, pegs and ladders. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("rock climbing");
    const expectedReply4 =
      "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb.";
    const botReply5 = getBotReply("fact");
    const expectedReply5 =
      "The technical name for our cable-climb activity is: via ferrata. This term originates in Italy. Via means “way or path” and ferrata comes from ferrous or “Iron”. When you put them together it becomes the ‘iron path’. A via ferrata is a climbing path, where climbers attach themselves to a cable that is fixed to the rock along the route, climbers then climb the path on a series of metal rungs, pegs and ladders. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Wild Wire - no && Franz Josef Glacier - yes
  it("should reply with - name big heights physical rock climbing no yes - I am glad I can help! Here is the Franz Josef Glacier Guides NZ website if you would like more information and to check out the prices! Stay frosty! www.franzjosefglacier.com/", () => {
    // Input: "big heights"
    // Output:
    // "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "rock climbing"
    // Output: "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb."
    // Input: "no"
    // Output: "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier."
    // Input: "yes"
    // Output: `I am glad I can help! Here is the Franz Josef Glacier Guides NZ website if you would like more information and to check out the prices! Stay frosty! <a href="https://www.franzjosefglacier.com/" target="_blank">www.franzjosefglacier.com</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("rock climbing");
    const expectedReply4 =
      "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Franz Josef Glacier Guides NZ website if you would like more information and to check out the prices! Stay frosty! <a href="https://www.franzjosefglacier.com/" target="_blank">www.franzjosefglacier.com</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Wild Wire - no && Franz Josef Glacier - no
  it("should reply with - name big heights physical rock climbing no no - I am sorry, but that is all my New Zealand climbing high ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input: "big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "rock climbing"
    // Output: "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb."
    // Input: "no"
    // Output: "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier."
    // Input: "no"
    // Output: "I am sorry ${name}, but that is all my New Zealand climbing high ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("rock climbing");
    const expectedReply4 =
      "Rock climbing is a wicked option! Do you want to climb the world’s highest waterfall cable climb in Wanaka? Would you be interested in testing yourself with this climb? Type 'yes' or 'no' or type 'fact' for a fun fact about the cable climb.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand climbing high ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Raglan Rock Canyoning - yes
  it("should reply with - name big heights physical canyoning yes - Here is the Raglan Rock Canyoning website if you would like more information and to check out the prices! Enjoy!! www.raglanrock.com/canyoning/", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "canyoning"
    // Output: "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan."
    // Input: "yes"
    // Output: `Here is the Raglan Rock Canyoning website if you would like more information and to check out the prices! Enjoy!! <a href="https://www.raglanrock.com/canyoning/" target="_blank">www.raglanrock.com/canyoning</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("canyoning");
    const expectedReply4 =
      "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the Raglan Rock Canyoning website if you would like more information and to check out the prices! Enjoy!! <a href="https://www.raglanrock.com/canyoning/" target="_blank">www.raglanrock.com/canyoning</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Raglan Rock Canyoning - fact
  it("should reply with - name big heights physical canyoning fact - As soon as you’re wrapped up in our warm thick wetsuits and jackets you will be driven through the picturesque town of Raglan and up to the edge of Mt Karioi.", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "canyoning"
    // Output: "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan."
    // Input: "fact"
    // Output: "As soon as you’re wrapped up in our warm thick wetsuits and jackets you will be driven through the picturesque town of Raglan and up to the edge of Mt Karioi. Here you will begin your descent down the Karioi Canyon. Challenge yourself to scramble, rock climb and abseil the cascading waterfalls all whilst experiencing the magic the canyon has to offer. The ancient lava flow is surrounded by native bush and natural beauty. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("canyoning");
    const expectedReply4 =
      "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan.";
    const botReply5 = getBotReply("fact");
    const expectedReply5 =
      "As soon as you’re wrapped up in our warm thick wetsuits and jackets you will be driven through the picturesque town of Raglan and up to the edge of Mt Karioi. Here you will begin your descent down the Karioi Canyon. Challenge yourself to scramble, rock climb and abseil the cascading waterfalls all whilst experiencing the magic the canyon has to offer. The ancient lava flow is surrounded by native bush and natural beauty. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Raglan Rock Canyoning - no - && Franz Josef Glacier - yes
  it("should reply with - name big heights physical canyoning no yes - I am glad I can help! Here is the Franz Josef Glacier Guides NZ website if you would like more information and to check out the prices! Stay frosty! www.franzjosefglacier.com/", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "canyoning"
    // Output: "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan."
    // Input: "no"
    // Output: "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier."
    // Input: "yes"
    // Output: `I am glad I can help! Here is the Franz Josef Glacier Guides NZ website if you would like more information and to check out the prices! Stay frosty! <a href="https://www.franzjosefglacier.com/" target="_blank">www.franzjosefglacier.com</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("canyoning");
    const expectedReply4 =
      "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Franz Josef Glacier Guides NZ website if you would like more information and to check out the prices! Stay frosty! <a href="https://www.franzjosefglacier.com/" target="_blank">www.franzjosefglacier.com</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Raglan Rock Canyoning - no - && Franz Josef Glacier - no
  it("should reply with - name big heights physical rock climbing no no - I am sorry name, but that is all my New Zealand climbing high ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "canyoning"
    // Output: "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan."
    // Input: "no"
    // Output: "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier."
    // Input: "no"
    // Output: "I am sorry ${name}, but that is all my New Zealand climbing high ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("canyoning");
    const expectedReply4 =
      "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand climbing high ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Raglan Rock Canyoning - no - && Franz Josef Glacier - fact
  it("should reply with - name big heights physical rock climbing no fact - Franz Josef is the steepest and fastest-moving glacier in New Zealand.", () => {
    // Input:"big heights"
    // Output: "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'."
    // Input: "physical"
    // Output: "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'."
    // Input: "canyoning"
    // Output: "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan."
    // Input: "no"
    // Output: "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier."
    // Input: "fact"
    // Output: "Franz Josef is the steepest and fastest-moving glacier in New Zealand. The steep form of the glacier creates the perfect conditions for ice flow. The glacier has been recorded as moving up to 4 metres per day. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("big heights");
    const expectedReply2 =
      "Wicked! I love big heights too! Anything from skydiving to rock climbing, I'm all for it. Do you like activities that are sky-high or physical? Please type 'sky high' or 'physical'.";
    const botReply3 = getBotReply("physical");
    const expectedReply3 =
      "Physical it is! You can't beat the reward of accomplishing something physically difficult! What would you like to tick off the bucket list? Rock-climbing or Canyoning? Please type 'rock-climbing' or 'canyoning'.";
    const botReply4 = getBotReply("canyoning");
    const expectedReply4 =
      "Explore nature in the most action-packed way! Why not check out Raglan Rock Canyoning to fill that need for jam-packed action? Would you be interested in trying a Raglan Rock Canyoning? Type 'yes' or 'no' or type 'fact' to learn more about what to expect whilst canyoning the ancient lava flow of Mount Karioi in Raglan.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No problem, I have another option that will fill the need to achieve! This may use your arm muscles a little less, but the view from the top will still be amazing. How about a glacier tour? Franz Josef Glacier Guides offer a picturesque experience. Would you be interested in climbing a glacier? Type 'yes' or 'no' or type 'fact' to learn more about the Franz Josef Glacier.";
    const botReply6 = getBotReply("fact");
    const expectedReply6 =
      "Franz Josef is the steepest and fastest-moving glacier in New Zealand. The steep form of the glacier creates the perfect conditions for ice flow. The glacier has been recorded as moving up to 4 metres per day. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Start Path 2; Hukafalls Jet - yes
  it("should reply with - name fast speeds motor water yes - Here is the Hukafalls Jet website if you would like more information and to check out the prices! Hold on for those 360-degree spins!! www.hukafallsjet.com/", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "water"
    // Output: "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls."
    // Input: "yes"
    // Output: `Here is the Hukafalls Jet website if you would like more information and to check out the prices! Hold on for those 360-degree spins!! <a href="https://www.hukafallsjet.com/" target="_blank">www.hukafallsjet.com</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("water");
    const expectedReply4 =
      "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the Hukafalls Jet website if you would like more information and to check out the prices! Hold on for those 360-degree spins!! <a href="https://www.hukafallsjet.com/" target="_blank">www.hukafallsjet.com</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Hukafalls Jet - fact
  it("should reply with - name fast speeds motor water fact - Huka Falls are created by water that has flowed through a wide riverbed around 100 metres wide and four metres deep, which is then confined to a narrow river section about 15 metres in width and 10 metres deep.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "water"
    // Output: "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls."
    // Input: "fact"
    // Output: "Huka Falls are created by water that has flowed through a wide riverbed around 100 metres wide and four metres deep, which is then confined to a narrow river section about 15 metres in width and 10 metres deep. The most impressive part of the Huka Falls is watching extensive amounts of water flow over a cliff 11 metres (35 ft) high. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("water");
    const expectedReply4 =
      "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls.";
    const botReply5 = getBotReply("fact");
    const expectedReply5 =
      "Huka Falls are created by water that has flowed through a wide riverbed around 100 metres wide and four metres deep, which is then confined to a narrow river section about 15 metres in width and 10 metres deep. The most impressive part of the Huka Falls is watching extensive amounts of water flow over a cliff 11 metres (35 ft) high. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Hukafalls Jet - no && Hanmer Springs Quad Biking - yes
  it("should reply with - name fast speeds motor water no yes - I am glad I can help! Here is the Hanmer Springs Attractions website if you would like more information and to check out the prices! Enjoy the ride! www.hanmerspringsattractions.nz/quad-biking-and-buggies/", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "water"
    // Output: "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls."
    // Input: "no"
    // Output: "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs."
    // Input: "yes"
    // Output: `I am glad I can help! Here is the Hanmer Springs Attractions website if you would like more information and to check out the prices! Enjoy the ride! <a href="https://www.hanmerspringsattractions.nz/quad-biking-and-buggies/" target="_blank">www.hanmerspringsattractions.nz/quad-biking-and-buggies</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("water");
    const expectedReply4 =
      "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Hanmer Springs Attractions website if you would like more information and to check out the prices! Enjoy the ride! <a href="https://www.hanmerspringsattractions.nz/quad-biking-and-buggies/" target="_blank">www.hanmerspringsattractions.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Hukafalls Jet - no && Hanmer Springs Quad Biking - no
  it("should reply with - name fast speeds motor water no no - I am sorry name, but that is all my New Zealand high powered ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "water"
    // Output: "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls."
    // Input: "no"
    // Output: "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs."
    // Input: "no"
    // Output: "I am sorry name, but that is all my New Zealand high powered ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("water");
    const expectedReply4 =
      "Fast and in water? Check! How does Huka Falls jet boating sound? She's pretty fast, full of thrills and the Waikato River is stunning. Would you be interested in trying a jet boat ride at Huka Falls? Type 'yes' or 'no' or type 'fact' to learn more about Huka Falls.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand high powered ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Off Road NZ - yes
  it("should reply with - name fast speeds motor land yes - Here is the Off Road NZ website if you would like more information and to check out the prices! Enjoy the bumpy ride!! www.offroadnz.co.nz/", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "land"
    // Output: "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience."
    // Input: "yes"
    // Output: `Here is the Off Road NZ website if you would like more information and to check out the prices! Enjoy the bumpy ride!! <a href="https://www.offroadnz.co.nz/" target="_blank">www.offroadnz.co.nz</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("land");
    const expectedReply4 =
      "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the Off Road NZ website if you would like more information and to check out the prices! Enjoy the bumpy ride!! <a href="https://www.offroadnz.co.nz/" target="_blank">www.offroadnz.co.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Off Road NZ - fact
  it("should reply with - name fast speeds motor land fact - Strapped into your seat with helmet and protective gear on, brace yourself for the power and brute force of an all-terrain monster 4X4 truck.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "land"
    // Output: "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience."
    // Input: "fact"
    // Output: "Strapped into your seat with helmet and protective gear on, brace yourself for the power and brute force of an all-terrain monster 4X4 truck. No roof, no doors – there’s nothing between you and the great outdoors. Tackling obstacles such as The Loggers Long Drop, The Widow Maker, The Roll Me Over and The Log Climb! Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("land");
    const expectedReply4 =
      "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience.";
    const botReply6 = getBotReply("fact");
    const expectedReply6 =
      "Strapped into your seat with helmet and protective gear on, brace yourself for the power and brute force of an all-terrain monster 4X4 truck. No roof, no doors – there’s nothing between you and the great outdoors. Tackling obstacles such as The Loggers Long Drop, The Widow Maker, The Roll Me Over and The Log Climb! Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Off Road NZ - no && Hanmer Springs Quad Biking - yes
  it("should reply with - name fast speeds motor land no yes - I am glad I can help! Here is the Hanmer Springs Attractions website if you would like more information and to check out the prices! Enjoy the ride! www.hanmerspringsattractions.nz/quad-biking-and-buggies/", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "land"
    // Output: "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience."
    // Input: "no"
    // Output: "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs."
    // Input: "yes"
    // Output: `I am glad I can help! Here is the Hanmer Springs Attractions website if you would like more information and to check out the prices! Enjoy the ride! <a href="https://www.hanmerspringsattractions.nz/quad-biking-and-buggies/" target="_blank">www.hanmerspringsattractions.nz/quad-biking-and-buggies</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("land");
    const expectedReply4 =
      "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Hanmer Springs Attractions website if you would like more information and to check out the prices! Enjoy the ride! <a href="https://www.hanmerspringsattractions.nz/quad-biking-and-buggies/" target="_blank">www.hanmerspringsattractions.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Off Road NZ - no && Hanmer Springs Quad Biking - no
  it("should reply with - name fast speeds motor water no no - I am sorry name, but that is all my New Zealand high powered ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "land"
    // Output: "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience."
    // Input: "no"
    // Output: "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs."
    // Input: "no"
    // Output: "I am sorry name, but that is all my New Zealand high powered ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("land");
    const expectedReply4 =
      "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand high powered ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Off Road NZ - no && Hanmer Springs Quad Biking - fact
  it("should reply with - name fast speeds motor land no fact - Hanmer Springs is a small town in the Canterbury region of the South Island of New Zealand. The Māori name for Hanmer Springs is Te Whakatakanga o te Ngārahu o te ahi a Tamatea, which means “where the ashes of Tamate's fire lay”, referring to Tamatea, the captain of the canoe Tākitimu", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "motor"
    // Output: "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'."
    // Input: "land"
    // Output: "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience."
    // Input: "no"
    // Output: "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs."
    // Input: "fact"
    // Output: "Hanmer Springs is a small town in the Canterbury region of the South Island of New Zealand. The Māori name for Hanmer Springs is Te Whakatakanga o te Ngārahu o te ahi a Tamatea, which means “where the ashes of Tamate's fire lay”, referring to Tamatea, the captain of the canoe Tākitimu. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("motor");
    const expectedReply3 =
      "More horsepower equals more fun! So, we're looking for something with an engine? Would you prefer to be in the water or on land? Please type 'water' or 'land'.";
    const botReply4 = getBotReply("land");
    const expectedReply4 =
      "Do you enjoy bumpy rides? Navigating difficult terrain? Does off-roading sound like a bit of you? Off Road NZ in Rotorua has a couple of different off-roading options. Would you be interested in trying off-roading in Rotorua? Type 'yes' or 'no' or type 'fact' to learn more about the off-roading experience.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "What about a mix of both water and land? With Hanmer Springs Quad Biking and Buggies they do just that! Enjoy river crossings and a slightly rugged track. Would you be interested in trying a quad bike tour in Hanmer Springs? Type 'yes' or 'no' or type 'fact' to learn more about Hanmer Springs.";
    const botReply6 = getBotReply("fact");
    const expectedReply6 =
      "Hanmer Springs is a small town in the Canterbury region of the South Island of New Zealand. The Māori name for Hanmer Springs is Te Whakatakanga o te Ngārahu o te ahi a Tamatea, which means “where the ashes of Tamate's fire lay”, referring to Tamatea, the captain of the canoe Tākitimu. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Rotorua Rafting - yes
  it("should reply with - name fast speeds do it yourself wet yes - Here is the Rotorua Rafting website if you would like more information and to check out the prices! Paddle hard!! www.rotorua-rafting.co.nz/kaituna-river-rafting", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "wet"
    // Output: "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river."
    // Input: "yes"
    // Output: `Here is the Rotorua Rafting website if you would like more information and to check out the prices! Paddle hard!! <a href="https://www.rotorua-rafting.co.nz/kaituna-river-rafting" target="_blank">www.rotorua-rafting.co.nz</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("wet");
    const expectedReply4 =
      "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the Rotorua Rafting website if you would like more information and to check out the prices! Paddle hard!! <a href="https://www.rotorua-rafting.co.nz/kaituna-river-rafting" target="_blank">www.rotorua-rafting.co.nz</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Rotorua Rafting - fact
  it("should reply with - name fast speeds do it yourself wet fact - Get stuck into the Kaituna Waterfall river adventure in the heart of the best rafting region of Rotorua, New Zealand. Tighten your grip as you plunge down Tutea Falls.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "wet"
    // Output: "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river."
    // Input: "fact"
    // Output: "Get stuck into the Kaituna Waterfall river adventure in the heart of the best rafting region of Rotorua, New Zealand. Tighten your grip as you plunge down Tutea Falls - the world's highest commercially rafted waterfall boasting an almighty 7-metre drop. Please type 'yes' or 'no' if you are interested in this activity."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("wet");
    const expectedReply4 =
      "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river.";
    const botReply6 = getBotReply("fact");
    const expectedReply6 =
      "Get stuck into the Kaituna Waterfall river adventure in the heart of the best rafting region of Rotorua, New Zealand. Tighten your grip as you plunge down Tutea Falls - the world's highest commercially rafted waterfall boasting an almighty 7-metre drop. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Rotorua Rafting - yes - no Waitomo Caves Black Water Rafting - yes
  it("should reply with - name fast speeds do it yourself wet no yes - I am glad I can help! Here is the Waitomo Caves website if you would like more information and to check out the prices! Enjoy the light show! www.waitomo.com/black-water-rafting/legendary-black-water-rafting-co-black-abyss", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "wet"
    // Output: "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river.."
    // Input: "no"
    // Output: "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms."
    // Input: "yes"
    // Output: `I am glad I can help! Here is the Waitomo Caves website if you would like more information and to check out the prices! Enjoy the light show! <a href="https://www.waitomo.com/black-water-rafting/legendary-black-water-rafting-co-black-abyss" target="_blank">www.waitomo.com</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("wet");
    const expectedReply4 =
      "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Waitomo Caves website if you would like more information and to check out the prices! Enjoy the light show! <a href="https://www.waitomo.com/black-water-rafting/legendary-black-water-rafting-co-black-abyss" target="_blank">www.waitomo.com</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Rotorua Rafting - yes - no Waitomo Caves Black Water Rafting - no
  it("should reply with - name fast speeds do it yourself wet no no - I am sorry name, but that is all my New Zealand adventurous ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "wet"
    // Output: "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river.."
    // Input: "no"
    // Output: "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms."
    // Input: "no"
    // Output: "I am sorry ${name}, but that is all my New Zealand adventurous ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("wet");
    const expectedReply4 =
      "Are you ready to power through the river in a raft, tackling rapids and waterfalls? At Rotorua Rafting they do just that! Would you be interested in rafting the Kaituna river? Type 'yes' or 'no' or type 'fact' to learn more about the Kaituna river.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand adventurous ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Mountain Biking - yes
  it("should reply with - name fast speeds do it yourself dry yes - Here is the New Zealand website if you would like more information about mountain biking locations and track difficulty. Rip some dirt!! www.newzealand.com/sg/feature/top-10-mountain-biking-tracks-in-new-zealand/", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "dry"
    // Output: "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand."
    // Input: "yes"
    // Output: `Here is the New Zealand website if you would like more information about mountain biking locations and track difficulty. Rip some dirt!! <a href="https://www.newzealand.com/sg/feature/top-10-mountain-biking-tracks-in-new-zealand/" target="_blank">www.newzealand.com</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("dry");
    const expectedReply4 =
      "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand.";
    const botReply5 = getBotReply("yes");
    const expectedReply5 = `Here is the New Zealand website if you would like more information about mountain biking locations and track difficulty. Rip some dirt!! <a href="https://www.newzealand.com/sg/feature/top-10-mountain-biking-tracks-in-new-zealand/" target="_blank">www.newzealand.com</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });

  // Mountain Biking - fact
  it("should reply with - name fast speeds do it yourself dry fact - For all mountain biking information in New Zealand, follow this website. It includes what bike you need, where to get a bike from, how to choose a track and how to get around New Zealand.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "dry"
    // Output: "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand."
    // Input: "fact"
    // Output: `For all mountain biking information in New Zealand, follow this website. It includes what bike you need, where to get a bike from, how to choose a track and how to get around New Zealand. <a href="https://www.newzealand.com/sg/feature/how-to-mountain-bike-in-new-zealand/" target="_blank">www.newzealand.com/</a> Please type 'yes' or 'no' if you are interested in this activity.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("dry");
    const expectedReply4 =
      "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand.";
    const botReply6 = getBotReply("fact");
    const expectedReply6 = `For all mountain biking information in New Zealand, follow this website. It includes what bike you need, where to get a bike from, how to choose a track and how to get around New Zealand. <a href="https://www.newzealand.com/sg/feature/how-to-mountain-bike-in-new-zealand/" target="_blank">www.newzealand.com/</a> Please type 'yes' or 'no' if you are interested in this activity.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Mountain Biking - no - && Waitomo Caves Black Water Rafting - yes
  it("should reply with - name fast speeds do it yourself dry no yes - I am glad I can help! Here is the Waitomo Caves website if you would like more information and to check out the prices! Enjoy the light show! www.waitomo.com/black-water-rafting/legendary-black-water-rafting-co-black-abyss", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "dry"
    // Output: "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand."
    // Input: "no"
    // Output: "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms."
    // Input: "yes"
    // Output: `I am glad I can help! Here is the Waitomo Caves website if you would like more information and to check out the prices! Enjoy the light show! <a href="https://www.waitomo.com/black-water-rafting/legendary-black-water-rafting-co-black-abyss" target="_blank">www.waitomo.com</a> Type 'restart' to return to the start.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("dry");
    const expectedReply4 =
      "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms.";
    const botReply6 = getBotReply("yes");
    const expectedReply6 = `I am glad I can help! Here is the Waitomo Caves website if you would like more information and to check out the prices! Enjoy the light show! <a href="https://www.waitomo.com/black-water-rafting/legendary-black-water-rafting-co-black-abyss" target="_blank">www.waitomo.com</a> Type 'restart' to return to the start.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Mountain Biking - no - && Waitomo Caves Black Water Rafting - no
  it("should reply with - name fast speeds do it yourself dry no no - I am sorry name, but that is all my New Zealand adventurous ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "dry"
    // Output: "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand."
    // Input: "no"
    // Output: "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms."
    // Input: "no"
    // Output: "I am sorry name, but that is all my New Zealand adventurous ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option."
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("dry");
    const expectedReply4 =
      "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms.";
    const botReply6 = getBotReply("no");
    const expectedReply6 =
      "I am sorry name, but that is all my New Zealand adventurous ideas! Sorry to let you down. Please type 'restart' to go back to the start and try a different option.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Mountain Biking - no - && Waitomo Caves Black Water Rafting - fact
  it("should reply with - name fast speeds do it yourself dry no fact - Glowworms glow because the chemicals and enzymes from their bodies are reacting with oxygen in the air to create light.", () => {
    // Input:"fast speeds"
    // Output: "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'."
    // Input: "do it yourself"
    // Output: "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'."
    // Input: "dry"
    // Output: "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand."
    // Input: "no"
    // Output: "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms."
    // Input: "fact"
    // Output: `Glowworms glow because the chemicals and enzymes from their bodies are reacting with oxygen in the air to create light. There is a sac surrounding the light organ that provides oxygen and helps concentrate the reflection of the light. Beyond being pretty to look at, the bioluminescent glow is also used to attract prey. Smaller insects and flies are drawn to the light and fly towards it. Please type 'yes' or 'no' if you are interested in this activity.`
    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("fast speeds");
    const expectedReply2 =
      "Alright! Let's go, Lightning McQueen! I wonder if you would like the rumble of an engine or creating the power yourself? Would you prefer a motor or do it yourself? Please type 'motor' or 'do it yourself'.";
    const botReply3 = getBotReply("do it yourself");
    const expectedReply3 =
      "You are the machine! Righto! Now that I understand what type of activity you prefer. The final question is, do you like getting your feet wet or keeping them dry? Please type 'wet' or 'dry'.";
    const botReply4 = getBotReply("dry");
    const expectedReply4 =
      "Sometimes it's nicer out of the water! Especially if the blood-pumping activity is mountain biking! newzealand.com has a wide variety of mountain biking tracks located all over New Zealand. Would you be interested in trying a mountain bike track? Type 'yes' or 'no' or type 'fact' to learn more about how to get into mountain biking in New Zealand.";
    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "No? How about something that meets in the middle like Black Water Rafting? Waitomo Caves offer an amazing experience not to be missed. You might see a spectacular glowworm show! Would you be interested in the Black Water Rafting in Waitomo? Type 'yes' or 'no' or type 'fact' to learn more about glowworms.";
    const botReply6 = getBotReply("fact");
    const expectedReply6 =
      "Glowworms glow because the chemicals and enzymes from their bodies are reacting with oxygen in the air to create light. There is a sac surrounding the light organ that provides oxygen and helps concentrate the reflection of the light. Beyond being pretty to look at, the bioluminescent glow is also used to attract prey. Smaller insects and flies are drawn to the light and fly towards it. Please type 'yes' or 'no' if you are interested in this activity.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Help
  it("should reply with - name help - To get back into the action, please type one of the inputs given by the Adrenaline Bot in the previous dialogue above. For example 'yes' or 'big heights'.", () => {
    // Input:"help"
    // Output: `To use the Adrenaline Bot please respond to the questions with the suggested input. For example, if the question is "What floats your boat more, big heights or fast speeds?" Please type either 'big heights' or 'fast speeds'. When an option has been suggested, the correct input is 'yes' or 'no'. For example, if the question is "Would you be interested in trying a jet boat ride at Huka Falls?" please type 'yes' or 'no'.
    // You may also use the word 'fact' when the Adrenaline Bot has suggested an activity, to find out more about the location of an activity or a fact about the activity.
    // If you do type the incorrect input the Adrenaline Bot will inform you that the input is incorrect and suggest the appropriate input.
    // If you would like to return to the start of the Adrenaline Bot to select a different option, please type 'restart'.
    // To get back into the action, please type one of the inputs given by the Adrenaline Bot in the previous dialogue above. For example 'yes' or 'big heights'.`

    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("help");
    const expectedReply2 = `To use the Adrenaline Bot please respond to the questions with the suggested input. For example, if the question is "What floats your boat more, big heights or fast speeds?" Please type either 'big heights' or 'fast speeds'. When an option has been suggested, the correct input is 'yes' or 'no'. For example, if the question is "Would you be interested in trying a jet boat ride at Huka Falls?" please type 'yes' or 'no'. You may also use the word 'fact' when the Adrenaline Bot has suggested an activity, to find out more about the location of an activity or a fact about the activity. If you do type the incorrect input the Adrenaline Bot will inform you that the input is incorrect and suggest the appropriate input. If you would like to return to the start of the Adrenaline Bot to select a different option, please type 'restart'. To get back into the action, please type one of the inputs given by the Adrenaline Bot in the previous dialogue above. For example 'yes' or 'big heights'.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
  });

  // Restart
  it("should reply with - name restart - `Welcome back to the start name!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.", () => {
    // Input:"help"
    // Output: `To use the Adrenaline Bot please respond to the questions with the suggested input. For example, if the question is "What floats your boat more, big heights or fast speeds?" Please type either 'big heights' or 'fast speeds'. When an option has been suggested, the correct input is 'yes' or 'no'. For example, if the question is "Would you be interested in trying a jet boat ride at Huka Falls?" please type'yes' or 'no'.
    // You may also use the word 'fact' when the Adrenaline Bot has suggested an activity, to find out more about the location of an activity or a fact about the activity.
    // If you do type the incorrect input the Adrenaline Bot will inform you that the input is incorrect and suggest the appropriate input.
    // If you would like to return to the start of the Adrenaline Bot to select a different option, please type 'restart'.
    // To get back into the action, please type one of the inputs given by the Adrenaline Bot in the previous dialogue above. For example 'yes' or 'big heights'.`

    const botReply1 = getBotReply("name");
    const expectedReply1 =
      "Nice to meet you name! You're in for a ride!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.";
    const botReply2 = getBotReply("restart");
    const expectedReply2 = `Welcome back to the start name!! What floats your boat more, big heights or fast speeds? Please type 'big heights' or 'fast speeds'.`;

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
  });
});
