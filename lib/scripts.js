const Message = require('./message');
const Chatroom = require('./chatroom');
const BotResponse = require('./bot-response')

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

function makeBotMessageObject(userMessage) {
  var botResponse = new BotResponse(userMessage.content);
  botResponse.generateResponseDependingOnUserMessage();
  return new Message({
    id: makeMessageId(),
    user: 'robot',
    content: botResponse.botMessageContent
  });
}

function populateDom() {
 var storedMessages = chatroom.getMessagesFromStorage();
 if (storedMessages) {
 chatroom.messages = storedMessages;
 chatroom.orderMessages();
    if (chatroom.messages.length > 11) {
     for (var i = chatroom.messages.length - 10; i < chatroom.messages.length; i++) {
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
  for (var i = 0; i < arr.length; i++)  {
     if (arr[i].user === 'robot') {renderOldBotMessage(arr[i]); }
     else if (arr[i].user === 'user') {renderOldUserMessage(arr[i]); }
   }
}

function renderOldUserMessage(message) {
  $('#messages-container').prepend(`
    <article class="message user-message" id=" ${ message.id }">
      <button class="delete-button"></button>
      <p class="user-message-text" contenteditable="true"> ${ message.content } </p>
      <p class="user-icon">U</p>
    </article>
      <p class="user-user-name">brett</p>
    `);
}

function renderOldBotMessage(message) {
  $('#messages-container').prepend(`
    <article class="message bot-message" id="${ message.id }">
      <p class="bot-icon">R</p>
      <p class="bot-message-text"> ${message.content} </p>
    </article>
      <p class="bot-user-name">bot</p>
    `);
}

function addUserMessageElementToDom(message){
  $('#messages-container').append(`
    <article class="message user-message" id=" ${ message.id }">
      <button class="delete-button"></button>
      <p class="user-message-text" contenteditable="true"> ${ message.content } </p>
      <p class="user-icon">U</p>
    </article>
      <p class="user-user-name">brett</p>
    `);
}

function addBotMessagetoDom(message){
  $('#messages-container').append(`
    <article class="message bot-message" id="${ message.id }" >
      <p class="bot-icon">R</p>
      <p class="bot-message-text"> ${message.content} </p>
    </article>
      <p class="bot-user-name">bot</p>
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

function getOldestMessageInDomId() {
  var farthestArticle = $('article').first();
  var lastId = parseInt(farthestArticle.attr('id'));
  return lastId;
}

$($messageInput).on('keyup', function() {
  updateSendButton();
  updateCharacterCount();
});

// function postMessageAfterEvent(e){
//   var newUserMessage = makeUserMessageObject();
//   addUserMessageElementToDom(newUserMessage);
//   chatroom.updateMessagesProperty(newUserMessage);
//   chatroom.orderMessages
//   chatroom.sendMessagesToStorage();
//   var botMessage = makeBotMessageObject(newUserMessage);
//   addBotMessagetoDom(botMessage);
//   chatroom.updateMessagesProperty(botMessage);
//   chatroom.orderMessages();
//   chatroom.sendMessagesToStorage();
//   clearInput();
//   updateSendButton();
//   updateCharacterCount();
// }

// function listenForReturn(e){
//   $('#message-input').on('keydown', function(e){
//     if (e.which == '13'){
//       e.preventDefault();
//       postMessageAfterEvent();
//     }
//   });
// }
//
// listenForReturn();

$($sendButton).on('click', function() {
  postMessageAfterEvent();
});

function postMessageAfterEvent(){
  debugger;
  var newUserMessage = makeUserMessageObject();
  addUserMessageElementToDom(newUserMessage);
  chatroom.updateMessagesProperty(newUserMessage);
  // chatroom.orderMessages();
  chatroom.sendMessagesToStorage();

  updateCharacterCount();
  clearInput();
  updateSendButton();

  var botMessage = makeBotMessageObject(newUserMessage);
  addBotMessagetoDom(botMessage);
  chatroom.updateMessagesProperty(botMessage);
  chatroom.orderMessages();
  chatroom.sendMessagesToStorage();
}

$('#message-input').on('keydown', function(e){
    if (e.which == '13'){
      e.preventDefault();
      postMessageAfterEvent();
    }
  });


$('#messages-container').on('keyup', '.user-message-text', function(e) {
  var id = getClosestArticleById(e);
  var content = getEditedText(e);
  chatroom.editMessageContent(id, content);
});

$('#messages-container').on('click', '.delete-button', deleteMessageFromDomAndStorage);

$('.load-more').on('click', function(e) {
  var id = getOldestMessageInDomId();
  var previousMessages = chatroom.findPreviousMessages(id, 1);
  addOlderMessagesToDom(previousMessages);
  chatroom.orderMessages();
});
