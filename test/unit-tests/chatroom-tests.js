const assert = require('chai').assert;

const Chatroom = require('../../lib/chatroom')

describe('Chatroom', function() {
  it('should be a function', function() {
    assert.isFunction(Chatroom);
  })

  it('should have an empty array as a default messages property', function() {
    var chatroom = new Chatroom({});
    assert.deepEqual(chatroom.messages, [])
  })
})
