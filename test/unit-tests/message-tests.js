const assert = require('chai').assert;

const Message = require('../../lib/message')

describe('Message', function() {
  it('Message should be a function', function() {
    assert.isFunction(Message);
  })

  it('each message should have an id, title, and content property', function() {
    var message = new Message({id: 1, title: "Brett's Idea", content: "Work somewhere with a devops team"})

    assert.equal(message.id, 1, message.title, "Brett's Idea", message.content, "Work somewhere with a devops team");
  })

})
