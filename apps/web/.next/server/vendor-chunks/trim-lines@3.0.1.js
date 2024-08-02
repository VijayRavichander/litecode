"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/trim-lines@3.0.1";
exports.ids = ["vendor-chunks/trim-lines@3.0.1"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trimLines: () => (/* binding */ trimLines)\n/* harmony export */ });\nconst tab = 9 /* `\\t` */\nconst space = 32 /* ` ` */\n\n/**\n * Remove initial and final spaces and tabs at the line breaks in `value`.\n * Does not trim initial and final spaces and tabs of the value itself.\n *\n * @param {string} value\n *   Value to trim.\n * @returns {string}\n *   Trimmed value.\n */\nfunction trimLines(value) {\n  const source = String(value)\n  const search = /\\r?\\n|\\r/g\n  let match = search.exec(source)\n  let last = 0\n  /** @type {Array<string>} */\n  const lines = []\n\n  while (match) {\n    lines.push(\n      trimLine(source.slice(last, match.index), last > 0, true),\n      match[0]\n    )\n\n    last = match.index + match[0].length\n    match = search.exec(source)\n  }\n\n  lines.push(trimLine(source.slice(last), last > 0, false))\n\n  return lines.join('')\n}\n\n/**\n * @param {string} value\n *   Line to trim.\n * @param {boolean} start\n *   Whether to trim the start of the line.\n * @param {boolean} end\n *   Whether to trim the end of the line.\n * @returns {string}\n *   Trimmed line.\n */\nfunction trimLine(value, start, end) {\n  let startIndex = 0\n  let endIndex = value.length\n\n  if (start) {\n    let code = value.codePointAt(startIndex)\n\n    while (code === tab || code === space) {\n      startIndex++\n      code = value.codePointAt(startIndex)\n    }\n  }\n\n  if (end) {\n    let code = value.codePointAt(endIndex - 1)\n\n    while (code === tab || code === space) {\n      endIndex--\n      code = value.codePointAt(endIndex - 1)\n    }\n  }\n\n  return endIndex > startIndex ? value.slice(startIndex, endIndex) : ''\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RyaW0tbGluZXNAMy4wLjEvbm9kZV9tb2R1bGVzL3RyaW0tbGluZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RyaW0tbGluZXNAMy4wLjEvbm9kZV9tb2R1bGVzL3RyaW0tbGluZXMvaW5kZXguanM/ZTFjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWIgPSA5IC8qIGBcXHRgICovXG5jb25zdCBzcGFjZSA9IDMyIC8qIGAgYCAqL1xuXG4vKipcbiAqIFJlbW92ZSBpbml0aWFsIGFuZCBmaW5hbCBzcGFjZXMgYW5kIHRhYnMgYXQgdGhlIGxpbmUgYnJlYWtzIGluIGB2YWx1ZWAuXG4gKiBEb2VzIG5vdCB0cmltIGluaXRpYWwgYW5kIGZpbmFsIHNwYWNlcyBhbmQgdGFicyBvZiB0aGUgdmFsdWUgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgVHJpbW1lZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW1MaW5lcyh2YWx1ZSkge1xuICBjb25zdCBzb3VyY2UgPSBTdHJpbmcodmFsdWUpXG4gIGNvbnN0IHNlYXJjaCA9IC9cXHI/XFxufFxcci9nXG4gIGxldCBtYXRjaCA9IHNlYXJjaC5leGVjKHNvdXJjZSlcbiAgbGV0IGxhc3QgPSAwXG4gIC8qKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn0gKi9cbiAgY29uc3QgbGluZXMgPSBbXVxuXG4gIHdoaWxlIChtYXRjaCkge1xuICAgIGxpbmVzLnB1c2goXG4gICAgICB0cmltTGluZShzb3VyY2Uuc2xpY2UobGFzdCwgbWF0Y2guaW5kZXgpLCBsYXN0ID4gMCwgdHJ1ZSksXG4gICAgICBtYXRjaFswXVxuICAgIClcblxuICAgIGxhc3QgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aFxuICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMoc291cmNlKVxuICB9XG5cbiAgbGluZXMucHVzaCh0cmltTGluZShzb3VyY2Uuc2xpY2UobGFzdCksIGxhc3QgPiAwLCBmYWxzZSkpXG5cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJycpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIExpbmUgdG8gdHJpbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhcnRcbiAqICAgV2hldGhlciB0byB0cmltIHRoZSBzdGFydCBvZiB0aGUgbGluZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5kXG4gKiAgIFdoZXRoZXIgdG8gdHJpbSB0aGUgZW5kIG9mIHRoZSBsaW5lLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgVHJpbW1lZCBsaW5lLlxuICovXG5mdW5jdGlvbiB0cmltTGluZSh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgbGV0IGVuZEluZGV4ID0gdmFsdWUubGVuZ3RoXG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgbGV0IGNvZGUgPSB2YWx1ZS5jb2RlUG9pbnRBdChzdGFydEluZGV4KVxuXG4gICAgd2hpbGUgKGNvZGUgPT09IHRhYiB8fCBjb2RlID09PSBzcGFjZSkge1xuICAgICAgc3RhcnRJbmRleCsrXG4gICAgICBjb2RlID0gdmFsdWUuY29kZVBvaW50QXQoc3RhcnRJbmRleClcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgbGV0IGNvZGUgPSB2YWx1ZS5jb2RlUG9pbnRBdChlbmRJbmRleCAtIDEpXG5cbiAgICB3aGlsZSAoY29kZSA9PT0gdGFiIHx8IGNvZGUgPT09IHNwYWNlKSB7XG4gICAgICBlbmRJbmRleC0tXG4gICAgICBjb2RlID0gdmFsdWUuY29kZVBvaW50QXQoZW5kSW5kZXggLSAxKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbmRJbmRleCA+IHN0YXJ0SW5kZXggPyB2YWx1ZS5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCkgOiAnJ1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js\n");

/***/ })

};
;