webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/BlogPost.js":
/*!********************************!*\
  !*** ./components/BlogPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WordBreak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordBreak */ "./components/WordBreak.js");
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/BlogPost.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function BlogPost(props) {
  var splitText = props.text.split("\n");
  console.log(splitText);
  console.log(props);
  return __jsx("div", {
    className: "BlogPost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title), __jsx("h3", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.date), __jsx("div", {
    className: "image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: props.imgPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, splitText.map(function (line) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, line);
  })), __jsx(_WordBreak__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=blog.js.3615ee063bd6034157ff.hot-update.js.map