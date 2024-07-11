"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-normalize-identifier@2.0.0";
exports.ids = ["vendor-chunks/micromark-util-normalize-identifier@2.0.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/micromark-util-normalize-identifier@2.0.0/node_modules/micromark-util-normalize-identifier/dev/index.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/micromark-util-normalize-identifier@2.0.0/node_modules/micromark-util-normalize-identifier/dev/index.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeIdentifier: () => (/* binding */ normalizeIdentifier)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/../../node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/values.js\");\n\n\n/**\n * Normalize an identifier (as found in references, definitions).\n *\n * Collapses markdown whitespace, trim, and then lower- and uppercase.\n *\n * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their\n * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different\n * uppercase character (U+0398 (`Θ`)).\n * So, to get a canonical form, we perform both lower- and uppercase.\n *\n * Using uppercase last makes sure keys will never interact with default\n * prototypal values (such as `constructor`): nothing in the prototype of\n * `Object` is uppercase.\n *\n * @param {string} value\n *   Identifier to normalize.\n * @returns {string}\n *   Normalized identifier.\n */\nfunction normalizeIdentifier(value) {\n  return (\n    value\n      // Collapse markdown whitespace.\n      .replace(/[\\t\\n\\r ]+/g, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.values.space)\n      // Trim.\n      .replace(/^ | $/g, '')\n      // Some characters are considered “uppercase”, but if their lowercase\n      // counterpart is uppercased will result in a different uppercase\n      // character.\n      // Hence, to get that form, we perform both lower- and uppercase.\n      // Upper case makes sure keys will not interact with default prototypal\n      // methods: no method is uppercase.\n      .toLowerCase()\n      .toUpperCase()\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyQDIuMC4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1ub3JtYWxpemUtaWRlbnRpZmllci9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlEQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyQDIuMC4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1ub3JtYWxpemUtaWRlbnRpZmllci9kZXYvaW5kZXguanM/NjY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ZhbHVlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbiBpZGVudGlmaWVyIChhcyBmb3VuZCBpbiByZWZlcmVuY2VzLCBkZWZpbml0aW9ucykuXG4gKlxuICogQ29sbGFwc2VzIG1hcmtkb3duIHdoaXRlc3BhY2UsIHRyaW0sIGFuZCB0aGVuIGxvd2VyLSBhbmQgdXBwZXJjYXNlLlxuICpcbiAqIFNvbWUgY2hhcmFjdGVycyBhcmUgY29uc2lkZXJlZCDigJx1cHBlcmNhc2XigJ0sIHN1Y2ggYXMgVSswM0Y0IChgz7RgKSwgYnV0IGlmIHRoZWlyXG4gKiBsb3dlcmNhc2UgY291bnRlcnBhcnQgKFUrMDNCOCAoYM64YCkpIGlzIHVwcGVyY2FzZWQgd2lsbCByZXN1bHQgaW4gYSBkaWZmZXJlbnRcbiAqIHVwcGVyY2FzZSBjaGFyYWN0ZXIgKFUrMDM5OCAoYM6YYCkpLlxuICogU28sIHRvIGdldCBhIGNhbm9uaWNhbCBmb3JtLCB3ZSBwZXJmb3JtIGJvdGggbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gKlxuICogVXNpbmcgdXBwZXJjYXNlIGxhc3QgbWFrZXMgc3VyZSBrZXlzIHdpbGwgbmV2ZXIgaW50ZXJhY3Qgd2l0aCBkZWZhdWx0XG4gKiBwcm90b3R5cGFsIHZhbHVlcyAoc3VjaCBhcyBgY29uc3RydWN0b3JgKTogbm90aGluZyBpbiB0aGUgcHJvdG90eXBlIG9mXG4gKiBgT2JqZWN0YCBpcyB1cHBlcmNhc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIElkZW50aWZpZXIgdG8gbm9ybWFsaXplLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgTm9ybWFsaXplZCBpZGVudGlmaWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllcih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlXG4gICAgICAvLyBDb2xsYXBzZSBtYXJrZG93biB3aGl0ZXNwYWNlLlxuICAgICAgLnJlcGxhY2UoL1tcXHRcXG5cXHIgXSsvZywgdmFsdWVzLnNwYWNlKVxuICAgICAgLy8gVHJpbS5cbiAgICAgIC5yZXBsYWNlKC9eIHwgJC9nLCAnJylcbiAgICAgIC8vIFNvbWUgY2hhcmFjdGVycyBhcmUgY29uc2lkZXJlZCDigJx1cHBlcmNhc2XigJ0sIGJ1dCBpZiB0aGVpciBsb3dlcmNhc2VcbiAgICAgIC8vIGNvdW50ZXJwYXJ0IGlzIHVwcGVyY2FzZWQgd2lsbCByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdXBwZXJjYXNlXG4gICAgICAvLyBjaGFyYWN0ZXIuXG4gICAgICAvLyBIZW5jZSwgdG8gZ2V0IHRoYXQgZm9ybSwgd2UgcGVyZm9ybSBib3RoIGxvd2VyLSBhbmQgdXBwZXJjYXNlLlxuICAgICAgLy8gVXBwZXIgY2FzZSBtYWtlcyBzdXJlIGtleXMgd2lsbCBub3QgaW50ZXJhY3Qgd2l0aCBkZWZhdWx0IHByb3RvdHlwYWxcbiAgICAgIC8vIG1ldGhvZHM6IG5vIG1ldGhvZCBpcyB1cHBlcmNhc2UuXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRvVXBwZXJDYXNlKClcbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/micromark-util-normalize-identifier@2.0.0/node_modules/micromark-util-normalize-identifier/dev/index.js\n");

/***/ })

};
;