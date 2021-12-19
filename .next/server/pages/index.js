(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,888];
exports.modules = {

/***/ 7818:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(6347);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(8303);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: external "styled-jsx/style"
var style_namespaceObject = require("styled-jsx/style");;
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/homeNav.js






const HomeNav = ({
  pages
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "jsx-2041869739" + " " + "homenav",
    children: [pages.map((page, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: page.attributes.slug,
        className: "jsx-2041869739" + " " + "link",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/${page.attributes.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-2041869739",
            children: page.attributes.title
          })
        })
      }, 'link-' + i);
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2041869739",
      children: [".homenav.jsx-2041869739{font-size:40px;}", "a.jsx-2041869739{color:#000;text-transform:uppercase;}", ".link.jsx-2041869739{position:absolute;}", "#contact.jsx-2041869739{top:5vh;left:15vw;}", "#podcast.jsx-2041869739{top:35vh;left:4vw;}", "#alternative-economies.jsx-2041869739{top:60vh;left:4vw;max-width:10vw;}", "#visa-help.jsx-2041869739{top:5vh;right:14vw;}", "#log-in.jsx-2041869739{top:35vh;right:4vw;}", "#faq.jsx-2041869739{top:65vh;right:15vw;}", "#about.jsx-2041869739{top:75vh;right:40vw;}"]
    })]
  });
};

/* harmony default export */ var homeNav = (HomeNav);
;// CONCATENATED MODULE: ./pages/index.js








const Home = ({
  pages,
  homepage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    pages: pages,
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* default */.Z, {
      seo: homepage.attributes.seo
    }), /*#__PURE__*/jsx_runtime_.jsx(homeNav, {
      pages: pages
    })]
  });
};

async function getStaticProps() {
  // Run API calls in parallel
  const [pagesRes, homepageRes] = await Promise.all([(0,api/* fetchAPI */.I)("/pages", {
    populate: "*"
  }), (0,api/* fetchAPI */.I)("/homepage", {
    populate: {
      hero: {
        populate: "*"
      },
      seo: {
        populate: "*"
      }
    }
  })]);
  return {
    props: {
      pages: pagesRes.data,
      homepage: homepageRes.data
    },
    revalidate: 1
  };
}
/* harmony default export */ var pages = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [544,664,672,80], function() { return __webpack_exec__(7818); });
module.exports = __webpack_exports__;

})();