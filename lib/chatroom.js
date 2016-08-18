const Message = require('./message');

function Chatroom(chatroomProperties){
  this.messages = chatroomProperties.messages || [];
}

Chatroom.prototype.orderMessages = function() {
  this.messages.sort(function(a, b) {
    return a.id - b.id
  });
};

module.exports = Chatroom;
