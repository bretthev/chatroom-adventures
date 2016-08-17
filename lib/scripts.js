var $messageInput = $('#message-input');
var $sendButton = $('#send-button');

function getMessageInput() {
  return $messageInput.val();
};

function clearInput() {
  $messageInput.val('');
};

function enableSendButton() {
  $sendButton.attr('disabled', false);
};

function disableSendButton() {
  $sendButton.attr('disabled', true);
};

function updateSendButton() {
  var messageInput = getMessageInput();
  if (messageInput === '') { disableSendButton(); }
  if (messageInput !== '') { enableSendButton(); }
};

function addMessageElementToDom(){
  var message = getMessageInput();
  $('#messages-container').append(`<article class="message"> ${ message } </article>`);
};

$($messageInput).on('keyup', updateSendButton);

$($sendButton).on('click', function() {
  addMessageElementToDom();
  clearInput();
});
