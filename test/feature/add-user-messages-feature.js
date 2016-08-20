const assert = require('assert');

describe('chat messages', function(){
  it('message input should show a live character count', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    var characterCount = browser.getText('#character-count');
    assert.equal(characterCount, '4');
  });

  it('should put user messages in the DOM', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    var message = browser.getText('.user-message-text');
    assert.equal(message, 'test');
  });

  it('messages should have unique id', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test1');
    browser.click('#send-button');
    messageInput.setValue('test2');
    browser.click('#send-button');
    var messages = browser.getAttribute('.user-message','id');
    console.log(messages);
    assert.notEqual(messages[0], messages[1]);
  });
});
