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
  this.messages.sort(function(a, b) { return a.id - b.id });
}

module.exports = Chatroom;
