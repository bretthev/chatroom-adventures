const assert = require('assert');

describe ('user messages editing and deleting', function() {

  it('user messages can be edited', function() {
    browser.url('/');
    var messageInput = browser.element('#message-input');
    messageInput.setValue('test');
    browser.click('#send-button');
    var editableStatus = browser.getAttribute('.user-message-text', 'contenteditable');
    console.log(editableStatus);
    assert.equal(editableStatus, 'true');
  });

it('users should be able to delete their own messages', function() {
  var deleteButton = browser.element('.delete-button');
  browser.click('.delete-button');
  var messageArticle = browser.isExisting('.user-message');
  assert.equal(messageArticle, false);
  })


});
