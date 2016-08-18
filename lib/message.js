function Message(messageProperties) {
  this.id = messageProperties.id;
  this.user = messageProperties.user;
  this.content = messageProperties.content;
};

module.exports = Message;
