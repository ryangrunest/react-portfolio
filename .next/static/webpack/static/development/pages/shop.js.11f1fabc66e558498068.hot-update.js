webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./queries/shop.js":
/*!*************************!*\
  !*** ./queries/shop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


var url = "https://another-test-store-97213.myshopify.com/api/graphql";
var headers = {
  "Content-Type": "application/graphql",
  "X-Shopify-Storefront-Access-Token": "5db76a7bcd70717eade01e6a64392829"
};
var queries = {
  getProductsWithImages: function getProductsWithImages(numberOfProducts) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var query = "query\t{\n      products(first:".concat(numberOfProducts, ")\t{\n        edges {\n          node {\n            id\n            title\n            images(first: 1) {\n              edges {\n                node {\n                  id\n                }\n              }\n            }\n            variants(first:10) {\n              edges {\n                node {\n                  image {\n                    transformedSrc\n                  }\n                }\n              }\n            }\n            priceRange {\n              maxVariantPrice {\n                amount\n              }\n            }\n          }\n        }\n      }\n    }");
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
        method: "post",
        headers: headers,
        body: query
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        resolve(data.data.products.edges);
      });
    });
  },
  getShopName: new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    var value = "cheeseburger";
    var query = "query\t{\n      shop {\n        name\n      }\n    }\n    ";
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
      method: "post",
      headers: headers,
      body: query
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      value = data.data.shop.name;
      resolve(value);
    });
  }),
  createCheckout: function createCheckout(lineItem) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var value = "cheeseburger";
      var query = "mutation {\n        checkoutCreate(input: {\n          lineItems: [{ variantId: \"".concat(lineItem.id, "\", quantity: ").concat(lineItem.quantity, " }]\n        }) {\n          checkout {\n             id\n             webUrl\n             lineItems(first: 5) {\n               edges {\n                 node {\n                   title\n                   quantity\n                 }\n               }\n             }\n          }\n        }\n      }");
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
        method: "post",
        headers: headers,
        body: query
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        console.log(data);
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (queries);

/***/ })

})
//# sourceMappingURL=shop.js.11f1fabc66e558498068.hot-update.js.map