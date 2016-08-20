const assert = require('chai').assert;

const Message = require('../../lib/message')

describe('Message', function() {
  it('Message should be a function', function() {
    assert.isFunction(Message);
  });

  it('each message should have an id, title, and user', function() {
    var message = new Message({id: 1, user: 'Brett', content: 'Work somewhere with a devops team'});

    assert.equal(message.id, 1, message.title, 'Brett Idea', message.content, 'Work on a devops team');
  });

  it.skip('should update the message text from local storage', function() {
    var message1 = new Message({ content: 'text1' });
    var message2 = message1.content('text2');
    message.saveEditedMessage( message2 );
    assert.equal(this.message.content, 'text2');
  });
});
