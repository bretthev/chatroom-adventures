const assert = require('chai').assert;

const Chatroom = require('../../lib/chatroom')
const Message = require('../../lib/message')

describe('Chatroom', function() {
  it('should be a function', function() {
    assert.isFunction(Chatroom);
  });

  it('should have an empty array as a default messages property', function() {
    var chatroom = new Chatroom({});
    assert.deepEqual(chatroom.messages, []);
  });

  it('should contain an array of existing messages if given values', function() {
    var chatroom = new Chatroom({});
    var message = new Message({id: 'id', user: 'user', content: 'test'});
    chatroom.updateMessagesProperty(message);
    assert.equal(chatroom.messages.length, 1);
  });

  it('messages should keep their id, user, and content values', function() {
    var chatroom = new Chatroom({});
    var message = new Message({id: 'id', user: 'user', content: 'test'});
    chatroom.updateMessagesProperty(message);
    assert.equal(chatroom.messages[0].user, 'user');
  });

  it('should be able to order messages by id', function() {
    var chatroom = new Chatroom({});
    var message1 = new Message({ id: 3 });
    chatroom.updateMessagesProperty(message1);
    var message2 = new Message ({ id: 2 });
    chatroom.updateMessagesProperty(message2);
    var message3 = new Message ({ id: 1 });
    chatroom.updateMessagesProperty(message3);
    chatroom.orderMessages();
    assert.deepEqual(chatroom.messages, [message3, message2, message1 ]);
  });

  it('should be able to put messages in local storage', function() {
    var chatroom = new Chatroom({});
    var message = new Message({ id: 1 });
    chatroom.updateMessagesProperty(message);
    chatroom.sendMessagesToStorage();
    var storedMessages = JSON.parse(localStorage.getItem('messages'));
    assert.equal(chatroom.messages[0].id, storedMessages[0].id);
  });

  it('should be able to get messages from local storage', function() {
    var chatroom = new Chatroom({});
    var message = new Message({ id: 1, user: 'user', content: 'test'});
    chatroom.updateMessagesProperty(message);
    chatroom.sendMessagesToStorage();
    var storedMessages = chatroom.getMessagesFromStorage();
    assert.equal(chatroom.messages[0].id, storedMessages[0].id);
  });

  it('should be able to get messages from local storage in order', function() {
    var chatroom = new Chatroom({});
    var message1 = new Message({ id: 1});
    chatroom.updateMessagesProperty(message1);
    var message2 = new Message({ id: 3});
    chatroom.updateMessagesProperty(message2);
    var message3 = new Message({ id: 2});
    chatroom.updateMessagesProperty(message3);
    chatroom.sendMessagesToStorage();
    chatroom.getMessagesFromStorage();
    assert.equal(chatroom.messages[1].id, message3.id)
  })


  it('delete button should remove message object from local storage upon click', function(){
      var chatroom = new Chatroom({});
      var message = new Message({ id: 1 });
      chatroom.updateMessagesProperty(message);
      var message2 = new Message({ id: 2 });
      chatroom.updateMessagesProperty(message2);
      chatroom.sendMessagesToStorage();
      chatroom.deleteMessageFromStorage(message.id);
      chatroom.getMessagesFromStorage();
      assert.equal(chatroom.messages[0].id, message2.id);
  });

  it('should be able to find the next n messages after a message with a given id', function() {
    var chatroom = new Chatroom({});
    var message1 = new Message({ id: 1});
    chatroom.updateMessagesProperty(message1);
    var message2 = new Message({ id: 2});
    chatroom.updateMessagesProperty(message2);
    var message3 = new Message({ id: 3});
    chatroom.updateMessagesProperty(message3);
    var message4 = new Message({ id: 4});
    chatroom.updateMessagesProperty(message4);
    var message5 = new Message({ id: 5});
    chatroom.updateMessagesProperty(message5);
    var message6 = new Message({ id: 6});
    chatroom.updateMessagesProperty(message6);
    var nextMessages = chatroom.findNextMessages(3, 3);
    assert.deepEqual(nextMessages, [message4, message5, message6])
  })

});
