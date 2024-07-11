"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-space@2.0.0";
exports.ids = ["vendor-chunks/micromark-factory-space@2.0.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/micromark-factory-space@2.0.0/node_modules/micromark-factory-space/dev/index.js":
/*!****************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/micromark-factory-space@2.0.0/node_modules/micromark-factory-space/dev/index.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorySpace: () => (/* binding */ factorySpace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/../../node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */\n\n\n\n// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.\n\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   spaces in markdown are often optional, in which case this factory can be\n *     used and `ok` will be switched to whether spaces were found or not\n * *   one line ending or space can be detected with `markdownSpace(code)` right\n *     before using `factorySpace`\n *\n * ###### Examples\n *\n * Where `␉` represents a tab (plus how much it expands) and `␠` represents a\n * single space.\n *\n * ```markdown\n * ␉\n * ␠␠␠␠\n * ␉␠\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {TokenType} type\n *   Type (`' \\t'`).\n * @param {number | undefined} [max=Infinity]\n *   Max (exclusive).\n * @returns {State}\n *   Start state.\n */\nfunction factorySpace(effects, ok, type, max) {\n  const limit = max ? max - 1 : Number.POSITIVE_INFINITY\n  let size = 0\n\n  return start\n\n  /** @type {State} */\n  function start(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n      effects.enter(type)\n      return prefix(code)\n    }\n\n    return ok(code)\n  }\n\n  /** @type {State} */\n  function prefix(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code) && size++ < limit) {\n      effects.consume(code)\n      return prefix\n    }\n\n    effects.exit(type)\n    return ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlQDIuMC4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1zcGFjZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsd0NBQXdDO0FBQ3JELGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEsMENBQTBDO0FBQ3ZEOztBQUVzRDs7QUFFdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxRQUFRLHVFQUFhO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBLFFBQVEsdUVBQWE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLWZhY3Rvcnktc3BhY2VAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlL2Rldi9pbmRleC5qcz8xOTU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FZmZlY3RzfSBFZmZlY3RzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlblR5cGV9IFRva2VuVHlwZVxuICovXG5cbmltcG9ydCB7bWFya2Rvd25TcGFjZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuXG4vLyBUbyBkbzogaW1wbGVtZW50IGBzcGFjZU9yVGFiYCwgYHNwYWNlT3JUYWJNaW5NYXhgLCBgc3BhY2VPclRhYldpdGhPcHRpb25zYC5cblxuLyoqXG4gKiBQYXJzZSBzcGFjZXMgYW5kIHRhYnMuXG4gKlxuICogVGhlcmUgaXMgbm8gYG5va2AgcGFyYW1ldGVyOlxuICpcbiAqICogICBzcGFjZXMgaW4gbWFya2Rvd24gYXJlIG9mdGVuIG9wdGlvbmFsLCBpbiB3aGljaCBjYXNlIHRoaXMgZmFjdG9yeSBjYW4gYmVcbiAqICAgICB1c2VkIGFuZCBgb2tgIHdpbGwgYmUgc3dpdGNoZWQgdG8gd2hldGhlciBzcGFjZXMgd2VyZSBmb3VuZCBvciBub3RcbiAqICogICBvbmUgbGluZSBlbmRpbmcgb3Igc3BhY2UgY2FuIGJlIGRldGVjdGVkIHdpdGggYG1hcmtkb3duU3BhY2UoY29kZSlgIHJpZ2h0XG4gKiAgICAgYmVmb3JlIHVzaW5nIGBmYWN0b3J5U3BhY2VgXG4gKlxuICogIyMjIyMjIEV4YW1wbGVzXG4gKlxuICogV2hlcmUgYOKQiWAgcmVwcmVzZW50cyBhIHRhYiAocGx1cyBob3cgbXVjaCBpdCBleHBhbmRzKSBhbmQgYOKQoGAgcmVwcmVzZW50cyBhXG4gKiBzaW5nbGUgc3BhY2UuXG4gKlxuICogYGBgbWFya2Rvd25cbiAqIOKQiVxuICog4pCg4pCg4pCg4pCgXG4gKiDikInikKBcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHR5cGVcbiAqICAgVHlwZSAoYCcgXFx0J2ApLlxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IFttYXg9SW5maW5pdHldXG4gKiAgIE1heCAoZXhjbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgb2ssIHR5cGUsIG1heCkge1xuICBjb25zdCBsaW1pdCA9IG1heCA/IG1heCAtIDEgOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgbGV0IHNpemUgPSAwXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgICByZXR1cm4gcHJlZml4KGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBwcmVmaXgoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpICYmIHNpemUrKyA8IGxpbWl0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBwcmVmaXhcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/micromark-factory-space@2.0.0/node_modules/micromark-factory-space/dev/index.js\n");

/***/ })

};
;