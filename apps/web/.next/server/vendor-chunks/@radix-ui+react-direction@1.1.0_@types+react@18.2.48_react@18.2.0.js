"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-direction@1.1.0_@types+react@18.2.48_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-direction@1.1.0_@types+react@18.2.48_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@radix-ui+react-direction@1.1.0_@types+react@18.2.48_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs":
/*!********************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.0_@types+react@18.2.48_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DirectionProvider: () => (/* binding */ DirectionProvider),\n/* harmony export */   Provider: () => (/* binding */ Provider),\n/* harmony export */   useDirection: () => (/* binding */ useDirection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n// packages/react/direction/src/Direction.tsx\n\n\nvar DirectionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);\nvar DirectionProvider = (props) => {\n  const { dir, children } = props;\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DirectionContext.Provider, { value: dir, children });\n};\nfunction useDirection(localDir) {\n  const globalDir = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);\n  return localDir || globalDir || \"ltr\";\n}\nvar Provider = DirectionProvider;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1kaXJlY3Rpb25AMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtZGlyZWN0aW9uL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDK0I7QUFDUztBQUN4Qyx1QkFBdUIsZ0RBQW1CO0FBQzFDO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUIseUJBQXlCLHNEQUFHLDhCQUE4QixzQkFBc0I7QUFDaEY7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBS0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1kaXJlY3Rpb25AMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtZGlyZWN0aW9uL2Rpc3QvaW5kZXgubWpzP2E2N2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZXMvcmVhY3QvZGlyZWN0aW9uL3NyYy9EaXJlY3Rpb24udHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIERpcmVjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHZvaWQgMCk7XG52YXIgRGlyZWN0aW9uUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkaXIsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goRGlyZWN0aW9uQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogZGlyLCBjaGlsZHJlbiB9KTtcbn07XG5mdW5jdGlvbiB1c2VEaXJlY3Rpb24obG9jYWxEaXIpIHtcbiAgY29uc3QgZ2xvYmFsRGlyID0gUmVhY3QudXNlQ29udGV4dChEaXJlY3Rpb25Db250ZXh0KTtcbiAgcmV0dXJuIGxvY2FsRGlyIHx8IGdsb2JhbERpciB8fCBcImx0clwiO1xufVxudmFyIFByb3ZpZGVyID0gRGlyZWN0aW9uUHJvdmlkZXI7XG5leHBvcnQge1xuICBEaXJlY3Rpb25Qcm92aWRlcixcbiAgUHJvdmlkZXIsXG4gIHVzZURpcmVjdGlvblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@radix-ui+react-direction@1.1.0_@types+react@18.2.48_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs\n");

/***/ })

};
;