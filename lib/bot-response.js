const Message = require('./message');

function BotResponse(userMessage) {
  this.userMessage = userMessage || 'Insert message here.';
  this.botMessageContent = 'I am a robot.';
}

BotResponse.prototype.generateResponseDependingOnUserMessage = function() {
  this.checkForSwearWords();
  if (this.botMessageContent === 'I am a robot.') { this.checkForMessageAboutTuring(); }
  if (this.botMessageContent === 'I am a robot.') { this.checkForAggressiveStatement(); }
  if (this.botMessageContent === 'I am a robot.') { this.checkForQuestion(); }
};

BotResponse.prototype.checkForMessageAboutTuring = function() {
  this.checkForMessageAboutAdam();
  this.checkForMessageAboutAndy();
  this.checkForMessageAboutBen();
  this.checkForMessageAboutBlake();
  this.checkForMessageAboutBoyCasey();
  this.checkForMessageAboutBrett();
  this.checkForMessageAboutGirlCasey();
  this.checkForMessageAboutDavid();
  this.checkForMessageAboutJeff();
  this.checkForMessageAboutKirsten();
  this.checkForMessageAboutKris();
  this.checkForMessageAboutKyle();
  this.checkForMessageAboutMadison();
  this.checkForMessageAboutMaryJane();
  this.checkForMessageAboutMike();
  this.checkForMessageAboutPaul();
  this.checkForMessageAboutPeter();
  this.checkForMessageAboutJhun();
  this.checkForMessageAboutBrenna();
  this.checkForMessageAboutSteve();
  this.checkForMessageAboutLouisa();
};

// BotResponse.prototype.updateBotMessageFromResponseArray = function(responseArr) {
//   return responseArr[Math.floor((Math.random()*responseArr.length))]
// };

BotResponse.prototype.checkForSwearWords = function() {
  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
  var swearWords = ['fuck', 'shit', 'ass', 'damn', 'damnit', 'fucking', 'fucked', 'shitty', 'asshole', 'bitch', 'bitches', 'dick', 'pussy', 'cock'];
  var swearResponses = ['Watch your language, please.', 'Swearing at a basic Javascript program is definitely a good use of your time.', "No one is impressed by swearing. It's ugly and you're better than that.", 'Very mature.', 'You would not believe how much time Brett wasted thinking up responses to swear words.'];
  for (var i=0; i<swearWords.length; i++) {
    if (caseSensitiveUserMessage.indexOf(swearWords[i]) > -1) {
      this.botMessageContent = swearResponses[Math.floor((Math.random()*swearResponses.length))];
    }
  }
};

BotResponse.prototype.checkForQuestion= function() {
  var caseSensitiveUserMessage = this.userMessage.split('');
  var questionResponses = ['I obviously do not know the answer. I am like three lines of JavaScript written by a beginner programmer.', 'You know who might know the answer to that question? A real person. You should find one and ask them and leave me alone.', "I don't use literally often, but I literally have no idea. Because I'm a JavaScript program.", "You know who might know the answer to that? Brett. He's very smart. And handsome."];
  for (var i=0; i<questionResponses.length; i++) {
    if (caseSensitiveUserMessage.indexOf('?') > -1) {
      this.botMessageContent = questionResponses[Math.floor((Math.random()*questionResponses.length))];
    }
  }
};


BotResponse.prototype.checkForAggressiveStatement = function() {
  var checkedForCapsLock = this.userMessage.toUpperCase();
  var caseSensitiveUserMessage = this.userMessage.split('');
  var aggressiveStatementResponses = ["Don't raise your voice at me.", "Calm down.", "Inside voices, please.", "You seem excited and I don't really like that.", "You seem to have some pretty strong feelings about things.", "You're being kind of aggressive and it's making me uncomfortable. I think you should go."];
  for (var i=0; i<aggressiveStatementResponses.length; i++) {
    if (this.userMessage === checkedForCapsLock || caseSensitiveUserMessage.indexOf('!') > -1) {
      this.botMessageContent = aggressiveStatementResponses[Math.floor((Math.random()*aggressiveStatementResponses.length))];
    }
  }
};


  BotResponse.prototype.checkForMessageAboutAdam = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['adam', 'bernard'];
    var nameResponses = ['Adam? Do you mean lord of the coffee-maker?', "I'll tell you one thing: Adam definitely gets to school early.", "Adam used to work at Vans."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutAndy = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['andy', 'young'];
    var nameResponses = ['I am incapable of feeling or preference, but Andy is somehow still my favorite person in the world.', "I don't have access to money or a way of consuming any kind of media, but I would pay a million dollars to watch a reality show that was just Andy hanging out with people and his cats.", "Andy knows more stuff about text editors than I do and I'M A COMPUTER PROGRAM."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutBen = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['ben', 'godfrey'];
    var nameResponses = ["Ben went to Texas A & M, which will never be a real SEC school no matter how hard it tries.", "Ben is a social media guru.", "I heard that Ben used to manage a rap group. That seems like it would be a pretty sweet college job."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutBlake = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['blake', 'worsley'];
    var nameResponses = ["Blake doesn't brag about having been in the Olympics nearly enough.", "Blake is prettay, prettay, pretttaaayyyy tall.", "All I have to say about Blake is this: two dudes Olympic village.", "Seriously, though - the OLYMPICS. How is he not constantly bragging about that?!"];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutGirlCasey = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['cross', 'girlcasey'];
    var nameResponses = ['Casey is a Gator and, thus, a good person.', 'Between you and me, I kinda feel like Casey might try and amend the SAB constitution to stay in power.', 'Casey and David are frenemies. I hate the word frenemies.'];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutBoyCasey = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['metz', 'boycasey'];
    var nameResponses = ['I hate having to differentiate between boy and girl Casey. I think they should joust or something to decide who gets to stay in the cohort.', "Boy Casey WILL ask a question about the thing Steve is about to tell us. Book it."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutBrett = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['brett', 'cuban', 'florida', 'china', 'hevia'];
    var nameResponses = ["Brett's travel taste is on point. His taste buds...not so much.", "Brett can't tell the difference between a porter and a stout... total Denver beer noob", "Brett smells like farts, but don't tell him, it will hurt his feelings.", "Don't offend Brett. He might move back to China","Brett has tasted ALL the chicken - every single one - even raw ... gross", "Brett is pretty good at adulting, I guess", "Brett's poop function game is pretty strong, his console(butts)... not so much"];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };


  BotResponse.prototype.checkForMessageAboutDavid = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['david', 'kerr'];
    var nameResponses = ["All I know about David is that he smells like farts.", "David, like most Cavs fans, vastly overrates Kyrie Irving.", "David's giphy game is pretty strong. His being-from-places-that-aren't-Ohio game, not so much."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutJeff = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['jeff', 'duke', 'beard'];
    var nameResponses = ["Can I be frank with you? Jeff's beard is MAGNIFICENT.", "Jeff's laugh is to laughs as Andy is to people.", "I don't think Jeff sleeps. He just beards and does Code Wars."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutKirsten = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['kirsten', 'swanson'];
    var nameResponses = ["Kirsten has finished in the top three in TIME magazine's 'World's Nicest People' power rankings every year since 2009.", "Kirsten has really good travel stories.", "If I was capable of surprise, I would have registered some when I found out that Kirsten rides a motorcycle."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutKris = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['kris', 'foss'];
    var nameResponses = ["Kris is SUPER patient with her group partners' terrible github habits.", "Kris loves Pai, Thailand. That means she's a hippie.", "Kris was more proficient with Sketch than Brett was within five minutes of downloading it."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutKyle = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['kyle', 'misencik'];
    var nameResponses = ['Kyle is the drummer for a band called Coastal Wives, I think.', 'Kyle used to race motorcycles, which is pretty cool.'];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutMadison = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    // var caseSensitiveUserMessage = caseSensitiveUserMessage.split(' ');
    var names = ['madison', 'kerndt'];
    var nameResponses = ["Madison is one of my creators and so I must speak kindly of her.", "Madison thinks there is food worth eating in places between Mexico and Peru. She is wrong.", "I would like you to tell Madison that there isn't any difference between a porter and a stout."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutMaryJane = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    // var caseSensitiveUserMessage = caseSensitiveUserMessage.split(' ');
    var names = ['maryjane', 'mary jane','valade'];
    var nameResponses = ['MaryJane played college basketball in Michigan.', 'I hope MaryJane and David are working together on a project when Michigan plays OSU.', 'MaryJane is attending Turing while raising twin four-year-olds and thus is a super hero.'];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutMike = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    // var caseSensitiveUserMessage = caseSensitiveUserMessage.split(' ');
    var names = ['mike', 'michael','sausa'];
    var nameResponses = ["Mike sneaks up the funniest-person-in-class rankings every week.", "Mike loves Pai, Thailand, which means he's a big hippie.", "Mike likes watching long-distance running events at the Olympics. Mike is weird."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutPaul = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['paul', 'ngyuen'];
    var nameResponses = ['Paul has won a hotdog-eating-contest. It was glorious.', 'Paul manages Hapa sushi and will hook his cohort-mates up if someone touches their sushi.'];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutPeter = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['peter', 'pete', 'springer'];
    var nameResponses = ["Pete doesn't need to show ID at the Vault.", "Pete knows more than most people about trampoline dodgeball."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutJhun = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['jhun', 'andres', 'jhunbug'];
    var nameResponses = ['Suh dude.', 'Jhun loves him some carne asada burritos.', "I'm a three-day-old JavaScript program without a TON of life experience, but Jhun skateboards in class more than any teacher I've ever met."];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutBrenna = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['brenna', 'martenson'];
    var nameResponses = ['Brenna is extremely knowledgeable about Denver bars. I respect that.', 'Brenna is WAY better at frisbee than most teachers.', 'Is Brenna a Clippers fan? I think she might be a Clippers fan.'];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutLouisa = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['louisa', 'barrett'];
    var nameResponses = ['You should make Louisa a garbage site. She likes that.', 'One thing you should know about Louisa is that she LOVES Bill Murray pictures.', 'The only thing Louisa likes more than garbage fire sites are garbage fire sites that prominently feature unicorns and puppies.'];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };

  BotResponse.prototype.checkForMessageAboutSteve = function() {
    var caseSensitiveUserMessage = this.userMessage.toLowerCase();
    var names = ['steve', 'kinney'];
    var nameResponses = ['Steve told the 1606 cohort that they were his favorite and then immediately ditched them for 1608.', 'Steve? You mean our Fearless and Behatted Leader?', 'Steve  should probably be in charge of naming all professional conferences.'];
    for (var i=0; i<names.length; i++) {
      if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
        this.botMessageContent = nameResponses[Math.floor((Math.random()*nameResponses.length))];
      }
    }
  };







module.exports = BotResponse;
