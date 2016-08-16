const assert =  require('assert')

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
  	var title = browser.getTitle()
  	assert.equal(title, 'Chat Adventures');
    });
  // it('should be able to grab the h1 from the page', function(){
  //   browser.url('/');
  //   var h1 = browser.getElement()
  // })
});
