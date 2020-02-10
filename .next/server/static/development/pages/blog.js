module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LineItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineItem */ "./components/LineItem.js");
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/Cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.props.checkout.lineItems.map(line_item => {
      return __jsx(_LineItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        updateQuantityInCart: this.props.updateQuantityInCart,
        removeLineItemInCart: this.props.removeLineItemInCart,
        key: line_item.id.toString(),
        line_item: line_item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      });
    });
    return __jsx("div", {
      className: `Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("header", {
      className: "Cart__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Your cart"), __jsx("button", {
      onClick: this.props.handleCartClose,
      className: "Cart__close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "\xD7")), __jsx("ul", {
      className: "Cart__line-items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, line_items), __jsx("footer", {
      className: "Cart__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "Cart-info clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "Cart-info__total Cart-info__small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Subtotal"), __jsx("div", {
      className: "Cart-info__pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("span", {
      className: "pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "$ ", this.props.checkout.subtotalPrice))), __jsx("div", {
      className: "Cart-info clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "Cart-info__total Cart-info__small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Taxes"), __jsx("div", {
      className: "Cart-info__pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("span", {
      className: "pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "$ ", this.props.checkout.totalTax))), __jsx("div", {
      className: "Cart-info clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "Cart-info__total Cart-info__small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Total"), __jsx("div", {
      className: "Cart-info__pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("span", {
      className: "pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "$ ", this.props.checkout.totalPrice))), __jsx("button", {
      className: "Cart__checkout button",
      onClick: this.openCheckout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Checkout")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => __jsx("header", {
  className: "jsx-1780491860",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1780491860" + " " + "header-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1780491860",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Ryan"))), __jsx("div", {
  className: "jsx-1780491860" + " " + "header-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1780491860",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Blog")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/shop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1780491860",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Shop"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1780491860",
  __self: undefined
}, "header.jsx-1780491860{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-right.jsx-1780491860 a.jsx-1780491860{margin:0 1rem;padding:0 0.2rem;padding-bottom:0.2rem;border-bottom:1px solid black;}.header-right.jsx-1780491860 a.jsx-1780491860:hover{border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZ3J1bmVzdC9EZXZlbG9wZXIvcmVhY3QtcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHc0IsQUFJQyxBQU1GLFlBQ2QsRUFObUIsaUJBQ0ssc0JBQ1EscUJBTkEsU0FPaEMsMEdBTkEiLCJmaWxlIjoiL1VzZXJzL3JncnVuZXN0L0RldmVsb3Blci9yZWFjdC1wb3J0Zm9saW8vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YT5SeWFuPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgPGE+QmxvZzwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxuICAgICAgICA8YT5TaG9wPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgLmhlYWRlci1yaWdodCBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMC4ycmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICB9XG4gICAgICAuaGVhZGVyLXJpZ2h0IGE6aG92ZXIge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/rgrunest/Developer/react-portfolio/components/Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/LineItem.js":
/*!********************************!*\
  !*** ./components/LineItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/LineItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class LineItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return __jsx("li", {
      className: "Line-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "Line-item__img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, this.props.line_item.variant.image ? __jsx("img", {
      src: this.props.line_item.variant.image.src,
      alt: `${this.props.line_item.title} product shot`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }) : null), __jsx("div", {
      className: "Line-item__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "Line-item__content-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "Line-item__variant-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, this.props.line_item.variant.title), __jsx("span", {
      className: "Line-item__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.props.line_item.title)), __jsx("div", {
      className: "Line-item__content-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "Line-item__quantity-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("button", {
      className: "Line-item__quantity-update",
      onClick: () => this.decrementQuantity(this.props.line_item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "-"), __jsx("span", {
      className: "Line-item__quantity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, this.props.line_item.quantity), __jsx("button", {
      className: "Line-item__quantity-update",
      onClick: () => this.incrementQuantity(this.props.line_item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "+")), __jsx("span", {
      className: "Line-item__price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "$", " ", (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2)), __jsx("button", {
      className: "Line-item__remove",
      onClick: () => this.props.removeLineItemInCart(this.props.line_item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "\xD7"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LineItem);

/***/ }),

/***/ "./components/MyHead.js":
/*!******************************!*\
  !*** ./components/MyHead.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/MyHead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MyHead = props => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.page, " // Ryan Grunest"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Dosis&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyHead);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _MyHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyHead */ "./components/MyHead.js");
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const layoutStyle = {
  margin: 20
};

const Layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_MyHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: props.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    style: layoutStyle,
    className: "jsx-708581402",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "708581402",
    __self: undefined
  }, "html,body{font-family:\"Dosis\",sans-serif;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}a:hover,a:active,a:focus,a: visited{color:gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZ3J1bmVzdC9EZXZlbG9wZXIvcmVhY3QtcG9ydGZvbGlvL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXlCLEFBSTJDLEFBSVgsQUFPVixXQUNiLG9CQVhxQixtQkFJUCxZQUNkLDhEQUpBIiwiZmlsZSI6Ii9Vc2Vycy9yZ3J1bmVzdC9EZXZlbG9wZXIvcmVhY3QtcG9ydGZvbGlvL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE15SGVhZCBmcm9tIFwiLi9NeUhlYWRcIjtcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIG1hcmdpbjogMjBcbn07XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE15SGVhZCBwYWdlPXtwcm9wcy5wYWdlfSAvPlxuICAgICAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlcixcbiAgICAgICAgYTphY3RpdmUsXG4gICAgICAgIGE6Zm9jdXMsXG4gICAgICAgIGE6IHZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/rgrunest/Developer/react-portfolio/components/MyLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VariantSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VariantSelector */ "./components/VariantSelector.js");
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Product extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  componentWillMount() {
    this.props.product.options.forEach(selector => {
      this.setState({
        selectedOptions: {
          [selector.name]: selector.values[0].value
        }
      });
    });
  }

  findImage(images, variantId) {
    const primary = images[0];
    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];
    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;
    const selectedVariant = this.props.product.variants.find(variant => {
      return variant.selectedOptions.every(selectedOption => {
        return selectedOptions[selectedOption.name] === selectedOption.value.valueOf();
      });
    });
    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image.src
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0].src;
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    let variantQuantity = this.state.selectedVariantQuantity || 1;
    let variantSelectors = this.props.product.options.map(option => {
      return __jsx(_VariantSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
        handleOptionChange: this.handleOptionChange,
        key: option.id.toString(),
        option: option,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      });
    });
    return __jsx("div", {
      className: "Product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, this.props.product.images.length ? __jsx("img", {
      src: variantImage,
      alt: `${this.props.product.title} product shot`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }) : null, __jsx("h5", {
      className: "Product__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, this.props.product.title), __jsx("span", {
      className: "Product__price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "$", variant.price), variantSelectors, __jsx("label", {
      className: "Product__option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Quantity", __jsx("input", {
      min: "1",
      type: "number",
      defaultValue: variantQuantity,
      onChange: this.handleQuantityChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), __jsx("button", {
      className: "Product__buy button",
      onClick: () => this.props.addVariantToCart(variant.id, variantQuantity),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Add to Cart"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/Products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Products extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let products = this.props.products.map(product => {
      return __jsx(_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
        addVariantToCart: this.props.addVariantToCart,
        checkout: this.props.checkout,
        key: product.id.toString(),
        product: product,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      });
    });
    return __jsx("div", {
      className: "Product-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, products);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/VariantSelector.js":
/*!***************************************!*\
  !*** ./components/VariantSelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/VariantSelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class VariantSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("select", {
      className: "Product__option",
      name: this.props.option.name,
      key: this.props.option.name,
      onChange: this.props.handleOptionChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, this.props.option.values.map(value => {
      return __jsx("option", {
        value: value,
        key: `${this.props.option.name}-${value}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, `${value}`);
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (VariantSelector);

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products */ "./components/Products.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart.js");
/* harmony import */ var babel_plugin_graphql_js_client_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-plugin-graphql-js-client-transform */ "babel-plugin-graphql-js-client-transform");
/* harmony import */ var babel_plugin_graphql_js_client_transform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_graphql_js_client_transform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_js_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-js-client */ "graphql-js-client");
/* harmony import */ var graphql_js_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_js_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./pages/types.js");
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/pages/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const client = new graphql_js_client__WEBPACK_IMPORTED_MODULE_6___default.a(_types__WEBPACK_IMPORTED_MODULE_7__["default"], {
  url: "https://graphql.myshopify.com/api/graphql",
  fetcherOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token": "dd4d4dc146542ba7763305d71d1b3d38"
    }
  }
}); // class Blog extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isCartOpen: false,
//       checkout: { lineItems: [] },
//       products: [],
//       shop: {}
//     };
//     this.handleCartClose = this.handleCartClose.bind(this);
//     this.addVariantToCart = this.addVariantToCart.bind(this);
//     this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
//     this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
//   }
//   componentWillMount() {
//     const client = this.props.client;
//     client
//       .send(
//         gql(client)`
//       mutation {
//         checkoutCreate(input: {}) {
//           userErrors {
//             message
//             field
//           }
//           checkout {
//             id
//             webUrl
//             subtotalPrice
//             totalTax
//             totalPrice
//             lineItems (first:250) {
//               pageInfo {
//                 hasNextPage
//                 hasPreviousPage
//               }
//               edges {
//                 node {
//                   title
//                   variant {
//                     title
//                     image {
//                       src
//                     }
//                     price
//                   }
//                   quantity
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//       )
//       .then(res => {
//         this.setState({
//           checkout: res.model.checkoutCreate.checkout
//         });
//       });
//     client
//       .send(
//         gql(client)`
//       query {
//         shop {
//           name
//           description
//           products(first:20) {
//             pageInfo {
//               hasNextPage
//               hasPreviousPage
//             }
//             edges {
//               node {
//                 id
//                 title
//                 options {
//                   name
//                   values
//                 }
//                 variants(first: 250) {
//                   pageInfo {
//                     hasNextPage
//                     hasPreviousPage
//                   }
//                   edges {
//                     node {
//                       title
//                       selectedOptions {
//                         name
//                         value
//                       }
//                       image {
//                         src
//                       }
//                       price
//                     }
//                   }
//                 }
//                 images(first: 250) {
//                   pageInfo {
//                     hasNextPage
//                     hasPreviousPage
//                   }
//                   edges {
//                     node {
//                       src
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//       )
//       .then(res => {
//         this.setState({
//           shop: res.model.shop,
//           products: res.model.shop.products
//         });
//       });
//   }
//   addVariantToCart(variantId, quantity) {
//     this.setState({
//       isCartOpen: true
//     });
//     const lineItems = [{ variantId, quantity: parseInt(quantity, 10) }];
//     const checkoutId = this.state.checkout.id;
//     return this.props.client
//       .send(
//         gql(this.props.client)`
//       mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
//         checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
//           userErrors {
//             message
//             field
//           }
//           checkout {
//             webUrl
//             subtotalPrice
//             totalTax
//             totalPrice
//             lineItems (first:250) {
//               pageInfo {
//                 hasNextPage
//                 hasPreviousPage
//               }
//               edges {
//                 node {
//                   title
//                   variant {
//                     title
//                     image {
//                       src
//                     }
//                     price
//                   }
//                   quantity
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//         { checkoutId, lineItems }
//       )
//       .then(res => {
//         this.setState({
//           checkout: res.model.checkoutLineItemsAdd.checkout
//         });
//       });
//   }
//   updateQuantityInCart(lineItemId, quantity) {
//     const checkoutId = this.state.checkout.id;
//     const lineItems = [{ id: lineItemId, quantity: parseInt(quantity, 10) }];
//     return this.props.client
//       .send(
//         gql(this.props.client)`
//       mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
//         checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
//           userErrors {
//             message
//             field
//           }
//           checkout {
//             webUrl
//             subtotalPrice
//             totalTax
//             totalPrice
//             lineItems (first:250) {
//               pageInfo {
//                 hasNextPage
//                 hasPreviousPage
//               }
//               edges {
//                 node {
//                   title
//                   variant {
//                     title
//                     image {
//                       src
//                     }
//                     price
//                   }
//                   quantity
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//         { checkoutId, lineItems }
//       )
//       .then(res => {
//         this.setState({
//           checkout: res.model.checkoutLineItemsUpdate.checkout
//         });
//       });
//   }
//   removeLineItemInCart(lineItemId) {
//     const checkoutId = this.state.checkout.id;
//     return this.props.client
//       .send(
//         gql(this.props.client)`
//       mutation ($checkoutId: ID!, $lineItemIds: [ID!]!) {
//         checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
//           userErrors {
//             message
//             field
//           }
//           checkout {
//             webUrl
//             subtotalPrice
//             totalTax
//             totalPrice
//             lineItems (first:250) {
//               pageInfo {
//                 hasNextPage
//                 hasPreviousPage
//               }
//               edges {
//                 node {
//                   title
//                   variant {
//                     title
//                     image {
//                       src
//                     }
//                     price
//                   }
//                   quantity
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//         { checkoutId, lineItemIds: [lineItemId] }
//       )
//       .then(res => {
//         this.setState({
//           checkout: res.model.checkoutLineItemsRemove.checkout
//         });
//       });
//   }
//   handleCartClose() {
//     this.setState({
//       isCartOpen: false
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App__header">
//           {!this.state.isCartOpen && (
//             <div className="App__view-cart-wrapper">
//               <button
//                 className="App__view-cart"
//                 onClick={() => this.setState({ isCartOpen: true })}
//               >
//                 Cart
//               </button>
//             </div>
//           )}
//           <div className="App__title">
//             <h1>{this.state.shop.name}: React Example</h1>
//             <h2>{this.state.shop.description}</h2>
//           </div>
//         </header>
//         <Products
//           products={this.state.products}
//           addVariantToCart={this.addVariantToCart}
//         />
//         <Cart
//           checkout={this.state.checkout}
//           isCartOpen={this.state.isCartOpen}
//           handleCartClose={this.handleCartClose}
//           updateQuantityInCart={this.updateQuantityInCart}
//           removeLineItemInCart={this.removeLineItemInCart}
//         />
//       </div>
//     );
//   }
// }
// export default Blog;

function Blog() {
  console.log(client);
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: "Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, "This is the blog page."));
}

/***/ }),

/***/ "./pages/types.js":
/*!************************!*\
  !*** ./pages/types.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Checkout = {
  "name": "Checkout",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "appliedGiftCards": "AppliedGiftCard",
    "availableShippingRates": "AvailableShippingRates",
    "completedAt": "DateTime",
    "createdAt": "DateTime",
    "currencyCode": "CurrencyCode",
    "customAttributes": "Attribute",
    "customer": "Customer",
    "email": "String",
    "id": "ID",
    "lineItems": "CheckoutLineItemConnection",
    "note": "String",
    "order": "Order",
    "orderStatusUrl": "URL",
    "paymentDue": "Money",
    "ready": "Boolean",
    "requiresShipping": "Boolean",
    "shippingAddress": "MailingAddress",
    "shippingLine": "ShippingRate",
    "subtotalPrice": "Money",
    "taxExempt": "Boolean",
    "taxesIncluded": "Boolean",
    "totalPrice": "Money",
    "totalTax": "Money",
    "updatedAt": "DateTime",
    "vaultUrl": "URL",
    "webUrl": "URL"
  },
  "implementsNode": true
};
Object.freeze(Checkout.fieldBaseTypes);
var Checkout$1 = Object.freeze(Checkout);
const ID = {
  "name": "ID",
  "kind": "SCALAR"
};
var ID$1 = Object.freeze(ID);
const Boolean = {
  "name": "Boolean",
  "kind": "SCALAR"
};
var Boolean$1 = Object.freeze(Boolean);
const CheckoutLineItemConnection = {
  "name": "CheckoutLineItemConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CheckoutLineItemEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(CheckoutLineItemConnection.fieldBaseTypes);
var CheckoutLineItemConnection$1 = Object.freeze(CheckoutLineItemConnection);
const PageInfo = {
  "name": "PageInfo",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "hasNextPage": "Boolean",
    "hasPreviousPage": "Boolean"
  },
  "implementsNode": false
};
Object.freeze(PageInfo.fieldBaseTypes);
var PageInfo$1 = Object.freeze(PageInfo);
const CheckoutLineItemEdge = {
  "name": "CheckoutLineItemEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "CheckoutLineItem"
  },
  "implementsNode": false
};
Object.freeze(CheckoutLineItemEdge.fieldBaseTypes);
var CheckoutLineItemEdge$1 = Object.freeze(CheckoutLineItemEdge);
const String = {
  "name": "String",
  "kind": "SCALAR"
};
var String$1 = Object.freeze(String);
const CheckoutLineItem = {
  "name": "CheckoutLineItem",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customAttributes": "Attribute",
    "id": "ID",
    "quantity": "Int",
    "title": "String",
    "variant": "ProductVariant"
  },
  "implementsNode": true
};
Object.freeze(CheckoutLineItem.fieldBaseTypes);
var CheckoutLineItem$1 = Object.freeze(CheckoutLineItem);
const ProductVariant = {
  "name": "ProductVariant",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "available": "Boolean",
    "id": "ID",
    "image": "Image",
    "price": "Money",
    "product": "Product",
    "selectedOptions": "SelectedOption",
    "title": "String",
    "weight": "Float",
    "weightUnit": "WeightUnit"
  },
  "implementsNode": true
};
Object.freeze(ProductVariant.fieldBaseTypes);
var ProductVariant$1 = Object.freeze(ProductVariant);
const Float = {
  "name": "Float",
  "kind": "SCALAR"
};
var Float$1 = Object.freeze(Float);
const WeightUnit = {
  "name": "WeightUnit",
  "kind": "ENUM"
};
var WeightUnit$1 = Object.freeze(WeightUnit);
const Money = {
  "name": "Money",
  "kind": "SCALAR"
};
var Money$1 = Object.freeze(Money);
const Image = {
  "name": "Image",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "altText": "String",
    "id": "ID",
    "src": "URL"
  },
  "implementsNode": false
};
Object.freeze(Image.fieldBaseTypes);
var Image$1 = Object.freeze(Image);
const URL = {
  "name": "URL",
  "kind": "SCALAR"
};
var URL$1 = Object.freeze(URL);
const Int = {
  "name": "Int",
  "kind": "SCALAR"
};
var Int$1 = Object.freeze(Int);
const CropRegion = {
  "name": "CropRegion",
  "kind": "ENUM"
};
var CropRegion$1 = Object.freeze(CropRegion);
const SelectedOption = {
  "name": "SelectedOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "value": "String"
  },
  "implementsNode": false
};
Object.freeze(SelectedOption.fieldBaseTypes);
var SelectedOption$1 = Object.freeze(SelectedOption);
const Product = {
  "name": "Product",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "collections": "CollectionConnection",
    "createdAt": "DateTime",
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "images": "ImageConnection",
    "options": "ProductOption",
    "productType": "String",
    "publishedAt": "DateTime",
    "tags": "String",
    "title": "String",
    "updatedAt": "DateTime",
    "variantBySelectedOptions": "ProductVariant",
    "variants": "ProductVariantConnection",
    "vendor": "String"
  },
  "implementsNode": true
};
Object.freeze(Product.fieldBaseTypes);
var Product$1 = Object.freeze(Product);
const CollectionConnection = {
  "name": "CollectionConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CollectionEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(CollectionConnection.fieldBaseTypes);
var CollectionConnection$1 = Object.freeze(CollectionConnection);
const CollectionEdge = {
  "name": "CollectionEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Collection"
  },
  "implementsNode": false
};
Object.freeze(CollectionEdge.fieldBaseTypes);
var CollectionEdge$1 = Object.freeze(CollectionEdge);
const Collection = {
  "name": "Collection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "image": "Image",
    "products": "ProductConnection",
    "title": "String",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};
Object.freeze(Collection.fieldBaseTypes);
var Collection$1 = Object.freeze(Collection);
const HTML = {
  "name": "HTML",
  "kind": "SCALAR"
};
var HTML$1 = Object.freeze(HTML);
const DateTime = {
  "name": "DateTime",
  "kind": "SCALAR"
};
var DateTime$1 = Object.freeze(DateTime);
const ProductConnection = {
  "name": "ProductConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(ProductConnection.fieldBaseTypes);
var ProductConnection$1 = Object.freeze(ProductConnection);
const ProductEdge = {
  "name": "ProductEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Product"
  },
  "implementsNode": false
};
Object.freeze(ProductEdge.fieldBaseTypes);
var ProductEdge$1 = Object.freeze(ProductEdge);
const Node = {
  "name": "Node",
  "kind": "INTERFACE",
  "fieldBaseTypes": {
    "id": "ID"
  },
  "possibleTypes": ["AppliedGiftCard", "Checkout", "CheckoutLineItem", "Collection", "MailingAddress", "Order", "Payment", "Product", "ProductOption", "ProductVariant", "ShopPolicy"]
};
Object.freeze(Node.fieldBaseTypes);
Object.freeze(Node.possibleTypes);
var Node$1 = Object.freeze(Node);
const ImageConnection = {
  "name": "ImageConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ImageEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(ImageConnection.fieldBaseTypes);
var ImageConnection$1 = Object.freeze(ImageConnection);
const ImageEdge = {
  "name": "ImageEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Image"
  },
  "implementsNode": false
};
Object.freeze(ImageEdge.fieldBaseTypes);
var ImageEdge$1 = Object.freeze(ImageEdge);
const SelectedOptionInput = {
  "name": "SelectedOptionInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "name": "String",
    "value": "String"
  }
};
Object.freeze(SelectedOptionInput.inputFieldBaseTypes);
var SelectedOptionInput$1 = Object.freeze(SelectedOptionInput);
const ProductOption = {
  "name": "ProductOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "id": "ID",
    "name": "String",
    "values": "String"
  },
  "implementsNode": true
};
Object.freeze(ProductOption.fieldBaseTypes);
var ProductOption$1 = Object.freeze(ProductOption);
const ProductVariantConnection = {
  "name": "ProductVariantConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductVariantEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(ProductVariantConnection.fieldBaseTypes);
var ProductVariantConnection$1 = Object.freeze(ProductVariantConnection);
const ProductVariantEdge = {
  "name": "ProductVariantEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "ProductVariant"
  },
  "implementsNode": false
};
Object.freeze(ProductVariantEdge.fieldBaseTypes);
var ProductVariantEdge$1 = Object.freeze(ProductVariantEdge);
const Attribute = {
  "name": "Attribute",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "key": "String",
    "value": "String"
  },
  "implementsNode": false
};
Object.freeze(Attribute.fieldBaseTypes);
var Attribute$1 = Object.freeze(Attribute);
const MailingAddress = {
  "name": "MailingAddress",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "address1": "String",
    "address2": "String",
    "city": "String",
    "company": "String",
    "country": "String",
    "countryCode": "String",
    "firstName": "String",
    "formatted": "String",
    "id": "ID",
    "lastName": "String",
    "latitude": "Float",
    "longitude": "Float",
    "name": "String",
    "phone": "String",
    "province": "String",
    "provinceCode": "String",
    "zip": "String"
  },
  "implementsNode": true
};
Object.freeze(MailingAddress.fieldBaseTypes);
var MailingAddress$1 = Object.freeze(MailingAddress);
const ShippingRate = {
  "name": "ShippingRate",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "handle": "String",
    "price": "Money",
    "title": "String"
  },
  "implementsNode": false
};
Object.freeze(ShippingRate.fieldBaseTypes);
var ShippingRate$1 = Object.freeze(ShippingRate);
const AvailableShippingRates = {
  "name": "AvailableShippingRates",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "ready": "Boolean",
    "shippingRates": "ShippingRate"
  },
  "implementsNode": false
};
Object.freeze(AvailableShippingRates.fieldBaseTypes);
var AvailableShippingRates$1 = Object.freeze(AvailableShippingRates);
const Customer = {
  "name": "Customer",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "acceptsMarketing": "Boolean",
    "addresses": "MailingAddressConnection",
    "createdAt": "DateTime",
    "defaultAddress": "MailingAddress",
    "displayName": "String",
    "email": "String",
    "firstName": "String",
    "id": "ID",
    "lastName": "String",
    "orders": "OrderConnection",
    "phone": "String",
    "updatedAt": "DateTime"
  },
  "implementsNode": false
};
Object.freeze(Customer.fieldBaseTypes);
var Customer$1 = Object.freeze(Customer);
const MailingAddressConnection = {
  "name": "MailingAddressConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "MailingAddressEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(MailingAddressConnection.fieldBaseTypes);
var MailingAddressConnection$1 = Object.freeze(MailingAddressConnection);
const MailingAddressEdge = {
  "name": "MailingAddressEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "MailingAddress"
  },
  "implementsNode": false
};
Object.freeze(MailingAddressEdge.fieldBaseTypes);
var MailingAddressEdge$1 = Object.freeze(MailingAddressEdge);
const OrderConnection = {
  "name": "OrderConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "OrderEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(OrderConnection.fieldBaseTypes);
var OrderConnection$1 = Object.freeze(OrderConnection);
const OrderEdge = {
  "name": "OrderEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Order"
  },
  "implementsNode": false
};
Object.freeze(OrderEdge.fieldBaseTypes);
var OrderEdge$1 = Object.freeze(OrderEdge);
const Order = {
  "name": "Order",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cancelReason": "OrderCancelReason",
    "cancelledAt": "DateTime",
    "createdAt": "DateTime",
    "currencyCode": "CurrencyCode",
    "customerUrl": "URL",
    "displayFinancialStatus": "OrderDisplayFinancialStatus",
    "displayFulfillmentStatus": "OrderDisplayFulfillmentStatus",
    "email": "String",
    "id": "ID",
    "lineItems": "OrderLineItemConnection",
    "orderNumber": "Int",
    "phone": "String",
    "processedAt": "DateTime",
    "shippingAddress": "MailingAddress",
    "subtotalPrice": "Money",
    "totalPrice": "Money",
    "totalRefunded": "Money",
    "totalShippingPrice": "Money",
    "totalTax": "Money",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};
Object.freeze(Order.fieldBaseTypes);
var Order$1 = Object.freeze(Order);
const OrderCancelReason = {
  "name": "OrderCancelReason",
  "kind": "ENUM"
};
var OrderCancelReason$1 = Object.freeze(OrderCancelReason);
const CurrencyCode = {
  "name": "CurrencyCode",
  "kind": "ENUM"
};
var CurrencyCode$1 = Object.freeze(CurrencyCode);
const OrderDisplayFulfillmentStatus = {
  "name": "OrderDisplayFulfillmentStatus",
  "kind": "ENUM"
};
var OrderDisplayFulfillmentStatus$1 = Object.freeze(OrderDisplayFulfillmentStatus);
const OrderDisplayFinancialStatus = {
  "name": "OrderDisplayFinancialStatus",
  "kind": "ENUM"
};
var OrderDisplayFinancialStatus$1 = Object.freeze(OrderDisplayFinancialStatus);
const OrderLineItemConnection = {
  "name": "OrderLineItemConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "OrderLineItemEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};
Object.freeze(OrderLineItemConnection.fieldBaseTypes);
var OrderLineItemConnection$1 = Object.freeze(OrderLineItemConnection);
const OrderLineItemEdge = {
  "name": "OrderLineItemEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "OrderLineItem"
  },
  "implementsNode": false
};
Object.freeze(OrderLineItemEdge.fieldBaseTypes);
var OrderLineItemEdge$1 = Object.freeze(OrderLineItemEdge);
const OrderLineItem = {
  "name": "OrderLineItem",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customAttributes": "Attribute",
    "quantity": "Int",
    "title": "String",
    "variant": "ProductVariant"
  },
  "implementsNode": false
};
Object.freeze(OrderLineItem.fieldBaseTypes);
var OrderLineItem$1 = Object.freeze(OrderLineItem);
const OrderSortKeys = {
  "name": "OrderSortKeys",
  "kind": "ENUM"
};
var OrderSortKeys$1 = Object.freeze(OrderSortKeys);
const AppliedGiftCard = {
  "name": "AppliedGiftCard",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amountUsed": "Money",
    "balance": "Money",
    "id": "ID",
    "lastCharacters": "String"
  },
  "implementsNode": true
};
Object.freeze(AppliedGiftCard.fieldBaseTypes);
var AppliedGiftCard$1 = Object.freeze(AppliedGiftCard);
const QueryRoot = {
  "name": "QueryRoot",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customer": "Customer",
    "node": "Node",
    "nodes": "Node",
    "shop": "Shop"
  },
  "implementsNode": false
};
Object.freeze(QueryRoot.fieldBaseTypes);
var QueryRoot$1 = Object.freeze(QueryRoot);
const Shop = {
  "name": "Shop",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "collections": "CollectionConnection",
    "currencyCode": "CurrencyCode",
    "description": "String",
    "moneyFormat": "String",
    "name": "String",
    "primaryDomain": "Domain",
    "privacyPolicy": "ShopPolicy",
    "products": "ProductConnection",
    "refundPolicy": "ShopPolicy",
    "termsOfService": "ShopPolicy"
  },
  "implementsNode": false
};
Object.freeze(Shop.fieldBaseTypes);
var Shop$1 = Object.freeze(Shop);
const Domain = {
  "name": "Domain",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "host": "String",
    "sslEnabled": "Boolean",
    "url": "URL"
  },
  "implementsNode": false
};
Object.freeze(Domain.fieldBaseTypes);
var Domain$1 = Object.freeze(Domain);
const ShopPolicy = {
  "name": "ShopPolicy",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "body": "String",
    "id": "ID",
    "title": "String",
    "url": "URL"
  },
  "implementsNode": true
};
Object.freeze(ShopPolicy.fieldBaseTypes);
var ShopPolicy$1 = Object.freeze(ShopPolicy);
const CollectionSortKeys = {
  "name": "CollectionSortKeys",
  "kind": "ENUM"
};
var CollectionSortKeys$1 = Object.freeze(CollectionSortKeys);
const ProductSortKeys = {
  "name": "ProductSortKeys",
  "kind": "ENUM"
};
var ProductSortKeys$1 = Object.freeze(ProductSortKeys);
const Mutation = {
  "name": "Mutation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkoutAttributesUpdate": "CheckoutAttributesUpdatePayload",
    "checkoutCompleteFree": "CheckoutCompleteFreePayload",
    "checkoutCompleteWithCreditCard": "CheckoutCompleteWithCreditCardPayload",
    "checkoutCompleteWithTokenizedPayment": "CheckoutCompleteWithTokenizedPaymentPayload",
    "checkoutCreate": "CheckoutCreatePayload",
    "checkoutCustomerAssociate": "CheckoutCustomerAssociatePayload",
    "checkoutCustomerDisassociate": "CheckoutCustomerDisassociatePayload",
    "checkoutEmailUpdate": "CheckoutEmailUpdatePayload",
    "checkoutGiftCardApply": "CheckoutGiftCardApplyPayload",
    "checkoutGiftCardRemove": "CheckoutGiftCardRemovePayload",
    "checkoutLineItemsAdd": "CheckoutLineItemsAddPayload",
    "checkoutLineItemsRemove": "CheckoutLineItemsRemovePayload",
    "checkoutLineItemsUpdate": "CheckoutLineItemsUpdatePayload",
    "checkoutShippingAddressUpdate": "CheckoutShippingAddressUpdatePayload",
    "checkoutShippingLineUpdate": "CheckoutShippingLineUpdatePayload",
    "customerAccessTokenCreate": "CustomerAccessTokenCreatePayload",
    "customerAccessTokenDelete": "CustomerAccessTokenDeletePayload",
    "customerAccessTokenRenew": "CustomerAccessTokenRenewPayload",
    "customerActivate": "CustomerActivatePayload",
    "customerAddressCreate": "CustomerAddressCreatePayload",
    "customerAddressDelete": "CustomerAddressDeletePayload",
    "customerAddressUpdate": "CustomerAddressUpdatePayload",
    "customerCreate": "CustomerCreatePayload",
    "customerRecover": "CustomerRecoverPayload",
    "customerReset": "CustomerResetPayload",
    "customerUpdate": "CustomerUpdatePayload"
  },
  "implementsNode": false,
  "relayInputObjectBaseTypes": {
    "checkoutAttributesUpdate": "CheckoutAttributesUpdateInput",
    "checkoutCreate": "CheckoutCreateInput",
    "customerAccessTokenCreate": "CustomerAccessTokenCreateInput",
    "customerActivate": "CustomerActivateInput",
    "customerCreate": "CustomerCreateInput",
    "customerReset": "CustomerResetInput"
  }
};
Object.freeze(Mutation.fieldBaseTypes);
Object.freeze(Mutation.relayInputObjectBaseTypes);
var Mutation$1 = Object.freeze(Mutation);
const CheckoutAttributesUpdatePayload = {
  "name": "CheckoutAttributesUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutAttributesUpdatePayload.fieldBaseTypes);
var CheckoutAttributesUpdatePayload$1 = Object.freeze(CheckoutAttributesUpdatePayload);
const UserError = {
  "name": "UserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};
Object.freeze(UserError.fieldBaseTypes);
var UserError$1 = Object.freeze(UserError);
const CheckoutAttributesUpdateInput = {
  "name": "CheckoutAttributesUpdateInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "note": "String",
    "customAttributes": "AttributeInput",
    "allowPartialAddresses": "Boolean"
  }
};
Object.freeze(CheckoutAttributesUpdateInput.inputFieldBaseTypes);
var CheckoutAttributesUpdateInput$1 = Object.freeze(CheckoutAttributesUpdateInput);
const AttributeInput = {
  "name": "AttributeInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "key": "String",
    "value": "String"
  }
};
Object.freeze(AttributeInput.inputFieldBaseTypes);
var AttributeInput$1 = Object.freeze(AttributeInput);
const CheckoutCompleteFreePayload = {
  "name": "CheckoutCompleteFreePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutCompleteFreePayload.fieldBaseTypes);
var CheckoutCompleteFreePayload$1 = Object.freeze(CheckoutCompleteFreePayload);
const CheckoutCompleteWithCreditCardPayload = {
  "name": "CheckoutCompleteWithCreditCardPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "payment": "Payment",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutCompleteWithCreditCardPayload.fieldBaseTypes);
var CheckoutCompleteWithCreditCardPayload$1 = Object.freeze(CheckoutCompleteWithCreditCardPayload);
const Payment = {
  "name": "Payment",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amount": "Money",
    "billingAddress": "MailingAddress",
    "checkout": "Checkout",
    "creditCard": "CreditCard",
    "errorMessage": "String",
    "id": "ID",
    "idempotencyKey": "String",
    "ready": "Boolean",
    "test": "Boolean",
    "transaction": "Transaction"
  },
  "implementsNode": true
};
Object.freeze(Payment.fieldBaseTypes);
var Payment$1 = Object.freeze(Payment);
const CreditCard = {
  "name": "CreditCard",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "brand": "String",
    "expiryMonth": "Int",
    "expiryYear": "Int",
    "firstDigits": "String",
    "firstName": "String",
    "lastDigits": "String",
    "lastName": "String",
    "maskedNumber": "String"
  },
  "implementsNode": false
};
Object.freeze(CreditCard.fieldBaseTypes);
var CreditCard$1 = Object.freeze(CreditCard);
const Transaction = {
  "name": "Transaction",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amount": "Money",
    "kind": "TransactionKind",
    "status": "TransactionStatus",
    "test": "Boolean"
  },
  "implementsNode": false
};
Object.freeze(Transaction.fieldBaseTypes);
var Transaction$1 = Object.freeze(Transaction);
const TransactionKind = {
  "name": "TransactionKind",
  "kind": "ENUM"
};
var TransactionKind$1 = Object.freeze(TransactionKind);
const TransactionStatus = {
  "name": "TransactionStatus",
  "kind": "ENUM"
};
var TransactionStatus$1 = Object.freeze(TransactionStatus);
const CreditCardPaymentInput = {
  "name": "CreditCardPaymentInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "amount": "Money",
    "idempotencyKey": "String",
    "billingAddress": "MailingAddressInput",
    "vaultId": "String",
    "test": "Boolean"
  }
};
Object.freeze(CreditCardPaymentInput.inputFieldBaseTypes);
var CreditCardPaymentInput$1 = Object.freeze(CreditCardPaymentInput);
const MailingAddressInput = {
  "name": "MailingAddressInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "address1": "String",
    "address2": "String",
    "city": "String",
    "company": "String",
    "country": "String",
    "firstName": "String",
    "lastName": "String",
    "phone": "String",
    "province": "String",
    "zip": "String"
  }
};
Object.freeze(MailingAddressInput.inputFieldBaseTypes);
var MailingAddressInput$1 = Object.freeze(MailingAddressInput);
const CheckoutCompleteWithTokenizedPaymentPayload = {
  "name": "CheckoutCompleteWithTokenizedPaymentPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "payment": "Payment",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutCompleteWithTokenizedPaymentPayload.fieldBaseTypes);
var CheckoutCompleteWithTokenizedPaymentPayload$1 = Object.freeze(CheckoutCompleteWithTokenizedPaymentPayload);
const TokenizedPaymentInput = {
  "name": "TokenizedPaymentInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "amount": "Money",
    "idempotencyKey": "String",
    "billingAddress": "MailingAddressInput",
    "type": "String",
    "paymentData": "String",
    "test": "Boolean",
    "identifier": "String"
  }
};
Object.freeze(TokenizedPaymentInput.inputFieldBaseTypes);
var TokenizedPaymentInput$1 = Object.freeze(TokenizedPaymentInput);
const CheckoutCreatePayload = {
  "name": "CheckoutCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutCreatePayload.fieldBaseTypes);
var CheckoutCreatePayload$1 = Object.freeze(CheckoutCreatePayload);
const CheckoutCreateInput = {
  "name": "CheckoutCreateInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "email": "String",
    "lineItems": "CheckoutLineItemInput",
    "shippingAddress": "MailingAddressInput",
    "note": "String",
    "customAttributes": "AttributeInput",
    "allowPartialAddresses": "Boolean"
  }
};
Object.freeze(CheckoutCreateInput.inputFieldBaseTypes);
var CheckoutCreateInput$1 = Object.freeze(CheckoutCreateInput);
const CheckoutLineItemInput = {
  "name": "CheckoutLineItemInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "variantId": "ID",
    "quantity": "Int",
    "customAttributes": "AttributeInput"
  }
};
Object.freeze(CheckoutLineItemInput.inputFieldBaseTypes);
var CheckoutLineItemInput$1 = Object.freeze(CheckoutLineItemInput);
const CheckoutCustomerAssociatePayload = {
  "name": "CheckoutCustomerAssociatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutCustomerAssociatePayload.fieldBaseTypes);
var CheckoutCustomerAssociatePayload$1 = Object.freeze(CheckoutCustomerAssociatePayload);
const CheckoutCustomerDisassociatePayload = {
  "name": "CheckoutCustomerDisassociatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutCustomerDisassociatePayload.fieldBaseTypes);
var CheckoutCustomerDisassociatePayload$1 = Object.freeze(CheckoutCustomerDisassociatePayload);
const CheckoutEmailUpdatePayload = {
  "name": "CheckoutEmailUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutEmailUpdatePayload.fieldBaseTypes);
var CheckoutEmailUpdatePayload$1 = Object.freeze(CheckoutEmailUpdatePayload);
const CheckoutGiftCardApplyPayload = {
  "name": "CheckoutGiftCardApplyPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutGiftCardApplyPayload.fieldBaseTypes);
var CheckoutGiftCardApplyPayload$1 = Object.freeze(CheckoutGiftCardApplyPayload);
const CheckoutGiftCardRemovePayload = {
  "name": "CheckoutGiftCardRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutGiftCardRemovePayload.fieldBaseTypes);
var CheckoutGiftCardRemovePayload$1 = Object.freeze(CheckoutGiftCardRemovePayload);
const CheckoutLineItemsAddPayload = {
  "name": "CheckoutLineItemsAddPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutLineItemsAddPayload.fieldBaseTypes);
var CheckoutLineItemsAddPayload$1 = Object.freeze(CheckoutLineItemsAddPayload);
const CheckoutLineItemsRemovePayload = {
  "name": "CheckoutLineItemsRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutLineItemsRemovePayload.fieldBaseTypes);
var CheckoutLineItemsRemovePayload$1 = Object.freeze(CheckoutLineItemsRemovePayload);
const CheckoutLineItemsUpdatePayload = {
  "name": "CheckoutLineItemsUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutLineItemsUpdatePayload.fieldBaseTypes);
var CheckoutLineItemsUpdatePayload$1 = Object.freeze(CheckoutLineItemsUpdatePayload);
const CheckoutLineItemUpdateInput = {
  "name": "CheckoutLineItemUpdateInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "id": "ID",
    "variantId": "ID",
    "quantity": "Int",
    "customAttributes": "AttributeInput"
  }
};
Object.freeze(CheckoutLineItemUpdateInput.inputFieldBaseTypes);
var CheckoutLineItemUpdateInput$1 = Object.freeze(CheckoutLineItemUpdateInput);
const CheckoutShippingAddressUpdatePayload = {
  "name": "CheckoutShippingAddressUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutShippingAddressUpdatePayload.fieldBaseTypes);
var CheckoutShippingAddressUpdatePayload$1 = Object.freeze(CheckoutShippingAddressUpdatePayload);
const CheckoutShippingLineUpdatePayload = {
  "name": "CheckoutShippingLineUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CheckoutShippingLineUpdatePayload.fieldBaseTypes);
var CheckoutShippingLineUpdatePayload$1 = Object.freeze(CheckoutShippingLineUpdatePayload);
const CustomerAccessTokenCreatePayload = {
  "name": "CustomerAccessTokenCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customerAccessToken": "CustomerAccessToken",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessTokenCreatePayload.fieldBaseTypes);
var CustomerAccessTokenCreatePayload$1 = Object.freeze(CustomerAccessTokenCreatePayload);
const CustomerAccessToken = {
  "name": "CustomerAccessToken",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "accessToken": "String",
    "expiresAt": "DateTime"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessToken.fieldBaseTypes);
var CustomerAccessToken$1 = Object.freeze(CustomerAccessToken);
const CustomerAccessTokenCreateInput = {
  "name": "CustomerAccessTokenCreateInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "email": "String",
    "password": "String"
  }
};
Object.freeze(CustomerAccessTokenCreateInput.inputFieldBaseTypes);
var CustomerAccessTokenCreateInput$1 = Object.freeze(CustomerAccessTokenCreateInput);
const CustomerAccessTokenDeletePayload = {
  "name": "CustomerAccessTokenDeletePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "deletedAccessToken": "String",
    "deletedCustomerAccessTokenId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessTokenDeletePayload.fieldBaseTypes);
var CustomerAccessTokenDeletePayload$1 = Object.freeze(CustomerAccessTokenDeletePayload);
const CustomerAccessTokenRenewPayload = {
  "name": "CustomerAccessTokenRenewPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customerAccessToken": "CustomerAccessToken",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAccessTokenRenewPayload.fieldBaseTypes);
var CustomerAccessTokenRenewPayload$1 = Object.freeze(CustomerAccessTokenRenewPayload);
const CustomerActivatePayload = {
  "name": "CustomerActivatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerActivatePayload.fieldBaseTypes);
var CustomerActivatePayload$1 = Object.freeze(CustomerActivatePayload);
const CustomerActivateInput = {
  "name": "CustomerActivateInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "activationToken": "String",
    "password": "String"
  }
};
Object.freeze(CustomerActivateInput.inputFieldBaseTypes);
var CustomerActivateInput$1 = Object.freeze(CustomerActivateInput);
const CustomerAddressCreatePayload = {
  "name": "CustomerAddressCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customerAddress": "MailingAddress",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAddressCreatePayload.fieldBaseTypes);
var CustomerAddressCreatePayload$1 = Object.freeze(CustomerAddressCreatePayload);
const CustomerAddressDeletePayload = {
  "name": "CustomerAddressDeletePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "deletedCustomerAddressId": "String",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAddressDeletePayload.fieldBaseTypes);
var CustomerAddressDeletePayload$1 = Object.freeze(CustomerAddressDeletePayload);
const CustomerAddressUpdatePayload = {
  "name": "CustomerAddressUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customerAddress": "MailingAddress",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerAddressUpdatePayload.fieldBaseTypes);
var CustomerAddressUpdatePayload$1 = Object.freeze(CustomerAddressUpdatePayload);
const CustomerCreatePayload = {
  "name": "CustomerCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerCreatePayload.fieldBaseTypes);
var CustomerCreatePayload$1 = Object.freeze(CustomerCreatePayload);
const CustomerCreateInput = {
  "name": "CustomerCreateInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "firstName": "String",
    "lastName": "String",
    "email": "String",
    "password": "String",
    "acceptsMarketing": "Boolean"
  }
};
Object.freeze(CustomerCreateInput.inputFieldBaseTypes);
var CustomerCreateInput$1 = Object.freeze(CustomerCreateInput);
const CustomerRecoverPayload = {
  "name": "CustomerRecoverPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerRecoverPayload.fieldBaseTypes);
var CustomerRecoverPayload$1 = Object.freeze(CustomerRecoverPayload);
const CustomerResetPayload = {
  "name": "CustomerResetPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerResetPayload.fieldBaseTypes);
var CustomerResetPayload$1 = Object.freeze(CustomerResetPayload);
const CustomerResetInput = {
  "name": "CustomerResetInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "resetToken": "String",
    "password": "String"
  }
};
Object.freeze(CustomerResetInput.inputFieldBaseTypes);
var CustomerResetInput$1 = Object.freeze(CustomerResetInput);
const CustomerUpdatePayload = {
  "name": "CustomerUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customer": "Customer",
    "userErrors": "UserError"
  },
  "implementsNode": false
};
Object.freeze(CustomerUpdatePayload.fieldBaseTypes);
var CustomerUpdatePayload$1 = Object.freeze(CustomerUpdatePayload);
const CustomerUpdateInput = {
  "name": "CustomerUpdateInput",
  "kind": "INPUT_OBJECT",
  "inputFieldBaseTypes": {
    "firstName": "String",
    "lastName": "String",
    "email": "String",
    "password": "String",
    "acceptsMarketing": "Boolean"
  }
};
Object.freeze(CustomerUpdateInput.inputFieldBaseTypes);
var CustomerUpdateInput$1 = Object.freeze(CustomerUpdateInput);
const __Schema = {
  "name": "__Schema",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "directives": "__Directive",
    "mutationType": "__Type",
    "queryType": "__Type",
    "subscriptionType": "__Type",
    "types": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__Schema.fieldBaseTypes);

var __Schema$1 = Object.freeze(__Schema);

const __Type = {
  "name": "__Type",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "enumValues": "__EnumValue",
    "fields": "__Field",
    "inputFields": "__InputValue",
    "interfaces": "__Type",
    "kind": "__TypeKind",
    "name": "String",
    "ofType": "__Type",
    "possibleTypes": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__Type.fieldBaseTypes);

var __Type$1 = Object.freeze(__Type);

const __TypeKind = {
  "name": "__TypeKind",
  "kind": "ENUM"
};

var __TypeKind$1 = Object.freeze(__TypeKind);

const __Field = {
  "name": "__Field",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "args": "__InputValue",
    "deprecationReason": "String",
    "description": "String",
    "isDeprecated": "Boolean",
    "name": "String",
    "type": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__Field.fieldBaseTypes);

var __Field$1 = Object.freeze(__Field);

const __InputValue = {
  "name": "__InputValue",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "defaultValue": "String",
    "description": "String",
    "name": "String",
    "type": "__Type"
  },
  "implementsNode": false
};
Object.freeze(__InputValue.fieldBaseTypes);

var __InputValue$1 = Object.freeze(__InputValue);

const __EnumValue = {
  "name": "__EnumValue",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "deprecationReason": "String",
    "description": "String",
    "isDeprecated": "Boolean",
    "name": "String"
  },
  "implementsNode": false
};
Object.freeze(__EnumValue.fieldBaseTypes);

var __EnumValue$1 = Object.freeze(__EnumValue);

const __Directive = {
  "name": "__Directive",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "args": "__InputValue",
    "description": "String",
    "locations": "__DirectiveLocation",
    "name": "String",
    "onField": "Boolean",
    "onFragment": "Boolean",
    "onOperation": "Boolean"
  },
  "implementsNode": false
};
Object.freeze(__Directive.fieldBaseTypes);

var __Directive$1 = Object.freeze(__Directive);

const __DirectiveLocation = {
  "name": "__DirectiveLocation",
  "kind": "ENUM"
};

var __DirectiveLocation$1 = Object.freeze(__DirectiveLocation);

const Types = {
  types: {}
};
Types.types["Checkout"] = Checkout$1;
Types.types["ID"] = ID$1;
Types.types["Boolean"] = Boolean$1;
Types.types["CheckoutLineItemConnection"] = CheckoutLineItemConnection$1;
Types.types["PageInfo"] = PageInfo$1;
Types.types["CheckoutLineItemEdge"] = CheckoutLineItemEdge$1;
Types.types["String"] = String$1;
Types.types["CheckoutLineItem"] = CheckoutLineItem$1;
Types.types["ProductVariant"] = ProductVariant$1;
Types.types["Float"] = Float$1;
Types.types["WeightUnit"] = WeightUnit$1;
Types.types["Money"] = Money$1;
Types.types["Image"] = Image$1;
Types.types["URL"] = URL$1;
Types.types["Int"] = Int$1;
Types.types["CropRegion"] = CropRegion$1;
Types.types["SelectedOption"] = SelectedOption$1;
Types.types["Product"] = Product$1;
Types.types["CollectionConnection"] = CollectionConnection$1;
Types.types["CollectionEdge"] = CollectionEdge$1;
Types.types["Collection"] = Collection$1;
Types.types["HTML"] = HTML$1;
Types.types["DateTime"] = DateTime$1;
Types.types["ProductConnection"] = ProductConnection$1;
Types.types["ProductEdge"] = ProductEdge$1;
Types.types["Node"] = Node$1;
Types.types["ImageConnection"] = ImageConnection$1;
Types.types["ImageEdge"] = ImageEdge$1;
Types.types["SelectedOptionInput"] = SelectedOptionInput$1;
Types.types["ProductOption"] = ProductOption$1;
Types.types["ProductVariantConnection"] = ProductVariantConnection$1;
Types.types["ProductVariantEdge"] = ProductVariantEdge$1;
Types.types["Attribute"] = Attribute$1;
Types.types["MailingAddress"] = MailingAddress$1;
Types.types["ShippingRate"] = ShippingRate$1;
Types.types["AvailableShippingRates"] = AvailableShippingRates$1;
Types.types["Customer"] = Customer$1;
Types.types["MailingAddressConnection"] = MailingAddressConnection$1;
Types.types["MailingAddressEdge"] = MailingAddressEdge$1;
Types.types["OrderConnection"] = OrderConnection$1;
Types.types["OrderEdge"] = OrderEdge$1;
Types.types["Order"] = Order$1;
Types.types["OrderCancelReason"] = OrderCancelReason$1;
Types.types["CurrencyCode"] = CurrencyCode$1;
Types.types["OrderDisplayFulfillmentStatus"] = OrderDisplayFulfillmentStatus$1;
Types.types["OrderDisplayFinancialStatus"] = OrderDisplayFinancialStatus$1;
Types.types["OrderLineItemConnection"] = OrderLineItemConnection$1;
Types.types["OrderLineItemEdge"] = OrderLineItemEdge$1;
Types.types["OrderLineItem"] = OrderLineItem$1;
Types.types["OrderSortKeys"] = OrderSortKeys$1;
Types.types["AppliedGiftCard"] = AppliedGiftCard$1;
Types.types["QueryRoot"] = QueryRoot$1;
Types.types["Shop"] = Shop$1;
Types.types["Domain"] = Domain$1;
Types.types["ShopPolicy"] = ShopPolicy$1;
Types.types["CollectionSortKeys"] = CollectionSortKeys$1;
Types.types["ProductSortKeys"] = ProductSortKeys$1;
Types.types["Mutation"] = Mutation$1;
Types.types["CheckoutAttributesUpdatePayload"] = CheckoutAttributesUpdatePayload$1;
Types.types["UserError"] = UserError$1;
Types.types["CheckoutAttributesUpdateInput"] = CheckoutAttributesUpdateInput$1;
Types.types["AttributeInput"] = AttributeInput$1;
Types.types["CheckoutCompleteFreePayload"] = CheckoutCompleteFreePayload$1;
Types.types["CheckoutCompleteWithCreditCardPayload"] = CheckoutCompleteWithCreditCardPayload$1;
Types.types["Payment"] = Payment$1;
Types.types["CreditCard"] = CreditCard$1;
Types.types["Transaction"] = Transaction$1;
Types.types["TransactionKind"] = TransactionKind$1;
Types.types["TransactionStatus"] = TransactionStatus$1;
Types.types["CreditCardPaymentInput"] = CreditCardPaymentInput$1;
Types.types["MailingAddressInput"] = MailingAddressInput$1;
Types.types["CheckoutCompleteWithTokenizedPaymentPayload"] = CheckoutCompleteWithTokenizedPaymentPayload$1;
Types.types["TokenizedPaymentInput"] = TokenizedPaymentInput$1;
Types.types["CheckoutCreatePayload"] = CheckoutCreatePayload$1;
Types.types["CheckoutCreateInput"] = CheckoutCreateInput$1;
Types.types["CheckoutLineItemInput"] = CheckoutLineItemInput$1;
Types.types["CheckoutCustomerAssociatePayload"] = CheckoutCustomerAssociatePayload$1;
Types.types["CheckoutCustomerDisassociatePayload"] = CheckoutCustomerDisassociatePayload$1;
Types.types["CheckoutEmailUpdatePayload"] = CheckoutEmailUpdatePayload$1;
Types.types["CheckoutGiftCardApplyPayload"] = CheckoutGiftCardApplyPayload$1;
Types.types["CheckoutGiftCardRemovePayload"] = CheckoutGiftCardRemovePayload$1;
Types.types["CheckoutLineItemsAddPayload"] = CheckoutLineItemsAddPayload$1;
Types.types["CheckoutLineItemsRemovePayload"] = CheckoutLineItemsRemovePayload$1;
Types.types["CheckoutLineItemsUpdatePayload"] = CheckoutLineItemsUpdatePayload$1;
Types.types["CheckoutLineItemUpdateInput"] = CheckoutLineItemUpdateInput$1;
Types.types["CheckoutShippingAddressUpdatePayload"] = CheckoutShippingAddressUpdatePayload$1;
Types.types["CheckoutShippingLineUpdatePayload"] = CheckoutShippingLineUpdatePayload$1;
Types.types["CustomerAccessTokenCreatePayload"] = CustomerAccessTokenCreatePayload$1;
Types.types["CustomerAccessToken"] = CustomerAccessToken$1;
Types.types["CustomerAccessTokenCreateInput"] = CustomerAccessTokenCreateInput$1;
Types.types["CustomerAccessTokenDeletePayload"] = CustomerAccessTokenDeletePayload$1;
Types.types["CustomerAccessTokenRenewPayload"] = CustomerAccessTokenRenewPayload$1;
Types.types["CustomerActivatePayload"] = CustomerActivatePayload$1;
Types.types["CustomerActivateInput"] = CustomerActivateInput$1;
Types.types["CustomerAddressCreatePayload"] = CustomerAddressCreatePayload$1;
Types.types["CustomerAddressDeletePayload"] = CustomerAddressDeletePayload$1;
Types.types["CustomerAddressUpdatePayload"] = CustomerAddressUpdatePayload$1;
Types.types["CustomerCreatePayload"] = CustomerCreatePayload$1;
Types.types["CustomerCreateInput"] = CustomerCreateInput$1;
Types.types["CustomerRecoverPayload"] = CustomerRecoverPayload$1;
Types.types["CustomerResetPayload"] = CustomerResetPayload$1;
Types.types["CustomerResetInput"] = CustomerResetInput$1;
Types.types["CustomerUpdatePayload"] = CustomerUpdatePayload$1;
Types.types["CustomerUpdateInput"] = CustomerUpdateInput$1;
Types.types["__Schema"] = __Schema$1;
Types.types["__Type"] = __Type$1;
Types.types["__TypeKind"] = __TypeKind$1;
Types.types["__Field"] = __Field$1;
Types.types["__InputValue"] = __InputValue$1;
Types.types["__EnumValue"] = __EnumValue$1;
Types.types["__Directive"] = __Directive$1;
Types.types["__DirectiveLocation"] = __DirectiveLocation$1;
Types.queryType = "QueryRoot";
Types.mutationType = "Mutation";
Types.subscriptionType = null;
Object.freeze(Types.types);
var types = Object.freeze(Types);
/* harmony default export */ __webpack_exports__["default"] = (types);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rgrunest/Developer/react-portfolio/pages/blog.js */"./pages/blog.js");


/***/ }),

/***/ "babel-plugin-graphql-js-client-transform":
/*!***********************************************************!*\
  !*** external "babel-plugin-graphql-js-client-transform" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-graphql-js-client-transform");

/***/ }),

/***/ "graphql-js-client":
/*!************************************!*\
  !*** external "graphql-js-client" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-js-client");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=blog.js.map