/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./assets/css/exchange.scss":
/*!**********************************!*\
  !*** ./assets/css/exchange.scss ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./assets/css/homenav.scss":
/*!*********************************!*\
  !*** ./assets/css/homenav.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./assets/css/mobile.scss":
/*!********************************!*\
  !*** ./assets/css/mobile.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./assets/css/style.scss":
/*!*******************************!*\
  !*** ./assets/css/style.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAPI: () => (/* binding */ fetchAPI),\n/* harmony export */   getStrapiURL: () => (/* binding */ getStrapiURL)\n/* harmony export */ });\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Get full Strapi URL from path\n * @param {string} path Path of the URL\n * @returns {string} Full Strapi URL\n */ function getStrapiURL(path = \"\") {\n    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || \"https://cms.verdensrommet.network\"}${path}`;\n}\nasync function fetchAPI(path) {\n    const requestUrl = getStrapiURL(path);\n    const response = await fetch(requestUrl);\n    const data = await response.json();\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQjtBQUVuQjs7OztDQUlDLEdBQ00sU0FBU0MsYUFBYUMsT0FBTyxFQUFFO0lBQ3BDLE9BQU8sR0FDTEMsUUFBUUMsR0FBRyxDQUFDQywwQkFBMEIsSUFBSSxzQ0FDekNILE1BQU07QUFDWDtBQUVPLGVBQWVJLFNBQVNKLElBQUk7SUFDakMsTUFBTUssYUFBYU4sYUFBYUM7SUFDaEMsTUFBTU0sV0FBVyxNQUFNQyxNQUFNRjtJQUM3QixNQUFNRyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaEMsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsiL1VzZXJzL2phbmluZXppZWxtYW4vRG9jdW1lbnRzL1NpdGVzL1N0cmFwaS92ZXJkZW5zcm9tbWV0LWZyb250ZW5kL2xpYi9hcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiXG5cbi8qKlxuICogR2V0IGZ1bGwgU3RyYXBpIFVSTCBmcm9tIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cHM6Ly9jbXMudmVyZGVuc3JvbW1ldC5uZXR3b3JrXCJcbiAgfSR7cGF0aH1gXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBnZXRTdHJhcGlVUkwocGF0aCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufSJdLCJuYW1lcyI6WyJxcyIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/api.js\n");

/***/ }),

/***/ "(pages-dir-node)/./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStrapiMedia: () => (/* binding */ getStrapiMedia)\n/* harmony export */ });\n// import { getStrapiURL } from \"./api\";\nfunction getStrapiMedia(media) {\n    const imageUrl = media?.url.startsWith(\"/\") ? \"https://cms.verdensrommet.network\" + media.url : media.url;\n    return imageUrl;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9tZWRpYS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsd0NBQXdDO0FBRWpDLFNBQVNBLGVBQWVDLEtBQUs7SUFDbEMsTUFBTUMsV0FBV0QsT0FBT0UsSUFBSUMsV0FBVyxPQUNuQyxzQ0FBc0NILE1BQU1FLEdBQUcsR0FDL0NGLE1BQU1FLEdBQUc7SUFDYixPQUFPRDtBQUNUIiwic291cmNlcyI6WyIvVXNlcnMvamFuaW5lemllbG1hbi9Eb2N1bWVudHMvU2l0ZXMvU3RyYXBpL3ZlcmRlbnNyb21tZXQtZnJvbnRlbmQvbGliL21lZGlhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuL2FwaVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBtZWRpYT8udXJsLnN0YXJ0c1dpdGgoXCIvXCIpXG4gICAgPyBcImh0dHBzOi8vY21zLnZlcmRlbnNyb21tZXQubmV0d29ya1wiICsgbWVkaWEudXJsXG4gICAgOiBtZWRpYS51cmw7XG4gIHJldHVybiBpbWFnZVVybDtcbn0iXSwibmFtZXMiOlsiZ2V0U3RyYXBpTWVkaWEiLCJtZWRpYSIsImltYWdlVXJsIiwidXJsIiwic3RhcnRzV2l0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/media.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContext: () => (/* binding */ GlobalContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"(pages-dir-node)/./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/style.scss */ \"(pages-dir-node)/./assets/css/style.scss\");\n/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_css_homenav_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/homenav.scss */ \"(pages-dir-node)/./assets/css/homenav.scss\");\n/* harmony import */ var _assets_css_homenav_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_homenav_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_css_exchange_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/css/exchange.scss */ \"(pages-dir-node)/./assets/css/exchange.scss\");\n/* harmony import */ var _assets_css_exchange_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_exchange_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_css_mobile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/css/mobile.scss */ \"(pages-dir-node)/./assets/css/mobile.scss\");\n/* harmony import */ var _assets_css_mobile_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_mobile_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ \"(pages-dir-node)/./lib/api.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/media */ \"(pages-dir-node)/./lib/media.js\");\n\n\n\n\n\n\n\n\n\n\n// Store Strapi Global object in context\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_7__.createContext)({});\nconst MyApp = ({ Component, pageProps })=>{\n    // const { global } = pageProps\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        type: \"text/css\",\n                        charSet: \"UTF-8\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/janinezielman/Documents/Sites/Strapi/verdensrommet-frontend/pages/_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        type: \"text/css\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/janinezielman/Documents/Sites/Strapi/verdensrommet-frontend/pages/_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/janinezielman/Documents/Sites/Strapi/verdensrommet-frontend/pages/_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/janinezielman/Documents/Sites/Strapi/verdensrommet-frontend/pages/_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/janinezielman/Documents/Sites/Strapi/verdensrommet-frontend/pages/_app.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/janinezielman/Documents/Sites/Strapi/verdensrommet-frontend/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/janinezielman/Documents/Sites/Strapi/verdensrommet-frontend/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nMyApp.getInitialProps = async (ctx)=>{\n    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n    // Fetch global site settings from Strapi\n    // const globalRes = await fetchAPI(\"/global\")\n    // Pass the data to our page via props\n    // return { ...appProps, pageProps: { global: globalRes } }\n    return {\n        ...appProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0U7QUFDSztBQUNFO0FBQ0M7QUFDRjtBQUNHO0FBQ0E7QUFDUTtBQUU3Qyx3Q0FBd0M7QUFDakMsTUFBTUssOEJBQWdCSCxvREFBYUEsQ0FBQyxDQUFDLEdBQUU7QUFFOUMsTUFBTUksUUFBUSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLCtCQUErQjtJQUMvQixxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJQTs7a0NBS0gsOERBQUNRO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLO3dCQUNMQyxTQUFRO3dCQUNSQyxNQUFLOzs7Ozs7a0NBRVAsOERBQUNKO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLO3dCQUNMRSxNQUFLOzs7Ozs7a0NBRVAsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzVCLDhEQUFDQzt3QkFDQ0MsS0FBSzt3QkFDTEMsS0FBSTs7Ozs7O2tDQUVSLDhEQUFDRjt3QkFBT0UsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDWjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQU05QjtBQUdBRixNQUFNYyxlQUFlLEdBQUcsT0FBT0M7SUFDN0IsTUFBTUMsV0FBVyxNQUFNdEIsK0RBQW1CLENBQUNxQjtJQUMzQyx5Q0FBeUM7SUFDekMsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0QywyREFBMkQ7SUFDM0QsT0FBTztRQUFFLEdBQUdDLFFBQVE7SUFBQztBQUN2QjtBQUVBLGlFQUFlaEIsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2phbmluZXppZWxtYW4vRG9jdW1lbnRzL1NpdGVzL1N0cmFwaS92ZXJkZW5zcm9tbWV0LWZyb250ZW5kL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL3N0eWxlLnNjc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9ob21lbmF2LnNjc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9leGNoYW5nZS5zY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvbW9iaWxlLnNjc3NcIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5cbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIGNvbnN0IHsgZ2xvYmFsIH0gPSBwYWdlUHJvcHNcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5hdHRyaWJ1dGVzLmZhdmljb24pfVxuICAgICAgICAvPiAqL31cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGNoYXJTZXQ9XCJVVEYtOFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS91aWtpdEAzLjIuMy9kaXN0L2pzL3Vpa2l0LWljb25zLm1pbi5qc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wcm9jZXNzaW5nLmpzLzEuNi42L3Byb2Nlc3NpbmcubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICB7LyogPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbH0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj4gKi99XG4gICAgPC8+XG4gIClcbn1cblxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vIEZldGNoIGdsb2JhbCBzaXRlIHNldHRpbmdzIGZyb20gU3RyYXBpXG4gIC8vIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2dsb2JhbFwiKVxuICAvLyBQYXNzIHRoZSBkYXRhIHRvIG91ciBwYWdlIHZpYSBwcm9wc1xuICAvLyByZXR1cm4geyAuLi5hcHBQcm9wcywgcGFnZVByb3BzOiB7IGdsb2JhbDogZ2xvYmFsUmVzIH0gfVxuICByZXR1cm4geyAuLi5hcHBQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXBwIiwiSGVhZCIsImNyZWF0ZUNvbnRleHQiLCJmZXRjaEFQSSIsImdldFN0cmFwaU1lZGlhIiwiR2xvYmFsQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibGluayIsInJlbCIsInR5cGUiLCJjaGFyU2V0IiwiaHJlZiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInNjcmlwdCIsImFzeW5jIiwic3JjIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXBwUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();