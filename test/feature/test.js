const assert =  require('assert');

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
  	var title = browser.getTitle();
  	assert.equal(title, 'Chat Adventures');
    });

  it('send button should be disabled if input field is empty', function() {
    browser.url('/');
    var messageInput =browser.element('#message-input');
    messageInput.setValue('');
    var buttonStatus = browser.getAttribute('#send-button', 'disabled');
    assert.equal(buttonStatus, 'true');
  });

  it('send button should be enabled if input field has a value', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    var buttonStatus = browser.isEnabled('#send-button');
    assert.equal(buttonStatus, true);
  });

  it('should clear input field on submit button click', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    var buttonStatus = browser.element('#send-button').value.ELEMENT
    var buttonTrueStatus = browser.elementIdEnabled(buttonStatus).value
    console.log(buttonStatus)
    assert.equal(messageInput.getAttribute('value'), '');
  });
});

describe('chat messages', function(){
  it('should put user messages in the DOM', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    var message = browser.getText('.message');
    console.log(message);
    assert.equal(message, 'test');
  });

  it('')

});

//Users should be able to delete their own messages.
//Users should not be able to delete messages from other users.
//Users should be able to edit their own messages.
//Users should not be able to edit other people’s messages.
//The message input field should show a live count of the number of characters.
//Messages should persist in local storage. They should be loaded when the application loads.
