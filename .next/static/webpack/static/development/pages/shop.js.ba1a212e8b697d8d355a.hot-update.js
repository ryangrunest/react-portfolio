webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./queries/shop.js":
/*!*************************!*\
  !*** ./queries/shop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

var url = "https://another-test-store-97213.myshopify.com/api/graphql";
var headers = {
  "Content-Type": "application/graphql",
  "X-Shopify-Storefront-Access-Token": "5db76a7bcd70717eade01e6a64392829"
};

var builder = function builder() {
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
    method: "post"
  });
};

var queries = {
  getProductsWithImages: function getProductsWithImages(numberOfProducts) {
    return "query\t{\n      products(first:".concat(numberOfProducts, ")\t{\n        edges {\n          node {\n            id\n            title\n            images(first: 1) {\n              edges {\n                node {\n                  id\n                }\n              }\n            }\n            priceRange {\n              maxVariantPrice {\n                amount\n              }\n            }\n          }\n        }\n      }\n    }");
  },
  getShopName: function getShopName() {
    return "query\t{\n      shop {\n        name\n      }\n    }\n    ";
  }
};
/* harmony default export */ __webpack_exports__["default"] = (queries);

/***/ })

})
//# sourceMappingURL=shop.js.ba1a212e8b697d8d355a.hot-update.js.map