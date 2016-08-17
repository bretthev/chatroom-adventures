const assert =  require('assert')

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
  	var title = browser.getTitle()
  	assert.equal(title, 'Chat Adventures');
    });
  it('send button should be disabled if input field is empty', function() {
    browser.url('/');
    var messageInput =browser.element('#message-input');
    messageInput.setValue('');
    var buttonStatus = browser.getAttribute('#send-button', 'disabled');
    assert.equal(buttonStatus, 'true')
  })
  it('send button should be enabled if input field has a value', function() {
    browser.url('/');
    var messageInput =browser.element('#message-input');
    messageInput.setValue('test');
    var buttonStatus = browser.getAttribute('#send-button', 'disabled');
    assert.equal(buttonStatus, null);
  });
  it('should clear input field on submit button click', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    assert.equal(messageInput.getAttribute('value'), '');
  });
  // it('should put user messages in the DOM', function() {
  //   browser.url('/');
  //   var
  // })
});


//the button should only be enabled if the input field has a value

//message input should be cleared on send click

//messages should show up in message container

//user-generated messages look different (different classes from non-users)
