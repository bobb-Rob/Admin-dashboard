/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n/* \r\nhtml{\r\n    height: 100%;\r\n} */\r\n\r\n:root{\r\n    --amber900: #78350f;\r\n    --amber700: #b45309;\r\n    --amber50: #fffae6;\r\n    --amber100: #fef3c7;\r\n    --amber200: #fde68a;\r\n    --amber300: #fcd34d;\r\n    --amber500: #f59e0b;\r\n    --amber600: #d97706;\r\n    --amberBlack: #272626;\r\n    --amberDark: #81807eea;\r\n    --myFont: 'Noto Sans', sans-serif;\r\n    --projectColumnSize: 150px;\r\n    --projectRowSize: 140px;\r\n}\r\n\r\n\r\n\r\n#main-container{\r\n    display: grid;\r\n    grid-template-columns: 210px repeat(3,  minmax(200px, 1fr));\r\n    grid-template-rows: 120px repeat(3, 1fr);\r\n    min-height: 100vh;\r\n}\r\n\r\n#main-container > aside{\r\n    display: grid;\r\n    grid-template-columns: 1fr;  \r\n   grid-column: 1 / 2;\r\n   grid-row: 1 / 5;\r\n   background-color: var(--amber900); \r\n}\r\n\r\n#main-container  aside > aside{\r\n   height: 80%;\r\n   background-color: var(--amber900); \r\n   z-index: 15; \r\n   padding: 20px;\r\n   align-items: center;\r\n   display: grid;\r\n   grid-template-columns: 1fr 4fr;\r\n   grid-template-rows: 80px repeat(6, 1fr) 50px repeat(6, 1fr);\r\n   gap: 1px 10px;\r\n   font-family: var(--myFont);\r\n}\r\n\r\n#main-container > header{\r\n    grid-column: 2 / span 3;\r\n    grid-row: 1 / 2;   \r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr) minmax(60px, 140px) 1fr 2.5fr;\r\n    grid-template-rows: repeat(2, 1fr);\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    padding-left: 15px;\r\n    font-family: var(--myFont);\r\n    background-color: var(--amber50); \r\n    box-shadow: 0px 4px 11px 0px #C1BBBE;\r\n    z-index: 10;\r\n}\r\n\r\n#main-container > div{\r\n    grid-column: 2 / span 3;\r\n    grid-row: 2 / span 3;\r\n    display: grid;   \r\n    grid-template-columns: 3.4fr 1fr;  \r\n    background-color: var(--amber100); \r\n    font-family: var(--myFont);\r\n}\r\n\r\nsvg:first-child{\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\n\r\n.sidebar-icons-center{\r\n    justify-self: center ;\r\n    margin-right: 10px;  \r\n    color: var(--amber100);\r\n    fill: var(--amber50); \r\n    width: 20px;\r\n    height: 20px;   \r\n}\r\n\r\naside > p[name='dashboard']{\r\n    font-size: 1.2rem;  \r\n}\r\n\r\naside > p{\r\n    font-size: 0.9rem;\r\n    color: var(--amber50);\r\n}\r\n\r\naside > p:hover, aside > svg:hover{\r\n    color: var(--amber500);\r\n    fill: var(--amber500);\r\n}\r\n\r\naside .settings,aside .settings + p{\r\n    align-self: end;\r\n}\r\n\r\n\r\n/* Header section  */\r\n\r\nheader > div[name=\"search-icon\"]{\r\n    border: 1.2px solid var(--amberDark);\r\n    display: grid;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    align-self: center;\r\n    align-items: center;\r\n    height: 60%;\r\n    width: 70%;\r\n    border-radius: 3px;\r\n    /* background-color: var(--amber700);    */\r\n}\r\n\r\nheader div[name^=\"search\"] > svg{   \r\n   \r\n    fill: var(--amberBlack); \r\n    width: 23px;\r\n    height: 23px;\r\n    \r\n}\r\n\r\ndiv[name=\"search-icon\"] + input{\r\n    justify-self: center;\r\n    align-self: center;\r\n    height: 60%;\r\n    width: 100%;\r\n    grid-column: 2 / 10;\r\n    border: 1.4px solid var(--amberDark);\r\n    border-radius: 3px;\r\n    background-color: var(--amber100);\r\n}\r\n\r\ndiv[name=\"search-icon\"] + input:focus{\r\n    border: 1px solid var(--amber600);\r\n    outline: 1px solid var(--amber600);\r\n}\r\n\r\ninput[type=\"search\"] + svg[name=\"bell-ring\"]{\r\n    fill: var(--amber500);\r\n   align-self: center;\r\n   justify-self: end;\r\n}\r\n\r\nsvg[name=\"bell-ring\"] ~ div[class=\"avatar\"]{\r\n    /* border: 1px solid var(--amberBlack); */\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n    justify-self: center;\r\n    align-self: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    font-family: var(--myFont);\r\n    background-color: var(--amber500);\r\n    color: var(--amberBlack);\r\n}\r\n\r\nsvg[name=\"bell-ring\"] ~ h5{\r\n    color: var(--amberBlack);\r\n}\r\n\r\nh5 + div[class=\"avatar\"]{\r\n    width: 40px !important;\r\n    height: 40px !important;\r\n}\r\n\r\ndiv[class=\"avatar\"] + div{\r\n    grid-column: 2 / 10;\r\n}\r\n\r\ndiv[class=\"avatar\"] + div > div{\r\n    font-size: 0.7rem;\r\n}\r\n\r\ndiv[class=\"avatar\"] + div + div{\r\n    grid-column: 10 / 13 ;  \r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr); \r\n    padding: 0px 30px 0px 60px;  \r\n}\r\n\r\ndiv[class=\"avatar\"] ~ div > button[class$=\"btn\"]{\r\n    height: 22px;\r\n    width: 60px;\r\n    border-radius: 20px;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--amber900);\r\n    color: var(--amber50);\r\n    justify-self: center;\r\n  \r\n}\r\n\r\n\r\n/* Main content div */\r\n\r\ndiv.first-side{\r\n    grid-column: 1 / 2;     \r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 20px repeat(3, minmax(100px, var(--projectRowSize)));\r\n    grid-auto-rows: minmax(100px, var(--projectRowSize));\r\n    column-gap: 20px;  \r\n    row-gap: 20px;  \r\n    padding: 20px ;\r\n    padding-top: 0px;\r\n}\r\n\r\ndiv.second-side{\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 20px auto 20px;\r\n    grid-auto-rows: auto;\r\n    background-color: var(--amber100);\r\n    row-gap: 10px;  \r\n    padding: 10px;\r\n    padding-left: 0px;\r\n    \r\n    /* border: 2px solid red; */\r\n}\r\n\r\ndiv.first-side > h5{\r\n    grid-column: 1 / 3;\r\n   margin-top: 1rem;\r\n}\r\n\r\ndiv.first-side .projects,div.second-side .projects{   \r\n    background-color: var(--amber50);\r\n    box-shadow: 1px 1px 11px 0px #C1BBBE;\r\n    position: relative;\r\n    border-radius: 5px;\r\n}\r\n\r\ndiv.first-side .projects:before{\r\n    content: '';\r\n    background-color: var(--amber500);\r\n    width: 7px;\r\n    height: 100%;\r\n    z-index: 100;\r\n    position: absolute;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.first-side .projects{\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr 1fr;\r\n    grid-template-rows: 3fr 1fr;\r\n    padding: 1rem;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.first-side .projects > div{\r\n    grid-column: 1 / 4;\r\n    font-size: 0.7rem;\r\n    color: var(--amberBlack);  \r\n}\r\n\r\n.projects svg{\r\n    fill: var(--amberBlack);\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.projects div ~ svg{\r\n    justify-self: end; \r\n    align-self: center; \r\n}\r\n\r\n.second-side > h5{\r\n    margin-top: .4rem;\r\n}\r\n\r\n.second-side .announcement,.second-side .trending{\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: repeat(autofill, 1fr);\r\n    grid-auto-rows: 1fr;\r\n    font-size: 0.6rem;\r\n    color: var(--amberBlack);\r\n    padding: 5px;\r\n    padding-left: 15px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n/* \r\nhtml{\r\n    height: 100%;\r\n} */\r\n\r\n:root{\r\n    --amber900: #78350f;\r\n    --amber700: #b45309;\r\n    --amber50: #fffae6;\r\n    --amber100: #fef3c7;\r\n    --amber200: #fde68a;\r\n    --amber300: #fcd34d;\r\n    --amber500: #f59e0b;\r\n    --amber600: #d97706;\r\n    --amberBlack: #272626;\r\n    --amberDark: #81807eea;\r\n    --myFont: 'Noto Sans', sans-serif;\r\n    --projectColumnSize: 150px;\r\n    --projectRowSize: 140px;\r\n}\r\n\r\n\r\n\r\n#main-container{\r\n    display: grid;\r\n    grid-template-columns: 210px repeat(3,  minmax(200px, 1fr));\r\n    grid-template-rows: 120px repeat(3, 1fr);\r\n    min-height: 100vh;\r\n}\r\n\r\n#main-container > aside{\r\n    display: grid;\r\n    grid-template-columns: 1fr;  \r\n   grid-column: 1 / 2;\r\n   grid-row: 1 / 5;\r\n   background-color: var(--amber900); \r\n}\r\n\r\n#main-container  aside > aside{\r\n   height: 80%;\r\n   background-color: var(--amber900); \r\n   z-index: 15; \r\n   padding: 20px;\r\n   align-items: center;\r\n   display: grid;\r\n   grid-template-columns: 1fr 4fr;\r\n   grid-template-rows: 80px repeat(6, 1fr) 50px repeat(6, 1fr);\r\n   gap: 1px 10px;\r\n   font-family: var(--myFont);\r\n}\r\n\r\n#main-container > header{\r\n    grid-column: 2 / span 3;\r\n    grid-row: 1 / 2;   \r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr) minmax(60px, 140px) 1fr 2.5fr;\r\n    grid-template-rows: repeat(2, 1fr);\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    padding-left: 15px;\r\n    font-family: var(--myFont);\r\n    background-color: var(--amber50); \r\n    box-shadow: 0px 4px 11px 0px #C1BBBE;\r\n    z-index: 10;\r\n}\r\n\r\n#main-container > div{\r\n    grid-column: 2 / span 3;\r\n    grid-row: 2 / span 3;\r\n    display: grid;   \r\n    grid-template-columns: 3.4fr 1fr;  \r\n    background-color: var(--amber100); \r\n    font-family: var(--myFont);\r\n}\r\n\r\nsvg:first-child{\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\n\r\n.sidebar-icons-center{\r\n    justify-self: center ;\r\n    margin-right: 10px;  \r\n    color: var(--amber100);\r\n    fill: var(--amber50); \r\n    width: 20px;\r\n    height: 20px;   \r\n}\r\n\r\naside > p[name='dashboard']{\r\n    font-size: 1.2rem;  \r\n}\r\n\r\naside > p{\r\n    font-size: 0.9rem;\r\n    color: var(--amber50);\r\n}\r\n\r\naside > p:hover, aside > svg:hover{\r\n    color: var(--amber500);\r\n    fill: var(--amber500);\r\n}\r\n\r\naside .settings,aside .settings + p{\r\n    align-self: end;\r\n}\r\n\r\n\r\n/* Header section  */\r\n\r\nheader > div[name=\"search-icon\"]{\r\n    border: 1.2px solid var(--amberDark);\r\n    display: grid;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    align-self: center;\r\n    align-items: center;\r\n    height: 60%;\r\n    width: 70%;\r\n    border-radius: 3px;\r\n    /* background-color: var(--amber700);    */\r\n}\r\n\r\nheader div[name^=\"search\"] > svg{   \r\n   \r\n    fill: var(--amberBlack); \r\n    width: 23px;\r\n    height: 23px;\r\n    \r\n}\r\n\r\ndiv[name=\"search-icon\"] + input{\r\n    justify-self: center;\r\n    align-self: center;\r\n    height: 60%;\r\n    width: 100%;\r\n    grid-column: 2 / 10;\r\n    border: 1.4px solid var(--amberDark);\r\n    border-radius: 3px;\r\n    background-color: var(--amber100);\r\n}\r\n\r\ndiv[name=\"search-icon\"] + input:focus{\r\n    border: 1px solid var(--amber600);\r\n    outline: 1px solid var(--amber600);\r\n}\r\n\r\ninput[type=\"search\"] + svg[name=\"bell-ring\"]{\r\n    fill: var(--amber500);\r\n   align-self: center;\r\n   justify-self: end;\r\n}\r\n\r\nsvg[name=\"bell-ring\"] ~ div[class=\"avatar\"]{\r\n    /* border: 1px solid var(--amberBlack); */\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n    justify-self: center;\r\n    align-self: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    font-family: var(--myFont);\r\n    background-color: var(--amber500);\r\n    color: var(--amberBlack);\r\n}\r\n\r\nsvg[name=\"bell-ring\"] ~ h5{\r\n    color: var(--amberBlack);\r\n}\r\n\r\nh5 + div[class=\"avatar\"]{\r\n    width: 40px !important;\r\n    height: 40px !important;\r\n}\r\n\r\ndiv[class=\"avatar\"] + div{\r\n    grid-column: 2 / 10;\r\n}\r\n\r\ndiv[class=\"avatar\"] + div > div{\r\n    font-size: 0.7rem;\r\n}\r\n\r\ndiv[class=\"avatar\"] + div + div{\r\n    grid-column: 10 / 13 ;  \r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr); \r\n    padding: 0px 30px 0px 60px;  \r\n}\r\n\r\ndiv[class=\"avatar\"] ~ div > button[class$=\"btn\"]{\r\n    height: 22px;\r\n    width: 60px;\r\n    border-radius: 20px;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--amber900);\r\n    color: var(--amber50);\r\n    justify-self: center;\r\n  \r\n}\r\n\r\n\r\n/* Main content div */\r\n\r\ndiv.first-side{\r\n    grid-column: 1 / 2;     \r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 20px repeat(3, minmax(100px, var(--projectRowSize)));\r\n    grid-auto-rows: minmax(100px, var(--projectRowSize));\r\n    column-gap: 20px;  \r\n    row-gap: 20px;  \r\n    padding: 20px ;\r\n    padding-top: 0px;\r\n}\r\n\r\ndiv.second-side{\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 20px auto 20px;\r\n    grid-auto-rows: auto;\r\n    background-color: var(--amber100);\r\n    row-gap: 10px;  \r\n    padding: 10px;\r\n    padding-left: 0px;\r\n    \r\n    /* border: 2px solid red; */\r\n}\r\n\r\ndiv.first-side > h5{\r\n    grid-column: 1 / 3;\r\n   margin-top: 1rem;\r\n}\r\n\r\ndiv.first-side .projects,div.second-side .projects{   \r\n    background-color: var(--amber50);\r\n    box-shadow: 1px 1px 11px 0px #C1BBBE;\r\n    position: relative;\r\n    border-radius: 5px;\r\n}\r\n\r\ndiv.first-side .projects:before{\r\n    content: '';\r\n    background-color: var(--amber500);\r\n    width: 7px;\r\n    height: 100%;\r\n    z-index: 100;\r\n    position: absolute;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.first-side .projects{\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr 1fr;\r\n    grid-template-rows: 3fr 1fr;\r\n    padding: 1rem;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.first-side .projects > div{\r\n    grid-column: 1 / 4;\r\n    font-size: 0.7rem;\r\n    color: var(--amberBlack);  \r\n}\r\n\r\n.projects svg{\r\n    fill: var(--amberBlack);\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.projects div ~ svg{\r\n    justify-self: end; \r\n    align-self: center; \r\n}\r\n\r\n.second-side > h5{\r\n    margin-top: .4rem;\r\n}\r\n\r\n.second-side .announcement,.second-side .trending{\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: repeat(autofill, 1fr);\r\n    grid-auto-rows: 1fr;\r\n    font-size: 0.6rem;\r\n    color: var(--amberBlack);\r\n    padding: 5px;\r\n    padding-left: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    console.log('I get called from print.js! Hi');
  }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");




function hello(){
    console.log("hello world")
}

hello();
(0,_print_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQTRCLDBCQUEwQixpQ0FBaUMscUJBQXFCLDJCQUEyQixLQUFLLE9BQU8sNEVBQTRFLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFB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OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ1k7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBTyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4qe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi8qIFxcclxcbmh0bWx7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59ICovXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tYW1iZXI5MDA6ICM3ODM1MGY7XFxyXFxuICAgIC0tYW1iZXI3MDA6ICNiNDUzMDk7XFxyXFxuICAgIC0tYW1iZXI1MDogI2ZmZmFlNjtcXHJcXG4gICAgLS1hbWJlcjEwMDogI2ZlZjNjNztcXHJcXG4gICAgLS1hbWJlcjIwMDogI2ZkZTY4YTtcXHJcXG4gICAgLS1hbWJlcjMwMDogI2ZjZDM0ZDtcXHJcXG4gICAgLS1hbWJlcjUwMDogI2Y1OWUwYjtcXHJcXG4gICAgLS1hbWJlcjYwMDogI2Q5NzcwNjtcXHJcXG4gICAgLS1hbWJlckJsYWNrOiAjMjcyNjI2O1xcclxcbiAgICAtLWFtYmVyRGFyazogIzgxODA3ZWVhO1xcclxcbiAgICAtLW15Rm9udDogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tcHJvamVjdENvbHVtblNpemU6IDE1MHB4O1xcclxcbiAgICAtLXByb2plY3RSb3dTaXplOiAxNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI21haW4tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxMHB4IHJlcGVhdCgzLCAgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWNvbnRhaW5lciA+IGFzaWRle1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgIFxcclxcbiAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gICBncmlkLXJvdzogMSAvIDU7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXI5MDApOyBcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGFpbmVyICBhc2lkZSA+IGFzaWRle1xcclxcbiAgIGhlaWdodDogODAlO1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtYmVyOTAwKTsgXFxyXFxuICAgei1pbmRleDogMTU7IFxcclxcbiAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBkaXNwbGF5OiBncmlkO1xcclxcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggcmVwZWF0KDYsIDFmcikgNTBweCByZXBlYXQoNiwgMWZyKTtcXHJcXG4gICBnYXA6IDFweCAxMHB4O1xcclxcbiAgIGZvbnQtZmFtaWx5OiB2YXIoLS1teUZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250YWluZXIgPiBoZWFkZXJ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAzO1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7ICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcikgbWlubWF4KDYwcHgsIDE0MHB4KSAxZnIgMi41ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW15Rm9udCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtYmVyNTApOyBcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMXB4IDBweCAjQzFCQkJFO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGFpbmVyID4gZGl2e1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDM7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7ICAgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMy40ZnIgMWZyOyAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtYmVyMTAwKTsgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1teUZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG5zdmc6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlYmFyLWljb25zLWNlbnRlcntcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXIgO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7ICBcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyMTAwKTtcXHJcXG4gICAgZmlsbDogdmFyKC0tYW1iZXI1MCk7IFxcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSA+IHBbbmFtZT0nZGFzaGJvYXJkJ117XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAgXFxyXFxufVxcclxcblxcclxcbmFzaWRlID4gcHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hbWJlcjUwKTtcXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUgPiBwOmhvdmVyLCBhc2lkZSA+IHN2Zzpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyNTAwKTtcXHJcXG4gICAgZmlsbDogdmFyKC0tYW1iZXI1MDApO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSAuc2V0dGluZ3MsYXNpZGUgLnNldHRpbmdzICsgcHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBIZWFkZXIgc2VjdGlvbiAgKi9cXHJcXG5cXHJcXG5oZWFkZXIgPiBkaXZbbmFtZT1cXFwic2VhcmNoLWljb25cXFwiXXtcXHJcXG4gICAgYm9yZGVyOiAxLjJweCBzb2xpZCB2YXIoLS1hbWJlckRhcmspO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXI3MDApOyAgICAqL1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2W25hbWVePVxcXCJzZWFyY2hcXFwiXSA+IHN2Z3sgICBcXHJcXG4gICBcXHJcXG4gICAgZmlsbDogdmFyKC0tYW1iZXJCbGFjayk7IFxcclxcbiAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuZGl2W25hbWU9XFxcInNlYXJjaC1pY29uXFxcIl0gKyBpbnB1dHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDEwO1xcclxcbiAgICBib3JkZXI6IDEuNHB4IHNvbGlkIHZhcigtLWFtYmVyRGFyayk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXIxMDApO1xcclxcbn1cXHJcXG5cXHJcXG5kaXZbbmFtZT1cXFwic2VhcmNoLWljb25cXFwiXSArIGlucHV0OmZvY3Vze1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbWJlcjYwMCk7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1hbWJlcjYwMCk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdICsgc3ZnW25hbWU9XFxcImJlbGwtcmluZ1xcXCJde1xcclxcbiAgICBmaWxsOiB2YXIoLS1hbWJlcjUwMCk7XFxyXFxuICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5zdmdbbmFtZT1cXFwiYmVsbC1yaW5nXFxcIl0gfiBkaXZbY2xhc3M9XFxcImF2YXRhclxcXCJde1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbWJlckJsYWNrKTsgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1teUZvbnQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjUwMCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hbWJlckJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnW25hbWU9XFxcImJlbGwtcmluZ1xcXCJdIH4gaDV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hbWJlckJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuaDUgKyBkaXZbY2xhc3M9XFxcImF2YXRhclxcXCJde1xcclxcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2W2NsYXNzPVxcXCJhdmF0YXJcXFwiXSArIGRpdntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAxMDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2W2NsYXNzPVxcXCJhdmF0YXJcXFwiXSArIGRpdiA+IGRpdntcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbmRpdltjbGFzcz1cXFwiYXZhdGFyXFxcIl0gKyBkaXYgKyBkaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxMCAvIDEzIDsgIFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBcXHJcXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDYwcHg7ICBcXHJcXG59XFxyXFxuXFxyXFxuZGl2W2NsYXNzPVxcXCJhdmF0YXJcXFwiXSB+IGRpdiA+IGJ1dHRvbltjbGFzcyQ9XFxcImJ0blxcXCJde1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtYmVyOTAwKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyNTApO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNYWluIGNvbnRlbnQgZGl2ICovXFxyXFxuXFxyXFxuZGl2LmZpcnN0LXNpZGV7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgICAgIFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCByZXBlYXQoMywgbWlubWF4KDEwMHB4LCB2YXIoLS1wcm9qZWN0Um93U2l6ZSkpKTtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgdmFyKC0tcHJvamVjdFJvd1NpemUpKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMjBweDsgIFxcclxcbiAgICByb3ctZ2FwOiAyMHB4OyAgXFxyXFxuICAgIHBhZGRpbmc6IDIwcHggO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2Vjb25kLXNpZGV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggYXV0byAyMHB4O1xcclxcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXIxMDApO1xcclxcbiAgICByb3ctZ2FwOiAxMHB4OyAgXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcclxcbiAgICBcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZmlyc3Qtc2lkZSA+IGg1e1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZpcnN0LXNpZGUgLnByb2plY3RzLGRpdi5zZWNvbmQtc2lkZSAucHJvamVjdHN7ICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtYmVyNTApO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDExcHggMHB4ICNDMUJCQkU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZmlyc3Qtc2lkZSAucHJvamVjdHM6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXI1MDApO1xcclxcbiAgICB3aWR0aDogN3B4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0LXNpZGUgLnByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZmlyc3Qtc2lkZSAucHJvamVjdHMgPiBkaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hbWJlckJsYWNrKTsgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgc3Zne1xcclxcbiAgICBmaWxsOiB2YXIoLS1hbWJlckJsYWNrKTtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGRpdiB+IHN2Z3tcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7IFxcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kLXNpZGUgPiBoNXtcXHJcXG4gICAgbWFyZ2luLXRvcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtc2lkZSAuYW5ub3VuY2VtZW50LC5zZWNvbmQtc2lkZSAudHJlbmRpbmd7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvZmlsbCwgMWZyKTtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hbWJlckJsYWNrKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291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aW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLyogXFxyXFxuaHRtbHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn0gKi9cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1hbWJlcjkwMDogIzc4MzUwZjtcXHJcXG4gICAgLS1hbWJlcjcwMDogI2I0NTMwOTtcXHJcXG4gICAgLS1hbWJlcjUwOiAjZmZmYWU2O1xcclxcbiAgICAtLWFtYmVyMTAwOiAjZmVmM2M3O1xcclxcbiAgICAtLWFtYmVyMjAwOiAjZmRlNjhhO1xcclxcbiAgICAtLWFtYmVyMzAwOiAjZmNkMzRkO1xcclxcbiAgICAtLWFtYmVyNTAwOiAjZjU5ZTBiO1xcclxcbiAgICAtLWFtYmVyNjAwOiAjZDk3NzA2O1xcclxcbiAgICAtLWFtYmVyQmxhY2s6ICMyNzI2MjY7XFxyXFxuICAgIC0tYW1iZXJEYXJrOiAjODE4MDdlZWE7XFxyXFxuICAgIC0tbXlGb250OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1wcm9qZWN0Q29sdW1uU2l6ZTogMTUwcHg7XFxyXFxuICAgIC0tcHJvamVjdFJvd1NpemU6IDE0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jbWFpbi1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjEwcHggcmVwZWF0KDMsICBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGFpbmVyID4gYXNpZGV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAgXFxyXFxuICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgIGdyaWQtcm93OiAxIC8gNTtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjkwMCk7IFxcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250YWluZXIgIGFzaWRlID4gYXNpZGV7XFxyXFxuICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXI5MDApOyBcXHJcXG4gICB6LWluZGV4OiAxNTsgXFxyXFxuICAgcGFkZGluZzogMjBweDtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCByZXBlYXQoNiwgMWZyKSA1MHB4IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgIGdhcDogMXB4IDEwcHg7XFxyXFxuICAgZm9udC1mYW1pbHk6IHZhcigtLW15Rm9udCk7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWNvbnRhaW5lciA+IGhlYWRlcntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDM7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjsgICBcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgMWZyKSBtaW5tYXgoNjBweCwgMTQwcHgpIDFmciAyLjVmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbXlGb250KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXI1MCk7IFxcclxcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDExcHggMHB4ICNDMUJCQkU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250YWluZXIgPiBkaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAzO1xcclxcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDsgICBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjRmciAxZnI7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXIxMDApOyBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW15Rm9udCk7XFxyXFxufVxcclxcblxcclxcbnN2ZzpmaXJzdC1jaGlsZHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZGViYXItaWNvbnMtY2VudGVye1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlciA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgIFxcclxcbiAgICBjb2xvcjogdmFyKC0tYW1iZXIxMDApO1xcclxcbiAgICBmaWxsOiB2YXIoLS1hbWJlcjUwKTsgXFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7ICAgXFxyXFxufVxcclxcblxcclxcbmFzaWRlID4gcFtuYW1lPSdkYXNoYm9hcmQnXXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07ICBcXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUgPiBwe1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyNTApO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSA+IHA6aG92ZXIsIGFzaWRlID4gc3ZnOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tYW1iZXI1MDApO1xcclxcbiAgICBmaWxsOiB2YXIoLS1hbWJlcjUwMCk7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIC5zZXR0aW5ncyxhc2lkZSAuc2V0dGluZ3MgKyBwe1xcclxcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhlYWRlciBzZWN0aW9uICAqL1xcclxcblxcclxcbmhlYWRlciA+IGRpdltuYW1lPVxcXCJzZWFyY2gtaWNvblxcXCJde1xcclxcbiAgICBib3JkZXI6IDEuMnB4IHNvbGlkIHZhcigtLWFtYmVyRGFyayk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDYwJTtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjcwMCk7ICAgICovXFxyXFxufVxcclxcblxcclxcbmhlYWRlciBkaXZbbmFtZV49XFxcInNlYXJjaFxcXCJdID4gc3ZneyAgIFxcclxcbiAgIFxcclxcbiAgICBmaWxsOiB2YXIoLS1hbWJlckJsYWNrKTsgXFxyXFxuICAgIHdpZHRoOiAyM3B4O1xcclxcbiAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5kaXZbbmFtZT1cXFwic2VhcmNoLWljb25cXFwiXSArIGlucHV0e1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDYwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMTA7XFxyXFxuICAgIGJvcmRlcjogMS40cHggc29saWQgdmFyKC0tYW1iZXJEYXJrKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjEwMCk7XFxyXFxufVxcclxcblxcclxcbmRpdltuYW1lPVxcXCJzZWFyY2gtaWNvblxcXCJdICsgaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFtYmVyNjAwKTtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWFtYmVyNjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0gKyBzdmdbbmFtZT1cXFwiYmVsbC1yaW5nXFxcIl17XFxyXFxuICAgIGZpbGw6IHZhcigtLWFtYmVyNTAwKTtcXHJcXG4gICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbnN2Z1tuYW1lPVxcXCJiZWxsLXJpbmdcXFwiXSB+IGRpdltjbGFzcz1cXFwiYXZhdGFyXFxcIl17XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFtYmVyQmxhY2spOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW15Rm9udCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtYmVyNTAwKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyQmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5zdmdbbmFtZT1cXFwiYmVsbC1yaW5nXFxcIl0gfiBoNXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyQmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5oNSArIGRpdltjbGFzcz1cXFwiYXZhdGFyXFxcIl17XFxyXFxuICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXZbY2xhc3M9XFxcImF2YXRhclxcXCJdICsgZGl2e1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDEwO1xcclxcbn1cXHJcXG5cXHJcXG5kaXZbY2xhc3M9XFxcImF2YXRhclxcXCJdICsgZGl2ID4gZGl2e1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2W2NsYXNzPVxcXCJhdmF0YXJcXFwiXSArIGRpdiArIGRpdntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEwIC8gMTMgOyAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IFxcclxcbiAgICBwYWRkaW5nOiAwcHggMzBweCAwcHggNjBweDsgIFxcclxcbn1cXHJcXG5cXHJcXG5kaXZbY2xhc3M9XFxcImF2YXRhclxcXCJdIH4gZGl2ID4gYnV0dG9uW2NsYXNzJD1cXFwiYnRuXFxcIl17XFxyXFxuICAgIGhlaWdodDogMjJweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXI5MDApO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYW1iZXI1MCk7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1haW4gY29udGVudCBkaXYgKi9cXHJcXG5cXHJcXG5kaXYuZmlyc3Qtc2lkZXtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyOyAgICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IHJlcGVhdCgzLCBtaW5tYXgoMTAwcHgsIHZhcigtLXByb2plY3RSb3dTaXplKSkpO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCB2YXIoLS1wcm9qZWN0Um93U2l6ZSkpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMHB4OyAgXFxyXFxuICAgIHJvdy1nYXA6IDIwcHg7ICBcXHJcXG4gICAgcGFkZGluZzogMjBweCA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5zZWNvbmQtc2lkZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCBhdXRvIDIwcHg7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjEwMCk7XFxyXFxuICAgIHJvdy1nYXA6IDEwcHg7ICBcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxyXFxuICAgIFxcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbmRpdi5maXJzdC1zaWRlID4gaDV7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZmlyc3Qtc2lkZSAucHJvamVjdHMsZGl2LnNlY29uZC1zaWRlIC5wcm9qZWN0c3sgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1iZXI1MCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTFweCAwcHggI0MxQkJCRTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5maXJzdC1zaWRlIC5wcm9qZWN0czpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWJlcjUwMCk7XFxyXFxuICAgIHdpZHRoOiA3cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3Qtc2lkZSAucHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5maXJzdC1zaWRlIC5wcm9qZWN0cyA+IGRpdntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyQmxhY2spOyAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBzdmd7XFxyXFxuICAgIGZpbGw6IHZhcigtLWFtYmVyQmxhY2spO1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgZGl2IH4gc3Zne1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDsgXFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtc2lkZSA+IGg1e1xcclxcbiAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZC1zaWRlIC5hbm5vdW5jZW1lbnQsLnNlY29uZC1zaWRlIC50cmVuZGluZ3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG9maWxsLCAxZnIpO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFtYmVyQmxhY2spO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzISBIaScpO1xyXG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhlbGxvKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpXHJcbn1cclxuXHJcbmhlbGxvKCk7XHJcbnByaW50TWUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==