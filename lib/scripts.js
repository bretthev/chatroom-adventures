const Message = require('./message');
const Chatroom = require('./chatroom')

var $messageInput = $('#message-input');
var $sendButton = $('#send-button');

var chatroom = new Chatroom({});

function makeUserMessageObject() {
  return new Message({
    id: makeMessageId(),
    user: 'user',
    content: getMessageInput()
  });
}

function makeBotMessageObject() {
  return new Message({
    id: makeMessageId(),
    user: 'robot',
    content: 'I am a robot'
  });
}



function populateDom() {
 var storedMessages = chatroom.getMessagesFromStorage();
 if (storedMessages) {
 chatroom.messages = storedMessages;
 chatroom.orderMessages();
    if (chatroom.messages.length > 11) {
     for (var i = 0; i < 11; i++) {
       if (chatroom.messages[i].user === 'user') {addUserMessageElementToDom(chatroom.messages[i]); }
       if (chatroom.messages[i].user === 'robot') { addBotMessagetoDom(chatroom.messages[i]); }
      }
    }
  }
}

populateDom();

function makeMessageId() {
  return Date.now();
}

function getMessageInput() {
  return $messageInput.val();
}

function clearInput() {
  $messageInput.val('');
}

function enableSendButton() {
  $sendButton.attr('disabled', false);
}

function disableSendButton() {
  $sendButton.attr('disabled', true);
}

function deleteMessageFromDomAndStorage() {
  var idToBeDeleted = $(this).closest('article').attr('id');
  $(this).closest('article').remove();
  chatroom.deleteMessageFromStorage(idToBeDeleted);
}

function updateSendButton() {
  var messageInput = getMessageInput();
  if (messageInput === '') { disableSendButton(); }
  if (messageInput !== '') { enableSendButton(); }
}

function addOlderMessagesToDom(arr) {
  var reverseArr = arr.reverse();
  for (var i = 0; i < reverseArr.length; i++)  {
     if (chatroom.messages[i].user === 'user'); {renderOldUserMessage(chatroom.messages[i]); }
     if (chatroom.messages[i].user === 'robot') {renderOldBotMessage(chatroom.messages[i]); }
   }
};

function renderOldUserMessage(message) {
  $('#messages-container').prepend(`
    <article class="message user-message" id=" ${ message.id }">
      <p class="user-message-text" contenteditable="true"> ${ message.content } </p>
      <button class="delete-button">Delete</button>
    </article>
    `);
}

function renderOldBotMessage(message) {
  $('#messages-container').prepend(`
    <article class="message bot-message" >
      <p class="bot-message-text"> I am a robot. </p>
    </article>
    `);
}

function addUserMessageElementToDom(message){
  $('#messages-container').append(`
    <article class="message user-message" id=" ${ message.id }">
      <p class="user-message-text" contenteditable="true"> ${ message.content } </p>
      <button class="delete-button">Delete</button>
    </article>
    `);
}

function addBotMessagetoDom(message){
  $('#messages-container').append(`
    <article class="message bot-message" >
      <p class="bot-message-text"> I am a robot. </p>
    </article>
    `);
}

function findCharacterCount(){
  return getMessageInput().length;
}

function updateCharacterCount(){
  $('#character-count').html(findCharacterCount());
}

function getEditedText(e) {
  return $(e.target).closest('.user-message-text').text();
}

function getClosestArticleById(e) {
  var closestArticle = $(e.target).closest('.user-message');
    return parseInt(closestArticle.attr('id'));
}

function getFarthestArticleById(e) {
  var farthestArticle = $('article').first();
  var lastId = parseInt(farthestArticle.attr('id'));
  console.log(lastId)
}

$($messageInput).on('keyup', function() {
  updateSendButton();
  updateCharacterCount();
});

$($sendButton).on('click', function() {
  var newUserMessage = makeUserMessageObject();
  addUserMessageElementToDom(newUserMessage);
  chatroom.updateMessagesProperty(newUserMessage);
  chatroom.sendMessagesToStorage();
  clearInput();
  updateSendButton();
  var botMessage = makeBotMessageObject();
  addBotMessagetoDom(botMessage);
  chatroom.updateMessagesProperty(botMessage);
  chatroom.sendMessagesToStorage();
  updateCharacterCount();
});

$('#messages-container').on('keyup', '.user-message-text', function(e) {
  var id = getClosestArticleById(e);
  var content = getEditedText(e);
  chatroom.editMessageContent(id, content);
});

$('#messages-container').on('click', '.delete-button', deleteMessageFromDomAndStorage);

$('.load-more').on('click', function(e) {
  var id = getFarthestArticleById(e);
  var nextTenMessages = chatroom.findNextMessages(id, 10);
  chatroom.addOlderMessagesToDom(nextTenMessages);
});




//on page load display 10 most recent messages
//on load more button, display 10 more messages (if less than 10 more, display the rest)
