module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/si */ "react-icons/si");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gr */ "react-icons/gr");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\Studies\\Zelda\\2021 HyperionDev\\5. Level 3\\Task 10 - Next.js I\\devPortfolio\\components\\Header.js";


/* contain a header component that the user can use to navigate to the different pages in your app.*/
 //Use Next.js Link API to add navigation 

 //import icons




 //import container and layout components from bootstrap react



 //create a custom style for the header and navigation bar styled using styled-jsx.

const layout = {
  margin: 20,
  padding: 20,
  width: '400px',
  color: 'black',
  fontWeight: 700,
  borderRadius: 20,
  borderLeft: '2px solid #DDD',
  borderBottom: '1px solid #DDD'
};

const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-952171879",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "952171879",
        children: "div.jsx-952171879{background:black;text-align:center;}img.jsx-952171879{marginLeft:auto;marginRight:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DcUIsQUFHMEMsQUFJRCxnQkFDQyxDQUpDLGdCQU10QixFQUxBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29udGFpbiBhIGhlYWRlciBjb21wb25lbnQgdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRvIG5hdmlnYXRlIHRvIHRoZSBkaWZmZXJlbnQgcGFnZXMgaW4geW91ciBhcHAuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9Vc2UgTmV4dC5qcyBMaW5rIEFQSSB0byBhZGQgbmF2aWdhdGlvbiBcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuXHJcbi8vaW1wb3J0IGljb25zXHJcbmltcG9ydCB7IEdvSG9tZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBTaUFib3V0RG90TWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IHsgR3JQcm9qZWN0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xyXG5pbXBvcnQgeyBHckNvbnRhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcclxuXHJcbi8vaW1wb3J0IGNvbnRhaW5lciBhbmQgbGF5b3V0IGNvbXBvbmVudHMgZnJvbSBib290c3RyYXAgcmVhY3RcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuXHJcbi8vY3JlYXRlIGEgY3VzdG9tIHN0eWxlIGZvciB0aGUgaGVhZGVyIGFuZCBuYXZpZ2F0aW9uIGJhciBzdHlsZWQgdXNpbmcgc3R5bGVkLWpzeC5cclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNEREQnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnXHJcbn1cclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2NvZGluZ0JhY2suanBnJyBhbHQ9J0hlYWRlciBpbWFnZScgd2lkdGg9JzcwJScgaGVpZ2h0PScxMTBweCcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gPEdvSG9tZSAvPiBIT01FPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PiBBQk9VVCAgPFNpQWJvdXREb3RNZSAvPiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2plY3RzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gPEdyUHJvamVjdHMgLz4gUFJPSkVDVFM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PjxHckNvbnRhY3QgLz4gQ09OVEFDVCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\Studies\\\\Zelda\\\\2021 HyperionDev\\\\5. Level 3\\\\Task 10 - Next.js I\\\\devPortfolio\\\\components\\\\Header.js */"
      }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "../static/codingBack.jpg",
        alt: "Header image",
        width: "70%",
        height: "110px",
        className: "jsx-952171879"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1230775905",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "1230775905",
        children: "div.jsx-1230775905{text-align:right;margin-right:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEcUIsQUFHMEMsaUJBQ0Msa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29udGFpbiBhIGhlYWRlciBjb21wb25lbnQgdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRvIG5hdmlnYXRlIHRvIHRoZSBkaWZmZXJlbnQgcGFnZXMgaW4geW91ciBhcHAuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9Vc2UgTmV4dC5qcyBMaW5rIEFQSSB0byBhZGQgbmF2aWdhdGlvbiBcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuXHJcbi8vaW1wb3J0IGljb25zXHJcbmltcG9ydCB7IEdvSG9tZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBTaUFib3V0RG90TWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IHsgR3JQcm9qZWN0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xyXG5pbXBvcnQgeyBHckNvbnRhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcclxuXHJcbi8vaW1wb3J0IGNvbnRhaW5lciBhbmQgbGF5b3V0IGNvbXBvbmVudHMgZnJvbSBib290c3RyYXAgcmVhY3RcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuXHJcbi8vY3JlYXRlIGEgY3VzdG9tIHN0eWxlIGZvciB0aGUgaGVhZGVyIGFuZCBuYXZpZ2F0aW9uIGJhciBzdHlsZWQgdXNpbmcgc3R5bGVkLWpzeC5cclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNEREQnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnXHJcbn1cclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2NvZGluZ0JhY2suanBnJyBhbHQ9J0hlYWRlciBpbWFnZScgd2lkdGg9JzcwJScgaGVpZ2h0PScxMTBweCcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gPEdvSG9tZSAvPiBIT01FPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PiBBQk9VVCAgPFNpQWJvdXREb3RNZSAvPiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2plY3RzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gPEdyUHJvamVjdHMgLz4gUFJPSkVDVFM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PjxHckNvbnRhY3QgLz4gQ09OVEFDVCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\Studies\\\\Zelda\\\\2021 HyperionDev\\\\5. Level 3\\\\Task 10 - Next.js I\\\\devPortfolio\\\\components\\\\Header.js */"
      }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1230775905",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoHome"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 52
            }, undefined), " HOME"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [" ABOUT  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_5__["SiAboutDotMe"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 59
            }, undefined), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/projects",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__["GrProjects"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 52
            }, undefined), " PROJECTS"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/contact",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__["GrContact"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 51
            }, undefined), " CONTACT "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\Studies\\Zelda\\2021 HyperionDev\\5. Level 3\\Task 10 - Next.js I\\devPortfolio\\components\\Layout.js";
 //import the Header component containing navigation

 //Link bootstrap to use in Navigation and layouts
//import the <Head> via next.js API

 // Make custom CSS rules to style component

const layoutStyle = {
  margin: 30,
  padding: 20
};

const Layout = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
        integrity: "sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Train+One&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: layoutStyle,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\Studies\\Zelda\\2021 HyperionDev\\5. Level 3\\Task 10 - Next.js I\\devPortfolio\\pages\\index.js";


/*Home Page to give table of content of site and navigation */
 //import Layout Component contiaing layout and Navigation

 //import container and layout components from bootstrap react







const index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "62174096",
      children: "h1.jsx-62174096{text-shadow:3px 2px #DDD;font-family:'Train One',cursive;fontWeight:800;margin:20;text-indent:150px;}h4.jsx-62174096{background:#DDD;padding:10px;text-align:center;}h5.jsx-62174096{margin:10px;padding:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CcUIsQUFHa0QsQUFRVCxBQU1KLFlBQ0MsSUFOQSxTQVJvQixBQWVmLElBTkEsY0FPdEIsSUFOQSxVQVRtQixlQUNMLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypIb21lIFBhZ2UgdG8gZ2l2ZSB0YWJsZSBvZiBjb250ZW50IG9mIHNpdGUgYW5kIG5hdmlnYXRpb24gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9pbXBvcnQgTGF5b3V0IENvbXBvbmVudCBjb250aWFpbmcgbGF5b3V0IGFuZCBOYXZpZ2F0aW9uXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xyXG5cclxuLy9pbXBvcnQgY29udGFpbmVyIGFuZCBsYXlvdXQgY29tcG9uZW50cyBmcm9tIGJvb3RzdHJhcCByZWFjdFxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcclxuaW1wb3J0IHsgR2lNYWduaWZ5aW5nR2xhc3MgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAycHggI0RERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUcmFpbiBPbmUnLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0RERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8aDE+SE9NRSBQQUdFPC9oMT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vc3RhdGljL3Byb2ZpbGVJbWcuanBnJyBhbHQ9XCJwcm9maWxlIGltYWdlXCIgd2lkdGg9Jzc1JScgcm91bmRlZCAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDxoND5OYW1lOjwvaDQ+IDxoNT5aZWxkYSBCYXNzb248L2g1PjwvcD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gPGg0Pk1hcml0YWwgU3RhdHVzOjwvaDQ+IDxoNT5NYXJyaWVkPC9oNT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gPGg0PkRyaXZlcidzIExpY2Vuc2U6PC9oND4gPGg1PlllcywgQ29kZSA4PC9oNT48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gPGg0PkRhdGUgT2YgQmlydGg6PC9oND4gPGg1PiAxOTkzLCBGZWJydWFyeSAyMjwvaDU+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND4gPEdpTWFnbmlmeWluZ0dsYXNzIC8+ICBNb3JlIGFib3V0IG1lLi4uPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsIHN0YWNrIHdlYiBkZXZlbG9wZXIgd2l0aCBhIGRpcGxvbWEgaW4gSVQgKDIwMjEpLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VkIGFpcmNyYWZ0IG1haW50ZW5hbmNlIHBsYW5uZXIgd2l0aCBhIGRlbW9uc3RyYXRlZCBoaXN0b3J5IG9mIHdvcmtpbmcgaW4gdGhlIGF2aWF0aW9uIGluZHVzdHJ5LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNraWxsZWQgaW4gQXZpYXRpb24sIEJvb2trZWVwaW5nLCBNYWludGVuYW5jZSwgUHJvamVjdCBQbGFubmluZy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsIGRyaXZlbiBhbmQgZW5qb3kgd29ya2luZyBpbiBhIHRlYW0uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBoYXZlIGRlc2lnbmVkLCBpbXBsZW1lbnRlZCBhbmQgbWFpbnRhaW5lZCB2YXJpZXMgc3lzdGVtcyBkdXJpbmcgbXkgcHJldmlvdXMgam9iIGZ1bmN0aW9ucy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIGVuam95IGFuYWx5c2luZyBhbmQgYWx3YXlzIGFpbSB0byBiZSBwcmVwYXJlZC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9uZXN0eSwgcmVsaWFiaWxpdHkgYW5kIHRydXN0d29ydGhpbmVzcyBhcmUgcXVhbGl0aWVzIHZlcnkgaW1wb3J0YW50IHRvIG1lLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9uZSBzaG91bGQgYWx3YXlzIHByYWN0aWNlIHRoZXNlIHF1YWxpdGllcyBpbnNpZGUgYW5kIG91dHNpZGUgb2YgeW91ciB3b3JraW5nIGVudmlyb25tZW50LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkgc2VlIG15c2VsZiBhcyBhIGdvb2QgdGVhbSBwbGF5ZXIgYW5kIGVuY291cmFnZSBteSBmZWxsb3cgdGVhbSBtZW1iZXJzLiBZb3Ugd2lsbCBub3QgYWx3YXlzIGhhdmUgYWxsIHRoZSBhbnN3ZXJzOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYXQgaXMgd2h5IEkgd2FudCB0byBiZSBwYXJ0IG9mIHRoZSBzb2x1dGlvbiBhbmQgYnJhaW4gc3Rvcm1pbmcgZm9yIGJldHRlciBhbHRlcm5hdGl2ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgaG9iYmllcyBpbmNsdWRlIGhpa2luZyBhbmQgbG9uZyB3YWxrcyBhbG9uZyBvbiB0aGUgYmVhY2guIEkgYWxzbyBlbmpveSBob21lIERJWSdzIGFuZCB3b3JraW5nIGluIHRoZSBnYXJkZW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\Studies\\\\Zelda\\\\2021 HyperionDev\\\\5. Level 3\\\\Task 10 - Next.js I\\\\devPortfolio\\\\pages\\\\index.js */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "jsx-62174096",
      children: "HOME PAGE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
      className: "jsx-62174096"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fluid: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "justify-content-md-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          xs: 12,
          md: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7___default.a, {
            src: "../static/profileImg.jpg",
            alt: "profile image",
            width: "75%",
            rounded: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          xs: 12,
          md: 9,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-62174096",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-62174096",
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-62174096",
              children: "Zelda Basson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 44
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-62174096",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-62174096",
              children: "Marital Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-62174096",
              children: "Married"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 54
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-62174096",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-62174096",
              children: "Driver's License:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-62174096",
              children: "Yes, Code 8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 56
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-62174096",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-62174096",
              children: "Date Of Birth:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-62174096",
              children: " 1993, February 22"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 53
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-62174096"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "justify-content-md-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "jsx-62174096",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_8__["GiMagnifyingGlass"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 30
            }, undefined), "  More about me..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-62174096",
            children: "Full stack web developer with a diploma in IT (2021). Experienced aircraft maintenance planner with a demonstrated history of working in the aviation industry. Skilled in Aviation, Bookkeeping, Maintenance, Project Planning. Goal driven and enjoy working in a team. I have designed, implemented and maintained varies systems during my previous job functions. I enjoy analysing and always aim to be prepared."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-62174096",
            children: "Honesty, reliability and trustworthiness are qualities very important to me. One should always practice these qualities inside and outside of your working environment. I see myself as a good team player and encourage my fellow team members. You will not always have all the answers; That is why I want to be part of the solution and brain storming for better alternatives."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-62174096",
            children: "My hobbies include hiking and long walks along on the beach. I also enjoy home DIY's and working in the garden."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
      className: "jsx-62174096"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-icons/gi":
/*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "react-icons/gr":
/*!*********************************!*\
  !*** external "react-icons/gr" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gr");

/***/ }),

/***/ "react-icons/si":
/*!*********************************!*\
  !*** external "react-icons/si" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9naVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2dvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZ3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9zaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJsYXlvdXQiLCJtYXJnaW4iLCJwYWRkaW5nIiwid2lkdGgiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJMZWZ0IiwiYm9yZGVyQm90dG9tIiwiSGVhZGVyIiwibGF5b3V0U3R5bGUiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFD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Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiLyogY29udGFpbiBhIGhlYWRlciBjb21wb25lbnQgdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRvIG5hdmlnYXRlIHRvIHRoZSBkaWZmZXJlbnQgcGFnZXMgaW4geW91ciBhcHAuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9Vc2UgTmV4dC5qcyBMaW5rIEFQSSB0byBhZGQgbmF2aWdhdGlvbiBcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuXHJcbi8vaW1wb3J0IGljb25zXHJcbmltcG9ydCB7IEdvSG9tZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBTaUFib3V0RG90TWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IHsgR3JQcm9qZWN0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xyXG5pbXBvcnQgeyBHckNvbnRhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcclxuXHJcbi8vaW1wb3J0IGNvbnRhaW5lciBhbmQgbGF5b3V0IGNvbXBvbmVudHMgZnJvbSBib290c3RyYXAgcmVhY3RcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuXHJcbi8vY3JlYXRlIGEgY3VzdG9tIHN0eWxlIGZvciB0aGUgaGVhZGVyIGFuZCBuYXZpZ2F0aW9uIGJhciBzdHlsZWQgdXNpbmcgc3R5bGVkLWpzeC5cclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNEREQnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnXHJcbn1cclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2NvZGluZ0JhY2suanBnJyBhbHQ9J0hlYWRlciBpbWFnZScgd2lkdGg9JzcwJScgaGVpZ2h0PScxMTBweCcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gPEdvSG9tZSAvPiBIT01FPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PiBBQk9VVCAgPFNpQWJvdXREb3RNZSAvPiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2plY3RzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gPEdyUHJvamVjdHMgLz4gUFJPSkVDVFM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PjxHckNvbnRhY3QgLz4gQ09OVEFDVCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vaW1wb3J0IHRoZSBIZWFkZXIgY29tcG9uZW50IGNvbnRhaW5pbmcgbmF2aWdhdGlvblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzJztcclxuXHJcbi8vTGluayBib290c3RyYXAgdG8gdXNlIGluIE5hdmlnYXRpb24gYW5kIGxheW91dHNcclxuXHJcblxyXG4vL2ltcG9ydCB0aGUgPEhlYWQ+IHZpYSBuZXh0LmpzIEFQSVxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG4vLyBNYWtlIGN1c3RvbSBDU1MgcnVsZXMgdG8gc3R5bGUgY29tcG9uZW50XHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG4gICAgbWFyZ2luOiAzMCxcclxuICAgIHBhZGRpbmc6IDIwXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNi4wL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CMHZQNXhtQVR3MStLOUtSUWpRRVJKdlR1bVFXMG5QRXp2RjZML1o2bnJvbkozb1VPRlVGcENqRVVRb3VxMitsXCJcclxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UcmFpbitPbmUmZGlzcGxheT1zd2FwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCIvKkhvbWUgUGFnZSB0byBnaXZlIHRhYmxlIG9mIGNvbnRlbnQgb2Ygc2l0ZSBhbmQgbmF2aWdhdGlvbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vL2ltcG9ydCBMYXlvdXQgQ29tcG9uZW50IGNvbnRpYWluZyBsYXlvdXQgYW5kIE5hdmlnYXRpb25cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcyc7XHJcblxyXG4vL2ltcG9ydCBjb250YWluZXIgYW5kIGxheW91dCBjb21wb25lbnRzIGZyb20gYm9vdHN0cmFwIHJlYWN0XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgeyBHaU1hZ25pZnlpbmdHbGFzcyB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCAjREREO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RyYWluIE9uZScsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREREO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxoMT5IT01FIFBBR0U8L2gxPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi9zdGF0aWMvcHJvZmlsZUltZy5qcGcnIGFsdD1cInByb2ZpbGUgaW1hZ2VcIiB3aWR0aD0nNzUlJyByb3VuZGVkICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gPGg0Pk5hbWU6PC9oND4gPGg1PlplbGRhIEJhc3NvbjwvaDU+PC9wPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiA8aDQ+TWFyaXRhbCBTdGF0dXM6PC9oND4gPGg1Pk1hcnJpZWQ8L2g1PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiA8aDQ+RHJpdmVyJ3MgTGljZW5zZTo8L2g0PiA8aDU+WWVzLCBDb2RlIDg8L2g1PjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiA8aDQ+RGF0ZSBPZiBCaXJ0aDo8L2g0PiA8aDU+IDE5OTMsIEZlYnJ1YXJ5IDIyPC9oNT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiA8R2lNYWduaWZ5aW5nR2xhc3MgLz4gIE1vcmUgYWJvdXQgbWUuLi48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgc3RhY2sgd2ViIGRldmVsb3BlciB3aXRoIGEgZGlwbG9tYSBpbiBJVCAoMjAyMSkuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJpZW5jZWQgYWlyY3JhZnQgbWFpbnRlbmFuY2UgcGxhbm5lciB3aXRoIGEgZGVtb25zdHJhdGVkIGhpc3Rvcnkgb2Ygd29ya2luZyBpbiB0aGUgYXZpYXRpb24gaW5kdXN0cnkuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2tpbGxlZCBpbiBBdmlhdGlvbiwgQm9va2tlZXBpbmcsIE1haW50ZW5hbmNlLCBQcm9qZWN0IFBsYW5uaW5nLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWwgZHJpdmVuIGFuZCBlbmpveSB3b3JraW5nIGluIGEgdGVhbS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIGhhdmUgZGVzaWduZWQsIGltcGxlbWVudGVkIGFuZCBtYWludGFpbmVkIHZhcmllcyBzeXN0ZW1zIGR1cmluZyBteSBwcmV2aW91cyBqb2IgZnVuY3Rpb25zLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkgZW5qb3kgYW5hbHlzaW5nIGFuZCBhbHdheXMgYWltIHRvIGJlIHByZXBhcmVkLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb25lc3R5LCByZWxpYWJpbGl0eSBhbmQgdHJ1c3R3b3J0aGluZXNzIGFyZSBxdWFsaXRpZXMgdmVyeSBpbXBvcnRhbnQgdG8gbWUuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT25lIHNob3VsZCBhbHdheXMgcHJhY3RpY2UgdGhlc2UgcXVhbGl0aWVzIGluc2lkZSBhbmQgb3V0c2lkZSBvZiB5b3VyIHdvcmtpbmcgZW52aXJvbm1lbnQuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBzZWUgbXlzZWxmIGFzIGEgZ29vZCB0ZWFtIHBsYXllciBhbmQgZW5jb3VyYWdlIG15IGZlbGxvdyB0ZWFtIG1lbWJlcnMuIFlvdSB3aWxsIG5vdCBhbHdheXMgaGF2ZSBhbGwgdGhlIGFuc3dlcnM7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhhdCBpcyB3aHkgSSB3YW50IHRvIGJlIHBhcnQgb2YgdGhlIHNvbHV0aW9uIGFuZCBicmFpbiBzdG9ybWluZyBmb3IgYmV0dGVyIGFsdGVybmF0aXZlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBob2JiaWVzIGluY2x1ZGUgaGlraW5nIGFuZCBsb25nIHdhbGtzIGFsb25nIG9uIHRoZSBiZWFjaC4gSSBhbHNvIGVuam95IGhvbWUgRElZJ3MgYW5kIHdvcmtpbmcgaW4gdGhlIGdhcmRlbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9naVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9zaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9