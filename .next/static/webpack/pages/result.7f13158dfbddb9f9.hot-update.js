"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/result",{

/***/ "./components/Result.js":
/*!******************************!*\
  !*** ./components/Result.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Result; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Result.module.css */ \"./styles/Result.module.css\");\n/* harmony import */ var _styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_movies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/movies */ \"./reducers/movies.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Result() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.movies.value;\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"The Jocker\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(4), rating = ref1[0], setRating = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.\"), resume = ref2[0], setResume = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"https://fr.web.img4.acsta.net/c_310_420/pictures/19/09/03/12/02/4765874.jpg\"), imagePath = ref3[0], setImagePath = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), voteCount = ref4[0], setVoteCount = ref4[1];\n    var getMovie = function() {\n        fetch(\"http://localhost:3000/movies/selection/\".concat(movies.platform, \"/\").concat(movies.genreId.join(), \"/\").concat(movies.realeaseDate, \"/\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setTitle(data.result.title);\n            setRating(Math.round(data.result.vote_average / 2, 0));\n            setResume(data.result.overview);\n            setImagePath(\"https://image.tmdb.org/t/p/original/\".concat(data.result.poster_path));\n            setVoteCount(data.result.vote_count);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!movies.platform) {\n            router.push(\"/feelings\");\n        } else {\n            getMovie();\n        }\n    }, []);\n    var startOver = function() {\n        dispatch(_reducers_movies__WEBPACK_IMPORTED_MODULE_5__.resetAll);\n        {\n            router.push(\"/feelings\");\n        }\n    };\n    var star = [];\n    if (rating) {\n        for(var i = 1; i <= 5; i++){\n            star.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar,\n                style: {\n                    color: rating >= i ? \"#ff2742\" : \"#f8ebe1\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                lineNumber: 55,\n                columnNumber: 18\n            }, this));\n        }\n    }\n    console.log(rating);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().movieContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imagePath,\n                        className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().poster)\n                    }, void 0, false, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().movieInfos),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().titleContainer),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().movieTitle),\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().starContainer),\n                                        children: [\n                                            star,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"(\",\n                                                    voteCount,\n                                                    \")\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().movieResume),\n                                children: resume\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().provider),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrowContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrows),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faArrowLeft,\n                                size: \"2x\",\n                                style: {\n                                    color: \"#f8ebe1\",\n                                    cursor: \"pointer\"\n                                },\n                                transform: \"left-0\",\n                                onClick: function() {\n                                    return startOver();\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    margin: \"auto\"\n                                },\n                                children: \"Start Over\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Result_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrows),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    margin: \"auto\"\n                                },\n                                children: \" Another \"\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faArrowRight,\n                                size: \"2x\",\n                                style: {\n                                    color: \"#ff2742\",\n                                    cursor: \"pointer\"\n                                },\n                                \"align-self\": \"flex-end\",\n                                onClick: function() {\n                                    return getMovie();\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Result.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n};\n_s(Result, \"DcP2GuqPPt70y/DPnUhjTpLjq3c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Result;\nvar _c;\n$RefreshReg$(_c, \"Result\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtnQ0FDVG5CLEtBQUssRUFBRTtvQ0FBRUMsS0FBSyxFQUFFLFNBQVM7b0NBQUVtQixNQUFNLEVBQUUsU0FBUztpQ0FBRTtnQ0FDOUNJLFlBQVUsRUFBQyxVQUFVO2dDQUNyQkYsT0FBTyxFQUFFOzJDQUFNaEQsUUFBUSxFQUFFO2lDQUFBOzs7OztvQ0FDekI7Ozs7Ozs0QkFDRTs7Ozs7O29CQUNGOzs7Ozs7WUFDRCxDQUNQO0NBQ0g7R0F4R3VCaEIsTUFBTTs7UUFDWEwsb0RBQVc7UUFDYkQsb0RBQVc7UUFDWEQsa0RBQVM7OztBQUhGTyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVzdWx0LmpzP2ViMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1Jlc3VsdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICBmYVN0YXIsXG4gIGZhQXJyb3dSaWdodCxcbiAgZmFBcnJvd0xlZnQsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdGFydFRyYW5zaXRpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlc2V0QWxsIH0gZnJvbSBcIi4uL3JlZHVjZXJzL21vdmllc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IG1vdmllcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW92aWVzLnZhbHVlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiVGhlIEpvY2tlclwiKVxuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoNClcbiAgY29uc3QgW3Jlc3VtZSwgc2V0UmVzdW1lXSA9IHVzZVN0YXRlKFwiQSBtZW50YWxseSB0cm91YmxlZCBzdGFuZC11cCBjb21lZGlhbiBlbWJhcmtzIG9uIGEgZG93bndhcmQgc3BpcmFsIHRoYXQgbGVhZHMgdG8gdGhlIGNyZWF0aW9uIG9mIGFuIGljb25pYyB2aWxsYWluLlwiKVxuICBjb25zdCBbaW1hZ2VQYXRoLCBzZXRJbWFnZVBhdGhdID0gdXNlU3RhdGUoXCJodHRwczovL2ZyLndlYi5pbWc0LmFjc3RhLm5ldC9jXzMxMF80MjAvcGljdHVyZXMvMTkvMDkvMDMvMTIvMDIvNDc2NTg3NC5qcGdcIilcbiAgY29uc3QgW3ZvdGVDb3VudCwgc2V0Vm90ZUNvdW50XSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgZ2V0TW92aWUgPSAoKSA9PntcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL21vdmllcy9zZWxlY3Rpb24vJHttb3ZpZXMucGxhdGZvcm19LyR7bW92aWVzLmdlbnJlSWQuam9pbigpfS8ke21vdmllcy5yZWFsZWFzZURhdGV9L2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHNldFRpdGxlKGRhdGEucmVzdWx0LnRpdGxlKVxuICAgICAgICBzZXRSYXRpbmcoTWF0aC5yb3VuZChkYXRhLnJlc3VsdC52b3RlX2F2ZXJhZ2UvMiwgMCkpXG4gICAgICAgIHNldFJlc3VtZShkYXRhLnJlc3VsdC5vdmVydmlldylcbiAgICAgICAgc2V0SW1hZ2VQYXRoKGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2RhdGEucmVzdWx0LnBvc3Rlcl9wYXRofWApXG4gICAgICAgIHNldFZvdGVDb3VudChkYXRhLnJlc3VsdC52b3RlX2NvdW50KVxuICAgICAgfSlcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT57XG4gICAgaWYoIW1vdmllcy5wbGF0Zm9ybSl7XG4gICAgICByb3V0ZXIucHVzaChcIi9mZWVsaW5nc1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBnZXRNb3ZpZSgpXG4gICAgfVxuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHN0YXJ0T3ZlciA9ICgpID0+ICB7XG4gICAgZGlzcGF0Y2gocmVzZXRBbGwpXG4gICAge3JvdXRlci5wdXNoKFwiL2ZlZWxpbmdzXCIpfVxuICB9XG5cblxuICBsZXQgc3RhciA9IFtdXG4gIGlmKHJhdGluZyl7XG4gICAgZm9yKGxldCBpID0gMTsgaTw9NTsgaSsrKXtcbiAgICAgIHN0YXIucHVzaCggPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IHN0eWxlPXt7IGNvbG9yOiByYXRpbmcgPj0gaSA/IFwiI2ZmMjc0MlwiIDogXCIjZjhlYmUxXCIgfX0gLz4pXG4gICAgfVxuICB9XG5cblxuICBjb25zb2xlLmxvZyhyYXRpbmcpXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllQ29udGFpbmVyfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBpbWFnZVBhdGhcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyfVxuICAgICAgICA+PC9pbWc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVJbmZvc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVUaXRsZX0+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICB7c3Rhcn1cbiAgICAgICAgICAgICAgey8qIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBzdHlsZT17eyBjb2xvcjogXCIjZmYyNzQyXCIgfX0gLz5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IHN0eWxlPXt7IGNvbG9yOiBcIiNmZjI3NDJcIiB9fSAvPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gc3R5bGU9e3sgY29sb3I6IFwiI2ZmMjc0MlwiIH19IC8+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBzdHlsZT17eyBjb2xvcjogXCIjZmYyNzQyXCIgfX0gLz5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IHN0eWxlPXt7IGNvbG9yOiBcIiNmOGViZTFcIiB9fSAvPiAqL31cbiAgICAgICAgICAgIDxwPih7dm90ZUNvdW50fSk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZVJlc3VtZX0+XG4gICAgICAgICAgICB7cmVzdW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7LyogaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvdDJ5eU92NDBIWmVWbExqWXNDc1BIbldMazRXLmpwZyAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvdmlkZXJ9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvdDJ5eU92NDBIWmVWbExqWXNDc1BIbldMazRXLmpwZ1wiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC90Mnl5T3Y0MEhaZVZsTGpZc0NzUEhuV0xrNFcuanBnXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL3QyeXlPdjQwSFplVmxMallzQ3NQSG5XTGs0Vy5qcGdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dzfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYUFycm93TGVmdH1cbiAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjZjhlYmUxXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgIHRyYW5zZm9ybT1cImxlZnQtMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydE92ZXIoKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvXCIgfX0+U3RhcnQgT3ZlcjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dzfT5cbiAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19PiBBbm90aGVyIDwvcD5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBpY29uPXtmYUFycm93UmlnaHR9XG4gICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2ZmMjc0MlwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICBhbGlnbi1zZWxmPVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0TW92aWUoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJmYUFycm93UmlnaHQiLCJmYUFycm93TGVmdCIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzdGFydFRyYW5zaXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJlc2V0QWxsIiwiUmVzdWx0IiwiZGlzcGF0Y2giLCJtb3ZpZXMiLCJzdGF0ZSIsInZhbHVlIiwicm91dGVyIiwidGl0bGUiLCJzZXRUaXRsZSIsInJhdGluZyIsInNldFJhdGluZyIsInJlc3VtZSIsInNldFJlc3VtZSIsImltYWdlUGF0aCIsInNldEltYWdlUGF0aCIsInZvdGVDb3VudCIsInNldFZvdGVDb3VudCIsImdldE1vdmllIiwiZmV0Y2giLCJwbGF0Zm9ybSIsImdlbnJlSWQiLCJqb2luIiwicmVhbGVhc2VEYXRlIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJNYXRoIiwicm91bmQiLCJ2b3RlX2F2ZXJhZ2UiLCJvdmVydmlldyIsInBvc3Rlcl9wYXRoIiwidm90ZV9jb3VudCIsInB1c2giLCJzdGFydE92ZXIiLCJzdGFyIiwiaSIsImljb24iLCJzdHlsZSIsImNvbG9yIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsIm1vdmllQ29udGFpbmVyIiwiaW1nIiwic3JjIiwicG9zdGVyIiwibW92aWVJbmZvcyIsInRpdGxlQ29udGFpbmVyIiwiaDEiLCJtb3ZpZVRpdGxlIiwic3RhckNvbnRhaW5lciIsInAiLCJtb3ZpZVJlc3VtZSIsInByb3ZpZGVyIiwiYXJyb3dDb250YWluZXIiLCJhcnJvd3MiLCJzaXplIiwiY3Vyc29yIiwidHJhbnNmb3JtIiwib25DbGljayIsIm1hcmdpbiIsImFsaWduLXNlbGYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Result.js\n");

/***/ })

});