webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #FFFFFF;\n  margin: 0; }\n\nh1 {\n  font-family: \"Noto Serif\", serif;\n  font-style: italic;\n  font-size: 12px;\n  margin-bottom: 40px; }\n\nh2 {\n  font-family: \"Open Sans\", sans-serif; }\n\nh3 {\n  font-family: \"Open Sans\", sans-serif;\n  color: #FFFFFF;\n  font-size: 14px;\n  margin: 0;\n  padding: 0; }\n\np {\n  font-family: \"Open Sans\", sans-serif; }\n\na {\n  font-family: \"Open Sans\", sans-serif;\n  color: #000000;\n  text-decoration: none;\n  font-weight: 700;\n  transition: color 150ms ease-out; }\n  a:hover {\n    color: #9DD40D;\n    border-bottom: 2px solid #9DD40D; }\n\n.main-layout {\n  width: 80%;\n  margin: 0 auto;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .main-layout .header {\n    margin-bottom: 180px;\n    padding: 20px 20px 0;\n    background: linear-gradient(#FFFFFF, #E3E3E3); }\n    .main-layout .header .navigation {\n      list-style-type: none;\n      padding: 0 0 20px 0;\n      margin: 0; }\n      .main-layout .header .navigation li {\n        display: inline-block;\n        padding: 0 20px;\n        border-left: 1px solid #000000; }\n        .main-layout .header .navigation li:first-child {\n          padding: 0 20px 0 0;\n          border-left: none; }\n    .main-layout .header .header-image-position {\n      position: absolute;\n      width: 100%;\n      height: 180px;\n      left: 0;\n      overflow: hidden; }\n      .main-layout .header .header-image-position .header-image {\n        width: 100%;\n        min-width: 1024px;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        -webkit-transform: translate(0, -50%);\n                transform: translate(0, -50%); }\n  .main-layout .content {\n    height: auto;\n    background: #E3E3E3;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding: 20px; }\n    .main-layout .content .content-split {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .main-layout .content .content-split .content-left, .main-layout .content .content-split .content-right {\n        width: 50%; }\n\n.account {\n  display: inline-block;\n  background: #9DD40D;\n  width: 80%;\n  border-radius: 0 20px 20px 0;\n  position: relative;\n  padding: 10px;\n  cursor: pointer; }\n  .account:hover {\n    background: #a8e20e; }\n  .account:active {\n    background: #92c60c; }\n  .account .bankdetails {\n    margin: 3px 0 0;\n    font-size: 10px; }\n  .account .account-total {\n    margin: 0;\n    position: absolute;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    top: 50%;\n    right: 10px;\n    font-size: 16px;\n    font-weight: 700;\n    color: #FFFFFF; }\n\n.user-details, .transaction-details, .payment-details {\n  border: 1px solid #ABABAB;\n  border-radius: 5px;\n  padding: 10px; }\n  .user-details .transaction, .transaction-details .transaction, .payment-details .transaction {\n    position: relative;\n    padding: 10px;\n    border-radius: 5px;\n    transition: background 150ms ease-out; }\n    .user-details .transaction:hover, .transaction-details .transaction:hover, .payment-details .transaction:hover {\n      background: rgba(255, 255, 255, 0.25); }\n    .user-details .transaction.add .transaction-action, .transaction-details .transaction.add .transaction-action, .payment-details .transaction.add .transaction-action {\n      background: #9DD40D; }\n    .user-details .transaction.subtract .transaction-action, .transaction-details .transaction.subtract .transaction-action, .payment-details .transaction.subtract .transaction-action {\n      background: #c0f33b; }\n  .user-details p, .transaction-details p, .payment-details p {\n    display: inline-block;\n    margin: 0 0 10px;\n    font-size: 14px;\n    width: 48%; }\n  .user-details .transaction-name, .transaction-details .transaction-name, .payment-details .transaction-name {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    display: block; }\n  .user-details .transaction-date, .transaction-details .transaction-date, .payment-details .transaction-date {\n    margin: 3px 0 0;\n    font-size: 10px;\n    width: auto; }\n  .user-details .transaction-action, .transaction-details .transaction-action, .payment-details .transaction-action {\n    background: green;\n    padding: 5px;\n    display: inline-block;\n    min-width: 30px;\n    text-align: center;\n    border-radius: 3px;\n    position: absolute;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    top: 50%;\n    right: 40%; }\n    .user-details .transaction-action > p, .transaction-details .transaction-action > p, .payment-details .transaction-action > p {\n      margin: 0;\n      width: auto;\n      display: block;\n      color: #FFFFFF;\n      font-weight: 700; }\n  .user-details .transaction-amount, .transaction-details .transaction-amount, .payment-details .transaction-amount {\n    margin: 0;\n    position: absolute;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    top: 50%;\n    right: 10px;\n    font-size: 16px;\n    font-weight: 700;\n    width: auto; }\n  .user-details input, .user-details select, .transaction-details input, .transaction-details select, .payment-details input, .payment-details select {\n    display: inline-block;\n    width: 48%;\n    margin: 0; }\n    .user-details input[type=\"checkbox\"], .user-details select[type=\"checkbox\"], .transaction-details input[type=\"checkbox\"], .transaction-details select[type=\"checkbox\"], .payment-details input[type=\"checkbox\"], .payment-details select[type=\"checkbox\"] {\n      width: auto;\n      margin-right: 40px; }\n    .user-details input.one-fourth, .user-details select.one-fourth, .transaction-details input.one-fourth, .transaction-details select.one-fourth, .payment-details input.one-fourth, .payment-details select.one-fourth {\n      width: 11%; }\n    .user-details input.three-fourth, .user-details select.three-fourth, .transaction-details input.three-fourth, .transaction-details select.three-fourth, .payment-details input.three-fourth, .payment-details select.three-fourth {\n      width: 35%; }\n\n.button-group {\n  text-align: right; }\n  .button-group button {\n    background: #9DD40D;\n    border-style: none;\n    padding: 5px 20px;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: background 150ms ease-out;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 700; }\n    .button-group button:hover {\n      background: #a8e20e; }\n    .button-group button:active {\n      background: #92c60c; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

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
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
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


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map