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
    assert.equal(messageInput.getAttribute('value'), '');
  });
});

describe('chat messages', function(){
  it('should put user messages in the DOM', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    var message = browser.getText('.user-message-text');
    assert.equal(message, 'test');
  });

  it('users should be able to delete their own messages', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    var deleteButton = browser.element('.delete-button');
    browser.click('.delete-button');
    var messageArticle = browser.isExisting('.user-message');
    assert.equal(messageArticle, false);
  })

  it('user messages can be edited', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    var editableStatus = browser.getAttribute('.user-message-text', 'contenteditable');
    console.log(editableStatus);
    assert.equal(editableStatus, 'true');
  })

  it('message input should show a live character count', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    var characterCount = browser.getText('#character-count');
    assert.equal(characterCount, '4');
  })

  // it('messages should have unique id', function() {
  //   browser.url('/');
  //
  //   var messageInput = browser.element('#message-input');
  //   messageInput.setValue('test1');
  //   browser.click('#send-button');
  //   // var message1 = browser.element('article');
  //   // var message1Id = browser.getAttribute('id');
  //
  //   messageInput.setValue('test2');
  //   browser.click('#send-button');
  //
  //
  //   assert.notEqual(message1Id, message2Id);
  // })
});

//Messages should persist in local storage. They should be loaded when the application loads.
