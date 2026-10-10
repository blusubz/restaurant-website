/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --font-header: 'Playfair Display', serif;\n    --font-body: 'Lato', sans-serif;\n    --color-bg: #121212; /*(Deep charcoal background)*/\n    --color-card: #1e1e1e; /*(Elevated dark slate surface for cards/forms)*/\n    --color-primary: #f4f1ea; /*(Soft cream white for main headers and title text)*/\n    --color-text-main: #e0dcd3; /*(Warm light gray for readable paragraph/body text)*/\n    --color-text-muted: #a09c94; /*(Taupe gray for secondary descriptions and subtitles)*/\n    --color-accent: #d4af37; /*(Warm muted gold for prices, active nav links, and buttons)*/\n    --color-border: #2c2c2c; /*(Subtle dark gray border to separate cards/containers)*/\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: var(--font-body);\n    color: var(--color-text-main);\n    background-color: var(--color-bg);\n}\n\nh1, h2, h3 {\n    font-family: var(--font-header);\n    color: var(--color-primary);\n}\n\n/* Image reset  */\nimg {\n    max-width: 100%;\n    display: block;\n}\n\nheader {\n    background-color: var(--color-card);\n    border-bottom: 2px solid var(--color-border);\n    padding: 1.5rem;\n    width: 100%;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\n\nnav button {\n    /* Reset Brwoser Button Styling */\n    background: transparent;\n    border: none;\n    outline: none;\n    border-bottom: 2px solid transparent;\n\n    font-family: var(--font-body);\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    color: var(--color-text-muted);\n    cursor: pointer;\n    padding: 0.5rem 0.25rem;\n    transition: color 0.8s ease, border-color 0.8s ease;\n}\n\nnav button:hover,\nnav button.active {\n    color: var(--color-accent);\n    border-bottom-color: var(--color-accent);\n}\n\n/* Center contents on the pages */\n#content {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n}\n\n/* All headers need be centered */\nh1 {\n    text-align: center;\n}\n\n/* Menu Module Styling */\n.menu-category {\n    margin-bottom: 3rem;\n}\n\n.menu-category h2 {\n    font-family: var(--font-header);\n    color: var(--color-primary);\n    font-size: 2rem;\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n    border-bottom: 1px solid var(--color-border);\n    text-align: center;\n}\n\n.items-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 2rem;\n}\n\n.menu-card {\n    background-color: var(--color-card);\n    border: 1px solid var(--color-border);\n    border-radius: 8px;\n    overflow: hidden;\n    transition: transform 0.3s ease, border-color 0.3s ease;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.menu-card:hover {\n    transform: translateY(-4px);\n    border-color: var(--color-accent);\n}\n\n.menu-card img {\n    width: 100%;\n    height: 350px;\n    object-fit: cover;\n    display: block;\n}\n\n.menu-category.bebidas .menu-card img {\n    height: 500px;\n}\n\n.menu-category.postre .menu-card img {\n    width: 100%;\n    height: 550px;\n    object-fit: contain;\n}\n\n.menu-card p {\n    font-family: var(--font-body);\n    font-style: italic;\n    color: var(--color-text-muted);\n    font-size: 0.95rem;\n    line-height: 1.4;\n    margin-top: 0.5rem;\n}\n\n.price {\n    font-family: var(--font-body);\n    font-weight: 600;\n    font-style: normal;\n    color: var(--color-accent);\n    /* font-size: 1.1rem; */\n}\n\n/* Contact Module Styling */\n.contact-container {\n    border: 2px solid var(--color-border);\n    border-radius: 8px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.4rem;\n    /* justify-content: center; */\n    /* align-content: center; */\n    /* place-items: center; */\n    place-content: center;\n\n    width: 350px;\n\n    transition: transform 0.3s ease, border-color 0.3s ease;\n}\n\n.contact-container:hover {\n    border-color: var(--color-accent);\n    color: var(--color-text-muted);\n}\n\ninput {\n    display: block;\n}\n\n#submit-btn {\n    display: block;\n    cursor: pointer;\n    border-radius: 3px;\n    background-color: var(--color-accent);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: stretch;\n    gap: 0.5rem;\n}\n\ninput, textarea, #submit-btn {\n    width: 100%;\n}\n\n.form-container img {\n    width: 100%;\n    height: 450px;\n    object-fit: cover;\n    display: block;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-website/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-website/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/aperitivoCebolla-pic-asset.jpg"
/*!***************************************************!*\
  !*** ./src/assets/aperitivoCebolla-pic-asset.jpg ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"195b545573432efb24d5.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/aperitivoCebolla-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/aperitivoQueso-pic-asset.jpg"
/*!*************************************************!*\
  !*** ./src/assets/aperitivoQueso-pic-asset.jpg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6fc0c253d1dd43a626e6.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/aperitivoQueso-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/appetizer-pic-asset.jpg"
/*!********************************************!*\
  !*** ./src/assets/appetizer-pic-asset.jpg ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3a01deb8156440ff8858.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/appetizer-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/carne-molida.png"
/*!*************************************!*\
  !*** ./src/assets/carne-molida.png ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c73029282014c50c689c.png\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/carne-molida.png?\n}");

/***/ },

/***/ "./src/assets/carne-pic-asset.jpg"
/*!****************************************!*\
  !*** ./src/assets/carne-pic-asset.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1ae572928df726cbc97c.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/carne-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/cola-pic-asset.jpg"
/*!***************************************!*\
  !*** ./src/assets/cola-pic-asset.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c5ad850a184a230a45e9.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/cola-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/drink-pic-asset.jpg"
/*!****************************************!*\
  !*** ./src/assets/drink-pic-asset.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2d5c9b6d143d880558bc.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/drink-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/milo-pic-asset.jpg"
/*!***************************************!*\
  !*** ./src/assets/milo-pic-asset.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"114e1b8cd9e3e4b73a6b.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/milo-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/pasta-pic-asset.jpg"
/*!****************************************!*\
  !*** ./src/assets/pasta-pic-asset.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"40aec0733fabc4678f11.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/pasta-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/postre-pic-asset.jpg"
/*!*****************************************!*\
  !*** ./src/assets/postre-pic-asset.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b4f379cd9d04a369ea1c.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/postre-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/reservar-pic-asset.jpg"
/*!*******************************************!*\
  !*** ./src/assets/reservar-pic-asset.jpg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9cd0c73f64319036cbf3.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/reservar-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/assets/shrimp-pic-asset.jpg"
/*!*****************************************!*\
  !*** ./src/assets/shrimp-pic-asset.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"50fbf6d96036a5b5f7f8.jpg\";\n\n//# sourceURL=webpack://restaurant-website/./src/assets/shrimp-pic-asset.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadabout: () => (/* binding */ loadabout)\n/* harmony export */ });\nfunction loadabout() {\n    const parentDiv = document.getElementById('content');\n    const aboutGreeting = document.createElement('h1');\n    const aboutParagraph = document.createElement('p');\n\n    aboutGreeting.textContent = \"Acerca de Marinas Restaurante\";\n    aboutParagraph.textContent = \"Fundada desde que era niño, siempre he amado la carne molida especial de mi madre. Hecha siempre con amor y servida con cuidado. Hay algo mágico en un plato caliente de carne molida mezclado con el arroz de mi madre.\";\n\n    parentDiv.appendChild(aboutGreeting);\n    parentDiv.appendChild(aboutParagraph);\n}\n\n//# sourceURL=webpack://restaurant-website/./src/about.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadcontact: () => (/* binding */ loadcontact)\n/* harmony export */ });\n/* harmony import */ var _assets_reservar_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/reservar-pic-asset.jpg */ \"./src/assets/reservar-pic-asset.jpg\");\n\n\nfunction loadcontact() {\n    const parentDiv = document.getElementById('content');\n    const contactarHeader = document.createElement('h1');\n\n    contactarHeader.textContent = 'Contactar';\n    parentDiv.appendChild(contactarHeader);\n\n    // Contact card goes here\n    const contactDiv = document.createElement('div');\n    const contactCardHeader = document.createElement('h3');\n    const chefName = document.createElement('p');\n    const chefNumber = document.createElement('p');\n    const chefEmail = document.createElement('p');\n\n    contactDiv.className = 'contact-container';\n\n    contactCardHeader.textContent = 'La guardiana del fuego';\n    chefName.textContent = 'Luz Marinita';\n    chefNumber.textContent = '(444)444-4444';\n    chefEmail.textContent = 'elpatitolindo@patito.com';\n\n    contactDiv.appendChild(contactCardHeader);\n    contactDiv.appendChild(chefName);\n    contactDiv.appendChild(chefNumber);\n    contactDiv.appendChild(chefEmail);\n\n    parentDiv.appendChild(contactDiv);\n\n    // Form goes here \n    const formDiv = document.createElement('div');\n    formDiv.className = 'form-container';\n\n    const form = document.createElement('form');\n    form.action = 'https://httpbin.org/post';\n    form.method = 'post';\n    form.id = 'reservation-form';\n\n    const reservar = document.createElement('img');\n    reservar.src = _assets_reservar_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    reservar.alt = 'Foto de mesa de reservación';\n    reservar.loading = 'lazy';\n\n    const formHeader = document.createElement('h2');\n    formHeader.textContent = 'Reservar:';\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.id = 'name';\n    nameInput.placeholder = 'Nombre';\n    nameInput.required = true;\n\n    const emailInput = document.createElement('input');\n    emailInput.type = 'email';\n    emailInput.id = 'email';\n    emailInput.placeholder = 'Correo Electronico *';\n    emailInput.required = true;\n\n    const phoneInput = document.createElement('input');\n    phoneInput.type = 'tel';\n    phoneInput.id = 'phone';\n    phoneInput.placeholder = 'Telefono';\n    phoneInput.required = true;\n\n    const textArea = document.createElement('textarea');\n    textArea.id = 'comment';\n    textArea.placeholder = 'Escribe tu comentario aquí...';\n\n    const submitBtn = document.createElement('button');\n    submitBtn.type = 'submit';\n    submitBtn.id = 'submit-btn';\n    submitBtn.textContent = 'Enviar';\n\n    form.appendChild(reservar);\n    form.appendChild(formHeader);\n    form.appendChild(nameInput);\n    form.appendChild(emailInput);\n    form.appendChild(phoneInput);\n    form.appendChild(textArea);\n    form.appendChild(submitBtn);\n\n    formDiv.appendChild(form);\n\n    parentDiv.appendChild(formDiv);\n}\n\n//# sourceURL=webpack://restaurant-website/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadhome: () => (/* binding */ loadhome)\n/* harmony export */ });\n/* harmony import */ var _assets_carne_molida_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/carne-molida.png */ \"./src/assets/carne-molida.png\");\n// Export using a named export so when importing we stay strict with the function name 'loadhome'\n\n\nfunction loadhome() {\n    // Create elements in memory\n    const parentDiv = document.getElementById('content');\n    const homePageGreeting = document.createElement('h1');\n    const sampleImg = document.createElement('img');\n    const sampleParagraph = document.createElement('p');\n\n    // Create elements\n    homePageGreeting.textContent = \"Welcome to Marinas Restaurant\";\n    \n    sampleImg.src = _assets_carne_molida_png__WEBPACK_IMPORTED_MODULE_0__;\n    sampleImg.className = 'home-pic';\n    sampleImg.alt = 'picture of carne molida';\n    sampleImg.loading= 'lazy';\n\n    sampleParagraph.textContent = \"Bienvenidos al restaurante que prepara y sirve la mejor carne molida entre todas las estrellas\";\n    \n    // append elements to body (for now)\n    parentDiv.appendChild(homePageGreeting);\n    parentDiv.appendChild(sampleImg);\n    parentDiv.appendChild(sampleParagraph);\n}\n\n//# sourceURL=webpack://restaurant-website/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n// Logic for selecting tab\nconst parentDiv = document.getElementById('content');\nconst homeBtn = document.getElementById('home-btn');\nconst menuBtn = document.getElementById('menu-btn');\nconst aboutBtn = document.getElementById('about-btn');\nconst contactBtn = document.getElementById('contact-btn');\n\n\nhomeBtn.addEventListener('click', () => {\n    setActiveTab(homeBtn);\n    parentDiv.textContent = \"\";\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadhome)();\n});\n\naboutBtn.addEventListener('click', () => {\n    setActiveTab(aboutBtn);\n    parentDiv.textContent = \"\";\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.loadabout)();\n});\n\nmenuBtn.addEventListener('click', () => {\n    setActiveTab(menuBtn);\n    parentDiv.textContent = \"\";\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadmenu)();\n});\n\ncontactBtn.addEventListener('click', () => {\n    setActiveTab(contactBtn);\n    parentDiv.textContent = \"\";\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadcontact)();\n})\n\n// Driver page is Home page - Load at page start \n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadhome)();\nsetActiveTab(homeBtn);\n\nfunction setActiveTab(selectedBtn) {\n    const allBtns = document.querySelectorAll('nav button');\n\n    allBtns.forEach((btn) => {\n        btn.className = '';\n    });\n\n    selectedBtn.className = 'active';\n}\n\n//# sourceURL=webpack://restaurant-website/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadmenu: () => (/* binding */ loadmenu)\n/* harmony export */ });\n/* harmony import */ var _menuData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuData.js */ \"./src/menuData.js\");\n\n\nfunction loadmenu() {\n    // Create elements in memory\n    const parentDiv = document.getElementById('content');\n    const menuPageHeader = document.createElement('h1');\n\n    menuPageHeader.textContent = \"Menu\"; // TODO: Change font\n    parentDiv.appendChild(menuPageHeader);\n\n    parentDiv.appendChild(createCategorySection('Aperitivos', _menuData_js__WEBPACK_IMPORTED_MODULE_0__.aperitivosData));\n    parentDiv.appendChild(createCategorySection('Platos', _menuData_js__WEBPACK_IMPORTED_MODULE_0__.platosData));\n    parentDiv.appendChild(createCategorySection('Bebidas', _menuData_js__WEBPACK_IMPORTED_MODULE_0__.bebidasData));\n    parentDiv.appendChild(createCategorySection('Postre', _menuData_js__WEBPACK_IMPORTED_MODULE_0__.postreData));\n}\n\nfunction createCategorySection(categoryTitle, itemsArray) {\n    const menuCategoryDiv = document.createElement('div');\n    const itemsGrid = document.createElement('div');\n    const categoryHeader = document.createElement('h2');\n    const categoryClass = categoryTitle.toLowerCase();\n\n    itemsArray.forEach((item) => {\n        const menuCard = document.createElement('div');\n        const itemImg = document.createElement('img');\n        const itemTitle = document.createElement('h3');\n        const itemDescription = document.createElement('p');\n        const itemPrice = document.createElement('span');\n        \n        menuCard.className = 'menu-card';\n\n        // Create and set image \n        itemImg.src = item.src;\n        itemImg.alt = item.alt;\n        itemImg.loading = 'lazy';\n        menuCard.appendChild(itemImg);\n\n        itemTitle.textContent = item.name;\n        menuCard.appendChild(itemTitle);\n\n        itemDescription.textContent = item.description;\n        itemPrice.textContent = item.price;\n        itemPrice.className = 'price';\n        itemDescription.appendChild(itemPrice);\n        menuCard.appendChild(itemDescription);\n        \n        itemsGrid.appendChild(menuCard);\n    });\n\n    // Add classes to divs\n    menuCategoryDiv.className = `menu-category ${categoryClass}`; \n    itemsGrid.className = 'items-grid'; \n\n    categoryHeader.textContent = categoryTitle;\n\n    menuCategoryDiv.appendChild(categoryHeader);\n    menuCategoryDiv.appendChild(itemsGrid);\n\n    return menuCategoryDiv;\n}\n\n//# sourceURL=webpack://restaurant-website/./src/menu.js?\n}");

/***/ },

/***/ "./src/menuData.js"
/*!*************************!*\
  !*** ./src/menuData.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aperitivosData: () => (/* binding */ aperitivosData),\n/* harmony export */   bebidasData: () => (/* binding */ bebidasData),\n/* harmony export */   platosData: () => (/* binding */ platosData),\n/* harmony export */   postreData: () => (/* binding */ postreData)\n/* harmony export */ });\n/* harmony import */ var _assets_appetizer_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/appetizer-pic-asset.jpg */ \"./src/assets/appetizer-pic-asset.jpg\");\n/* harmony import */ var _assets_aperitivoCebolla_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/aperitivoCebolla-pic-asset.jpg */ \"./src/assets/aperitivoCebolla-pic-asset.jpg\");\n/* harmony import */ var _assets_aperitivoQueso_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/aperitivoQueso-pic-asset.jpg */ \"./src/assets/aperitivoQueso-pic-asset.jpg\");\n/* harmony import */ var _assets_drink_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/drink-pic-asset.jpg */ \"./src/assets/drink-pic-asset.jpg\");\n/* harmony import */ var _assets_milo_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/milo-pic-asset.jpg */ \"./src/assets/milo-pic-asset.jpg\");\n/* harmony import */ var _assets_cola_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/cola-pic-asset.jpg */ \"./src/assets/cola-pic-asset.jpg\");\n/* harmony import */ var _assets_pasta_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/pasta-pic-asset.jpg */ \"./src/assets/pasta-pic-asset.jpg\");\n/* harmony import */ var _assets_carne_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/carne-pic-asset.jpg */ \"./src/assets/carne-pic-asset.jpg\");\n/* harmony import */ var _assets_shrimp_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/shrimp-pic-asset.jpg */ \"./src/assets/shrimp-pic-asset.jpg\");\n/* harmony import */ var _assets_postre_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/postre-pic-asset.jpg */ \"./src/assets/postre-pic-asset.jpg\");\n\n\n\n\n\n\n\n\n\n\n\nconst aperitivosData = [\n    {\n        name: 'Tartaletas de Queso',\n        description: 'Una masa de hojaldre dorada y crujiente rellena con una mezcla tibia y fundida de quesos derretidos. Es rica, sabrosa y tiene el tamaño perfecto para un bocado',\n        price: ' $9',\n        src: _assets_appetizer_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_0__,\n        alt: 'Foto de aperitivos de quesitos relleno de queso'\n    },\n    {\n        name: 'Aros de Cebolla',\n        description: 'Aros de cebolla apanados fritos',\n        price: ' $9',\n        src: _assets_aperitivoCebolla_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_1__,\n        alt: 'Foto de aperitivos de cebolla'\n    },\n    {\n        name: 'Tartaletas de Espinaca y Crema',\n        description: 'Una mini masa de hojaldre crujiente rellena con una mezcla cremosa de espinaca picada, ajo y queso derretido (frecuentemente ricotta, queso crema o mozzarella)',\n        price: ' $9',\n        src: _assets_aperitivoQueso_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_2__,\n        alt: 'Foto de aperitivo de quesitos relleno de espinaca'\n    }\n];\n\nconst platosData = [\n    {\n        name: 'Pasta',\n        description: 'Un plato caliente de pastas con queso y carne y cilantro',\n        price: ' $22',\n        src: _assets_pasta_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_6__,\n        alt: 'Foto de un plato de pastas'\n    },\n    {\n        name: 'Carne Molida',\n        description: 'Un plato caliento de Carne Molida con arroz, un huevo frito encima, y platanos maduros',\n        price: ' $25',\n        src: _assets_carne_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_7__,\n        alt: 'Foto de un plato de carne molida con arroz, un huevo frito encima, y platanos maduros'\n    },\n    {\n        name: 'Camarones',\n        description: 'Cazuela de camarones con limon y ajo',\n        price: ' $20',\n        src: _assets_shrimp_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_8__,\n        alt: 'Foto de un plato de camarones con salsa'\n    }\n];\n\nconst bebidasData = [\n    {\n        name: 'Martini',\n        description: 'Ginebra The Botanist o Vodka Grey Goose, Vermut Seco Dolin, piel de limón exprimida o aceituna Castelvetrano',\n        price: ' $17',\n        src: _assets_drink_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_3__,\n        alt: 'Foto de un martini'\n    },\n    {\n        name: 'Milo',\n        description: 'Leche de chocolate milo, frio o caliente',\n        price: ' $14',\n        src: _assets_milo_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_4__,\n        alt: 'Foto de un baso de leche de chocolate frio'\n    },\n    {\n        name: 'Coka-Cola',\n        description: 'Coka cola',\n        price: ' $11',\n        src: _assets_cola_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_5__,\n        alt: 'Foto de coka cola en vidrio y al lado un baso lleno de coka cola y hielo'\n    }\n];\n\nconst postreData = [\n    {\n        name: 'Sueño Supremo de Chocolate',\n        description: 'Rico y aterciopelado chocolate mezclado a la perfección, desbordante de un decadente sirope de chocolate, una montaña de crema batida fresca y el toque crujiente de una galleta de chocolate. Espolvoreado con cacao en polvo de primera calidad.',\n        price: ' $15',\n        src: _assets_postre_pic_asset_jpg__WEBPACK_IMPORTED_MODULE_9__,\n        alt: 'Un indulgente batido de chocolate en una taza de frasco masón, cubierto con crema batida, una barra de galleta de chocolate y sirope de chocolate que gotea, frente a un fondo negro con cacao en polvo cayendo'\n    }\n];\n\n\n\n//# sourceURL=webpack://restaurant-website/./src/menuData.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;