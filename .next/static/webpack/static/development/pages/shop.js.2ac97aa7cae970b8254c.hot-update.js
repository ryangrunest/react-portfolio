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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_js_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-js-client */ "./node_modules/graphql-js-client/index.es.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types */ "./types.js");





var _jsxFileName = "/Users/rgrunest/Developer/react-portfolio/pages/shop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var client = new graphql_js_client__WEBPACK_IMPORTED_MODULE_6__["default"](_types__WEBPACK_IMPORTED_MODULE_8__["default"], {
  url: "https://another-test-store-97213.myshopify.com/api/graphql",
  fetcherOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token": "5db76a7bcd70717eade01e6a64392829"
    }
  }
});

var Shop =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Shop, _Component);

  function Shop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Shop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Shop).call(this, props));
    _this.state = {
      shopName: "",
      products: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Shop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query = client.query(function (root) {// root.add("shop", shop => {
        //   shop.add("name");
        //   shop.addConnection("products", { args: { first: 10 } }, product => {
        //     product.add("title");
        //     product.add("description");
        //     product.addConnection("images", { args: { first: 1 } }, image => {
        //       image.add("id");
        //     });
        //   });
        // });
      });
      client.send(query).then(function (_ref) {// this.setState({
        //   shopName: data.shop.name,
        //   products: data.shop.products.edges
        // });
        // console.log(model); // The serialized model with rich features
        // console.log(data); // The raw data returned from the API endpoint
        // console.log(name);

        var model = _ref.model,
            data = _ref.data;
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        page: "Shop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.state.shopName), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "This will eventually connect to a shopify store."));
    }
  }]);

  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Shop);

/***/ })

})
//# sourceMappingURL=shop.js.2ac97aa7cae970b8254c.hot-update.js.map