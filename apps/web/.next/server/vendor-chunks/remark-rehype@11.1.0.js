"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-rehype@11.1.0";
exports.ids = ["vendor-chunks/remark-rehype@11.1.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/lib/index.js":
/*!*********************************************************************************************!*\
  !*** ../../node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/lib/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkRehype)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-hast */ \"(rsc)/../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/index.js\");\n// Include `data` fields in mdast and `raw` nodes in hast.\n/// <reference types=\"mdast-util-to-hast\" />\n\n/**\n * @typedef {import('hast').Root} HastRoot\n * @typedef {import('mdast').Root} MdastRoot\n * @typedef {import('mdast-util-to-hast').Options} ToHastOptions\n * @typedef {import('unified').Processor} Processor\n * @typedef {import('vfile').VFile} VFile\n */\n\n/**\n * @typedef {Omit<ToHastOptions, 'file'>} Options\n *\n * @callback TransformBridge\n *   Bridge-mode.\n *\n *   Runs the destination with the new hast tree.\n *   Discards result.\n * @param {MdastRoot} tree\n *   Tree.\n * @param {VFile} file\n *   File.\n * @returns {Promise<undefined>}\n *   Nothing.\n *\n * @callback TransformMutate\n *  Mutate-mode.\n *\n *  Further transformers run on the hast tree.\n * @param {MdastRoot} tree\n *   Tree.\n * @param {VFile} file\n *   File.\n * @returns {HastRoot}\n *   Tree (hast).\n */\n\n\n\n/**\n * Turn markdown into HTML.\n *\n * ##### Notes\n *\n * ###### Signature\n *\n * *   if a processor is given, runs the (rehype) plugins used on it with a\n *     hast tree, then discards the result (*bridge mode*)\n * *   otherwise, returns a hast tree, the plugins used after `remarkRehype`\n *     are rehype plugins (*mutate mode*)\n *\n * > 👉 **Note**: It’s highly unlikely that you want to pass a `processor`.\n *\n * ###### HTML\n *\n * Raw HTML is available in mdast as `html` nodes and can be embedded in hast\n * as semistandard `raw` nodes.\n * Most plugins ignore `raw` nodes but two notable ones don’t:\n *\n * *   `rehype-stringify` also has an option `allowDangerousHtml` which will\n *     output the raw HTML.\n *     This is typically discouraged as noted by the option name but is useful if\n *     you completely trust authors\n * *   `rehype-raw` can handle the raw embedded HTML strings by parsing them\n *     into standard hast nodes (`element`, `text`, etc).\n *     This is a heavy task as it needs a full HTML parser, but it is the only way\n *     to support untrusted content\n *\n * ###### Footnotes\n *\n * Many options supported here relate to footnotes.\n * Footnotes are not specified by CommonMark, which we follow by default.\n * They are supported by GitHub, so footnotes can be enabled in markdown with\n * `remark-gfm`.\n *\n * The options `footnoteBackLabel` and `footnoteLabel` define natural language\n * that explains footnotes, which is hidden for sighted users but shown to\n * assistive technology.\n * When your page is not in English, you must define translated values.\n *\n * Back references use ARIA attributes, but the section label itself uses a\n * heading that is hidden with an `sr-only` class.\n * To show it to sighted users, define different attributes in\n * `footnoteLabelProperties`.\n *\n * ###### Clobbering\n *\n * Footnotes introduces a problem, as it links footnote calls to footnote\n * definitions on the page through `id` attributes generated from user content,\n * which results in DOM clobbering.\n *\n * DOM clobbering is this:\n *\n * ```html\n * <p id=x></p>\n * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>\n * ```\n *\n * Elements by their ID are made available by browsers on the `window` object,\n * which is a security risk.\n * Using a prefix solves this problem.\n *\n * More information on how to handle clobbering and the prefix is explained in\n * *Example: headings (DOM clobbering)* in `rehype-sanitize`.\n *\n * ###### Unknown nodes\n *\n * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.\n * The default behavior for unknown nodes is:\n *\n * *   when the node has a `value` (and doesn’t have `data.hName`,\n *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`\n *     node\n * *   otherwise, create a `<div>` element (which could be changed with\n *     `data.hName`), with its children mapped from mdast to hast as well\n *\n * This behavior can be changed by passing an `unknownHandler`.\n *\n * @overload\n * @param {Processor} processor\n * @param {Readonly<Options> | null | undefined} [options]\n * @returns {TransformBridge}\n *\n * @overload\n * @param {Readonly<Options> | null | undefined} [options]\n * @returns {TransformMutate}\n *\n * @param {Readonly<Options> | Processor | null | undefined} [destination]\n *   Processor or configuration (optional).\n * @param {Readonly<Options> | null | undefined} [options]\n *   When a processor was given, configuration (optional).\n * @returns {TransformBridge | TransformMutate}\n *   Transform.\n */\nfunction remarkRehype(destination, options) {\n  if (destination && 'run' in destination) {\n    /**\n     * @type {TransformBridge}\n     */\n    return async function (tree, file) {\n      // Cast because root in -> root out.\n      const hastTree = /** @type {HastRoot} */ (\n        (0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(tree, {file, ...options})\n      )\n      await destination.run(hastTree, file)\n    }\n  }\n\n  /**\n   * @type {TransformMutate}\n   */\n  return function (tree, file) {\n    // Cast because root in -> root out.\n    return /** @type {HastRoot} */ (\n      (0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(tree, {file, ...(options || destination)})\n    )\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlbWFyay1yZWh5cGVAMTEuMS4wL25vZGVfbW9kdWxlcy9yZW1hcmstcmVoeXBlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLDZCQUE2QjtBQUMxQyxhQUFhLHVCQUF1QjtBQUNwQzs7QUFFQTtBQUNBLGFBQWEsNkJBQTZCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxzQ0FBc0M7QUFDakQsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXLHNDQUFzQztBQUNqRCxhQUFhO0FBQ2I7QUFDQSxXQUFXLGtEQUFrRDtBQUM3RDtBQUNBLFdBQVcsc0NBQXNDO0FBQ2pEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVU7QUFDNUMsUUFBUSwwREFBTSxRQUFRLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyxNQUFNLDBEQUFNLFFBQVEsa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlbWFyay1yZWh5cGVAMTEuMS4wL25vZGVfbW9kdWxlcy9yZW1hcmstcmVoeXBlL2xpYi9pbmRleC5qcz9kYWM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgYGRhdGFgIGZpZWxkcyBpbiBtZGFzdCBhbmQgYHJhd2Agbm9kZXMgaW4gaGFzdC5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibWRhc3QtdXRpbC10by1oYXN0XCIgLz5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gSGFzdFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gTWRhc3RSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLWhhc3QnKS5PcHRpb25zfSBUb0hhc3RPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yfSBQcm9jZXNzb3JcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3ZmaWxlJykuVkZpbGV9IFZGaWxlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T21pdDxUb0hhc3RPcHRpb25zLCAnZmlsZSc+fSBPcHRpb25zXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZm9ybUJyaWRnZVxuICogICBCcmlkZ2UtbW9kZS5cbiAqXG4gKiAgIFJ1bnMgdGhlIGRlc3RpbmF0aW9uIHdpdGggdGhlIG5ldyBoYXN0IHRyZWUuXG4gKiAgIERpc2NhcmRzIHJlc3VsdC5cbiAqIEBwYXJhbSB7TWRhc3RSb290fSB0cmVlXG4gKiAgIFRyZWUuXG4gKiBAcGFyYW0ge1ZGaWxlfSBmaWxlXG4gKiAgIEZpbGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fVxuICogICBOb3RoaW5nLlxuICpcbiAqIEBjYWxsYmFjayBUcmFuc2Zvcm1NdXRhdGVcbiAqICBNdXRhdGUtbW9kZS5cbiAqXG4gKiAgRnVydGhlciB0cmFuc2Zvcm1lcnMgcnVuIG9uIHRoZSBoYXN0IHRyZWUuXG4gKiBAcGFyYW0ge01kYXN0Um9vdH0gdHJlZVxuICogICBUcmVlLlxuICogQHBhcmFtIHtWRmlsZX0gZmlsZVxuICogICBGaWxlLlxuICogQHJldHVybnMge0hhc3RSb290fVxuICogICBUcmVlIChoYXN0KS5cbiAqL1xuXG5pbXBvcnQge3RvSGFzdH0gZnJvbSAnbWRhc3QtdXRpbC10by1oYXN0J1xuXG4vKipcbiAqIFR1cm4gbWFya2Rvd24gaW50byBIVE1MLlxuICpcbiAqICMjIyMjIE5vdGVzXG4gKlxuICogIyMjIyMjIFNpZ25hdHVyZVxuICpcbiAqICogICBpZiBhIHByb2Nlc3NvciBpcyBnaXZlbiwgcnVucyB0aGUgKHJlaHlwZSkgcGx1Z2lucyB1c2VkIG9uIGl0IHdpdGggYVxuICogICAgIGhhc3QgdHJlZSwgdGhlbiBkaXNjYXJkcyB0aGUgcmVzdWx0ICgqYnJpZGdlIG1vZGUqKVxuICogKiAgIG90aGVyd2lzZSwgcmV0dXJucyBhIGhhc3QgdHJlZSwgdGhlIHBsdWdpbnMgdXNlZCBhZnRlciBgcmVtYXJrUmVoeXBlYFxuICogICAgIGFyZSByZWh5cGUgcGx1Z2lucyAoKm11dGF0ZSBtb2RlKilcbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IEl04oCZcyBoaWdobHkgdW5saWtlbHkgdGhhdCB5b3Ugd2FudCB0byBwYXNzIGEgYHByb2Nlc3NvcmAuXG4gKlxuICogIyMjIyMjIEhUTUxcbiAqXG4gKiBSYXcgSFRNTCBpcyBhdmFpbGFibGUgaW4gbWRhc3QgYXMgYGh0bWxgIG5vZGVzIGFuZCBjYW4gYmUgZW1iZWRkZWQgaW4gaGFzdFxuICogYXMgc2VtaXN0YW5kYXJkIGByYXdgIG5vZGVzLlxuICogTW9zdCBwbHVnaW5zIGlnbm9yZSBgcmF3YCBub2RlcyBidXQgdHdvIG5vdGFibGUgb25lcyBkb27igJl0OlxuICpcbiAqICogICBgcmVoeXBlLXN0cmluZ2lmeWAgYWxzbyBoYXMgYW4gb3B0aW9uIGBhbGxvd0Rhbmdlcm91c0h0bWxgIHdoaWNoIHdpbGxcbiAqICAgICBvdXRwdXQgdGhlIHJhdyBIVE1MLlxuICogICAgIFRoaXMgaXMgdHlwaWNhbGx5IGRpc2NvdXJhZ2VkIGFzIG5vdGVkIGJ5IHRoZSBvcHRpb24gbmFtZSBidXQgaXMgdXNlZnVsIGlmXG4gKiAgICAgeW91IGNvbXBsZXRlbHkgdHJ1c3QgYXV0aG9yc1xuICogKiAgIGByZWh5cGUtcmF3YCBjYW4gaGFuZGxlIHRoZSByYXcgZW1iZWRkZWQgSFRNTCBzdHJpbmdzIGJ5IHBhcnNpbmcgdGhlbVxuICogICAgIGludG8gc3RhbmRhcmQgaGFzdCBub2RlcyAoYGVsZW1lbnRgLCBgdGV4dGAsIGV0YykuXG4gKiAgICAgVGhpcyBpcyBhIGhlYXZ5IHRhc2sgYXMgaXQgbmVlZHMgYSBmdWxsIEhUTUwgcGFyc2VyLCBidXQgaXQgaXMgdGhlIG9ubHkgd2F5XG4gKiAgICAgdG8gc3VwcG9ydCB1bnRydXN0ZWQgY29udGVudFxuICpcbiAqICMjIyMjIyBGb290bm90ZXNcbiAqXG4gKiBNYW55IG9wdGlvbnMgc3VwcG9ydGVkIGhlcmUgcmVsYXRlIHRvIGZvb3Rub3Rlcy5cbiAqIEZvb3Rub3RlcyBhcmUgbm90IHNwZWNpZmllZCBieSBDb21tb25NYXJrLCB3aGljaCB3ZSBmb2xsb3cgYnkgZGVmYXVsdC5cbiAqIFRoZXkgYXJlIHN1cHBvcnRlZCBieSBHaXRIdWIsIHNvIGZvb3Rub3RlcyBjYW4gYmUgZW5hYmxlZCBpbiBtYXJrZG93biB3aXRoXG4gKiBgcmVtYXJrLWdmbWAuXG4gKlxuICogVGhlIG9wdGlvbnMgYGZvb3Rub3RlQmFja0xhYmVsYCBhbmQgYGZvb3Rub3RlTGFiZWxgIGRlZmluZSBuYXR1cmFsIGxhbmd1YWdlXG4gKiB0aGF0IGV4cGxhaW5zIGZvb3Rub3Rlcywgd2hpY2ggaXMgaGlkZGVuIGZvciBzaWdodGVkIHVzZXJzIGJ1dCBzaG93biB0b1xuICogYXNzaXN0aXZlIHRlY2hub2xvZ3kuXG4gKiBXaGVuIHlvdXIgcGFnZSBpcyBub3QgaW4gRW5nbGlzaCwgeW91IG11c3QgZGVmaW5lIHRyYW5zbGF0ZWQgdmFsdWVzLlxuICpcbiAqIEJhY2sgcmVmZXJlbmNlcyB1c2UgQVJJQSBhdHRyaWJ1dGVzLCBidXQgdGhlIHNlY3Rpb24gbGFiZWwgaXRzZWxmIHVzZXMgYVxuICogaGVhZGluZyB0aGF0IGlzIGhpZGRlbiB3aXRoIGFuIGBzci1vbmx5YCBjbGFzcy5cbiAqIFRvIHNob3cgaXQgdG8gc2lnaHRlZCB1c2VycywgZGVmaW5lIGRpZmZlcmVudCBhdHRyaWJ1dGVzIGluXG4gKiBgZm9vdG5vdGVMYWJlbFByb3BlcnRpZXNgLlxuICpcbiAqICMjIyMjIyBDbG9iYmVyaW5nXG4gKlxuICogRm9vdG5vdGVzIGludHJvZHVjZXMgYSBwcm9ibGVtLCBhcyBpdCBsaW5rcyBmb290bm90ZSBjYWxscyB0byBmb290bm90ZVxuICogZGVmaW5pdGlvbnMgb24gdGhlIHBhZ2UgdGhyb3VnaCBgaWRgIGF0dHJpYnV0ZXMgZ2VuZXJhdGVkIGZyb20gdXNlciBjb250ZW50LFxuICogd2hpY2ggcmVzdWx0cyBpbiBET00gY2xvYmJlcmluZy5cbiAqXG4gKiBET00gY2xvYmJlcmluZyBpcyB0aGlzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxwIGlkPXg+PC9wPlxuICogPHNjcmlwdD5hbGVydCh4KSAvLyBgeGAgbm93IHJlZmVycyB0byB0aGUgRE9NIGBwI3hgIGVsZW1lbnQ8L3NjcmlwdD5cbiAqIGBgYFxuICpcbiAqIEVsZW1lbnRzIGJ5IHRoZWlyIElEIGFyZSBtYWRlIGF2YWlsYWJsZSBieSBicm93c2VycyBvbiB0aGUgYHdpbmRvd2Agb2JqZWN0LFxuICogd2hpY2ggaXMgYSBzZWN1cml0eSByaXNrLlxuICogVXNpbmcgYSBwcmVmaXggc29sdmVzIHRoaXMgcHJvYmxlbS5cbiAqXG4gKiBNb3JlIGluZm9ybWF0aW9uIG9uIGhvdyB0byBoYW5kbGUgY2xvYmJlcmluZyBhbmQgdGhlIHByZWZpeCBpcyBleHBsYWluZWQgaW5cbiAqICpFeGFtcGxlOiBoZWFkaW5ncyAoRE9NIGNsb2JiZXJpbmcpKiBpbiBgcmVoeXBlLXNhbml0aXplYC5cbiAqXG4gKiAjIyMjIyMgVW5rbm93biBub2Rlc1xuICpcbiAqIFVua25vd24gbm9kZXMgYXJlIG5vZGVzIHdpdGggYSB0eXBlIHRoYXQgaXNu4oCZdCBpbiBgaGFuZGxlcnNgIG9yIGBwYXNzVGhyb3VnaGAuXG4gKiBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3IgdW5rbm93biBub2RlcyBpczpcbiAqXG4gKiAqICAgd2hlbiB0aGUgbm9kZSBoYXMgYSBgdmFsdWVgIChhbmQgZG9lc27igJl0IGhhdmUgYGRhdGEuaE5hbWVgLFxuICogICAgIGBkYXRhLmhQcm9wZXJ0aWVzYCwgb3IgYGRhdGEuaENoaWxkcmVuYCwgc2VlIGxhdGVyKSwgY3JlYXRlIGEgaGFzdCBgdGV4dGBcbiAqICAgICBub2RlXG4gKiAqICAgb3RoZXJ3aXNlLCBjcmVhdGUgYSBgPGRpdj5gIGVsZW1lbnQgKHdoaWNoIGNvdWxkIGJlIGNoYW5nZWQgd2l0aFxuICogICAgIGBkYXRhLmhOYW1lYCksIHdpdGggaXRzIGNoaWxkcmVuIG1hcHBlZCBmcm9tIG1kYXN0IHRvIGhhc3QgYXMgd2VsbFxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIGNoYW5nZWQgYnkgcGFzc2luZyBhbiBgdW5rbm93bkhhbmRsZXJgLlxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtQcm9jZXNzb3J9IHByb2Nlc3NvclxuICogQHBhcmFtIHtSZWFkb25seTxPcHRpb25zPiB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogQHJldHVybnMge1RyYW5zZm9ybUJyaWRnZX1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7UmVhZG9ubHk8T3B0aW9ucz4gfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtUcmFuc2Zvcm1NdXRhdGV9XG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxPcHRpb25zPiB8IFByb2Nlc3NvciB8IG51bGwgfCB1bmRlZmluZWR9IFtkZXN0aW5hdGlvbl1cbiAqICAgUHJvY2Vzc29yIG9yIGNvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8T3B0aW9ucz4gfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgV2hlbiBhIHByb2Nlc3NvciB3YXMgZ2l2ZW4sIGNvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtUcmFuc2Zvcm1CcmlkZ2UgfCBUcmFuc2Zvcm1NdXRhdGV9XG4gKiAgIFRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtYXJrUmVoeXBlKGRlc3RpbmF0aW9uLCBvcHRpb25zKSB7XG4gIGlmIChkZXN0aW5hdGlvbiAmJiAncnVuJyBpbiBkZXN0aW5hdGlvbikge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUcmFuc2Zvcm1CcmlkZ2V9XG4gICAgICovXG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uICh0cmVlLCBmaWxlKSB7XG4gICAgICAvLyBDYXN0IGJlY2F1c2Ugcm9vdCBpbiAtPiByb290IG91dC5cbiAgICAgIGNvbnN0IGhhc3RUcmVlID0gLyoqIEB0eXBlIHtIYXN0Um9vdH0gKi8gKFxuICAgICAgICB0b0hhc3QodHJlZSwge2ZpbGUsIC4uLm9wdGlvbnN9KVxuICAgICAgKVxuICAgICAgYXdhaXQgZGVzdGluYXRpb24ucnVuKGhhc3RUcmVlLCBmaWxlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7VHJhbnNmb3JtTXV0YXRlfVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uICh0cmVlLCBmaWxlKSB7XG4gICAgLy8gQ2FzdCBiZWNhdXNlIHJvb3QgaW4gLT4gcm9vdCBvdXQuXG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7SGFzdFJvb3R9ICovIChcbiAgICAgIHRvSGFzdCh0cmVlLCB7ZmlsZSwgLi4uKG9wdGlvbnMgfHwgZGVzdGluYXRpb24pfSlcbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/lib/index.js\n");

/***/ })

};
;