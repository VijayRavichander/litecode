"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-whitespace@2.0.0";
exports.ids = ["vendor-chunks/micromark-factory-whitespace@2.0.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/micromark-factory-whitespace@2.0.0/node_modules/micromark-factory-whitespace/dev/index.js":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/micromark-factory-whitespace@2.0.0/node_modules/micromark-factory-whitespace/dev/index.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryWhitespace: () => (/* binding */ factoryWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-factory-space */ \"(rsc)/../../node_modules/.pnpm/micromark-factory-space@2.0.0/node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/../../node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/../../node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/types.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n */\n\n\n\n\n\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   line endings or spaces in markdown are often optional, in which case this\n *     factory can be used and `ok` will be switched to whether spaces were found\n *     or not\n * *   one line ending or space can be detected with\n *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @returns {State}\n *   Start state.\n */\nfunction factoryWhitespace(effects, ok) {\n  /** @type {boolean} */\n  let seen\n\n  return start\n\n  /** @type {State} */\n  function start(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownLineEnding)(code)) {\n      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)\n      effects.consume(code)\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)\n      seen = true\n      return start\n    }\n\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__.factorySpace)(\n        effects,\n        start,\n        seen ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.linePrefix : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineSuffix\n      )(code)\n    }\n\n    return ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2VAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2UvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsd0NBQXdDO0FBQ3JELGFBQWEsc0NBQXNDO0FBQ25EOztBQUVvRDtBQUNzQjtBQUMvQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUIsb0JBQW9CLHdEQUFLO0FBQ3pCO0FBQ0EsbUJBQW1CLHdEQUFLO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVFQUFhO0FBQ3JCLGFBQWEscUVBQVk7QUFDekI7QUFDQTtBQUNBLGVBQWUsd0RBQUssY0FBYyx3REFBSztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2VAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2UvZGV2L2luZGV4LmpzP2VlYzUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7dHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBQYXJzZSBzcGFjZXMgYW5kIHRhYnMuXG4gKlxuICogVGhlcmUgaXMgbm8gYG5va2AgcGFyYW1ldGVyOlxuICpcbiAqICogICBsaW5lIGVuZGluZ3Mgb3Igc3BhY2VzIGluIG1hcmtkb3duIGFyZSBvZnRlbiBvcHRpb25hbCwgaW4gd2hpY2ggY2FzZSB0aGlzXG4gKiAgICAgZmFjdG9yeSBjYW4gYmUgdXNlZCBhbmQgYG9rYCB3aWxsIGJlIHN3aXRjaGVkIHRvIHdoZXRoZXIgc3BhY2VzIHdlcmUgZm91bmRcbiAqICAgICBvciBub3RcbiAqICogICBvbmUgbGluZSBlbmRpbmcgb3Igc3BhY2UgY2FuIGJlIGRldGVjdGVkIHdpdGhcbiAqICAgICBgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKWAgcmlnaHQgYmVmb3JlIHVzaW5nIGBmYWN0b3J5V2hpdGVzcGFjZWBcbiAqXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5V2hpdGVzcGFjZShlZmZlY3RzLCBvaykge1xuICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gIGxldCBzZWVuXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZXMubGluZUVuZGluZylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICBzZWVuID0gdHJ1ZVxuICAgICAgcmV0dXJuIHN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5U3BhY2UoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBzZWVuID8gdHlwZXMubGluZVByZWZpeCA6IHR5cGVzLmxpbmVTdWZmaXhcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/micromark-factory-whitespace@2.0.0/node_modules/micromark-factory-whitespace/dev/index.js\n");

/***/ })

};
;