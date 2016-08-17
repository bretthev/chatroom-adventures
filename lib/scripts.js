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

// function deleteMessage(e) {
//   $(e.target).closest('article').remove();
// };

function updateSendButton() {
  var messageInput = getMessageInput();
  if (messageInput === '') { disableSendButton(); }
  if (messageInput !== '') { enableSendButton(); }
};

function addMessageElementToDom(){
  var message = getMessageInput();
  $('#messages-container').append(`
    <article class="message">
      <p class="message-text"> ${ message } </p>
      <button class="delete-button">Delete</button>
    </article>
    `);
};

$($messageInput).on('keyup', updateSendButton);

$($sendButton).on('click', function() {
  addMessageElementToDom();
  clearInput();
});

$('#messages-container').on('click', '.delete-button', function() {
  $(this).closest('article').remove();
});
