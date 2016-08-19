const Message = require('./message');

function Chatroom(chatroomProperties){
  this.messages = chatroomProperties.messages || [];
}

Chatroom.prototype.updateMessagesProperty = function(message) {
  this.messages.push(message);
}

Chatroom.prototype.sendMessagesToStorage = function() {
  localStorage.setItem('messages', JSON.stringify(this.messages));
}

Chatroom.prototype.getMessagesFromStorage = function() {
  return JSON.parse(localStorage.getItem('messages'));
}

Chatroom.prototype.orderMessages = function() {
  if (this.messages.length > 0 ) {
  this.messages.sort(function(a, b) { return a.id - b.id });
  }
}

Chatroom.prototype.deleteMessageFromStorage = function(message) {
  var messageIdToBeDeleted = message.id;
  var deletedMessageIndex;
  this.messages = this.getMessagesFromStorage();
  for (var i = 0; i < this.messages.length; i++) {
    if (this.messages[i].id === messageIdToBeDeleted) {
      deletedMessageIndex = i;
    }
    this.messages.splice(deletedMessageIndex, 1);
  }
    this.sendMessagesToStorage();
};

module.exports = Chatroom;
