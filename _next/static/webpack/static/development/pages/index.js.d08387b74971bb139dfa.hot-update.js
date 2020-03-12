webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Background_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Background/Background */ "./components/Background/Background.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/src/sass/aos.scss */ "./node_modules/aos/src/sass/aos.scss");
/* harmony import */ var aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.scss */ "./pages/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Max\\Documents\\GitHub\\joao-azevedo\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Component imports

 //Library imports

 //Style imports



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var mobile;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init({
      offset: 10
    });
    mobile = window.innerWidth < 576;
    window.addEventListener('resize', function () {
      return mobile = window.innerWidth < 576;
    });
  }, []);
  var current = 0;
  return __jsx("div", {
    id: "main-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_Background_Background__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mobile: mobile,
    active: current !== 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.d08387b74971bb139dfa.hot-update.js.map