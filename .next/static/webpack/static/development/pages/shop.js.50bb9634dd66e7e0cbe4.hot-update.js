webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./components/shop/Product.js":
/*!************************************!*\
  !*** ./components/shop/Product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/components/shop/Product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Product(props) {
  return __jsx("div", {
    id: props.id,
    className: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.title), __jsx("img", {
    src: props.imgPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Price: $".concat(props.price), "0"), __jsx("button", {
    onClick: this.props.createCheckout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=shop.js.50bb9634dd66e7e0cbe4.hot-update.js.map