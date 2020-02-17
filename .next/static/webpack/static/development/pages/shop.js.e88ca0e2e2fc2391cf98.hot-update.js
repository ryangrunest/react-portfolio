webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./queries/shop.js":
/*!*************************!*\
  !*** ./queries/shop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//# sourceMappingURL=shop.js.e88ca0e2e2fc2391cf98.hot-update.js.map