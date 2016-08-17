var $messageInput = $('#message-input');
var $sendButton = $('#send-button');

function getMessageInput() {
  return $messageInput.val();
}

function enableSendButton() {
  $sendButton.attr('disabled', false);
}

function disableSendButton() {
  $sendButton.attr('disabled', true);
}

function clearInput() {
  $messageInput.val('');
}

$($messageInput).on('keyup', function() {
    var messageInput = getMessageInput();
    if (messageInput === '') { disableSendButton(); }
    if (messageInput !== '') { enableSendButton(); }
});

$($sendButton).on('click', function() {
  clearInput();
});
