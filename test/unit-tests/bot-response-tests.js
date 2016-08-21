const assert = require('chai').assert

const Chatroom = require('../../lib/chatroom')
const Message = require('../../lib/message')
const BotResponse = require('../../lib/bot-response')

describe('BotResponse', function() {
  context('general responses', function() {

  it('should be a function', function() {
    assert.isFunction(BotResponse)
  })

  it('should be able to recognize swear words and respond appropriately', function() {
      var swearResponses = ['Watch your language, please.', 'Swearing at a basic Javascript program is definitely a good use of your time.', "No one is impressed by swearing. It's ugly and you're better than that.", 'Very mature.', 'You would not believe how much time Brett wasted thinking up responses to swear words.']
    var botResponse = new BotResponse('shit');
    botResponse.checkForSwearWords();
    assert.include(swearResponses, botResponse.botMessageContent)
  })

  it('should not update botResponse if user message doesnt swear', function() {
    debugger;
    var botResponse = new BotResponse('test');
    botResponse.checkForSwearWords();
    assert.equal(botResponse.botMessageContent, 'I am a robot.')
  })

  it('should be able to recognize questions and respond appropriately', function() {
    var botResponse = new BotResponse('Why you no like me?');
      var questionResponses = ['I obviously do not know the answer. I am like three lines of JavaScript written by a beginner programmer.', 'You know who might know the answer to that question? A real person. You should find one and ask them and leave me alone.', "I don't use literally often, but I literally have no idea. Because I'm a JavaScript program.", "You know who might know the answer to that? Brett. He's very smart. And handsome."]
    botResponse.checkForQuestion();
    assert.include(questionResponses, botResponse.botMessageContent)
  })

  it('should be able to recognize exclamation points and caps lock and respond appropriately', function() {
    var botResponse = new BotResponse('I hate you!');
    var aggressiveStatementResponses = ["Don't raise your voice at me.", "Calm down.", "Inside voices, please.", "You seem excited and I don't really like that.", "You seem to have some pretty strong feelings about things.", "You're being kind of aggressive and it's making me uncomfortable. I think you should go."];
    botResponse.checkForAggressiveStatement();
    assert.include(aggressiveStatementResponses, botResponse.botMessageContent)
  })

});

context('should recognize Turing stuff and respond appropriately', function() {
  it('should recognize a message about Adam and respond appropriately', function() {
    var botResponse = new BotResponse('Adam something something');
    var nameResponses = ['Adam? Do you mean lord of the coffee-maker?', "I'll tell you one thing: Adam definitely gets to school early.", "Adam used to work at Vans."];
    botResponse.checkForMessageAboutAdam();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Andy and respond appropriately', function() {
    var botResponse = new BotResponse('Andy something something');
    var nameResponses = ['I am incapable of feeling or preference, but Andy is somehow still my favorite person in the world.', "I don't have access to money or a way of consuming any kind of media, but I would pay a million dollars to watch a reality show that was just Andy hanging out with people and his cats.", "Andy knows more stuff about text editors than I do and I'M A COMPUTER PROGRAM."];
    botResponse.checkForMessageAboutAndy();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Ben and respond appropriately', function() {
    var botResponse = new BotResponse('Ben something something');
    var nameResponses = ["Ben went to Texas A & M, which will never be a real SEC school no matter how hard it tries.", "Ben is a social media guru.", "I heard that Ben used to manage a rap group. That seems like it would be a pretty sweet college job."];
    botResponse.checkForMessageAboutBen();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Blake and respond appropriately', function() {
    var botResponse = new BotResponse('Blake something something');
    var nameResponses = ["Blake doesn't brag about having been in the Olympics nearly enough.", "Blake is prettay, prettay, pretttaaayyyy tall.", "All I have to say about Blake is this: two dudes Olympic village.", "Seriously, though - the OLYMPICS. How is he not constantly bragging about that?!"];
    botResponse.checkForMessageAboutBlake();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about girl Casey and respond appropriately', function() {
    var botResponse = new BotResponse('girl Casey something something');
    var nameResponses = ['Casey is a Gator and, thus, a good person.', 'Between you and me, I kinda feel like Casey might try and amend the SAB constitution to stay in power.', 'Casey and David are frenemies. I hate the word frenemies.'];
    botResponse.checkForMessageAboutGirlCasey();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about boy Casey and respond appropriately', function() {
    var botResponse = new BotResponse('boy Casey something something');
    var nameResponses = ['I hate having to differentiate between boy and girl Casey. I think they should joust or something to decide who gets to stay in the cohort.', "Boy Casey WILL ask a question about the thing Steve is about to tell us. Book it."];
    botResponse.checkForMessageAboutBoyCasey();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about David and respond appropriately', function() {
    var botResponse = new BotResponse('David something something');
    var nameResponses = ["All I know about David is that he smells like farts.", "David, like most Cavs fans, vastly overrates Kyrie Irving.", "David's giphy game is pretty strong. His being-from-places-that-aren't-Ohio game, not so much."];
    botResponse.checkForMessageAboutDavid();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Jeff and respond appropriately', function() {
    var botResponse = new BotResponse('Jeff something something');
    var nameResponses = ["Can I be frank with you? Jeff's beard is MAGNIFICENT.", "Jeff's laugh is to laughs as Andy is to people.", "I don't think Jeff sleeps. He just beards and does Code Wars."];
    botResponse.checkForMessageAboutJeff();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Kirsten and respond appropriately', function() {
    var botResponse = new BotResponse('Kirsten something something');
    var nameResponses = ["Kirsten has finished in the top three in TIME magazine's 'World's Nicest People' power rankings every year since 2009.", "Kirsten has really good travel stories.", "If I was capable of surprise, I would have registered some when I found out that Kirsten rides a motorcycle."];
    botResponse.checkForMessageAboutKirsten();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Kris and respond appropriately', function() {
    var botResponse = new BotResponse('Kris something something');
    var nameResponses = ["Kris is SUPER patient with her group partners' terrible github habits.", "Kris loves Pai, Thailand. That means she's a hippie.", "Kris was more proficient with Sketch than Brett was within five minutes of downloading it."];
    botResponse.checkForMessageAboutKris();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Kyle and respond appropriately', function() {
    var botResponse = new BotResponse('Kyle something something');
    var nameResponses = ['Kyle is the drummer for a band called Coastal Wives, I think.', 'Kyle used to race motorcycles, which is pretty cool.'];
    botResponse.checkForMessageAboutKyle();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Madison and respond appropriately', function() {
    var botResponse = new BotResponse('Madison something something');
    var nameResponses = ["Madison is one of my creators and so I must speak kindly of her.", "Madison thinks there is food worth eating in places between Mexico and Peru. She is wrong.", "I would like you to tell Madison that there isn't any difference between a porter and a stout."];
    botResponse.checkForMessageAboutMadison();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about MaryJane and respond appropriately', function() {
    var botResponse = new BotResponse('MaryJane something something');
    var nameResponses = ['MaryJane played college basketball in Michigan.', 'I hope MaryJane and David are working together on a project when Michigan plays OSU.', 'MaryJane is attending Turing while raising twin four-year-olds and thus is a super hero.'];
    botResponse.checkForMessageAboutMaryJane();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Mike and respond appropriately', function() {
    var botResponse = new BotResponse('Mike something something');
    var nameResponses = ["Mike sneaks up the funniest-person-in-class rankings every week.", "Mike loves Pai, Thailand, which means he's a big hippie."];
    botResponse.checkForMessageAboutMike();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Paul and respond appropriately', function() {
    var botResponse = new BotResponse('Paul something something');
    var nameResponses = ['Paul has won a hotdog-eating-contest. It was glorious.', 'Paul manages Hapa sushi and will hook his cohort-mates up if someone touches their sushi.'];
    botResponse.checkForMessageAboutPaul();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

  it('should recognize a message about Peter and respond appropriately', function() {
    var botResponse = new BotResponse('peter something something');
    var nameResponses = ["Pete doesn't need to show ID at the Vault.", "Pete knows more than most people about trampoline dodgeball."];
    botResponse.checkForMessageAboutPeter();
    assert.include(nameResponses, botResponse.botMessageContent)
  })

})

})
