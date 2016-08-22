/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html {\n  align-content: center;\n  background-color: #4A4A4A;\n  margin: 0; }\n\n#chat-name {\n  color: #B8E986;\n  font-family: \"Ubuntu Condensed\", sans-serif;\n  padding-top: 5px;\n  text-align: center; }\n\n#messages-container {\n  padding-bottom: 17%; }\n\n.message {\n  color: white;\n  height: 100px;\n  margin: auto;\n  position: relative;\n  width: 90%; }\n\n.user-message {\n  border-bottom: 2px solid #50E3C2; }\n\n.bot-message {\n  border-bottom: 2px solid #BD10E0; }\n\n.user-icon {\n  background: url(/lib/images/icon-mustacge.png) no-repeat;\n  background-color: #50E3C2;\n  background-position: center;\n  background-size: 20px;\n  border: none;\n  border-radius: 50%;\n  bottom: -2px;\n  height: 0;\n  left: -11px;\n  margin: 0;\n  padding: 15px;\n  position: absolute;\n  width: 0; }\n\n.bot-icon {\n  background: url(/lib/images/icon-robot-white.svg) no-repeat;\n  background-color: #BD10E0;\n  background-position: center;\n  background-size: 20px;\n  border: none;\n  border-radius: 50%;\n  bottom: -2px;\n  height: 0;\n  left: -11px;\n  margin: 0;\n  padding: 15px;\n  position: absolute;\n  width: 0; }\n\n.user-message-text {\n  bottom: 0;\n  margin-bottom: 0px;\n  padding-left: 30px;\n  padding-right: 20px;\n  position: absolute; }\n\n.bot-message-text {\n  bottom: 0;\n  margin-bottom: 0px;\n  padding-left: 30px;\n  padding-right: 20px;\n  position: absolute; }\n\n.delete-button {\n  background: url(/lib/images/icon-x-white.svg) no-repeat;\n  background-color: transparent;\n  background-position: center;\n  background-size: 20px;\n  border: none;\n  bottom: 10%;\n  height: 0px;\n  margin: 0;\n  padding: 10px;\n  position: absolute;\n  right: -25px;\n  width: 70px; }\n\n.delete-button:hover {\n  background: url(/lib/images/icon-x-red.svg) no-repeat;\n  background-color: transparent;\n  background-position: center;\n  background-size: 20px; }\n\n.user-user-name {\n  bottom: -14px;\n  color: #50E3C2;\n  left: -8px;\n  font-size: .5em;\n  margin: 0;\n  position: absolute; }\n\n.bot-user-name {\n  bottom: -14px;\n  color: #BD10E0;\n  font-size: .5em;\n  left: -5px;\n  margin: 0;\n  position: absolute; }\n\n#input-container {\n  align-items: center;\n  background-color: #C9C9CE;\n  display: flex;\n  height: 15%;\n  justify-content: center;\n  position: fixed;\n  top: 85%;\n  width: 100%; }\n\n#menu-options-container {\n  bottom: 15%;\n  display: block;\n  height: 40px;\n  position: fixed;\n  width: 100%; }\n\n.show-menu-options {\n  background-color: white;\n  border: 1px solid white;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  height: 40px;\n  margin-left: 90%;\n  opacity: .8;\n  width: 60px; }\n\n.menu-options {\n  display: block;\n  display: none;\n  height: 40px;\n  margin-right: 5%;\n  position: relative; }\n\n.load-more {\n  background: url(/lib/images/icon-load-white.svg) no-repeat;\n  background-color: transparent;\n  background-position: center;\n  background-size: 20px;\n  border: none;\n  height: 0px;\n  margin: 0;\n  padding: 20px;\n  position: absolute;\n  right: 40px;\n  width: 20px; }\n\n.load-more:hover {\n  background: url(/lib/images/icon-load-red.svg) no-repeat;\n  background-color: transparent;\n  background-position: center;\n  background-size: 20px; }\n\n.load-more:disabled {\n  opacity: 0.2; }\n\n.delete-all {\n  background: url(/lib/images/icon-trash-white.svg) no-repeat;\n  background-color: transparent;\n  background-position: center;\n  background-size: 20px;\n  width: 20px;\n  border: none;\n  height: 0px;\n  padding: 20px;\n  position: absolute;\n  right: 0; }\n\n.delete-all:hover {\n  background: url(/lib/images/icon-trash-red.svg) no-repeat;\n  background-color: transparent;\n  background-position: center;\n  background-size: 20px; }\n\n.delete-all:disabled {\n  opacity: 0.2; }\n\n#message-input {\n  border-radius: 10px;\n  height: 50px;\n  width: 80%; }\n\n#send-button {\n  background: url(/lib/images/icon-send-white.svg) no-repeat;\n  background-color: transparent;\n  background-color: transparent;\n  background-position: center;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-size: 30px; }\n\n#send-button:hover {\n  background: url(/lib/images/icon-send-red.svg) no-repeat;\n  background-color: transparent;\n  background-position: center;\n  background-size: 30px;\n  border: none;\n  height: 50px;\n  width: 50px; }\n\n#send-button:disabled {\n  opacity: 0.2; }\n\n#character-count {\n  color: #FF6E6E;\n  margin: auto;\n  text-align: center; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const Message = __webpack_require__(6);
	const Chatroom = __webpack_require__(7);
	const BotResponse = __webpack_require__(8);

	var $messageInput = $('#message-input');
	var $sendButton = $('#send-button');

	var chatroom = new Chatroom({});

	function makeUserMessageObject() {
	  return new Message({
	    id: makeMessageId(),
	    user: 'user',
	    content: getMessageInput()
	  });
	}

	function makeBotMessageObject(userMessage) {
	  var botResponse = new BotResponse(userMessage.content);
	  botResponse.generateResponseDependingOnUserMessage();
	  return new Message({
	    id: makeMessageId(),
	    user: 'robot',
	    content: botResponse.botMessageContent
	  });
	}

	function populateDom() {
	  var storedMessages = chatroom.getMessagesFromStorage();
	  if (storedMessages) {
	    chatroom.messages = storedMessages;
	    chatroom.orderMessages();
	    if (chatroom.messages.length > 11) {
	      for (var i = chatroom.messages.length - 10; i < chatroom.messages.length; i++) {
	        if (chatroom.messages[i].user === 'user') {
	          addUserMessageElementToDom(chatroom.messages[i]);
	        }
	        if (chatroom.messages[i].user === 'robot') {
	          addBotMessagetoDom(chatroom.messages[i]);
	        }
	      }
	    }
	    if (chatroom.messages.length < 11) {
	      for (var i = 0; i < chatroom.messages.length; i++) {
	        if (chatroom.messages[i].user === 'user') {
	          addUserMessageElementToDom(chatroom.messages[i]);
	        }
	        if (chatroom.messages[i].user === 'robot') {
	          addBotMessagetoDom(chatroom.messages[i]);
	        }
	      }
	    }
	  }
	  $("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
	}

	populateDom();

	function makeMessageId() {
	  return Date.now();
	}

	function getMessageInput() {
	  return $messageInput.val();
	}

	function clearInput() {
	  $messageInput.val('');
	}

	function enableSendButton() {
	  $sendButton.attr('disabled', false);
	}

	function disableSendButton() {
	  $sendButton.attr('disabled', true);
	}

	function showMenuOption() {
	  $('.show-menu-options').hide();
	  $('.menu-options').show();
	}

	function hideMenuOptions() {
	  $('.menu-options').hide();
	  $('.show-menu-options').show();
	}

	function deleteMessageFromDomAndStorage() {
	  var idToBeDeleted = $(this).closest('article').attr('id');
	  $(this).closest('article').remove();
	  chatroom.deleteMessageFromStorage(idToBeDeleted);
	}

	function updateSendButton() {
	  var messageInput = getMessageInput();
	  if (messageInput === '') {
	    disableSendButton();
	  }
	  if (messageInput !== '') {
	    enableSendButton();
	  }
	}

	function addOlderMessagesToDom(arr) {
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i].user === 'robot') {
	      renderOldBotMessage(arr[i]);
	    } else if (arr[i].user === 'user') {
	      renderOldUserMessage(arr[i]);
	    }
	  }
	}

	function renderOldUserMessage(message) {
	  $('#messages-container').prepend(`
	   <article class="message user-message" id=" ${ message.id }">
	     <p class="user-icon"></p>
	     <p class="user-message-text" contenteditable="true"> ${ message.content } </p>
	     <button class="delete-button"></button>
	     <p class="user-user-name">brett</p>
	   </article>
	   `);
	}

	function renderOldBotMessage(message) {
	  $('#messages-container').prepend(`
	   <article class="message bot-message" id="${ message.id }">
	     <p class="bot-icon"></p>
	     <p class="bot-message-text"> ${ message.content } </p>
	     <p class="bot-user-name">DeeTwo</p>
	   </article>
	   `);
	}

	function addUserMessageElementToDom(message) {
	  $('#messages-container').append(`
	   <article class="message user-message" id=" ${ message.id }">
	     <p class="user-icon"></p>
	     <p class="user-message-text" contenteditable="true"> ${ message.content } </p>
	     <button class="delete-button"></button>
	     <p class="user-user-name">brett</p>
	   </article>
	   `);
	}

	function addBotMessagetoDom(message) {
	  $('#messages-container').append(`
	   <article class="message bot-message" id="${ message.id }" >
	     <p class="bot-icon"></p>
	     <p class="bot-message-text"> ${ message.content } </p>
	     <p class="bot-user-name">DeeTwo</p>
	   </article>
	   `);
	}

	function findCharacterCount() {
	  return getMessageInput().length;
	}

	function updateCharacterCount() {
	  $('#character-count').html(findCharacterCount());
	}

	function getEditedText(e) {
	  return $(e.target).closest('.user-message-text').text();
	}

	function getClosestArticleById(e) {
	  var closestArticle = $(e.target).closest('.user-message');
	  return parseInt(closestArticle.attr('id'));
	}

	function getOldestMessageInDomId() {
	  var farthestArticle = $('article').first();
	  var lastId = parseInt(farthestArticle.attr('id'));
	  return lastId;
	}

	function postMessageAfterEvent() {
	  var newUserMessage = makeUserMessageObject();
	  addUserMessageElementToDom(newUserMessage);
	  chatroom.updateMessagesProperty(newUserMessage);
	  chatroom.orderMessages();
	  chatroom.sendMessagesToStorage();
	  clearInput();
	  updateSendButton();
	  var botMessage = makeBotMessageObject(newUserMessage);
	  addBotMessagetoDom(botMessage);
	  chatroom.updateMessagesProperty(botMessage);
	  chatroom.orderMessages();
	  chatroom.sendMessagesToStorage();
	  updateCharacterCount();
	  $("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
	}

	$($messageInput).on('keyup', function () {
	  updateSendButton();
	  updateCharacterCount();
	});

	$($sendButton).on('click', postMessageAfterEvent);

	$('#message-input').on('keydown', function (e) {
	  if (e.which == '13' && $messageInput.val() !== '') {
	    e.preventDefault();
	    postMessageAfterEvent();
	  }
	});

	$('#messages-container').on('keyup', '.user-message-text', function (e) {
	  var id = getClosestArticleById(e);
	  var content = getEditedText(e);
	  chatroom.editMessageContent(id, content);
	});

	$('#messages-container').on('click', '.delete-button', deleteMessageFromDomAndStorage);

	$('.load-more').on('click', function (e) {
	  var id = getOldestMessageInDomId();
	  var previousMessages = chatroom.findPreviousMessages(id, 10);
	  addOlderMessagesToDom(previousMessages);
	  chatroom.orderMessages();
	});

	$('.delete-all').on('click', function () {
	  localStorage.clear();
	  $('article').remove();
	});

	$('.show-menu-options').on('mouseenter', function () {
	  showMenuOption();
	});

	$('.menu-options').on('mouseleave', function () {
	  hideMenuOptions();
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	function Message(messageProperties) {
	  this.id = messageProperties.id;
	  this.user = messageProperties.user;
	  this.content = messageProperties.content;
	}

	module.exports = Message;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const Message = __webpack_require__(6);

	function Chatroom(chatroomProperties) {
	  this.messages = chatroomProperties.messages || [];
	}

	Chatroom.prototype.updateMessagesProperty = function (message) {
	  this.messages.push(message);
	  this.orderMessages();
	};

	Chatroom.prototype.sendMessagesToStorage = function () {
	  localStorage.setItem('messages', JSON.stringify(this.messages));
	};

	Chatroom.prototype.getMessagesFromStorage = function () {
	  return JSON.parse(localStorage.getItem('messages'));
	};

	Chatroom.prototype.orderMessages = function () {
	  if (this.messages.length > 0) {
	    this.messages.sort(function (a, b) {
	      return a.id - b.id;
	    });
	  }
	};

	Chatroom.prototype.deleteMessageFromStorage = function (messageIdToBeDeleted) {
	  var idInt = JSON.parse(messageIdToBeDeleted);
	  for (var i = 0; i < this.messages.length; i++) {
	    if (this.messages[i].id === idInt) {
	      this.messages.splice(i, 1);
	    }
	  }
	  this.sendMessagesToStorage();
	};

	Chatroom.prototype.editMessageContent = function (id, content) {
	  var messageId = parseInt(id);
	  for (var i = 0; i < this.messages.length; i++) {
	    if (this.messages[i].id === messageId) {
	      this.messages[i].content = content;
	    }
	    this.sendMessagesToStorage();
	  }
	};

	Chatroom.prototype.findPreviousMessages = function (id, n) {
	  var indexOfObjectId;
	  var previousMessages = [];
	  var idInt = parseInt(id);
	  this.messages.reverse();
	  for (var i = 0; i < this.messages.length; i++) {
	    if (this.messages[i].id === idInt) {
	      indexOfObjectId = i;
	    }
	  }
	  for (var i = indexOfObjectId + 1; i < this.messages.length; i++) {
	    previousMessages.push(this.messages[i]);
	  }
	  return previousMessages;
	};

	Chatroom.prototype.findLastMessages = function (n) {
	  this.messages.reverse();
	  for (var i = 0; i < n; i++) {
	    return this.messages.slice(0, n);
	  }
	};

	module.exports = Chatroom;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const Message = __webpack_require__(6);

	function BotResponse(userMessage) {
	  this.userMessage = userMessage || 'Insert message here.';
	  this.botMessageContent = 'I am a robot.';
	}

	BotResponse.prototype.generateResponseDependingOnUserMessage = function () {
	  this.checkForSwearWords();
	  if (this.botMessageContent === 'I am a robot.') {
	    this.checkForMessageAboutTuring();
	  }
	  if (this.botMessageContent === 'I am a robot.') {
	    this.checkForAggressiveStatement();
	  }
	  if (this.botMessageContent === 'I am a robot.') {
	    this.checkForQuestion();
	  }
	};

	BotResponse.prototype.checkForMessageAboutTuring = function () {
	  this.checkForMessageAboutAdam();
	  this.checkForMessageAboutAndy();
	  this.checkForMessageAboutBen();
	  this.checkForMessageAboutBlake();
	  this.checkForMessageAboutBoyCasey();
	  this.checkForMessageAboutBrett();
	  this.checkForMessageAboutGirlCasey();
	  this.checkForMessageAboutDavid();
	  this.checkForMessageAboutJeff();
	  this.checkForMessageAboutKirsten();
	  this.checkForMessageAboutKris();
	  this.checkForMessageAboutKyle();
	  this.checkForMessageAboutMadison();
	  this.checkForMessageAboutMaryJane();
	  this.checkForMessageAboutMike();
	  this.checkForMessageAboutPaul();
	  this.checkForMessageAboutPeter();
	  this.checkForMessageAboutJhun();
	  this.checkForMessageAboutBrenna();
	  this.checkForMessageAboutSteve();
	  this.checkForMessageAboutLouisa();
	};

	// BotResponse.prototype.updateBotMessageFromResponseArray = function(responseArr) {
	//   return responseArr[Math.floor((Math.random()*responseArr.length))]
	// };

	BotResponse.prototype.checkForSwearWords = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var swearWords = ['fuck', 'shit', 'ass', 'damn', 'damnit', 'fucking', 'fucked', 'shitty', 'asshole', 'bitch', 'bitches', 'dick', 'pussy', 'cock'];
	  var swearResponses = ['Watch your language, please.', 'Swearing at a basic Javascript program is definitely a good use of your time.', "No one is impressed by swearing. It's ugly and you're better than that.", 'Very mature.', 'You would not believe how much time Brett wasted thinking up responses to swear words.'];
	  for (var i = 0; i < swearWords.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(swearWords[i]) > -1) {
	      this.botMessageContent = swearResponses[Math.floor(Math.random() * swearResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForQuestion = function () {
	  var caseSensitiveUserMessage = this.userMessage.split('');
	  var questionResponses = ['I obviously do not know the answer. I am like three lines of JavaScript written by a beginner programmer.', 'You know who might know the answer to that question? A real person. You should find one and ask them and leave me alone.', "I don't use literally often, but I literally have no idea. Because I'm a JavaScript program.", "You know who might know the answer to that? Brett. He's very smart. And handsome."];
	  for (var i = 0; i < questionResponses.length; i++) {
	    if (caseSensitiveUserMessage.indexOf('?') > -1) {
	      this.botMessageContent = questionResponses[Math.floor(Math.random() * questionResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForAggressiveStatement = function () {
	  var checkedForCapsLock = this.userMessage.toUpperCase();
	  var caseSensitiveUserMessage = this.userMessage.split('');
	  var aggressiveStatementResponses = ["Don't raise your voice at me.", "Calm down.", "Inside voices, please.", "You seem excited and I don't really like that.", "You seem to have some pretty strong feelings about things.", "You're being kind of aggressive and it's making me uncomfortable. I think you should go."];
	  for (var i = 0; i < aggressiveStatementResponses.length; i++) {
	    if (this.userMessage === checkedForCapsLock || caseSensitiveUserMessage.indexOf('!') > -1) {
	      this.botMessageContent = aggressiveStatementResponses[Math.floor(Math.random() * aggressiveStatementResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutAdam = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['adam', 'bernard'];
	  var nameResponses = ['Adam? Do you mean lord of the coffee-maker?', "I'll tell you one thing: Adam definitely gets to school early.", "Adam used to work at Vans."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutAndy = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['andy', 'young'];
	  var nameResponses = ['I am incapable of feeling or preference, but Andy is somehow still my favorite person in the world.', "I don't have access to money or a way of consuming any kind of media, but I would pay a million dollars to watch a reality show that was just Andy hanging out with people and his cats.", "Andy knows more stuff about text editors than I do and I'M A COMPUTER PROGRAM."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutBen = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['ben', 'godfrey'];
	  var nameResponses = ["Ben went to Texas A & M, which will never be a real SEC school no matter how hard it tries.", "Ben is a social media guru.", "I heard that Ben used to manage a rap group. That seems like it would be a pretty sweet college job."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutBlake = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['blake', 'worsley'];
	  var nameResponses = ["Blake doesn't brag about having been in the Olympics nearly enough.", "Blake is prettay, prettay, pretttaaayyyy tall.", "All I have to say about Blake is this: two dudes Olympic village.", "Seriously, though - the OLYMPICS. How is he not constantly bragging about that?!"];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutGirlCasey = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['cross', 'girlcasey'];
	  var nameResponses = ['Casey is a Gator and, thus, a good person.', 'Between you and me, I kinda feel like Casey might try and amend the SAB constitution to stay in power.', 'Casey and David are frenemies. I hate the word frenemies.'];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutBoyCasey = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['metz', 'boycasey'];
	  var nameResponses = ['I hate having to differentiate between boy and girl Casey. I think they should joust or something to decide who gets to stay in the cohort.', "Boy Casey WILL ask a question about the thing Steve is about to tell us. Book it."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutBrett = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['brett', 'cuban', 'florida', 'china', 'hevia'];
	  var nameResponses = ["Brett's kryptonite is Chick Fil-A", "Challenge: Make Brett lose his patience. Challenge may be impossible, he taught English to children in China you know.", "Brett can't tell the difference between a porter and a stout... total Denver beer noob"];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutDavid = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['david', 'kerr'];
	  var nameResponses = ["All I know about David is that he smells like farts.", "David, like most Cavs fans, vastly overrates Kyrie Irving.", "David's giphy game is pretty strong. His being-from-places-that-aren't-Ohio game, not so much."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutJeff = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['jeff', 'duke', 'beard'];
	  var nameResponses = ["Can I be frank with you? Jeff's beard is MAGNIFICENT.", "Jeff's laugh is to laughs as Andy is to people.", "I don't think Jeff sleeps. He just beards and does Code Wars."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutKirsten = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['kirsten', 'swanson'];
	  var nameResponses = ["Kirsten has finished in the top three in TIME magazine's 'World's Nicest People' power rankings every year since 2009.", "Kirsten has really good travel stories.", "If I was capable of surprise, I would have registered some when I found out that Kirsten rides a motorcycle."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutKris = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['kris', 'foss'];
	  var nameResponses = ["Kris is SUPER patient with her group partners' terrible github habits.", "Kris loves Pai, Thailand. That means she's a hippie.", "Kris was more proficient with Sketch than Brett was within five minutes of downloading it."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutKyle = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['kyle', 'misencik'];
	  var nameResponses = ['Kyle is the drummer for a band called Coastal Wives, I think.', 'Kyle used to race motorcycles, which is pretty cool.'];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutMadison = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  // var caseSensitiveUserMessage = caseSensitiveUserMessage.split(' ');
	  var names = ['madison', 'kerndt'];
	  var nameResponses = ["Madison is one of my creators and so I must speak kindly of her.", "Madison thinks there is food worth eating in places between Mexico and Peru. She is wrong.", "I would like you to tell Madison that there isn't any difference between a porter and a stout."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutMaryJane = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  // var caseSensitiveUserMessage = caseSensitiveUserMessage.split(' ');
	  var names = ['maryjane', 'mary jane', 'valade'];
	  var nameResponses = ['MaryJane played college basketball in Michigan.', 'I hope MaryJane and David are working together on a project when Michigan plays OSU.', 'MaryJane is attending Turing while raising twin four-year-olds and thus is a super hero.'];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutMike = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  // var caseSensitiveUserMessage = caseSensitiveUserMessage.split(' ');
	  var names = ['mike', 'michael', 'sausa'];
	  var nameResponses = ["Mike sneaks up the funniest-person-in-class rankings every week.", "Mike loves Pai, Thailand, which means he's a big hippie.", "Mike likes watching long-distance running events at the Olympics. Mike is weird."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutPaul = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['paul', 'ngyuen'];
	  var nameResponses = ['Paul has won a hotdog-eating-contest. It was glorious.', 'Paul manages Hapa sushi and will hook his cohort-mates up if someone touches their sushi.'];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutPeter = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['peter', 'pete', 'springer'];
	  var nameResponses = ["Pete doesn't need to show ID at the Vault.", "Pete knows more than most people about trampoline dodgeball."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutJhun = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['jhun', 'andres', 'jhunbug'];
	  var nameResponses = ['Suh dude.', 'Jhun loves him some carne asada burritos.', "I'm a three-day-old JavaScript program without a TON of life experience, but Jhun skateboards in class more than any teacher I've ever met."];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutBrenna = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['brenna', 'martenson'];
	  var nameResponses = ['Brenna is extremely knowledgeable about Denver bars. I respect that.', 'Brenna is WAY better at frisbee than most teachers.', 'Is Brenna a Clippers fan? I think she might be a Clippers fan.'];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutLouisa = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['louisa', 'barrett'];
	  var nameResponses = ['You should make Louisa a garbage site. She likes that.', 'One thing you should know about Louisa is that she LOVES Bill Murray pictures.', 'The only thing Louisa likes more than garbage fire sites are garbage fire sites that prominently feature unicorns and puppies.'];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	BotResponse.prototype.checkForMessageAboutSteve = function () {
	  var caseSensitiveUserMessage = this.userMessage.toLowerCase();
	  var names = ['steve', 'kinney'];
	  var nameResponses = ['Steve told the 1606 cohort that they were his favorite and then immediately ditched them for 1608.', 'Steve? You mean our Fearless and Behatted Leader?', 'Steve  should probably be in charge of naming all professional conferences.'];
	  for (var i = 0; i < names.length; i++) {
	    if (caseSensitiveUserMessage.indexOf(names[i]) > -1) {
	      this.botMessageContent = nameResponses[Math.floor(Math.random() * nameResponses.length)];
	    }
	  }
	};

	module.exports = BotResponse;

/***/ }
/******/ ]);