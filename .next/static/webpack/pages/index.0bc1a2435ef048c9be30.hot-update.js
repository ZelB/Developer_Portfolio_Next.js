webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/dom-helpers/esm/camelize.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/camelize.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return camelize; });
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/esm/divWithClassName.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/esm/CardContext.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/esm/CardImg.js");









var DivStyledAsH5 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h5');
var DivStyledAsH6 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h6');
var CardBody = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-body');
var CardTitle = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-title', {
  Component: DivStyledAsH5
});
var CardSubtitle = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
var CardLink = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-link', {
  Component: 'a'
});
var CardText = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-text', {
  Component: 'p'
});
var CardHeader = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-header');
var CardFooter = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-footer');
var CardImgOverlay = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-img-overlay');
var defaultProps = {
  body: false
};
var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card');
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CardContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: cardContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ?
  /*#__PURE__*/
  // @ts-ignore
  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg__WEBPACK_IMPORTED_MODULE_8__["default"];
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Text = CardText;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.ImgOverlay = CardImgOverlay;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
context.displayName = 'CardContext';
/* harmony default export */ __webpack_exports__["default"] = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var defaultProps = {
  variant: null
};
var CardImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card-img');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CardImg);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/createWithBsPrefix.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWithBsPrefix; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/camelize */ "./node_modules/dom-helpers/esm/camelize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");







var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + Object(dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__["default"])(str).slice(1);
};

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      Component = _ref.Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component || 'div' : _ref2$as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["className", "bsPrefix", "as"]);

    var resolvedPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, prefix);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (className) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");


var _jsxFileName = "C:\\Users\\User\\Desktop\\Studies\\Zelda\\2021 HyperionDev\\5. Level 3\\Task 10 - Next.js I\\devPortfolio\\pages\\index.js",
    _this = undefined;



/*Home Page to give table of content of site and navigation */
 //import Layout Component contiaing layout and Navigation

 //import container and layout components from bootstrap react







var index = function index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2356422405",
      children: "h1.jsx-2356422405{text-shadow:3px 2px #DDD;font-family:'Train One',cursive;fontWeight:800;margin:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcU3R1ZGllc1xcWmVsZGFcXDIwMjEgSHlwZXJpb25EZXZcXDUuIExldmVsIDNcXFRhc2sgMTAgLSBOZXh0LmpzIElcXGRldlBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CcUIsQUFHa0QseUJBQ1EsZ0NBQ2xCLGVBQ0wsVUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXFN0dWRpZXNcXFplbGRhXFwyMDIxIEh5cGVyaW9uRGV2XFw1LiBMZXZlbCAzXFxUYXNrIDEwIC0gTmV4dC5qcyBJXFxkZXZQb3J0Zm9saW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qSG9tZSBQYWdlIHRvIGdpdmUgdGFibGUgb2YgY29udGVudCBvZiBzaXRlIGFuZCBuYXZpZ2F0aW9uICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vaW1wb3J0IExheW91dCBDb21wb25lbnQgY29udGlhaW5nIGxheW91dCBhbmQgTmF2aWdhdGlvblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuXHJcbi8vaW1wb3J0IGNvbnRhaW5lciBhbmQgbGF5b3V0IGNvbXBvbmVudHMgZnJvbSBib290c3RyYXAgcmVhY3RcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAycHggI0RERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUcmFpbiBPbmUnLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGgxPkhPTUUgUEFHRTwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1lZXQgTWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScuLi9zdGF0aWMvcHJvZmlsZUltZy5qcGcnIGFsdD1cInByb2ZpbGUgaW1hZ2VcIiB3aWR0aD0nNDAlJyByb3VuZGVkQ2lyY2xlICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzE4cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPVwiJy4uL3N0YXRpYy9jb2RpbmdIZWFkLmpwZydcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5DYXJkIFRpdGxlPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtPkNyYXMganVzdG8gb2RpbzwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5EYXBpYnVzIGFjIGZhY2lsaXNpcyBpbjwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5WZXN0aWJ1bHVtIGF0IGVyb3M8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTGluayBocmVmPVwiI1wiPkNhcmQgTGluazwvQ2FyZC5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkxpbmsgaHJlZj1cIiNcIj5Bbm90aGVyIExpbms8L0NhcmQuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\Studies\\\\Zelda\\\\2021 HyperionDev\\\\5. Level 3\\\\Task 10 - Next.js I\\\\devPortfolio\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "jsx-2356422405",
      children: "HOME PAGE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "justify-content-md-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
          xs: 12,
          md: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "jsx-2356422405",
            children: "Meet Me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
            src: "../static/profileImg.jpg",
            alt: "profile image",
            width: "40%",
            roundedCircle: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
          xs: 12,
          md: 9,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
            style: {
              width: '18rem'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Img, {
              variant: "top",
              src: "'../static/codingHead.jpg'"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Title, {
                children: "Card Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Text, {
                children: "Some quick example text to build on the card title and make up the bulk of the card's content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListGroup, {
              className: "list-group-flush",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListGroupItem, {
                children: "Cras justo odio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListGroupItem, {
                children: "Dapibus ac facilisis in"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListGroupItem, {
                children: "Vestibulum at eros"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Link, {
                href: "#",
                children: "Card Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Link, {
                href: "#",
                children: "Another Link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9jYW1lbGl6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0NhcmRJbWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL2NyZWF0ZVdpdGhCc1ByZWZpeC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vZGl2V2l0aENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDMEM7QUFDaEU7QUFDRztBQUNjO0FBQ0M7QUFDSjtBQUNWO0FBQ1I7QUFDaEMsb0JBQW9CLGlFQUFnQjtBQUNwQyxvQkFBb0IsaUVBQWdCO0FBQ3BDLGVBQWUsbUVBQWtCO0FBQ2pDLGdCQUFnQixtRUFBa0I7QUFDbEM7QUFDQSxDQUFDO0FBQ0QsbUJBQW1CLG1FQUFrQjtBQUNyQztBQUNBLENBQUM7QUFDRCxlQUFlLG1FQUFrQjtBQUNqQztBQUNBLENBQUM7QUFDRCxlQUFlLG1FQUFrQjtBQUNqQztBQUNBLENBQUM7QUFDRCxpQkFBaUIsbUVBQWtCO0FBQ25DLGlCQUFpQixtRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBbURILENBcEREOztBQXNEZUQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGJjMWEyNDM1ZWYwNDhjOWJlMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBySHlwaGVuID0gLy0oLikvZztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uockh5cGhlbiwgZnVuY3Rpb24gKF8sIGNocikge1xuICAgIHJldHVybiBjaHIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGNyZWF0ZVdpdGhCc1ByZWZpeCBmcm9tICcuL2NyZWF0ZVdpdGhCc1ByZWZpeCc7XG5pbXBvcnQgZGl2V2l0aENsYXNzTmFtZSBmcm9tICcuL2RpdldpdGhDbGFzc05hbWUnO1xuaW1wb3J0IENhcmRDb250ZXh0IGZyb20gJy4vQ2FyZENvbnRleHQnO1xuaW1wb3J0IENhcmRJbWcgZnJvbSAnLi9DYXJkSW1nJztcbnZhciBEaXZTdHlsZWRBc0g1ID0gZGl2V2l0aENsYXNzTmFtZSgnaDUnKTtcbnZhciBEaXZTdHlsZWRBc0g2ID0gZGl2V2l0aENsYXNzTmFtZSgnaDYnKTtcbnZhciBDYXJkQm9keSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1ib2R5Jyk7XG52YXIgQ2FyZFRpdGxlID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLXRpdGxlJywge1xuICBDb21wb25lbnQ6IERpdlN0eWxlZEFzSDVcbn0pO1xudmFyIENhcmRTdWJ0aXRsZSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1zdWJ0aXRsZScsIHtcbiAgQ29tcG9uZW50OiBEaXZTdHlsZWRBc0g2XG59KTtcbnZhciBDYXJkTGluayA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1saW5rJywge1xuICBDb21wb25lbnQ6ICdhJ1xufSk7XG52YXIgQ2FyZFRleHQgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtdGV4dCcsIHtcbiAgQ29tcG9uZW50OiAncCdcbn0pO1xudmFyIENhcmRIZWFkZXIgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtaGVhZGVyJyk7XG52YXIgQ2FyZEZvb3RlciA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1mb290ZXInKTtcbnZhciBDYXJkSW1nT3ZlcmxheSA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1pbWctb3ZlcmxheScpO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYm9keTogZmFsc2Vcbn07XG52YXIgQ2FyZCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgYmcgPSBfcmVmLmJnLFxuICAgICAgdGV4dCA9IF9yZWYudGV4dCxcbiAgICAgIGJvcmRlciA9IF9yZWYuYm9yZGVyLFxuICAgICAgYm9keSA9IF9yZWYuYm9keSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImJnXCIsIFwidGV4dFwiLCBcImJvcmRlclwiLCBcImJvZHlcIiwgXCJjaGlsZHJlblwiLCBcImFzXCJdKTtcblxuICB2YXIgcHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnY2FyZCcpO1xuICB2YXIgY2FyZENvbnRleHQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FyZEhlYWRlckJzUHJlZml4OiBwcmVmaXggKyBcIi1oZWFkZXJcIlxuICAgIH07XG4gIH0sIFtwcmVmaXhdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNhcmRDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgcHJlZml4LCBiZyAmJiBcImJnLVwiICsgYmcsIHRleHQgJiYgXCJ0ZXh0LVwiICsgdGV4dCwgYm9yZGVyICYmIFwiYm9yZGVyLVwiICsgYm9yZGVyKVxuICB9KSwgYm9keSA/XG4gIC8qI19fUFVSRV9fKi9cbiAgLy8gQHRzLWlnbm9yZVxuICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRCb2R5LCBudWxsLCBjaGlsZHJlbikgOiBjaGlsZHJlbikpO1xufSk7XG5DYXJkLmRpc3BsYXlOYW1lID0gJ0NhcmQnO1xuQ2FyZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5DYXJkLkltZyA9IENhcmRJbWc7XG5DYXJkLlRpdGxlID0gQ2FyZFRpdGxlO1xuQ2FyZC5TdWJ0aXRsZSA9IENhcmRTdWJ0aXRsZTtcbkNhcmQuQm9keSA9IENhcmRCb2R5O1xuQ2FyZC5MaW5rID0gQ2FyZExpbms7XG5DYXJkLlRleHQgPSBDYXJkVGV4dDtcbkNhcmQuSGVhZGVyID0gQ2FyZEhlYWRlcjtcbkNhcmQuRm9vdGVyID0gQ2FyZEZvb3RlcjtcbkNhcmQuSW1nT3ZlcmxheSA9IENhcmRJbWdPdmVybGF5O1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIGNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmNvbnRleHQuZGlzcGxheU5hbWUgPSAnQ2FyZENvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgY29udGV4dDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6IG51bGxcbn07XG52YXIgQ2FyZEltZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG5mdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQgPSBfcmVmLnZhcmlhbnQsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdpbWcnIDogX3JlZiRhcyxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJ2YXJpYW50XCIsIFwiYXNcIl0pO1xuXG4gIHZhciBwcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdjYXJkLWltZycpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHZhcmlhbnQgPyBwcmVmaXggKyBcIi1cIiArIHZhcmlhbnQgOiBwcmVmaXgsIGNsYXNzTmFtZSlcbiAgfSwgcHJvcHMpKTtcbn0pO1xuQ2FyZEltZy5kaXNwbGF5TmFtZSA9ICdDYXJkSW1nJztcbkNhcmRJbWcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZEltZzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY2FtZWxpemUgZnJvbSAnZG9tLWhlbHBlcnMvY2FtZWxpemUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5cbnZhciBwYXNjYWxDYXNlID0gZnVuY3Rpb24gcGFzY2FsQ2FzZShzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgY2FtZWxpemUoc3RyKS5zbGljZSgxKTtcbn07XG5cbi8vIFRPRE86IGVtc3RyaWN0ZW4gJiBmaXggdGhlIHR5cGluZyBoZXJlISBgY3JlYXRlV2l0aEJzUHJlZml4PFRFbGVtZW50VHlwZT4uLi5gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXaXRoQnNQcmVmaXgocHJlZml4LCBfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRkaXNwbGF5TmFtZSA9IF9yZWYuZGlzcGxheU5hbWUsXG4gICAgICBkaXNwbGF5TmFtZSA9IF9yZWYkZGlzcGxheU5hbWUgPT09IHZvaWQgMCA/IHBhc2NhbENhc2UocHJlZml4KSA6IF9yZWYkZGlzcGxheU5hbWUsXG4gICAgICBDb21wb25lbnQgPSBfcmVmLkNvbXBvbmVudCxcbiAgICAgIGRlZmF1bHRQcm9wcyA9IF9yZWYuZGVmYXVsdFByb3BzO1xuXG4gIHZhciBCc0NvbXBvbmVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmMiwgcmVmKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcbiAgICAgICAgYnNQcmVmaXggPSBfcmVmMi5ic1ByZWZpeCxcbiAgICAgICAgX3JlZjIkYXMgPSBfcmVmMi5hcyxcbiAgICAgICAgVGFnID0gX3JlZjIkYXMgPT09IHZvaWQgMCA/IENvbXBvbmVudCB8fCAnZGl2JyA6IF9yZWYyJGFzLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJjbGFzc05hbWVcIiwgXCJic1ByZWZpeFwiLCBcImFzXCJdKTtcblxuICAgIHZhciByZXNvbHZlZFByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgcHJlZml4KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICByZWY6IHJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIHJlc29sdmVkUHJlZml4KVxuICAgIH0sIHByb3BzKSk7XG4gIH0pO1xuICBCc0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4gIEJzQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIHJldHVybiBCc0NvbXBvbmVudDtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocCwgcmVmKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBwLCB7XG4gICAgICByZWY6IHJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwLmNsYXNzTmFtZSwgY2xhc3NOYW1lKVxuICAgIH0pKTtcbiAgfSk7XG59KTsiLCIvKkhvbWUgUGFnZSB0byBnaXZlIHRhYmxlIG9mIGNvbnRlbnQgb2Ygc2l0ZSBhbmQgbmF2aWdhdGlvbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vL2ltcG9ydCBMYXlvdXQgQ29tcG9uZW50IGNvbnRpYWluZyBsYXlvdXQgYW5kIE5hdmlnYXRpb25cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcyc7XHJcblxyXG4vL2ltcG9ydCBjb250YWluZXIgYW5kIGxheW91dCBjb21wb25lbnRzIGZyb20gYm9vdHN0cmFwIHJlYWN0XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggMnB4ICNEREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVHJhaW4gT25lJywgY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxoMT5IT01FIFBBR0U8L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NZWV0IE1lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nLi4vc3RhdGljL3Byb2ZpbGVJbWcuanBnJyBhbHQ9XCJwcm9maWxlIGltYWdlXCIgd2lkdGg9JzQwJScgcm91bmRlZENpcmNsZSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cIicuLi9zdGF0aWMvY29kaW5nSGVhZC5qcGcnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Q2FyZCBUaXRsZTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhcmQncyBjb250ZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbT5DcmFzIGp1c3RvIG9kaW88L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+RGFwaWJ1cyBhYyBmYWNpbGlzaXMgaW48L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+VmVzdGlidWx1bSBhdCBlcm9zPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkxpbmsgaHJlZj1cIiNcIj5DYXJkIExpbms8L0NhcmQuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5MaW5rIGhyZWY9XCIjXCI+QW5vdGhlciBMaW5rPC9DYXJkLkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=