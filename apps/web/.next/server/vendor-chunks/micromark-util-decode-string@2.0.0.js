"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-decode-string@2.0.0";
exports.ids = ["vendor-chunks/micromark-util-decode-string@2.0.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/micromark-util-decode-string@2.0.0/node_modules/micromark-util-decode-string/dev/index.js":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/micromark-util-decode-string@2.0.0/node_modules/micromark-util-decode-string/dev/index.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeString: () => (/* binding */ decodeString)\n/* harmony export */ });\n/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decode-named-character-reference */ \"(rsc)/../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js\");\n/* harmony import */ var micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-decode-numeric-character-reference */ \"(rsc)/../../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.1/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/../../node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/../../node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/constants.js\");\n\n\n\n\nconst characterEscapeOrReference =\n  /\\\\([!-/:-@[-`{-~])|&(#(?:\\d{1,7}|x[\\da-f]{1,6})|[\\da-z]{1,31});/gi\n\n/**\n * Decode markdown strings (which occur in places such as fenced code info\n * strings, destinations, labels, and titles).\n *\n * The “string” content type allows character escapes and -references.\n * This decodes those.\n *\n * @param {string} value\n *   Value to decode.\n * @returns {string}\n *   Decoded value.\n */\nfunction decodeString(value) {\n  return value.replace(characterEscapeOrReference, decode)\n}\n\n/**\n * @param {string} $0\n * @param {string} $1\n * @param {string} $2\n * @returns {string}\n */\nfunction decode($0, $1, $2) {\n  if ($1) {\n    // Escape.\n    return $1\n  }\n\n  // Reference.\n  const head = $2.charCodeAt(0)\n\n  if (head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.numberSign) {\n    const head = $2.charCodeAt(1)\n    const hex = head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lowercaseX || head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.uppercaseX\n    return (0,micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__.decodeNumericCharacterReference)(\n      $2.slice(hex ? 2 : 1),\n      hex ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseHexadecimal : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseDecimal\n    )\n  }\n\n  return (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__.decodeNamedCharacterReference)($2) || $0\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmdAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmcvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThFO0FBQ21CO0FBQzNDOztBQUV0RDtBQUNBLGlCQUFpQixjQUFjLElBQUksVUFBVSxJQUFJLFVBQVUsS0FBSyxFQUFFOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsd0RBQUs7QUFDcEI7QUFDQSx5QkFBeUIsd0RBQUssd0JBQXdCLHdEQUFLO0FBQzNELFdBQVcsa0hBQStCO0FBQzFDO0FBQ0EsWUFBWSw0REFBUywwQkFBMEIsNERBQVM7QUFDeEQ7QUFDQTs7QUFFQSxTQUFTLCtGQUE2QjtBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmdAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmcvZGV2L2luZGV4LmpzPzZkZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZX0gZnJvbSAnZGVjb2RlLW5hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2UnXG5pbXBvcnQge2RlY29kZU51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWRlY29kZS1udW1lcmljLWNoYXJhY3Rlci1yZWZlcmVuY2UnXG5pbXBvcnQge2NvZGVzLCBjb25zdGFudHN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuY29uc3QgY2hhcmFjdGVyRXNjYXBlT3JSZWZlcmVuY2UgPVxuICAvXFxcXChbIS0vOi1AWy1gey1+XSl8JigjKD86XFxkezEsN318eFtcXGRhLWZdezEsNn0pfFtcXGRhLXpdezEsMzF9KTsvZ2lcblxuLyoqXG4gKiBEZWNvZGUgbWFya2Rvd24gc3RyaW5ncyAod2hpY2ggb2NjdXIgaW4gcGxhY2VzIHN1Y2ggYXMgZmVuY2VkIGNvZGUgaW5mb1xuICogc3RyaW5ncywgZGVzdGluYXRpb25zLCBsYWJlbHMsIGFuZCB0aXRsZXMpLlxuICpcbiAqIFRoZSDigJxzdHJpbmfigJ0gY29udGVudCB0eXBlIGFsbG93cyBjaGFyYWN0ZXIgZXNjYXBlcyBhbmQgLXJlZmVyZW5jZXMuXG4gKiBUaGlzIGRlY29kZXMgdGhvc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFZhbHVlIHRvIGRlY29kZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIERlY29kZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoY2hhcmFjdGVyRXNjYXBlT3JSZWZlcmVuY2UsIGRlY29kZSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gJDBcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMVxuICogQHBhcmFtIHtzdHJpbmd9ICQyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBkZWNvZGUoJDAsICQxLCAkMikge1xuICBpZiAoJDEpIHtcbiAgICAvLyBFc2NhcGUuXG4gICAgcmV0dXJuICQxXG4gIH1cblxuICAvLyBSZWZlcmVuY2UuXG4gIGNvbnN0IGhlYWQgPSAkMi5jaGFyQ29kZUF0KDApXG5cbiAgaWYgKGhlYWQgPT09IGNvZGVzLm51bWJlclNpZ24pIHtcbiAgICBjb25zdCBoZWFkID0gJDIuY2hhckNvZGVBdCgxKVxuICAgIGNvbnN0IGhleCA9IGhlYWQgPT09IGNvZGVzLmxvd2VyY2FzZVggfHwgaGVhZCA9PT0gY29kZXMudXBwZXJjYXNlWFxuICAgIHJldHVybiBkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlKFxuICAgICAgJDIuc2xpY2UoaGV4ID8gMiA6IDEpLFxuICAgICAgaGV4ID8gY29uc3RhbnRzLm51bWVyaWNCYXNlSGV4YWRlY2ltYWwgOiBjb25zdGFudHMubnVtZXJpY0Jhc2VEZWNpbWFsXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlKCQyKSB8fCAkMFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/micromark-util-decode-string@2.0.0/node_modules/micromark-util-decode-string/dev/index.js\n");

/***/ })

};
;