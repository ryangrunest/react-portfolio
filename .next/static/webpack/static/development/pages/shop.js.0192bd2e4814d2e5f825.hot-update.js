webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_shop_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shop/Product */ "./components/shop/Product.js");
/* harmony import */ var _queries_shop_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queries/shop.js */ "./queries/shop.js");






var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/pages/shop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Shop =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Shop, _Component);

  function Shop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Shop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Shop).call(this, props));
    _this.state = {
      shopName: "",
      products: [],
      isLoaded: false,
      cartURL: ""
    };
    _this.createCheckout = _this.createCheckout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Shop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _queries_shop_js__WEBPACK_IMPORTED_MODULE_9__["default"].getShopName.then(function (data) {
        return _this2.setState({
          shopName: data,
          isLoaded: true
        });
      });
      _queries_shop_js__WEBPACK_IMPORTED_MODULE_9__["default"].getProductsWithImages(10).then(function (value) {
        _this2.setState({
          products: value,
          isLoaded: true
        });
      });
    }
  }, {
    key: "createCheckout",
    value: function createCheckout(id) {
      var _this3 = this;

      _queries_shop_js__WEBPACK_IMPORTED_MODULE_9__["default"].createCheckout(id).then(function (data) {
        _this3.setState({
          cartURL: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          isLoaded = _this$state.isLoaded,
          shopName = _this$state.shopName,
          products = _this$state.products;

      if (!isLoaded) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "Loading...");
      } else {
        return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
          page: "Shop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx("div", {
          className: "shop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, shopName), __jsx("div", {
          className: "products-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, products.map(function (product, index) {
          return __jsx(_components_shop_Product__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: index,
            id: product.node.id,
            title: product.node.title,
            product: product,
            imgPath: product.node.variants.edges[0].node.image.transformedSrc,
            createCheckout: _this4.createCheckout,
            price: product.node.priceRange.maxVariantPrice.amount,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          });
        }))));
      }
    }
  }]);

  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Shop);

/***/ })

})
//# sourceMappingURL=shop.js.0192bd2e4814d2e5f825.hot-update.js.map