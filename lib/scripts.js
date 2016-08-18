const Message = require('./message');
const Chatroom = require('./chatroom')

var $messageInput = $('#message-input');
var $sendButton = $('#send-button');

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
  var message = getMessageInput();
  $('#messages-container').append(`
    <article class="message user-message">
      <p class="user-message-text" contenteditable="true"> ${ message } </p>
      <button class="delete-button">Delete</button>
    </article>
    `)
}

function addBotMessage(){
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
  addBotMessage();
});

$('#messages-container').on('click', '.delete-button', deleteParentArticle);
