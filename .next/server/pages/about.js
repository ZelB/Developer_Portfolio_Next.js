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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
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

var _jsxFileName = "C:\\Users\\User\\Desktop\\Studies\\Zelda\\2021 HyperionDev\\5. Level 3\\Task 10 - Next.js I\\devPortfolio\\components\\Header.js";


/* contain a header component that the user can use to navigate to the different pages in your app.*/
 //Use Next.js Link API to add navigation 

 //import icons




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
        children: "div.jsx-952171879{background:black;text-align:center;}img.jsx-952171879{marginLeft:auto;marginRight:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCcUIsQUFHMEMsQUFJRCxnQkFDQyxDQUpDLGdCQU10QixFQUxBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29udGFpbiBhIGhlYWRlciBjb21wb25lbnQgdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRvIG5hdmlnYXRlIHRvIHRoZSBkaWZmZXJlbnQgcGFnZXMgaW4geW91ciBhcHAuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9Vc2UgTmV4dC5qcyBMaW5rIEFQSSB0byBhZGQgbmF2aWdhdGlvbiBcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuXHJcbi8vaW1wb3J0IGljb25zXHJcbmltcG9ydCB7IEdvSG9tZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBTaUFib3V0RG90TWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IHsgR3JQcm9qZWN0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xyXG5pbXBvcnQgeyBHckNvbnRhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcclxuXHJcblxyXG4vL2NyZWF0ZSBhIGN1c3RvbSBzdHlsZSBmb3IgdGhlIGhlYWRlciBhbmQgbmF2aWdhdGlvbiBiYXIgc3R5bGVkIHVzaW5nIHN0eWxlZC1qc3guXHJcbmNvbnN0IGxheW91dCA9IHtcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBwYWRkaW5nOiAyMCxcclxuICAgIHdpZHRoOiAnNDAwcHgnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDIwLFxyXG4gICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjREREJyxcclxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9jb2RpbmdCYWNrLmpwZycgYWx0PSdIZWFkZXIgaW1hZ2UnIHdpZHRoPSc3MCUnIGhlaWdodD0nMTEwcHgnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xheW91dH0+IDxHb0hvbWUgLz4gSE9NRTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gQUJPVVQgIDxTaUFib3V0RG90TWUgLz4gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xheW91dH0+IDxHclByb2plY3RzIC8+IFBST0pFQ1RTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT48R3JDb250YWN0IC8+IENPTlRBQ1QgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\Studies\\\\Zelda\\\\2021 HyperionDev\\\\5. Level 3\\\\Task 10 - Next.js I\\\\devPortfolio\\\\components\\\\Header.js */"
      }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "../static/codingBack.jpg",
        alt: "Header image",
        width: "70%",
        height: "110px",
        className: "jsx-952171879"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1230775905",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "1230775905",
        children: "div.jsx-1230775905{text-align:right;margin-right:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEcUIsQUFHMEMsaUJBQ0Msa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29udGFpbiBhIGhlYWRlciBjb21wb25lbnQgdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRvIG5hdmlnYXRlIHRvIHRoZSBkaWZmZXJlbnQgcGFnZXMgaW4geW91ciBhcHAuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9Vc2UgTmV4dC5qcyBMaW5rIEFQSSB0byBhZGQgbmF2aWdhdGlvbiBcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuXHJcbi8vaW1wb3J0IGljb25zXHJcbmltcG9ydCB7IEdvSG9tZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBTaUFib3V0RG90TWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IHsgR3JQcm9qZWN0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xyXG5pbXBvcnQgeyBHckNvbnRhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcclxuXHJcblxyXG4vL2NyZWF0ZSBhIGN1c3RvbSBzdHlsZSBmb3IgdGhlIGhlYWRlciBhbmQgbmF2aWdhdGlvbiBiYXIgc3R5bGVkIHVzaW5nIHN0eWxlZC1qc3guXHJcbmNvbnN0IGxheW91dCA9IHtcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBwYWRkaW5nOiAyMCxcclxuICAgIHdpZHRoOiAnNDAwcHgnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDIwLFxyXG4gICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjREREJyxcclxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9jb2RpbmdCYWNrLmpwZycgYWx0PSdIZWFkZXIgaW1hZ2UnIHdpZHRoPSc3MCUnIGhlaWdodD0nMTEwcHgnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xheW91dH0+IDxHb0hvbWUgLz4gSE9NRTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT4gQUJPVVQgIDxTaUFib3V0RG90TWUgLz4gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xheW91dH0+IDxHclByb2plY3RzIC8+IFBST0pFQ1RTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGF5b3V0fT48R3JDb250YWN0IC8+IENPTlRBQ1QgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\Studies\\\\Zelda\\\\2021 HyperionDev\\\\5. Level 3\\\\Task 10 - Next.js I\\\\devPortfolio\\\\components\\\\Header.js */"
      }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1230775905",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoHome"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 52
            }, undefined), " HOME"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [" ABOUT  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_5__["SiAboutDotMe"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 59
            }, undefined), " "]
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
          href: "/projects",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__["GrProjects"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 52
            }, undefined), " PROJECTS"]
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
          href: "/contact",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: layout,
            className: "jsx-1230775905",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__["GrContact"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 51
            }, undefined), " CONTACT "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\Studies\\Zelda\\2021 HyperionDev\\5. Level 3\\Task 10 - Next.js I\\devPortfolio\\pages\\about.js";


/* serve as an introduction to you as a developer –
your educational history, your work history, who you are and what
you’re passionate about.*/
 //import Layout Component contiaing layout and Navigation

 //import container and layout components from bootstrap react



 //import icons


 // Make custom CSS rules to style component

const layoutStyle = {
  margin: 10,
  padding: 10
};

const about = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2323395360",
      children: "h1.jsx-2323395360{text-shadow:3px 2px #DDD;font-family:'Train One',cursive;fontWeight:800;margin:20;text-indent:150px;}h2.jsx-2323395360{background:#DDD;text-align:center;padding:10px;}h4.jsx-2323395360{margin:10px;padding:10px;}a.jsx-2323395360,em.jsx-2323395360{color:gray;margin:10px;padding:7px;}p.jsx-2323395360{margin:15px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xccGFnZXNcXGFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCcUIsQUFHa0QsQUFRVCxBQU1KLEFBS0QsQUFNQyxXQUxBLENBTEMsQUFXQSxJQWpCSyxPQVlOLEVBcEJxQixBQWVyQyxBQVdBLFNBakJpQixDQVlqQixZQVhBLFVBVG1CLGVBQ0wsVUFDUSxrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxTdHVkaWVzXFxaZWxkYVxcMjAyMSBIeXBlcmlvbkRldlxcNS4gTGV2ZWwgM1xcVGFzayAxMCAtIE5leHQuanMgSVxcZGV2UG9ydGZvbGlvXFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzZXJ2ZSBhcyBhbiBpbnRyb2R1Y3Rpb24gdG8geW91IGFzIGEgZGV2ZWxvcGVyIOKAk1xyXG55b3VyIGVkdWNhdGlvbmFsIGhpc3RvcnksIHlvdXIgd29yayBoaXN0b3J5LCB3aG8geW91IGFyZSBhbmQgd2hhdFxyXG55b3XigJlyZSBwYXNzaW9uYXRlIGFib3V0LiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vL2ltcG9ydCBMYXlvdXQgQ29tcG9uZW50IGNvbnRpYWluZyBsYXlvdXQgYW5kIE5hdmlnYXRpb25cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcyc7XHJcblxyXG4vL2ltcG9ydCBjb250YWluZXIgYW5kIGxheW91dCBjb21wb25lbnRzIGZyb20gYm9vdHN0cmFwIHJlYWN0XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcblxyXG4vL2ltcG9ydCBpY29uc1xyXG5pbXBvcnQgeyBHaUJsYWNrQm9vayB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xyXG5pbXBvcnQgeyBHaUZpcmV3b3JrUm9ja2V0IH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XHJcblxyXG4vLyBNYWtlIGN1c3RvbSBDU1MgcnVsZXMgdG8gc3R5bGUgY29tcG9uZW50XHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIHBhZGRpbmc6IDEwXHJcbn1cclxuXHJcbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCAjREREO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RyYWluIE9uZScsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYSwgZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxoMT5BQk9VVCBNRTwvaDE+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aDI+IDxHaUJsYWNrQm9vayAvPiBFZHVjYXRpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxoND5UZXJ0aWFyeSBFZHVjYXRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtsYXlvdXRTdHlsZX0+RGlwbG9tYSBpbiBJbmZvcm1hdGlvbiBUZWNobm9sb2dpZXMgPGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cudW5pc2EuYWMuemEvc2l0ZXMvY29ycG9yYXRlL2RlZmF1bHQvUmVnaXN0ZXItdG8tc3R1ZHktdGhyb3VnaC1VbmlzYS9VbmRlcmdyYWR1YXRlLSYtaG9ub3Vycy1xdWFsaWZpY2F0aW9ucy9GaW5kLXlvdXItcXVhbGlmaWNhdGlvbi0mLWNob29zZS15b3VyLW1vZHVsZXMvQWxsLXF1YWxpZmljYXRpb25zL0RpcGxvbWEtaW4tSW5mb3JtYXRpb24tVGVjaG5vbG9neS1JbmZvcm1hdGlvbi1UZWNobm9sb2d5LSg5ODgwNi0lRTIlODAlOTMtSVRFKSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVU5JU0EgfCAyMDE3IHRvIDIwMjEgKGNsaWNrIG1lKTwvYT48L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtsYXlvdXRTdHlsZX0+RnVsbCBTdGFjayBEZXZlbG9wZXIgQ291cnNlICA8ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5oeXBlcmlvbmRldi5jb20vYm9vdGNhbXBzL3dlYl9kZXZlbG9wbWVudC8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh5cGVyaW9uRGV2IHwgMjAyMSAoY2xpY2sgbWUpPC9hPjwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xheW91dFN0eWxlfT5OUUYgNSBCb29ra2VlcGluZyBDb3Vyc2UgQ2VydGlmaWNhdGUgIDxlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlVOSVNBIHwgMjAxNTwvYT48L2VtPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk9uIFRoZSBKb2IgVHJhaW5pbmcgYW5kIFNob3J0IENvdXJzZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xheW91dFN0eWxlfT5MZWFkIEF2aWF0aW9uIEF1ZGl0b3JzIENvdXJzZSA8ZW0+Q3JhbmZpZWxkIEF2aWF0aW9uIFRyYWluaW5nIHwgMjAyMDwvZW0+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGF5b3V0U3R5bGV9PkRhbmdlcm91cyBHb29kcyA8ZW0+VGhlIEFjYWRlbXkgb2YgQXZpYXRpb258IDIwMjA8L2VtPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xheW91dFN0eWxlfT5QaXN0b24gRW5naW5lIEdlbmVyYWwgKENhdCBDKSA8ZW0+RGViZWxhIFRyYWluaW5nIGFuZCBNYW5hZ2VtZW50IHwgMjAxNzwvZW0+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGF5b3V0U3R5bGV9PkFpcmNyYWZ0IE1haW50ZW5hbmNlIFBsYW5uaW5nIDxlbT5DcmFuZmllbGQgQXZpYXRpb24gVHJhaW5pbmcgfCAyMDE2PC9lbT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiA8R2lGaXJld29ya1JvY2tldCAvPiAgV29yayBIaXN0b3J5PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkV4ZWN1SmV0IEF2aWF0aW9uIChQdHkpIEx0ZCB8IEx1eEF2aWF0aW9uIEdyb3VwPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk1haW50ZW5hbmNlIFBsYW5uZXIgLSBPcGVyYXRpb25zIHwgPGVtPkp1bHkgMjAxOSB0byBEZWMgMjAyMDwvZW0+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFpcmNyYWZ0IE1haW50ZW5hbmNlIFBsYW5uaW5nIGZvciB2YXJpb3VzIG1ha2UgYW5kIG1vZGVscyBhaXJjcmFmdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWlyd29ydGhpbmVzcyBtb25pdG9yaW5nIGFuZCBBaXJjcmFmdCBNYW5hZ2VtZW50IHNlcnZpY2VzIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWFpbnRhaW5pbmcgYSBkYXRhYmFzZSB3aXRoIGFpcmNyYWZ0IGFpcndvcnRoaW5lc3MgZG9jdW1lbnRhdGlvbi4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb25pdG9yaW5nIHB1YmxpY2F0aW9uczogQU1NLCBBROKAmXMgU0LigJlzLCBBRk3igJlzLCBNTUVM4oCZcy5Mb2dib29rIHJlc2VhcmNoIGZvciBhcHBsaWNhYmlsaXR5IDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWlyY3JhZnQgQyBvZiBBIFJlbmV3YWxzIHdpdGggdGhlIFNBQ0FBIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QnVpbHQgYSBkYXRhYmFzZSBhbmQgdHJhY2tpbmcgYWxsIGFpcmNyYWZ0IEFGTSByZXZpc2lvbiBzdGF0dXMuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXNzaXN0aW5nIHdpdGggYnVpbGRpbmcgYWlyY3JhZnQgQU1QcyA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFPQyBhaXJ3b3J0aGluZXNzIG92ZXJzaWdodCDigJMgcGFydCAxMzUgYW5kIHBhcnQgNDMgcmVndWxhdGlvbnMgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DREMgQXZpYXRpb24gKFB0eSkgTHRkIHwgQ2lycnVzIEFmcmljYTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5NYWludGVuYW5jZSBQbGFubmVyIGFuZCBBZG1pbmlzdHJhdG9yIHwgPGVtPkphbnVhcnkgMjAxOCB0byBKdW5lIDIwMTk8L2VtPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BaXJjcmFmdCBtYWludGVuYW5jZSBwbGFubmVyIGZvciBlbnRpcmUgZmxlZXQgaW5jbHVkaW5nIGZsaWdodCBzY2hvb2wgYWlyY3JhZnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFpcmNyYWZ0IG1haW50ZW5hbmNlIHN0YXR1cyB0cmFja2luZyBhbmQgQUQgLyBTQiBhcHBsaWNhYmlsaXR5IHJlc2VhcmNoLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXBpbGluZyBhaXJjcmFmdCBsb2dib29rcyBmb3Igc2lnbi1vdXRzIGFuZCByZWxlYXNlIHRvIHNlcnZpY2VzIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWFuYWdpbmcgYWlyY3JhZnQgam9icywgd29yayBwYWNrcywgcGFydHMgYWxsb2NhdGVkLCBTdWIgQ29udHJhY3RvcnMgYW5kIENSTUHigJlzLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXBpbGluZyBlc3RpbWF0ZXMgYW5kIGNsaWVudCBtYWludGVuYW5jZSBpbnF1aXJpZXMuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RWZmZWN0aXZlIG1hbmFnaW5nIG9mIEFpcmNyYWZ0cywgQWlyY3JhZnQgZG9jdW1lbnRhdGlvbiwgU3BhcmUgcGFydHMsIEFpcmNyYWZ0IEhvdXJzLCBBaXJjcmFmdCBSb3V0cywgTG9kZ2UgY29tbXVuaWNhdGlvbiBhbmQgUnVud2F5IGFzc2Vzc21lbnRzIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWxsIG1haW50ZW5hbmNlIGRpdmlzaW9uIGludm9pY2luZyBhbmQgRGViaXQgQ29udHJvbC4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IYW5kbGVkIGFsbCBGb3JlaWduIGFuZCBTQSBDQUEgYXVkaXRzIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+QXZkZXggKFB0eSkgTHRkPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJvb2trZWVwZXIgYW5kIE1haW50ZW5hbmNlIEFkbWluaXN0cmF0b3IgfCA8ZW0+TWFyY2ggMjAxNSB0byBKYW51YXJ5IDIwMTg8L2VtPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZG1pbmlzdHJhdG9yIG9uIHRoZSBBTVAgT25saW5lIGFpcmNyYWZ0IG1haW50ZW5hbmNlIHRyYWNraW5nIHN5c3RlbS4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DbGllbnQgYW5kIHNvZnR3YXJlIHVzZXJzIHN1cHBvcnQgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbXBsZW1lbnRlZCBhbmQgbWFpbnRhaW5lZCBhIHRyYWNraW5nIHN5c3RlbSB3aGljaCBzdGF5cyBvbiB0b3Agb2YgdGhlIGxhdGVzdCBNYW51YWwgUmV2aXNpb25zIGFuZCBQdWJsaWNhdGlvbnMgb2YgZGlmZmVyZW50IGFpcmNyYWZ0LyBlbmdpbmUgbWFrZSBhbmQgbW9kZWxzLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJvdXRpbmUgbW9uaXRvcmluZyBBROKAmXMgYW5kIFNC4oCZcyBhbmQgYWRkaW5nIC8gYnVpbGRpbmcgaXRlbXMgaW50byBBaXJjcmFmdCBtYWludGVuYW5jZSBTY2hlZHVsZXMuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QnVpbGRpbmcgQWlyY3JhZnQgTWFpbnRlbmFuY2UgVHJhY2tpbmcgU2NoZWR1bGVzIHdoaWNoIGFyZSB1c2VkIHRvIHRyYWNrIGFpcmNyYWZ0IG1haW50ZW5hbmNlLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlcG9ydGluZyBlcnJvcnMg4oCcQnVnc+KAnSBpbiB0aGUgd2Vic2l0ZSBhbmQgdGVzdGluZyBhbnkgY2hhbmdlcyBtYWRlLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSBDb21wYW554oCZcyBCb29ra2VlcGVyLiBBbGwgYWNjb3VudHMgaW5xdWlyaWVzIC8gSW52b2ljaW5nIC8gU3RhdGVtZW50cy4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NZWV0aW5nIHdpdGggY2xpZW50cyBhbmQgcHJvdmlkaW5nIHNvZnR3YXJlIHRyYWluaW5nLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\Studies\\\\Zelda\\\\2021 HyperionDev\\\\5. Level 3\\\\Task 10 - Next.js I\\\\devPortfolio\\\\pages\\\\about.js */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "jsx-2323395360",
      children: "ABOUT ME"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
      className: "jsx-2323395360"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "justify-content-md-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          xs: 12,
          md: 6,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "jsx-2323395360",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_7__["GiBlackBook"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, undefined), " Education"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 24
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "jsx-2323395360",
            children: "Tertiary Education"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 24
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-2323395360",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              style: layoutStyle,
              className: "jsx-2323395360",
              children: ["Diploma in Information Technologies ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                className: "jsx-2323395360",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://www.unisa.ac.za/sites/corporate/default/Register-to-study-through-Unisa/Undergraduate-&-honours-qualifications/Find-your-qualification-&-choose-your-modules/All-qualifications/Diploma-in-Information-Technology-Information-Technology-(98806-%E2%80%93-ITE)",
                  className: "jsx-2323395360",
                  children: "UNISA | 2017 to 2021 (click me)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 32
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 88
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 28
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              style: layoutStyle,
              className: "jsx-2323395360",
              children: ["Full Stack Developer Course  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                className: "jsx-2323395360",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://www.hyperiondev.com/bootcamps/web_development/",
                  className: "jsx-2323395360",
                  children: "HyperionDev | 2021 (click me)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 32
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 81
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 28
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              style: layoutStyle,
              className: "jsx-2323395360",
              children: ["NQF 5 Bookkeeping Course Certificate  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                className: "jsx-2323395360",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-2323395360",
                  children: "UNISA | 2015"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 32
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 90
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 28
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 24
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-2323395360"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 24
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "jsx-2323395360",
            children: "On The Job Training and Short Courses"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-2323395360",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              style: layoutStyle,
              className: "jsx-2323395360",
              children: ["Lead Aviation Auditors Course ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                className: "jsx-2323395360",
                children: "Cranfield Aviation Training | 2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 83
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              style: layoutStyle,
              className: "jsx-2323395360",
              children: ["Dangerous Goods ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                className: "jsx-2323395360",
                children: "The Academy of Aviation| 2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 69
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              style: layoutStyle,
              className: "jsx-2323395360",
              children: ["Piston Engine General (Cat C) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                className: "jsx-2323395360",
                children: "Debela Training and Management | 2017"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 83
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              style: layoutStyle,
              className: "jsx-2323395360",
              children: ["Aircraft Maintenance Planning ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                className: "jsx-2323395360",
                children: "Cranfield Aviation Training | 2016"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 83
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          xs: 12,
          md: 6,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "jsx-2323395360",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_7__["GiFireworkRocket"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 30
            }, undefined), "  Work History"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "jsx-2323395360",
            children: "ExecuJet Aviation (Pty) Ltd | LuxAviation Group"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "jsx-2323395360",
            children: ["Maintenance Planner - Operations | ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
              className: "jsx-2323395360",
              children: "July 2019 to Dec 2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 64
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-2323395360",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Aircraft Maintenance Planning for various make and models aircraft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Airworthiness monitoring and Aircraft Management services "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Maintaining a database with aircraft airworthiness documentation. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Monitoring publications: AMM, AD\u2019s SB\u2019s, AFM\u2019s, MMEL\u2019s.Logbook research for applicability "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Aircraft C of A Renewals with the SACAA "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Built a database and tracking all aircraft AFM revision status. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Assisting with building aircraft AMPs "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "AOC airworthiness oversight \u2013 part 135 and part 43 regulations "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-2323395360"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "jsx-2323395360",
            children: "CDC Aviation (Pty) Ltd | Cirrus Africa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "jsx-2323395360",
            children: ["Maintenance Planner and Administrator | ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
              className: "jsx-2323395360",
              children: "January 2018 to June 2019"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 69
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-2323395360",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Aircraft maintenance planner for entire fleet including flight school aircraft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Aircraft maintenance status tracking and AD / SB applicability research. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Compiling aircraft logbooks for sign-outs and release to services "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Managing aircraft jobs, work packs, parts allocated, Sub Contractors and CRMA\u2019s. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Compiling estimates and client maintenance inquiries. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Effective managing of Aircrafts, Aircraft documentation, Spare parts, Aircraft Hours, Aircraft Routs, Lodge communication and Runway assessments "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "All maintenance division invoicing and Debit Control. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Handled all Foreign and SA CAA audits "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "jsx-2323395360",
            children: "Avdex (Pty) Ltd"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "jsx-2323395360",
            children: ["Bookkeeper and Maintenance Administrator | ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
              className: "jsx-2323395360",
              children: "March 2015 to January 2018"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 72
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-2323395360",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Administrator on the AMP Online aircraft maintenance tracking system. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Client and software users support "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Implemented and maintained a tracking system which stays on top of the latest Manual Revisions and Publications of different aircraft/ engine make and models. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Routine monitoring AD\u2019s and SB\u2019s and adding / building items into Aircraft maintenance Schedules. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Building Aircraft Maintenance Tracking Schedules which are used to track aircraft maintenance. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Reporting errors \u201CBugs\u201D in the website and testing any changes made. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "The Company\u2019s Bookkeeper. All accounts inquiries / Invoicing / Statements. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-2323395360",
              children: "Meeting with clients and providing software training. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (about);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9naVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2dvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZ3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9zaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJsYXlvdXQiLCJtYXJnaW4iLCJwYWRkaW5nIiwid2lkdGgiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJMZWZ0IiwiYm9yZGVyQm90dG9tIiwiSGVhZGVyIiwibGF5b3V0U3R5bGUiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiYWJvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXlISCxDQTFIRDs7QUE0SGVJLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDcEpBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hYm91dC5qc1wiKTtcbiIsIi8qIGNvbnRhaW4gYSBoZWFkZXIgY29tcG9uZW50IHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0byBuYXZpZ2F0ZSB0byB0aGUgZGlmZmVyZW50IHBhZ2VzIGluIHlvdXIgYXBwLiovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vVXNlIE5leHQuanMgTGluayBBUEkgdG8gYWRkIG5hdmlnYXRpb24gXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XHJcblxyXG4vL2ltcG9ydCBpY29uc1xyXG5pbXBvcnQgeyBHb0hvbWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcclxuaW1wb3J0IHsgU2lBYm91dERvdE1lIH0gZnJvbSBcInJlYWN0LWljb25zL3NpXCI7XHJcbmltcG9ydCB7IEdyUHJvamVjdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcclxuaW1wb3J0IHsgR3JDb250YWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XHJcblxyXG5cclxuLy9jcmVhdGUgYSBjdXN0b20gc3R5bGUgZm9yIHRoZSBoZWFkZXIgYW5kIG5hdmlnYXRpb24gYmFyIHN0eWxlZCB1c2luZyBzdHlsZWQtanN4LlxyXG5jb25zdCBsYXlvdXQgPSB7XHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgcGFkZGluZzogMjAsXHJcbiAgICB3aWR0aDogJzQwMHB4JyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgI0RERCcsXHJcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvY29kaW5nQmFjay5qcGcnIGFsdD0nSGVhZGVyIGltYWdlJyB3aWR0aD0nNzAlJyBoZWlnaHQ9JzExMHB4JyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PiA8R29Ib21lIC8+IEhPTUU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xheW91dH0+IEFCT1VUICA8U2lBYm91dERvdE1lIC8+IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcHJvamVjdHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsYXlvdXR9PiA8R3JQcm9qZWN0cyAvPiBQUk9KRUNUUzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xheW91dH0+PEdyQ29udGFjdCAvPiBDT05UQUNUIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9pbXBvcnQgdGhlIEhlYWRlciBjb21wb25lbnQgY29udGFpbmluZyBuYXZpZ2F0aW9uXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIuanMnO1xyXG5cclxuLy9MaW5rIGJvb3RzdHJhcCB0byB1c2UgaW4gTmF2aWdhdGlvbiBhbmQgbGF5b3V0c1xyXG5cclxuXHJcbi8vaW1wb3J0IHRoZSA8SGVhZD4gdmlhIG5leHQuanMgQVBJXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbi8vIE1ha2UgY3VzdG9tIENTUyBydWxlcyB0byBzdHlsZSBjb21wb25lbnRcclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgICBtYXJnaW46IDMwLFxyXG4gICAgcGFkZGluZzogMjBcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC42LjAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUIwdlA1eG1BVHcxK0s5S1JRalFFUkp2VHVtUVcwblBFenZGNkwvWjZucm9uSjNvVU9GVUZwQ2pFVVFvdXEyK2xcIlxyXG4gICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRyYWluK09uZSZkaXNwbGF5PXN3YXBcIiBcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiIsIi8qIHNlcnZlIGFzIGFuIGludHJvZHVjdGlvbiB0byB5b3UgYXMgYSBkZXZlbG9wZXIg4oCTXHJcbnlvdXIgZWR1Y2F0aW9uYWwgaGlzdG9yeSwgeW91ciB3b3JrIGhpc3RvcnksIHdobyB5b3UgYXJlIGFuZCB3aGF0XHJcbnlvdeKAmXJlIHBhc3Npb25hdGUgYWJvdXQuKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vaW1wb3J0IExheW91dCBDb21wb25lbnQgY29udGlhaW5nIGxheW91dCBhbmQgTmF2aWdhdGlvblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuXHJcbi8vaW1wb3J0IGNvbnRhaW5lciBhbmQgbGF5b3V0IGNvbXBvbmVudHMgZnJvbSBib290c3RyYXAgcmVhY3RcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuXHJcbi8vaW1wb3J0IGljb25zXHJcbmltcG9ydCB7IEdpQmxhY2tCb29rIH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XHJcbmltcG9ydCB7IEdpRmlyZXdvcmtSb2NrZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcclxuXHJcbi8vIE1ha2UgY3VzdG9tIENTUyBydWxlcyB0byBzdHlsZSBjb21wb25lbnRcclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgICBtYXJnaW46IDEwLFxyXG4gICAgcGFkZGluZzogMTBcclxufVxyXG5cclxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggMnB4ICNEREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVHJhaW4gT25lJywgY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0RERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhLCBlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGgxPkFCT1VUIE1FPC9oMT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxoMj4gPEdpQmxhY2tCb29rIC8+IEVkdWNhdGlvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRlcnRpYXJ5IEVkdWNhdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xheW91dFN0eWxlfT5EaXBsb21hIGluIEluZm9ybWF0aW9uIFRlY2hub2xvZ2llcyA8ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy51bmlzYS5hYy56YS9zaXRlcy9jb3Jwb3JhdGUvZGVmYXVsdC9SZWdpc3Rlci10by1zdHVkeS10aHJvdWdoLVVuaXNhL1VuZGVyZ3JhZHVhdGUtJi1ob25vdXJzLXF1YWxpZmljYXRpb25zL0ZpbmQteW91ci1xdWFsaWZpY2F0aW9uLSYtY2hvb3NlLXlvdXItbW9kdWxlcy9BbGwtcXVhbGlmaWNhdGlvbnMvRGlwbG9tYS1pbi1JbmZvcm1hdGlvbi1UZWNobm9sb2d5LUluZm9ybWF0aW9uLVRlY2hub2xvZ3ktKDk4ODA2LSVFMiU4MCU5My1JVEUpJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVTklTQSB8IDIwMTcgdG8gMjAyMSAoY2xpY2sgbWUpPC9hPjwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xheW91dFN0eWxlfT5GdWxsIFN0YWNrIERldmVsb3BlciBDb3Vyc2UgIDxlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmh5cGVyaW9uZGV2LmNvbS9ib290Y2FtcHMvd2ViX2RldmVsb3BtZW50Lyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSHlwZXJpb25EZXYgfCAyMDIxIChjbGljayBtZSk8L2E+PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGF5b3V0U3R5bGV9Pk5RRiA1IEJvb2trZWVwaW5nIENvdXJzZSBDZXJ0aWZpY2F0ZSAgPGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VU5JU0EgfCAyMDE1PC9hPjwvZW0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+T24gVGhlIEpvYiBUcmFpbmluZyBhbmQgU2hvcnQgQ291cnNlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGF5b3V0U3R5bGV9PkxlYWQgQXZpYXRpb24gQXVkaXRvcnMgQ291cnNlIDxlbT5DcmFuZmllbGQgQXZpYXRpb24gVHJhaW5pbmcgfCAyMDIwPC9lbT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtsYXlvdXRTdHlsZX0+RGFuZ2Vyb3VzIEdvb2RzIDxlbT5UaGUgQWNhZGVteSBvZiBBdmlhdGlvbnwgMjAyMDwvZW0+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGF5b3V0U3R5bGV9PlBpc3RvbiBFbmdpbmUgR2VuZXJhbCAoQ2F0IEMpIDxlbT5EZWJlbGEgVHJhaW5pbmcgYW5kIE1hbmFnZW1lbnQgfCAyMDE3PC9lbT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtsYXlvdXRTdHlsZX0+QWlyY3JhZnQgTWFpbnRlbmFuY2UgUGxhbm5pbmcgPGVtPkNyYW5maWVsZCBBdmlhdGlvbiBUcmFpbmluZyB8IDIwMTY8L2VtPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IDxHaUZpcmV3b3JrUm9ja2V0IC8+ICBXb3JrIEhpc3Rvcnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+RXhlY3VKZXQgQXZpYXRpb24gKFB0eSkgTHRkIHwgTHV4QXZpYXRpb24gR3JvdXA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+TWFpbnRlbmFuY2UgUGxhbm5lciAtIE9wZXJhdGlvbnMgfCA8ZW0+SnVseSAyMDE5IHRvIERlYyAyMDIwPC9lbT48L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWlyY3JhZnQgTWFpbnRlbmFuY2UgUGxhbm5pbmcgZm9yIHZhcmlvdXMgbWFrZSBhbmQgbW9kZWxzIGFpcmNyYWZ0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BaXJ3b3J0aGluZXNzIG1vbml0b3JpbmcgYW5kIEFpcmNyYWZ0IE1hbmFnZW1lbnQgc2VydmljZXMgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYWludGFpbmluZyBhIGRhdGFiYXNlIHdpdGggYWlyY3JhZnQgYWlyd29ydGhpbmVzcyBkb2N1bWVudGF0aW9uLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1vbml0b3JpbmcgcHVibGljYXRpb25zOiBBTU0sIEFE4oCZcyBTQuKAmXMsIEFGTeKAmXMsIE1NRUzigJlzLkxvZ2Jvb2sgcmVzZWFyY2ggZm9yIGFwcGxpY2FiaWxpdHkgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BaXJjcmFmdCBDIG9mIEEgUmVuZXdhbHMgd2l0aCB0aGUgU0FDQUEgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsdCBhIGRhdGFiYXNlIGFuZCB0cmFja2luZyBhbGwgYWlyY3JhZnQgQUZNIHJldmlzaW9uIHN0YXR1cy4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Bc3Npc3Rpbmcgd2l0aCBidWlsZGluZyBhaXJjcmFmdCBBTVBzIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QU9DIGFpcndvcnRoaW5lc3Mgb3ZlcnNpZ2h0IOKAkyBwYXJ0IDEzNSBhbmQgcGFydCA0MyByZWd1bGF0aW9ucyA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNEQyBBdmlhdGlvbiAoUHR5KSBMdGQgfCBDaXJydXMgQWZyaWNhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk1haW50ZW5hbmNlIFBsYW5uZXIgYW5kIEFkbWluaXN0cmF0b3IgfCA8ZW0+SmFudWFyeSAyMDE4IHRvIEp1bmUgMjAxOTwvZW0+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFpcmNyYWZ0IG1haW50ZW5hbmNlIHBsYW5uZXIgZm9yIGVudGlyZSBmbGVldCBpbmNsdWRpbmcgZmxpZ2h0IHNjaG9vbCBhaXJjcmFmdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWlyY3JhZnQgbWFpbnRlbmFuY2Ugc3RhdHVzIHRyYWNraW5nIGFuZCBBRCAvIFNCIGFwcGxpY2FiaWxpdHkgcmVzZWFyY2guIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcGlsaW5nIGFpcmNyYWZ0IGxvZ2Jvb2tzIGZvciBzaWduLW91dHMgYW5kIHJlbGVhc2UgdG8gc2VydmljZXMgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYW5hZ2luZyBhaXJjcmFmdCBqb2JzLCB3b3JrIHBhY2tzLCBwYXJ0cyBhbGxvY2F0ZWQsIFN1YiBDb250cmFjdG9ycyBhbmQgQ1JNQeKAmXMuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcGlsaW5nIGVzdGltYXRlcyBhbmQgY2xpZW50IG1haW50ZW5hbmNlIGlucXVpcmllcy4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FZmZlY3RpdmUgbWFuYWdpbmcgb2YgQWlyY3JhZnRzLCBBaXJjcmFmdCBkb2N1bWVudGF0aW9uLCBTcGFyZSBwYXJ0cywgQWlyY3JhZnQgSG91cnMsIEFpcmNyYWZ0IFJvdXRzLCBMb2RnZSBjb21tdW5pY2F0aW9uIGFuZCBSdW53YXkgYXNzZXNzbWVudHMgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbGwgbWFpbnRlbmFuY2UgZGl2aXNpb24gaW52b2ljaW5nIGFuZCBEZWJpdCBDb250cm9sLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhhbmRsZWQgYWxsIEZvcmVpZ24gYW5kIFNBIENBQSBhdWRpdHMgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5BdmRleCAoUHR5KSBMdGQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+Qm9va2tlZXBlciBhbmQgTWFpbnRlbmFuY2UgQWRtaW5pc3RyYXRvciB8IDxlbT5NYXJjaCAyMDE1IHRvIEphbnVhcnkgMjAxODwvZW0+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkbWluaXN0cmF0b3Igb24gdGhlIEFNUCBPbmxpbmUgYWlyY3JhZnQgbWFpbnRlbmFuY2UgdHJhY2tpbmcgc3lzdGVtLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNsaWVudCBhbmQgc29mdHdhcmUgdXNlcnMgc3VwcG9ydCA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkltcGxlbWVudGVkIGFuZCBtYWludGFpbmVkIGEgdHJhY2tpbmcgc3lzdGVtIHdoaWNoIHN0YXlzIG9uIHRvcCBvZiB0aGUgbGF0ZXN0IE1hbnVhbCBSZXZpc2lvbnMgYW5kIFB1YmxpY2F0aW9ucyBvZiBkaWZmZXJlbnQgYWlyY3JhZnQvIGVuZ2luZSBtYWtlIGFuZCBtb2RlbHMuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Um91dGluZSBtb25pdG9yaW5nIEFE4oCZcyBhbmQgU0LigJlzIGFuZCBhZGRpbmcgLyBidWlsZGluZyBpdGVtcyBpbnRvIEFpcmNyYWZ0IG1haW50ZW5hbmNlIFNjaGVkdWxlcy4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsZGluZyBBaXJjcmFmdCBNYWludGVuYW5jZSBUcmFja2luZyBTY2hlZHVsZXMgd2hpY2ggYXJlIHVzZWQgdG8gdHJhY2sgYWlyY3JhZnQgbWFpbnRlbmFuY2UuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmVwb3J0aW5nIGVycm9ycyDigJxCdWdz4oCdIGluIHRoZSB3ZWJzaXRlIGFuZCB0ZXN0aW5nIGFueSBjaGFuZ2VzIG1hZGUuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGhlIENvbXBhbnnigJlzIEJvb2trZWVwZXIuIEFsbCBhY2NvdW50cyBpbnF1aXJpZXMgLyBJbnZvaWNpbmcgLyBTdGF0ZW1lbnRzLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1lZXRpbmcgd2l0aCBjbGllbnRzIGFuZCBwcm92aWRpbmcgc29mdHdhcmUgdHJhaW5pbmcuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dFxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvUm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2dpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2dvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2dyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3NpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=