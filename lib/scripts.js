var $messageInput = $('#message-input');
var $sendButton = $('#send-button');

function getMessageInput() {
  return $messageInput.val();
}

function enableSendButton() {
  $sendButton.attr('disabled', false);
}

$(document).ready(function() {

  $($messageInput).on('keyup', function() {
    enableSendButton();
    // debugger;
    // var message = getMessageInput();
    // if (message.length) {$sendButton.attr('disabled', 'false')};
  });

});
