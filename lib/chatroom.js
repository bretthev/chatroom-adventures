const Message = require('./message');

function Chatroom(chatroomProperties){
  this.messages = chatroomProperties.messages || [];
}

Chatroom.prototype.updateMessagesProperty = function(message) {
  this.messages.push(message);
  this.orderMessages();
};

Chatroom.prototype.sendMessagesToStorage = function() {
  localStorage.setItem('messages', JSON.stringify(this.messages));
};

Chatroom.prototype.getMessagesFromStorage = function() {
  return JSON.parse(localStorage.getItem('messages'));
};

Chatroom.prototype.orderMessages = function() {
  if (this.messages.length > 0 ) {
  this.messages.sort(function(a, b) { return a.id - b.id; });
  }
};

Chatroom.prototype.deleteMessageFromStorage = function(messageIdToBeDeleted) {
  var idInt = JSON.parse(messageIdToBeDeleted);
  for (var i = 0; i < this.messages.length; i++) {
    if (this.messages[i].id === idInt) {
      this.messages.splice(i, 1);
    }
  }
  this.sendMessagesToStorage();
};

Chatroom.prototype.editMessageContent = function(id, content) {
  var messageId = parseInt(id);
  for (var i = 0; i < this.messages.length; i++) {
    if (this.messages[i].id === messageId) { this.messages[i].content = content; }
  this.sendMessagesToStorage();
  }
};

Chatroom.prototype.findPreviousMessages = function(id, n) {
  var indexOfObjectId;
  var idInt = parseInt(id);
  this.messages.reverse();
  for (var i = 0; i < this.messages.length; i++) {
    if (this.messages[i].id === idInt) {
      indexOfObjectId = i;
    }
  }
  return this.messages.slice(indexOfObjectId + 1, indexOfObjectId + 1 + n);
  // this.orderMessages();
};

module.exports = Chatroom;
