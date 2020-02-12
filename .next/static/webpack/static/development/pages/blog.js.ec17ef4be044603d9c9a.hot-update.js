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
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: props.imgPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("h3", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.date), __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, splitText.map(function (line) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, line);
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\n      .BlogPost {\n        background: white;\n        border-radius: 5px;\n        box-shadow: 0px 0px 20px rgba(0,0,0,0.1);\n      }\n      .title {\n        text-align: center;\n        padding-top: 1rem;\n      }\n      .image-container {\n        width: 100%;\n        text-align: center;\n      }\n      img {\n        width: 100%;\n      }\n      .date {\n        padding: 0 2rem;\n        color: #687079;\n      }\n      .text {\n        padding: 1rem 2rem;\n      }\n      .text p {\n        text-indent: 2rem;\n        font-size: 1.3rem;\n        word-wrap: break-word;\n      }\n  "));
}

/***/ })

})
//# sourceMappingURL=blog.js.ec17ef4be044603d9c9a.hot-update.js.map