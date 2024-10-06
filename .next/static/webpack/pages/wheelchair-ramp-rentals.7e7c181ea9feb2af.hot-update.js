"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wheelchair-ramp-rentals",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Modal */ \"./src/components/ui/Modal.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _CookieConsent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CookieConsent */ \"./src/components/CookieConsent.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar LazyRampRequestForm = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function() {\n    return __webpack_require__.e(/*! import() */ \"src_components_ramprequestform_RampRequestForm_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./ramprequestform/RampRequestForm */ \"./src/components/ramprequestform/RampRequestForm.tsx\"));\n});\n_c = LazyRampRequestForm;\nfunction Layout(param) {\n    var children = param.children, title = param.title, description = param.description;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isModalOpen = _useState[0], setIsModalOpen = _useState[1];\n    var handleOpenRampRequest = function() {\n        setIsModalOpen(true);\n    };\n    var handleCloseModal = function() {\n        setIsModalOpen(false);\n    };\n    var fullTitle = title ? \"\".concat(title, \" | Same Day Ramps\") : \"Same Day Ramps\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: fullTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: fullTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"https://www.samedayramps.com/images/og-image.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:title\",\n                        content: fullTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:image\",\n                        content: \"https://www.samedayramps.com/images/twitter-image.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: \"https://www.samedayramps.com\".concat( true ? window.location.pathname : 0)\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onOpenRampRequest: handleOpenRampRequest\n            }, void 0, false, {\n                fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: handleCloseModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 29\n                    }, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LazyRampRequestForm, {}, void 0, false, {\n                        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CookieConsent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tywalls/Projects/SameDayRamps.com/src/components/Layout.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"mLsII5HRP5G63IA/8vjZ5YHXWr8=\");\n_c1 = Layout;\nvar _c, _c1;\n$RefreshReg$(_c, \"LazyRampRequestForm\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUMxQjtBQUNBO0FBQ0M7QUFDRjtBQUNlO0FBRTVDLElBQU1TLG9DQUFzQlAsMkNBQUlBLENBQUM7V0FBTSxnUEFBTzs7S0FBeENPO0FBUVMsU0FBU0MsT0FBTyxLQUE2QztRQUEzQ0MsV0FBRixNQUFFQSxVQUFVQyxRQUFaLE1BQVlBLE9BQU9DLGNBQW5CLE1BQW1CQTs7SUFDaEQsSUFBc0NaLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUF4Q2EsY0FBK0JiLGNBQWxCYyxpQkFBa0JkO0lBRXRDLElBQU1lLHdCQUF3QjtRQUM1QkQsZUFBZTtJQUNqQjtJQUVBLElBQU1FLG1CQUFtQjtRQUN2QkYsZUFBZTtJQUNqQjtJQUVBLElBQU1HLFlBQVlOLFFBQVEsR0FBUyxPQUFOQSxPQUFNLHVCQUFxQjtJQUV4RCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNiLGtEQUFJQTs7a0NBQ0gsOERBQUNLO2tDQUFPTTs7Ozs7O29CQUNQTCw2QkFBZSw4REFBQ1E7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVNWOzs7Ozs7a0NBQ2xELDhEQUFDUTt3QkFBS0csVUFBUzt3QkFBV0QsU0FBU0w7Ozs7OztvQkFDbENMLDZCQUFlLDhEQUFDUTt3QkFBS0csVUFBUzt3QkFBaUJELFNBQVNWOzs7Ozs7a0NBQ3pELDhEQUFDUTt3QkFBS0csVUFBUzt3QkFBVUQsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtHLFVBQVM7d0JBQVdELFNBQVE7Ozs7OztrQ0FDbEMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFlQyxTQUFROzs7Ozs7a0NBQ2xDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBZ0JDLFNBQVNMOzs7Ozs7b0JBQ25DTCw2QkFBZSw4REFBQ1E7d0JBQUtDLE1BQUs7d0JBQXNCQyxTQUFTVjs7Ozs7O2tDQUMxRCw4REFBQ1E7d0JBQUtDLE1BQUs7d0JBQWdCQyxTQUFROzs7Ozs7a0NBQ25DLDhEQUFDRTt3QkFBS0MsS0FBSTt3QkFBWUMsTUFBTSwrQkFBNkYsT0FBOUQsS0FBa0IsR0FBY0MsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLEdBQUc7Ozs7Ozs7Ozs7OzswQkFFeEgsOERBQUMxQiwrQ0FBTUE7Z0JBQUMyQixtQkFBbUJmOzs7Ozs7MEJBQzNCLDhEQUFDZ0I7Z0JBQUtaLFdBQVU7MEJBQWFUOzs7Ozs7MEJBQzdCLDhEQUFDTiwrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDQyxpREFBS0E7Z0JBQUMyQixRQUFRbkI7Z0JBQWFvQixTQUFTakI7MEJBQ25DLDRFQUFDZCwyQ0FBUUE7b0JBQUNnQyx3QkFBVSw4REFBQ2hCO2tDQUFJOzs7Ozs7OEJBQ3ZCLDRFQUFDVjs7Ozs7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDRCxzREFBYUE7Ozs7Ozs7Ozs7O0FBR3BCO0dBdkN3QkU7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeD9kZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vdWkvTW9kYWwnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBDb29raWVDb25zZW50IGZyb20gJy4vQ29va2llQ29uc2VudCc7XG5cbmNvbnN0IExhenlSYW1wUmVxdWVzdEZvcm0gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9yYW1wcmVxdWVzdGZvcm0vUmFtcFJlcXVlc3RGb3JtJykpO1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB0aXRsZSwgZGVzY3JpcHRpb24gfTogTGF5b3V0UHJvcHMpIHtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlT3BlblJhbXBSZXF1ZXN0ID0gKCkgPT4ge1xuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGZ1bGxUaXRsZSA9IHRpdGxlID8gYCR7dGl0bGV9IHwgU2FtZSBEYXkgUmFtcHNgIDogJ1NhbWUgRGF5IFJhbXBzJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2Z1bGxUaXRsZX08L3RpdGxlPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+fVxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17ZnVsbFRpdGxlfSAvPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPn1cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vd3d3LnNhbWVkYXlyYW1wcy5jb20vaW1hZ2VzL29nLWltYWdlLmpwZ1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZnVsbFRpdGxlfSAvPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz59XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vd3d3LnNhbWVkYXlyYW1wcy5jb20vaW1hZ2VzL3R3aXR0ZXItaW1hZ2UuanBnXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YGh0dHBzOi8vd3d3LnNhbWVkYXlyYW1wcy5jb20ke3R5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIDogJyd9YH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgb25PcGVuUmFtcFJlcXVlc3Q9e2hhbmRsZU9wZW5SYW1wUmVxdWVzdH0gLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8TGF6eVJhbXBSZXF1ZXN0Rm9ybSAvPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxDb29raWVDb25zZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJsYXp5IiwiU3VzcGVuc2UiLCJIZWFkZXIiLCJGb290ZXIiLCJNb2RhbCIsIkhlYWQiLCJDb29raWVDb25zZW50IiwiTGF6eVJhbXBSZXF1ZXN0Rm9ybSIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJoYW5kbGVPcGVuUmFtcFJlcXVlc3QiLCJoYW5kbGVDbG9zZU1vZGFsIiwiZnVsbFRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJsaW5rIiwicmVsIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJvbk9wZW5SYW1wUmVxdWVzdCIsIm1haW4iLCJpc09wZW4iLCJvbkNsb3NlIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n"));

/***/ })

});