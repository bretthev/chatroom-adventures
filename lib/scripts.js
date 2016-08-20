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
    if (chatroom.messages.length > 0) {
     for (var i = 0; i < chatroom.messages.length; i++) {
       if (chatroom.messages[i].user === 'user') {addUserMessageElementToDom(chatroom.messages[i]); }
       if (chatroom.messages[i].user === 'robot') { addBotMessagetoDom(chatroom.messages[i]); }
      }
    }
  }
}

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

populateDom();

$('#messages-container').on('click', '.delete-button', deleteMessageFromDomAndStorage);
