"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/feelings",{

/***/ "./components/Feelings.js":
/*!********************************!*\
  !*** ./components/Feelings.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ feelings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Feelings.module.css */ \"./styles/Feelings.module.css\");\n/* harmony import */ var _styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions */ \"./questions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _QuestionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionTitle */ \"./components/QuestionTitle.js\");\n/* harmony import */ var _Questions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Questions */ \"./components/Questions.js\");\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressBar */ \"./components/ProgressBar.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction feelings() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSelected = ref2[0], setSelected = ref2[1];\n    var getAnswers = function() {\n        var _this1 = _this;\n        var newAnswers = _questions__WEBPACK_IMPORTED_MODULE_1__.questions[index].answers.map(function(item, i) {\n            console.log(isSelected);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Questions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: item,\n                handleSelect: handleSelect,\n                isSelected: isSelected\n            }, i, false, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 18,\n                columnNumber: 14\n            }, _this1);\n        });\n        setAnswers([\n            newAnswers\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getAnswers();\n    }, [\n        index\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getAnswers();\n    }, [\n        isSelected\n    ]);\n    var handlePrev = function() {\n        if (index > 0) {\n            setIndex(index - 1);\n        }\n    };\n    var handleSelect = function() {\n        setSelected(!isSelected);\n    };\n    var handleNext = function() {\n        if (isSelected) {\n            setSelected(false);\n            setIndex(function(previndex) {\n                return previndex + 1;\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                question: _questions__WEBPACK_IMPORTED_MODULE_1__.questions[index].question\n            }, void 0, false, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 50,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: answers\n            }, void 0, false, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_7___default().iconsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faArrowLeft,\n                        size: \"2x\",\n                        onClick: function() {\n                            return handlePrev();\n                        },\n                        style: index === 0 ? {\n                            color: \"#f8ebe1\",\n                            cursor: \"default\"\n                        } : {\n                            color: \"#ff2742\",\n                            cursor: \"pointer\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        progression: (index + 1) / 5 * 100\n                    }, void 0, false, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faArrowRight,\n                        size: \"2x\",\n                        onClick: function() {\n                            return handleNext();\n                        },\n                        style: !isSelected ? {\n                            color: \"#f8ebe1\",\n                            cursor: \"default\"\n                        } : {\n                            color: \"#ff2742\",\n                            cursor: \"pointer\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n};\n_s(feelings, \"Z37eSRj4EAfd2tVhV3v0Q2VIA/w=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFDLEdBQUc7Ozs7OzRCQUFHO2tDQUM5Qyw4REFBQ0osMkVBQWU7d0JBQUMyQixJQUFJLEVBQUUxQiwyRUFBWTt3QkFBQzJCLElBQUksRUFBQyxJQUFJO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1ULFVBQVUsRUFBRTt5QkFBQTt3QkFBRVUsS0FBSyxFQUFJLENBQUN0QixVQUFVLEdBQUc7NEJBQUN1QixLQUFLLEVBQUcsU0FBUzs0QkFBRUMsTUFBTSxFQUFHLFNBQVM7eUJBQUMsR0FBRzs0QkFBQ0QsS0FBSyxFQUFHLFNBQVM7NEJBQUVDLE1BQU0sRUFBRyxTQUFTO3lCQUFFOzs7Ozs0QkFBRzs7Ozs7O29CQUNqTDs7Ozs7O1lBQ0QsQ0FDUDtDQUNIO0dBbkR1QjdCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVsaW5ncy5qcz80MTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9GZWVsaW5ncy5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHF1ZXN0aW9ucyB9IGZyb20gXCIuLi9xdWVzdGlvbnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWVzdGlvblRpdGxlIGZyb20gXCIuL1F1ZXN0aW9uVGl0bGVcIjtcbmltcG9ydCBRdWVzdGlvbnMgZnJvbSBcIi4vUXVlc3Rpb25zXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhQXJyb3dSaWdodCwgZmFBcnJvd0xlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWVsaW5ncygpIHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc1NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBnZXRBbnN3ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0Fuc3dlcnMgPSBxdWVzdGlvbnNbaW5kZXhdLmFuc3dlcnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhpc1NlbGVjdGVkKTtcbiAgICAgIHJldHVybiA8UXVlc3Rpb25zIGRhdGE9e2l0ZW19IGhhbmRsZVNlbGVjdCA9IHtoYW5kbGVTZWxlY3R9IGlzU2VsZWN0ZWQgPSB7aXNTZWxlY3RlZH0ga2V5ID0ge2l9Lz47XG4gICAgfSk7XG4gICAgc2V0QW5zd2VycyhbbmV3QW5zd2Vyc10pXG4gIH1cbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbnN3ZXJzKCkgXG4gIH0sIFtpbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QW5zd2VycygpXG4gIH0sIFtpc1NlbGVjdGVkXSlcblxuICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgIGlmKGluZGV4ID4gMCl7XG4gICAgICBzZXRJbmRleChpbmRleC0xKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZCghaXNTZWxlY3RlZClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgaWYoaXNTZWxlY3RlZCl7XG4gICAgICBzZXRTZWxlY3RlZChmYWxzZSlcbiAgICAgIHNldEluZGV4KHByZXZpbmRleCA9PiBwcmV2aW5kZXgrMSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgIDxRdWVzdGlvblRpdGxlIHF1ZXN0aW9uPXtxdWVzdGlvbnNbaW5kZXhdLnF1ZXN0aW9ufSAvPiBcbiAgICAgIDxkaXY+XG4gICAgICAgIHthbnN3ZXJzfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zQ29udGFpbmVyfT5cbiAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IHNpemU9XCIyeFwiICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmV2KCl9IHN0eWxlID0ge2luZGV4ID09PSAwID8ge2NvbG9yIDogXCIjZjhlYmUxXCIsIGN1cnNvciA6IFwiZGVmYXVsdFwifSA6IHtjb2xvciA6IFwiI2ZmMjc0MlwiLCBjdXJzb3IgOiBcInBvaW50ZXJcIiB9fS8+XG4gICAgICA8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3Npb24gPSB7KGluZGV4KzEpLzUqMTAwfS8+XG4gICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH1zaXplPVwiMnhcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOZXh0KCl9IHN0eWxlID0geyFpc1NlbGVjdGVkID8ge2NvbG9yIDogXCIjZjhlYmUxXCIsIGN1cnNvciA6IFwiZGVmYXVsdFwifSA6IHtjb2xvciA6IFwiI2ZmMjc0MlwiLCBjdXJzb3IgOiBcInBvaW50ZXJcIiB9fS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwicXVlc3Rpb25zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJRdWVzdGlvblRpdGxlIiwiUXVlc3Rpb25zIiwiUHJvZ3Jlc3NCYXIiLCJGb250QXdlc29tZUljb24iLCJmYUFycm93UmlnaHQiLCJmYUFycm93TGVmdCIsImZlZWxpbmdzIiwiaW5kZXgiLCJzZXRJbmRleCIsImFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwiaXNTZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZ2V0QW5zd2VycyIsIm5ld0Fuc3dlcnMiLCJtYXAiLCJpdGVtIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlU2VsZWN0IiwiaGFuZGxlUHJldiIsImhhbmRsZU5leHQiLCJwcmV2aW5kZXgiLCJtYWluIiwicXVlc3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpY29uc0NvbnRhaW5lciIsImljb24iLCJzaXplIiwib25DbGljayIsInN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJwcm9ncmVzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feelings.js\n");

/***/ })

});