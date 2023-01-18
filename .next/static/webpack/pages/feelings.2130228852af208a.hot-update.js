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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ feelings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Feelings.module.css */ \"./styles/Feelings.module.css\");\n/* harmony import */ var _styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions */ \"./questions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _QuestionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionTitle */ \"./components/QuestionTitle.js\");\n/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Answer */ \"./components/Answer.js\");\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressBar */ \"./components/ProgressBar.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction feelings() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1), selectedIndex = ref2[0], setSelectedIndex = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var getAnswers = function() {\n        var _this1 = _this;\n        var newAnswers = _questions__WEBPACK_IMPORTED_MODULE_1__.questions[index].answers.map(function(item, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Answer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: item,\n                handleSelect: handleSelect,\n                index: i,\n                isClicked: selectedIndex === i,\n                questionNum: index + 1\n            }, i, false, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 19,\n                columnNumber: 14\n            }, _this1);\n        });\n        setAnswers([\n            newAnswers\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getAnswers();\n    }, [\n        index\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getAnswers();\n    }, [\n        selectedIndex\n    ]);\n    var handlePrev = function() {\n        if (index > 0) {\n            setIndex(index - 1);\n        }\n    };\n    var handleSelect = function(indexToSelect) {\n        setSelectedIndex(indexToSelect);\n    };\n    var handleNext = function() {\n        if (selectedIndex > -1 && selectedIndex < 4) {\n            setIndex(function(previndex) {\n                return previndex + 1;\n            });\n            setSelectedIndex(-1);\n        }\n        if (selectedIndex === 4) {\n            router.push(\"/result\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: _questions__WEBPACK_IMPORTED_MODULE_1__.questions[index].question\n            }, void 0, false, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 58,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_8___default().answerContainer),\n                children: answers\n            }, void 0, false, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Feelings_module_css__WEBPACK_IMPORTED_MODULE_8___default().iconsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faArrowLeft,\n                        size: \"2x\",\n                        onClick: function() {\n                            return handlePrev();\n                        },\n                        style: index === 0 ? {\n                            color: \"#f8ebe1\",\n                            cursor: \"default\"\n                        } : {\n                            color: \"#ff2742\",\n                            cursor: \"pointer\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        progression: (index + 1) / 5 * 100\n                    }, void 0, false, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faArrowRight,\n                        size: \"2x\",\n                        onClick: function() {\n                            return handleNext();\n                        },\n                        style: selectedIndex === -1 ? {\n                            color: \"#f8ebe1\",\n                            cursor: \"default\"\n                        } : {\n                            color: \"#ff2742\",\n                            cursor: \"pointer\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Feelings.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n};\n_s(feelings, \"lmMZWCM6mxTRjfN+Md/vKobvXqc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUkvQixLQUFLLEtBQUssQ0FBQyxHQUFHOzRCQUFDZ0MsS0FBSyxFQUFHLFNBQVM7NEJBQUVDLE1BQU0sRUFBRyxTQUFTO3lCQUFDLEdBQUc7NEJBQUNELEtBQUssRUFBRyxTQUFTOzRCQUFFQyxNQUFNLEVBQUcsU0FBUzt5QkFBRTs7Ozs7NEJBQUc7a0NBQ3hMLDhEQUFDdkMsb0RBQVc7d0JBQUN3QyxXQUFXLEVBQUksQ0FBQ2xDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsR0FBRzs7Ozs7NEJBQUc7a0NBQzlDLDhEQUFDTCwyRUFBZTt3QkFBQ2lDLElBQUksRUFBRWhDLDJFQUFZO3dCQUFDaUMsSUFBSSxFQUFDLElBQUk7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVosVUFBVSxFQUFFO3lCQUFBO3dCQUFFYSxLQUFLLEVBQUkzQixhQUFhLEtBQUssQ0FBQyxDQUFDLEdBQUc7NEJBQUM0QixLQUFLLEVBQUcsU0FBUzs0QkFBRUMsTUFBTSxFQUFHLFNBQVM7eUJBQUMsR0FBRzs0QkFBQ0QsS0FBSyxFQUFHLFNBQVM7NEJBQUVDLE1BQU0sRUFBRyxTQUFTO3lCQUFFOzs7Ozs0QkFBRzs7Ozs7O29CQUMxTDs7Ozs7O1lBQ0QsQ0FDUDtDQUNIO0dBMUR1QmxDLFFBQVE7O1FBSWZELGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVlbGluZ3MuanM/NDEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRmVlbGluZ3MubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBxdWVzdGlvbnMgfSBmcm9tIFwiLi4vcXVlc3Rpb25zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb25UaXRsZSBmcm9tIFwiLi9RdWVzdGlvblRpdGxlXCI7XG5pbXBvcnQgQW5zd2VyIGZyb20gXCIuL0Fuc3dlclwiOyBcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0LCBmYUFycm93TGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmVlbGluZ3MoKSB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgtMSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBnZXRBbnN3ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0Fuc3dlcnMgPSBxdWVzdGlvbnNbaW5kZXhdLmFuc3dlcnMubWFwKChpdGVtLCBpKSA9PiB7IFxuICAgICAgcmV0dXJuIDxBbnN3ZXIgZGF0YT17aXRlbX0gaGFuZGxlU2VsZWN0ID0ge2hhbmRsZVNlbGVjdH0ga2V5ID0ge2l9IGluZGV4ID0ge2l9IGlzQ2xpY2tlZCA9IHtzZWxlY3RlZEluZGV4ID09PSBpfSBxdWVzdGlvbk51bSA9IHtpbmRleCArIDF9Lz47XG4gICAgfSk7XG4gICAgc2V0QW5zd2VycyhbbmV3QW5zd2Vyc10pXG4gIH1cbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbnN3ZXJzKCkgXG4gIH0sIFtpbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QW5zd2VycygpXG4gIH0sIFtzZWxlY3RlZEluZGV4XSlcblxuXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgaWYoaW5kZXggPiAwKXtcbiAgICAgIHNldEluZGV4KGluZGV4LTEpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGluZGV4VG9TZWxlY3QpID0+IHtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4VG9TZWxlY3QpXG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGlmKHNlbGVjdGVkSW5kZXggPiAtMSAmJiAgc2VsZWN0ZWRJbmRleCA8IDQpe1xuICAgICAgc2V0SW5kZXgocHJldmluZGV4ID0+IHByZXZpbmRleCsxKVxuICAgICAgc2V0U2VsZWN0ZWRJbmRleCgtMSlcbiAgICB9IFxuICAgIGlmKHNlbGVjdGVkSW5kZXggPT09IDQpe1xuICAgICAgcm91dGVyLnB1c2goXCIvcmVzdWx0XCIpXG4gICAgfVxuXG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgICA8aDE+e3F1ZXN0aW9uc1tpbmRleF0ucXVlc3Rpb259PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyQ29udGFpbmVyfT5cbiAgICAgICAge2Fuc3dlcnN9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnNDb250YWluZXJ9PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93TGVmdH0gc2l6ZT1cIjJ4XCIgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByZXYoKX0gc3R5bGUgPSB7aW5kZXggPT09IDAgPyB7Y29sb3IgOiBcIiNmOGViZTFcIiwgY3Vyc29yIDogXCJkZWZhdWx0XCJ9IDoge2NvbG9yIDogXCIjZmYyNzQyXCIsIGN1cnNvciA6IFwicG9pbnRlclwiIH19Lz5cbiAgICAgIDxQcm9ncmVzc0JhciBwcm9ncmVzc2lvbiA9IHsoaW5kZXgrMSkvNSoxMDB9Lz5cbiAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fXNpemU9XCIyeFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5leHQoKX0gc3R5bGUgPSB7c2VsZWN0ZWRJbmRleCA9PT0gLTEgPyB7Y29sb3IgOiBcIiNmOGViZTFcIiwgY3Vyc29yIDogXCJkZWZhdWx0XCJ9IDoge2NvbG9yIDogXCIjZmYyNzQyXCIsIGN1cnNvciA6IFwicG9pbnRlclwiIH19Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJxdWVzdGlvbnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlF1ZXN0aW9uVGl0bGUiLCJBbnN3ZXIiLCJQcm9ncmVzc0JhciIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQXJyb3dSaWdodCIsImZhQXJyb3dMZWZ0IiwidXNlUm91dGVyIiwiZmVlbGluZ3MiLCJpbmRleCIsInNldEluZGV4IiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsInJvdXRlciIsImdldEFuc3dlcnMiLCJuZXdBbnN3ZXJzIiwibWFwIiwiaXRlbSIsImkiLCJkYXRhIiwiaGFuZGxlU2VsZWN0IiwiaXNDbGlja2VkIiwicXVlc3Rpb25OdW0iLCJoYW5kbGVQcmV2IiwiaW5kZXhUb1NlbGVjdCIsImhhbmRsZU5leHQiLCJwcmV2aW5kZXgiLCJwdXNoIiwibWFpbiIsImgxIiwicXVlc3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJhbnN3ZXJDb250YWluZXIiLCJpY29uc0NvbnRhaW5lciIsImljb24iLCJzaXplIiwib25DbGljayIsInN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJwcm9ncmVzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feelings.js\n");

/***/ })

});