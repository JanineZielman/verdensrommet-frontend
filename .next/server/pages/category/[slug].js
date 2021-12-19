(function() {
var exports = {};
exports.id = 24;
exports.ids = [24,888];
exports.modules = {

/***/ 5030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1422);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);




const Image = ({
  image,
  style
}) => {
  const {
    url,
    alternativeText,
    width,
    height
  } = image.data.attributes; // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default // loader={loader}
  , {
    layout: "responsive",
    width: width,
    height: height,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiMedia */ .$)(image),
    alt: alternativeText || ""
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Image);

/***/ }),

/***/ 5256:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
;// CONCATENATED MODULE: ./components/card.js






const Card = ({
  article
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/article/${article.attributes.slug}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "uk-link-reset",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-card uk-card-muted",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-card-media-top",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
            image: article.attributes.image
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uk-card-body",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            id: "category",
            className: "uk-text-uppercase",
            children: article.attributes.category.name
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            id: "title",
            className: "uk-text-large",
            children: article.attributes.title
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var card = (Card);
;// CONCATENATED MODULE: ./components/articles.js





const Articles = ({
  articles
}) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-child-width-1-2@s",
      "data-uk-grid": "true",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: leftArticles.map((article, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx(card, {
            article: article
          }, `article__left__${article.attributes.slug}`);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-child-width-1-2@m uk-grid-match",
          "data-uk-grid": true,
          children: rightArticles.map((article, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx(card, {
              article: article
            }, `article__left__${article.attributes.slug}`);
          })
        })
      })]
    })
  });
};

/* harmony default export */ var articles = (Articles);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(6347);
// EXTERNAL MODULE: ./components/seo.js
var components_seo = __webpack_require__(8303);
;// CONCATENATED MODULE: ./pages/category/[slug].js







const Category = ({
  category,
  categories
}) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    categories: categories.data,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_seo/* default */.Z, {
      seo: seo
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-container uk-container-large",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: category.attributes.name
        }), /*#__PURE__*/jsx_runtime_.jsx(articles, {
          articles: category.attributes.articles.data
        })]
      })
    })]
  });
};

async function getStaticPaths() {
  const categoriesRes = await (0,api/* fetchAPI */.I)("/categories", {
    fields: ["slug"]
  });
  return {
    paths: categoriesRes.data.map(category => ({
      params: {
        slug: category.attributes.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const matchingCategories = await (0,api/* fetchAPI */.I)("/categories", {
    filters: {
      slug: params.slug
    },
    populate: {
      articles: {
        populate: "*"
      }
    }
  });
  const allCategories = await (0,api/* fetchAPI */.I)("/categories");
  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories
    },
    revalidate: 1
  };
}
/* harmony default export */ var _slug_ = (Category);

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544,664,675,672,80], function() { return __webpack_exec__(5256); });
module.exports = __webpack_exports__;

})();