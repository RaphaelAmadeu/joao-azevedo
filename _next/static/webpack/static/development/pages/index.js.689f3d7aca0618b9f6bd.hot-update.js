webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Background/Background.js":
/*!*********************************************!*\
  !*** ./components/Background/Background.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/Background/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Max\\Documents\\GitHub\\joao-azevedo\\components\\Background\\Background.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Background(_ref) {
  var active = _ref.active,
      mobile = _ref.mobile,
      count = _ref.count;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var column = document.querySelector('.background-column');
    column.style.left = 0;
    console.log(active, mobile);

    if (active && mobile) {
      column.style.left = '-50%';
    } else if (mobile) {
      column.style.left = 0;
    }
  }, [active, mobile]);
  return __jsx("div", {
    className: "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "background-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "background-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    "data-aos": "fade-left",
    "data-aos-duration": "2000",
    "data-aos-easing": "ease-in",
    className: "background-block-1 background-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "2000",
    "data-aos-easing": "ease-in",
    className: "background-block-2 background-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.689f3d7aca0618b9f6bd.hot-update.js.map