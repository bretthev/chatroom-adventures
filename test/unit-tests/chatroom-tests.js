const assert = require('chai').assert;

const Chatroom = require('../../lib/chatroom')
const Message = require('../../lib/message')

describe('Chatroom', function() {
  it('should be a function', function() {
    assert.isFunction(Chatroom);
  })

  it('should have an empty array as a default messages property', function() {
    var chatroom = new Chatroom({});
    assert.deepEqual(chatroom.messages, [])
  })

  it('should contain an array of existing messages if given values', function() {
    var chatroom = new Chatroom({});
    var message = new Message({id: "Madison's Message", user: 'Madison', content: 'This is a good idea'});
    chatroom.updateMessagesProperty(message);
    assert.equal(chatroom.messages.length, 1);
  })

  it('messages should keep their id, user, and content values', function() {
    var chatroom = new Chatroom({});
    var message = new Message({id: "Madison's Message", user: 'Madison', content: 'This is a good idea'});
    chatroom.updateMessagesProperty(message);
    assert.equal(chatroom.messages[0].user, 'Madison');
  })

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
  })
})
