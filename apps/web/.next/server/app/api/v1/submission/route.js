"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/v1/submission/route";
exports.ids = ["app/api/v1/submission/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fsubmission%2Froute&page=%2Fapi%2Fv1%2Fsubmission%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fsubmission%2Froute.ts&appDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fsubmission%2Froute&page=%2Fapi%2Fv1%2Fsubmission%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fsubmission%2Froute.ts&appDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_vijayravichander_Code_litecode_litecode_apps_web_app_api_v1_submission_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/v1/submission/route.ts */ \"(rsc)/./app/api/v1/submission/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/v1/submission/route\",\n        pathname: \"/api/v1/submission\",\n        filename: \"route\",\n        bundlePath: \"app/api/v1/submission/route\"\n    },\n    resolvedPagePath: \"/Users/vijayravichander/Code/litecode/litecode/apps/web/app/api/v1/submission/route.ts\",\n    nextConfigOutput,\n    userland: _Users_vijayravichander_Code_litecode_litecode_apps_web_app_api_v1_submission_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/v1/submission/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMi40X3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wX19yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGdjElMkZzdWJtaXNzaW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ2MSUyRnN1Ym1pc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2MSUyRnN1Ym1pc3Npb24lMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZ2aWpheXJhdmljaGFuZGVyJTJGQ29kZSUyRmxpdGVjb2RlJTJGbGl0ZWNvZGUlMkZhcHBzJTJGd2ViJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnZpamF5cmF2aWNoYW5kZXIlMkZDb2RlJTJGbGl0ZWNvZGUlMkZsaXRlY29kZSUyRmFwcHMlMkZ3ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3NDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8/MGE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdmlqYXlyYXZpY2hhbmRlci9Db2RlL2xpdGVjb2RlL2xpdGVjb2RlL2FwcHMvd2ViL2FwcC9hcGkvdjEvc3VibWlzc2lvbi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdjEvc3VibWlzc2lvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3YxL3N1Ym1pc3Npb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3YxL3N1Ym1pc3Npb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvdmlqYXlyYXZpY2hhbmRlci9Db2RlL2xpdGVjb2RlL2xpdGVjb2RlL2FwcHMvd2ViL2FwcC9hcGkvdjEvc3VibWlzc2lvbi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdjEvc3VibWlzc2lvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fsubmission%2Froute&page=%2Fapi%2Fv1%2Fsubmission%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fsubmission%2Froute.ts&appDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/v1/submission/route.ts":
/*!****************************************!*\
  !*** ./app/api/v1/submission/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db */ \"(rsc)/./app/db/index.ts\");\n\n\nasync function GET(req) {\n    const pollTimes = 10;\n    const submissionID = req.nextUrl.searchParams.get(\"submissionID\");\n    if (!submissionID) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Error\"\n        }, {\n            status: 404\n        });\n    }\n    for(let attempt = 0; attempt < pollTimes; attempt++){\n        await new Promise((resolve)=>setTimeout(resolve, 2000));\n        let acceptedSubmissionCount = 0;\n        const submission = await _db__WEBPACK_IMPORTED_MODULE_1__.db.submissions.findMany({\n            where: {\n                id: submissionID\n            }\n        });\n        if (submission.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Something Went Wrong\",\n                id: 19\n            }, {\n                status: 500\n            });\n        }\n        for (const entry of submission){\n            const status = entry.status; // Type assertion\n            switch(status){\n                case \"TLE\":\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        message: \"Time Limit Exceeded\",\n                        id: 5\n                    }, {\n                        status: 200\n                    });\n                case \"COMPILATIONERROR\":\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        message: \"Compilation Error\",\n                        id: 6\n                    }, {\n                        status: 200\n                    });\n                case \"RUNTIMEERROR\":\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        message: \"Run Time Error\",\n                        id: 7\n                    }, {\n                        status: 200\n                    });\n                case \"REJECTED\":\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        message: \"REJECTED\",\n                        id: 4\n                    }, {\n                        status: 200\n                    });\n                case \"INTERNALERROR\":\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        message: \"INTERNALERROR\",\n                        id: 13\n                    }, {\n                        status: 200\n                    });\n                case \"ACCEPTED\":\n                    acceptedSubmissionCount++;\n                    if (acceptedSubmissionCount == submission.length) {\n                        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                            message: \"All Submissions Accepted\",\n                            id: 3\n                        }, {\n                            status: 200\n                        });\n                    }\n                    break;\n                default:\n                    continue;\n            }\n        }\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Internal Server Error\",\n        id: 21\n    }, {\n        status: 500\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3YxL3N1Ym1pc3Npb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ3ZCO0FBSzFCLGVBQWVFLElBQUlDLEdBQWdCO0lBQ3RDLE1BQU1DLFlBQVk7SUFDbEIsTUFBTUMsZUFBZUYsSUFBSUcsT0FBTyxDQUFDQyxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUVsRCxJQUFJLENBQUNILGNBQWM7UUFDZixPQUFPTCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQ3JCQyxTQUFTO1FBQ2IsR0FBRztZQUNDQyxRQUFRO1FBQ1o7SUFDSjtJQUlBLElBQUssSUFBSUMsVUFBVSxHQUFHQSxVQUFVUixXQUFXUSxVQUFXO1FBQ2xELE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTO1FBRW5ELElBQUlFLDBCQUEwQjtRQUU5QixNQUFNQyxhQUFhLE1BQU1oQixtQ0FBRUEsQ0FBQ2lCLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDO1lBQzdDQyxPQUFPO2dCQUNIQyxJQUFJaEI7WUFDUjtRQUNKO1FBRUEsSUFBSVksV0FBV0ssTUFBTSxLQUFLLEdBQUc7WUFDekIsT0FBT3RCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQ3JCQyxTQUFTO2dCQUNUVyxJQUFJO1lBQ1IsR0FBRztnQkFDQ1YsUUFBUTtZQUNaO1FBQ0o7UUFFQSxLQUFLLE1BQU1ZLFNBQVNOLFdBQVk7WUFDNUIsTUFBTU4sU0FBU1ksTUFBTVosTUFBTSxFQUFzQixpQkFBaUI7WUFFbEUsT0FBUUE7Z0JBQ0osS0FBSztvQkFDRCxPQUFPWCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO3dCQUNyQkMsU0FBUzt3QkFDVFcsSUFBSTtvQkFDUixHQUFHO3dCQUNDVixRQUFRO29CQUNaO2dCQUNKLEtBQUs7b0JBQ0QsT0FBT1gscURBQVlBLENBQUNTLElBQUksQ0FBQzt3QkFDckJDLFNBQVM7d0JBQ1RXLElBQUk7b0JBQ1IsR0FBRzt3QkFDQ1YsUUFBUTtvQkFDWjtnQkFDSixLQUFLO29CQUNELE9BQU9YLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7d0JBQ3JCQyxTQUFTO3dCQUNUVyxJQUFJO29CQUNSLEdBQUc7d0JBQ0NWLFFBQVE7b0JBQ1o7Z0JBQ0osS0FBSztvQkFDRCxPQUFPWCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO3dCQUNyQkMsU0FBUzt3QkFDVFcsSUFBSTtvQkFDUixHQUFHO3dCQUNDVixRQUFRO29CQUNaO2dCQUNKLEtBQUs7b0JBQ0QsT0FBT1gscURBQVlBLENBQUNTLElBQUksQ0FBQzt3QkFDckJDLFNBQVM7d0JBQ1RXLElBQUk7b0JBQ1IsR0FBRzt3QkFDQ1YsUUFBUTtvQkFDWjtnQkFDSixLQUFLO29CQUNESztvQkFDQSxJQUFHQSwyQkFBMkJDLFdBQVdLLE1BQU0sRUFBQzt3QkFDNUMsT0FBT3RCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7NEJBQ3JCQyxTQUFTOzRCQUNUVyxJQUFJO3dCQUNSLEdBQUc7NEJBQ0NWLFFBQVE7d0JBQ1o7b0JBQ0o7b0JBQ0E7Z0JBQ0o7b0JBRUk7WUFDUjtRQUNKO0lBQ0o7SUFFSSxPQUFPWCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQ3JCQyxTQUFTO1FBQ1RXLElBQUk7SUFDUixHQUFHO1FBQ0NWLFFBQVE7SUFDWjtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uL2FwcC9hcGkvdjEvc3VibWlzc2lvbi9yb3V0ZS50cz9lNWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uLy4uL2RiXCI7XG5pbXBvcnQgeyBTdW1hbmEgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuXG50eXBlIFN1Ym1pc3Npb25SZXN1bHQgPSBcIlRMRVwiIHwgXCJDT01QSUxBVElPTkVSUk9SXCIgfCBcIlJVTlRJTUVFUlJPUlwiIHwgXCJSRUpFQ1RFRFwiIHwgXCJJTlRFUk5BTEVSUk9SXCIgfCBcIkFDQ0VQVEVEXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IHBvbGxUaW1lcyA9IDEwO1xuICAgIGNvbnN0IHN1Ym1pc3Npb25JRCA9IHJlcS5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3N1Ym1pc3Npb25JRCcpO1xuICAgIFxuICAgIGlmICghc3VibWlzc2lvbklEKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVycm9yXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3RhdHVzOiA0MDRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG5cbiAgICBmb3IgKGxldCBhdHRlbXB0ID0gMDsgYXR0ZW1wdCA8IHBvbGxUaW1lczsgYXR0ZW1wdCsrKSB7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcblxuICAgICAgICBsZXQgYWNjZXB0ZWRTdWJtaXNzaW9uQ291bnQgPSAwO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pc3Npb24gPSBhd2FpdCBkYi5zdWJtaXNzaW9ucy5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIGlkOiBzdWJtaXNzaW9uSURcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN1Ym1pc3Npb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIFdlbnQgV3JvbmdcIixcbiAgICAgICAgICAgICAgICBpZDogMTlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHN1Ym1pc3Npb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGVudHJ5LnN0YXR1cyBhcyBTdWJtaXNzaW9uUmVzdWx0OyAvLyBUeXBlIGFzc2VydGlvblxuXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJUTEVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGltZSBMaW1pdCBFeGNlZWRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDVcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkNPTVBJTEFUSU9ORVJST1JcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ29tcGlsYXRpb24gRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA2XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJSVU5USU1FRVJST1JcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUnVuIFRpbWUgRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA3XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJSRUpFQ1RFRFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJSRUpFQ1RFRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDRcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklOVEVSTkFMRVJST1JcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSU5URVJOQUxFUlJPUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDEzXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBQ0NFUFRFRFwiOlxuICAgICAgICAgICAgICAgICAgICBhY2NlcHRlZFN1Ym1pc3Npb25Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZihhY2NlcHRlZFN1Ym1pc3Npb25Db3VudCA9PSBzdWJtaXNzaW9uLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWxsIFN1Ym1pc3Npb25zIEFjY2VwdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIHVuZXhwZWN0ZWQgc3RhdHVzZXNcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIixcbiAgICAgICAgICAgIGlkOiAyMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdGF0dXM6IDUwMFxuICAgICAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYiIsIkdFVCIsInJlcSIsInBvbGxUaW1lcyIsInN1Ym1pc3Npb25JRCIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImF0dGVtcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJhY2NlcHRlZFN1Ym1pc3Npb25Db3VudCIsInN1Ym1pc3Npb24iLCJzdWJtaXNzaW9ucyIsImZpbmRNYW55Iiwid2hlcmUiLCJpZCIsImxlbmd0aCIsImVudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/v1/submission/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/db/index.ts":
/*!*************************!*\
  !*** ./app/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\n// eslint-disable-next-line\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? prismaClientSingleton();\nconst db = prisma;\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQUlBLDJCQUEyQjtBQUMzQixNQUFNRSxrQkFBa0JDO0FBSXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJSDtBQUVsQyxNQUFNSSxLQUFLRCxPQUFPO0FBRXpCLElBQUlFLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9hcHAvZGIvaW5kZXgudHM/NTUxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpO1xufTtcblxudHlwZSBQcmlzbWFDbGllbnRTaW5nbGV0b24gPSBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50U2luZ2xldG9uIHwgdW5kZWZpbmVkO1xufTtcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKTtcblxuZXhwb3J0IGNvbnN0IGRiID0gcHJpc21hO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwiZGIiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/db/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0"], () => (__webpack_exec__("(rsc)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fsubmission%2Froute&page=%2Fapi%2Fv1%2Fsubmission%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fsubmission%2Froute.ts&appDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvijayravichander%2FCode%2Flitecode%2Flitecode%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();