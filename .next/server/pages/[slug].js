(function() {
var exports = {};
exports.id = 219;
exports.ids = [219,888];
exports.modules = {

/***/ 1103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(883);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6347);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8303);


// import Articles from "../components/articles"




const Page = ({
  page,
  pages
}) => {
  const seo = {
    metaTitle: page.attributes.title // metaDescription: `All ${category.attributes.name} articles`,

  };
  console.log('page', page);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    pages: pages.data,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      seo: seo
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: page.attributes.title
    })]
  }) // <Layout categories={categories.data}>
  //   <Seo seo={seo} />
  //   <div className="uk-section">
  //     <div className="uk-container uk-container-large">
  //       <h1>{category.attributes.name}</h1>
  //       <Articles articles={category.attributes.articles.data} />
  //     </div>
  //   </div>
  // </Layout>
  ;
};

async function getStaticPaths() {
  const pagesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/pages", {
    fields: ["slug"]
  });
  return {
    paths: pagesRes.data.map(page => ({
      params: {
        slug: page.attributes.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const pagesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/pages", {
    filters: {
      slug: params.slug
    },
    populate: {
      text: "*",
      page: {
        populate: "*"
      },
      seo: {
        populate: "*"
      }
    }
  });
  const allPagesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/pages", {
    populate: {
      page: {
        populate: "*"
      }
    }
  });
  return {
    props: {
      page: pagesRes.data[0],
      pages: allPagesRes
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544,664,672,80], function() { return __webpack_exec__(1103); });
module.exports = __webpack_exports__;

})();