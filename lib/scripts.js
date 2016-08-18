const Message = require('./message');
const Chatroom = require('./chatroom')

var $messageInput = $('#message-input');
var $sendButton = $('#send-button');

var chatroom = new Chatroom({});

function makeMessageObject() {
  return new Message({
    id: makeMessageId(),
    user: 'user',
    content: getMessageInput()
  })
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

function deleteParentArticle() {
  $(this).closest('article').remove();
}

function updateSendButton() {
  var messageInput = getMessageInput();
  if (messageInput === '') { disableSendButton(); }
  if (messageInput !== '') { enableSendButton(); }
}

function addUserMessageElementToDom(){
  var message = makeMessageObject();
  $('#messages-container').append(`
    <article class="message user-message" id=" ${ message.id }">
      <p class="user-message-text" contenteditable="true"> ${ message.content } </p>
      <button class="delete-button">Delete</button>
    </article>
    `)
}

function addBotMessagetoDom(){
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
  addUserMessageElementToDom();
  clearInput();
  updateSendButton();
  addBotMessagetoDom();
});

$('#messages-container').on('click', '.delete-button', deleteParentArticle);
