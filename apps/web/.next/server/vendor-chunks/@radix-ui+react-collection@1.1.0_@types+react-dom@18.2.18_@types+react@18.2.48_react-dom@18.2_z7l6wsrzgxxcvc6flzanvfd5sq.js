"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-collection@1.1.0_@types+react-dom@18.2.18_@types+react@18.2.48_react-dom@18.2_z7l6wsrzgxxcvc6flzanvfd5sq";
exports.ids = ["vendor-chunks/@radix-ui+react-collection@1.1.0_@types+react-dom@18.2.18_@types+react@18.2.48_react-dom@18.2_z7l6wsrzgxxcvc6flzanvfd5sq"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@radix-ui+react-collection@1.1.0_@types+react-dom@18.2.18_@types+react@18.2.48_react-dom@18.2_z7l6wsrzgxxcvc6flzanvfd5sq/node_modules/@radix-ui/react-collection/dist/index.mjs":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.0_@types+react-dom@18.2.18_@types+react@18.2.48_react-dom@18.2_z7l6wsrzgxxcvc6flzanvfd5sq/node_modules/@radix-ui/react-collection/dist/index.mjs ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCollection: () => (/* binding */ createCollection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/../../node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.2.48_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.48_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/../../node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.2.48_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/../../node_modules/.pnpm/next@14.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ createCollection auto */ // packages/react/collection/src/Collection.tsx\n\n\n\n\n\nfunction createCollection(name) {\n    const PROVIDER_NAME = name + \"CollectionProvider\";\n    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(PROVIDER_NAME);\n    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {\n        collectionRef: {\n            current: null\n        },\n        itemMap: /* @__PURE__ */ new Map()\n    });\n    const CollectionProvider = (props)=>{\n        const { scope, children } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(/* @__PURE__ */ new Map()).current;\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl, {\n            scope,\n            itemMap,\n            collectionRef: ref,\n            children\n        });\n    };\n    CollectionProvider.displayName = PROVIDER_NAME;\n    const COLLECTION_SLOT_NAME = name + \"CollectionSlot\";\n    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope, children } = props;\n        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, context.collectionRef);\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {\n            ref: composedRefs,\n            children\n        });\n    });\n    CollectionSlot.displayName = COLLECTION_SLOT_NAME;\n    const ITEM_SLOT_NAME = name + \"CollectionItemSlot\";\n    const ITEM_DATA_ATTR = \"data-radix-collection-item\";\n    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope, children, ...itemData } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref);\n        const context = useCollectionContext(ITEM_SLOT_NAME, scope);\n        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n            context.itemMap.set(ref, {\n                ref,\n                ...itemData\n            });\n            return ()=>void context.itemMap.delete(ref);\n        });\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {\n            ...{\n                [ITEM_DATA_ATTR]: \"\"\n            },\n            ref: composedRefs,\n            children\n        });\n    });\n    CollectionItemSlot.displayName = ITEM_SLOT_NAME;\n    function useCollection(scope) {\n        const context = useCollectionContext(name + \"CollectionConsumer\", scope);\n        const getItems = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{\n            const collectionNode = context.collectionRef.current;\n            if (!collectionNode) return [];\n            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));\n            const items = Array.from(context.itemMap.values());\n            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));\n            return orderedItems;\n        }, [\n            context.collectionRef,\n            context.itemMap\n        ]);\n        return getItems;\n    }\n    return [\n        {\n            Provider: CollectionProvider,\n            Slot: CollectionSlot,\n            ItemSlot: CollectionItemSlot\n        },\n        useCollection,\n        createCollectionScope\n    ];\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1jb2xsZWN0aW9uQDEuMS4wX0B0eXBlcytyZWFjdC1kb21AMTguMi4xOF9AdHlwZXMrcmVhY3RAMTguMi40OF9yZWFjdC1kb21AMTguMl96N2w2d3Nyemd4eGN2YzZmbHphbnZmZDVzcS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbGxlY3Rpb24vZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQjtBQUNpQjtBQUNIO0FBQ1g7QUFvQ2Y7QUF2Qk4sU0FBU0ssaUJBQWlFQyxJQUFBO0lBS3hFLE1BQU1DLGdCQUFnQkQsT0FBTztJQUM3QixNQUFNLENBQUNFLHlCQUF5QkMsc0JBQXFCLEdBQUlSLDJFQUFrQkEsQ0FBQ007SUFPNUUsTUFBTSxDQUFDRyx3QkFBd0JDLHFCQUFvQixHQUFJSCx3QkFDckRELGVBQ0E7UUFBRUssZUFBZTtZQUFFQyxTQUFTO1FBQUs7UUFBR0MsU0FBUyxvQkFBSUM7SUFBTTtJQUd6RCxNQUFNQyxxQkFBMkUsQ0FBQ0M7UUFDaEYsTUFBTSxFQUFFQyxLQUFBLEVBQU9DLFFBQUEsRUFBUyxHQUFJRjtRQUM1QixNQUFNRyxNQUFNcEIseUNBQU0sQ0FBMEI7UUFDNUMsTUFBTWMsVUFBVWQseUNBQU0sQ0FBZ0Msb0JBQUllLE9BQU9GLE9BQUE7UUFDakUsT0FDRSxnQkFBQVQsc0RBQUFBLENBQUNNLHdCQUFBO1lBQXVCUTtZQUFjSjtZQUFrQkYsZUFBZVE7WUFDcEVEO1FBQUE7SUFHUDtJQUVBSCxtQkFBbUJNLFdBQUEsR0FBY2Y7SUFNakMsTUFBTWdCLHVCQUF1QmpCLE9BQU87SUFFcEMsTUFBTWtCLCtCQUFpQnhCLDZDQUFNLENBQzNCLENBQUNpQixPQUFPUztRQUNOLE1BQU0sRUFBRVIsS0FBQSxFQUFPQyxRQUFBLEVBQVMsR0FBSUY7UUFDNUIsTUFBTVUsVUFBVWhCLHFCQUFxQlksc0JBQXNCTDtRQUMzRCxNQUFNVSxlQUFlMUIsNkVBQWVBLENBQUN3QixjQUFjQyxRQUFRZixhQUFhO1FBQ3hFLE9BQU8sZ0JBQUFSLHNEQUFBQSxDQUFDRCxzREFBSUEsRUFBSjtZQUFLaUIsS0FBS1E7WUFBZVQ7UUFBQTtJQUNuQztJQUdGSyxlQUFlRixXQUFBLEdBQWNDO0lBTTdCLE1BQU1NLGlCQUFpQnZCLE9BQU87SUFDOUIsTUFBTXdCLGlCQUFpQjtJQU92QixNQUFNQyxtQ0FBcUIvQiw2Q0FBTSxDQUMvQixDQUFDaUIsT0FBT1M7UUFDTixNQUFNLEVBQUVSLEtBQUEsRUFBT0MsUUFBQSxFQUFVLEdBQUdhLFVBQVMsR0FBSWY7UUFDekMsTUFBTUcsTUFBTXBCLHlDQUFNLENBQW9CO1FBQ3RDLE1BQU00QixlQUFlMUIsNkVBQWVBLENBQUN3QixjQUFjTjtRQUNuRCxNQUFNTyxVQUFVaEIscUJBQXFCa0IsZ0JBQWdCWDtRQUVyRGxCLDRDQUFNLENBQVU7WUFDZDJCLFFBQVFiLE9BQUEsQ0FBUW9CLEdBQUEsQ0FBSWQsS0FBSztnQkFBRUE7Z0JBQUssR0FBSVksUUFBQTtZQUFpQztZQUNyRSxPQUFPLElBQU0sS0FBS0wsUUFBUWIsT0FBQSxDQUFRcUIsTUFBQSxDQUFPZjtRQUMzQztRQUVBLE9BQ0UsZ0JBQUFoQixzREFBQUEsQ0FBQ0Qsc0RBQUlBLEVBQUo7WUFBTSxHQUFHO2dCQUFFLENBQUMyQixlQUFjLEVBQUc7WUFBRztZQUFHVixLQUFLUTtZQUN0Q1Q7UUFBQTtJQUdQO0lBR0ZZLG1CQUFtQlQsV0FBQSxHQUFjTztJQU1qQyxTQUFTTyxjQUFjbEIsS0FBQTtRQUNyQixNQUFNUyxVQUFVaEIscUJBQXFCTCxPQUFPLHNCQUFzQlk7UUFFbEUsTUFBTW1CLFdBQVdyQyw4Q0FBTSxDQUFZO1lBQ2pDLE1BQU11QyxpQkFBaUJaLFFBQVFmLGFBQUEsQ0FBY0MsT0FBQTtZQUM3QyxJQUFJLENBQUMwQixnQkFBZ0IsT0FBTyxFQUFDO1lBQzdCLE1BQU1DLGVBQWVDLE1BQU1DLElBQUEsQ0FBS0gsZUFBZUksZ0JBQUEsQ0FBaUIsSUFBSWIsZUFBYyxFQUFHO1lBQ3JGLE1BQU1jLFFBQVFILE1BQU1DLElBQUEsQ0FBS2YsUUFBUWIsT0FBQSxDQUFRK0IsTUFBQTtZQUN6QyxNQUFNQyxlQUFlRixNQUFNRyxJQUFBLENBQ3pCLENBQUNDLEdBQUdDLElBQU1ULGFBQWFVLE9BQUEsQ0FBUUYsRUFBRTVCLEdBQUEsQ0FBSVAsT0FBUSxJQUFJMkIsYUFBYVUsT0FBQSxDQUFRRCxFQUFFN0IsR0FBQSxDQUFJUCxPQUFRO1lBRXRGLE9BQU9pQztRQUNULEdBQUc7WUFBQ25CLFFBQVFmLGFBQUE7WUFBZWUsUUFBUWIsT0FBTztTQUFDO1FBRTNDLE9BQU91QjtJQUNUO0lBRUEsT0FBTztRQUNMO1lBQUVjLFVBQVVuQztZQUFvQmIsTUFBTXFCO1lBQWdCNEIsVUFBVXJCO1FBQW1CO1FBQ25GSztRQUNBM0I7S0FDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uLi9zcmMvQ29sbGVjdGlvbi50c3g/NzlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dFNjb3BlIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29tcG9zZWRSZWZzIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcyc7XG5pbXBvcnQgeyBTbG90IH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXNsb3QnO1xuXG50eXBlIFNsb3RQcm9wcyA9IFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2xvdD47XG50eXBlIENvbGxlY3Rpb25FbGVtZW50ID0gSFRNTEVsZW1lbnQ7XG5pbnRlcmZhY2UgQ29sbGVjdGlvblByb3BzIGV4dGVuZHMgU2xvdFByb3BzIHtcbiAgc2NvcGU6IGFueTtcbn1cblxuLy8gV2UgaGF2ZSByZXNvcnRlZCB0byByZXR1cm5pbmcgc2xvdHMgZGlyZWN0bHkgcmF0aGVyIHRoYW4gZXhwb3NpbmcgcHJpbWl0aXZlcyB0aGF0IGNhbiB0aGVuXG4vLyBiZSBzbG90dGVkIGxpa2UgYDxDb2xsZWN0aW9uSXRlbSBhcz17U2xvdH0+4oCmPC9Db2xsZWN0aW9uSXRlbT5gLlxuLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGVuY291bnRlcmVkIGlzc3VlcyB3aXRoIGdlbmVyaWMgdHlwZXMgdGhhdCBjYW5ub3QgYmUgc3RhdGljYWxseSBhbmFseXNlZFxuLy8gZHVlIHRvIGNyZWF0aW5nIHRoZW0gZHluYW1pY2FsbHkgdmlhIGNyZWF0ZUNvbGxlY3Rpb24uXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbGxlY3Rpb248SXRlbUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCwgSXRlbURhdGEgPSB7fT4obmFtZTogc3RyaW5nKSB7XG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbGxlY3Rpb25Qcm92aWRlclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGNvbnN0IFBST1ZJREVSX05BTUUgPSBuYW1lICsgJ0NvbGxlY3Rpb25Qcm92aWRlcic7XG4gIGNvbnN0IFtjcmVhdGVDb2xsZWN0aW9uQ29udGV4dCwgY3JlYXRlQ29sbGVjdGlvblNjb3BlXSA9IGNyZWF0ZUNvbnRleHRTY29wZShQUk9WSURFUl9OQU1FKTtcblxuICB0eXBlIENvbnRleHRWYWx1ZSA9IHtcbiAgICBjb2xsZWN0aW9uUmVmOiBSZWFjdC5SZWZPYmplY3Q8Q29sbGVjdGlvbkVsZW1lbnQ+O1xuICAgIGl0ZW1NYXA6IE1hcDxSZWFjdC5SZWZPYmplY3Q8SXRlbUVsZW1lbnQ+LCB7IHJlZjogUmVhY3QuUmVmT2JqZWN0PEl0ZW1FbGVtZW50PiB9ICYgSXRlbURhdGE+O1xuICB9O1xuXG4gIGNvbnN0IFtDb2xsZWN0aW9uUHJvdmlkZXJJbXBsLCB1c2VDb2xsZWN0aW9uQ29udGV4dF0gPSBjcmVhdGVDb2xsZWN0aW9uQ29udGV4dDxDb250ZXh0VmFsdWU+KFxuICAgIFBST1ZJREVSX05BTUUsXG4gICAgeyBjb2xsZWN0aW9uUmVmOiB7IGN1cnJlbnQ6IG51bGwgfSwgaXRlbU1hcDogbmV3IE1hcCgpIH1cbiAgKTtcblxuICBjb25zdCBDb2xsZWN0aW9uUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7IHNjb3BlOiBhbnkgfT4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHNjb3BlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPENvbGxlY3Rpb25FbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBpdGVtTWFwID0gUmVhY3QudXNlUmVmPENvbnRleHRWYWx1ZVsnaXRlbU1hcCddPihuZXcgTWFwKCkpLmN1cnJlbnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2xsZWN0aW9uUHJvdmlkZXJJbXBsIHNjb3BlPXtzY29wZX0gaXRlbU1hcD17aXRlbU1hcH0gY29sbGVjdGlvblJlZj17cmVmfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db2xsZWN0aW9uUHJvdmlkZXJJbXBsPlxuICAgICk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblByb3ZpZGVyLmRpc3BsYXlOYW1lID0gUFJPVklERVJfTkFNRTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb2xsZWN0aW9uU2xvdFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGNvbnN0IENPTExFQ1RJT05fU0xPVF9OQU1FID0gbmFtZSArICdDb2xsZWN0aW9uU2xvdCc7XG5cbiAgY29uc3QgQ29sbGVjdGlvblNsb3QgPSBSZWFjdC5mb3J3YXJkUmVmPENvbGxlY3Rpb25FbGVtZW50LCBDb2xsZWN0aW9uUHJvcHM+KFxuICAgIChwcm9wcywgZm9yd2FyZGVkUmVmKSA9PiB7XG4gICAgICBjb25zdCB7IHNjb3BlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29sbGVjdGlvbkNvbnRleHQoQ09MTEVDVElPTl9TTE9UX05BTUUsIHNjb3BlKTtcbiAgICAgIGNvbnN0IGNvbXBvc2VkUmVmcyA9IHVzZUNvbXBvc2VkUmVmcyhmb3J3YXJkZWRSZWYsIGNvbnRleHQuY29sbGVjdGlvblJlZik7XG4gICAgICByZXR1cm4gPFNsb3QgcmVmPXtjb21wb3NlZFJlZnN9PntjaGlsZHJlbn08L1Nsb3Q+O1xuICAgIH1cbiAgKTtcblxuICBDb2xsZWN0aW9uU2xvdC5kaXNwbGF5TmFtZSA9IENPTExFQ1RJT05fU0xPVF9OQU1FO1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbGxlY3Rpb25JdGVtXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgY29uc3QgSVRFTV9TTE9UX05BTUUgPSBuYW1lICsgJ0NvbGxlY3Rpb25JdGVtU2xvdCc7XG4gIGNvbnN0IElURU1fREFUQV9BVFRSID0gJ2RhdGEtcmFkaXgtY29sbGVjdGlvbi1pdGVtJztcblxuICB0eXBlIENvbGxlY3Rpb25JdGVtU2xvdFByb3BzID0gSXRlbURhdGEgJiB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICBzY29wZTogYW55O1xuICB9O1xuXG4gIGNvbnN0IENvbGxlY3Rpb25JdGVtU2xvdCA9IFJlYWN0LmZvcndhcmRSZWY8SXRlbUVsZW1lbnQsIENvbGxlY3Rpb25JdGVtU2xvdFByb3BzPihcbiAgICAocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICAgICAgY29uc3QgeyBzY29wZSwgY2hpbGRyZW4sIC4uLml0ZW1EYXRhIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxJdGVtRWxlbWVudD4obnVsbCk7XG4gICAgICBjb25zdCBjb21wb3NlZFJlZnMgPSB1c2VDb21wb3NlZFJlZnMoZm9yd2FyZGVkUmVmLCByZWYpO1xuICAgICAgY29uc3QgY29udGV4dCA9IHVzZUNvbGxlY3Rpb25Db250ZXh0KElURU1fU0xPVF9OQU1FLCBzY29wZSk7XG5cbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuaXRlbU1hcC5zZXQocmVmLCB7IHJlZiwgLi4uKGl0ZW1EYXRhIGFzIHVua25vd24gYXMgSXRlbURhdGEpIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4gdm9pZCBjb250ZXh0Lml0ZW1NYXAuZGVsZXRlKHJlZik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNsb3Qgey4uLnsgW0lURU1fREFUQV9BVFRSXTogJycgfX0gcmVmPXtjb21wb3NlZFJlZnN9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TbG90PlxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgQ29sbGVjdGlvbkl0ZW1TbG90LmRpc3BsYXlOYW1lID0gSVRFTV9TTE9UX05BTUU7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogdXNlQ29sbGVjdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGZ1bmN0aW9uIHVzZUNvbGxlY3Rpb24oc2NvcGU6IGFueSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb2xsZWN0aW9uQ29udGV4dChuYW1lICsgJ0NvbGxlY3Rpb25Db25zdW1lcicsIHNjb3BlKTtcblxuICAgIGNvbnN0IGdldEl0ZW1zID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgY29uc3QgY29sbGVjdGlvbk5vZGUgPSBjb250ZXh0LmNvbGxlY3Rpb25SZWYuY3VycmVudDtcbiAgICAgIGlmICghY29sbGVjdGlvbk5vZGUpIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IG9yZGVyZWROb2RlcyA9IEFycmF5LmZyb20oY29sbGVjdGlvbk5vZGUucXVlcnlTZWxlY3RvckFsbChgWyR7SVRFTV9EQVRBX0FUVFJ9XWApKTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjb250ZXh0Lml0ZW1NYXAudmFsdWVzKCkpO1xuICAgICAgY29uc3Qgb3JkZXJlZEl0ZW1zID0gaXRlbXMuc29ydChcbiAgICAgICAgKGEsIGIpID0+IG9yZGVyZWROb2Rlcy5pbmRleE9mKGEucmVmLmN1cnJlbnQhKSAtIG9yZGVyZWROb2Rlcy5pbmRleE9mKGIucmVmLmN1cnJlbnQhKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBvcmRlcmVkSXRlbXM7XG4gICAgfSwgW2NvbnRleHQuY29sbGVjdGlvblJlZiwgY29udGV4dC5pdGVtTWFwXSk7XG5cbiAgICByZXR1cm4gZ2V0SXRlbXM7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIHsgUHJvdmlkZXI6IENvbGxlY3Rpb25Qcm92aWRlciwgU2xvdDogQ29sbGVjdGlvblNsb3QsIEl0ZW1TbG90OiBDb2xsZWN0aW9uSXRlbVNsb3QgfSxcbiAgICB1c2VDb2xsZWN0aW9uLFxuICAgIGNyZWF0ZUNvbGxlY3Rpb25TY29wZSxcbiAgXSBhcyBjb25zdDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiB9O1xuZXhwb3J0IHR5cGUgeyBDb2xsZWN0aW9uUHJvcHMgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHRTY29wZSIsInVzZUNvbXBvc2VkUmVmcyIsIlNsb3QiLCJqc3giLCJjcmVhdGVDb2xsZWN0aW9uIiwibmFtZSIsIlBST1ZJREVSX05BTUUiLCJjcmVhdGVDb2xsZWN0aW9uQ29udGV4dCIsImNyZWF0ZUNvbGxlY3Rpb25TY29wZSIsIkNvbGxlY3Rpb25Qcm92aWRlckltcGwiLCJ1c2VDb2xsZWN0aW9uQ29udGV4dCIsImNvbGxlY3Rpb25SZWYiLCJjdXJyZW50IiwiaXRlbU1hcCIsIk1hcCIsIkNvbGxlY3Rpb25Qcm92aWRlciIsInByb3BzIiwic2NvcGUiLCJjaGlsZHJlbiIsInJlZiIsInVzZVJlZiIsImRpc3BsYXlOYW1lIiwiQ09MTEVDVElPTl9TTE9UX05BTUUiLCJDb2xsZWN0aW9uU2xvdCIsImZvcndhcmRSZWYiLCJmb3J3YXJkZWRSZWYiLCJjb250ZXh0IiwiY29tcG9zZWRSZWZzIiwiSVRFTV9TTE9UX05BTUUiLCJJVEVNX0RBVEFfQVRUUiIsIkNvbGxlY3Rpb25JdGVtU2xvdCIsIml0ZW1EYXRhIiwidXNlRWZmZWN0Iiwic2V0IiwiZGVsZXRlIiwidXNlQ29sbGVjdGlvbiIsImdldEl0ZW1zIiwidXNlQ2FsbGJhY2siLCJjb2xsZWN0aW9uTm9kZSIsIm9yZGVyZWROb2RlcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtcyIsInZhbHVlcyIsIm9yZGVyZWRJdGVtcyIsInNvcnQiLCJhIiwiYiIsImluZGV4T2YiLCJQcm92aWRlciIsIkl0ZW1TbG90Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@radix-ui+react-collection@1.1.0_@types+react-dom@18.2.18_@types+react@18.2.48_react-dom@18.2_z7l6wsrzgxxcvc6flzanvfd5sq/node_modules/@radix-ui/react-collection/dist/index.mjs\n");

/***/ })

};
;