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

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Answer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Answers.module.css */ \"./styles/Answers.module.css\");\n/* harmony import */ var _styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/movies */ \"./reducers/movies.js\");\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Answer(props) {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), platform = ref[0], setPlateform = ref[1];\n    console.log(props.data);\n    var handleClick = function() {\n        props.handleSelect(props.index);\n        if (props.index === 0) {\n            dispatch((0,_reducers_movies__WEBPACK_IMPORTED_MODULE_3__.addPlatformToStore)(props.data.keyword));\n            setPlateform(props.data.keyword);\n        }\n        if (props.index === 1) {\n            dispatch((0,_reducers_movies__WEBPACK_IMPORTED_MODULE_3__.addUserMoodToStore)(props.data.answer));\n        }\n        if (props.index === 2 || props.index === 3) {\n            if (_typeof(props.data.ids.platform) === Object) {\n                props.data.ids.platform.forEach(function(item) {\n                    dispatch((0,_reducers_movies__WEBPACK_IMPORTED_MODULE_3__.addGenreIdToStore)(item));\n                });\n            } else {\n                dispatch((0,_reducers_movies__WEBPACK_IMPORTED_MODULE_3__.addGenreIdToStore)(props.data.ids.platform));\n            }\n        }\n        if (props.index === 4) {\n            dispatch;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4___default().answer),\n        onClick: function() {\n            return handleClick();\n        },\n        style: {\n            borderColor: props.isClicked ? \"#ff2742\" : \"#f8ebe1\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: props.data.answer\n        }, void 0, false, {\n            fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Answer.js\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Answer.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n};\n_s(Answer, \"II6R+vsdw+jba1Y27rByPJzuzRo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Answer;\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBaUQ7QUFDakI7QUFDUztBQUNtRzs7QUFFN0gsU0FBVVEsTUFBTSxDQUFDQyxLQUFLLEVBQUM7O0lBQ2xDLElBQU1DLFFBQVEsR0FBR1Isd0RBQVcsRUFBRTtJQUM5QixJQUFpQ0QsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVBqRCxRQU9tQixHQUFrQkEsR0FBWSxHQUE5QixFQVBuQixZQU9pQyxHQUFJQSxHQUFZLEdBQWhCO0lBRTdCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDTSxJQUFJLENBQUM7SUFFdkIsSUFBTUMsV0FBVyxHQUFHLFdBQU07UUFDdEJQLEtBQUssQ0FBQ1EsWUFBWSxDQUFDUixLQUFLLENBQUNTLEtBQUssQ0FBQztRQUMvQixJQUFJVCxLQUFLLENBQUNTLEtBQUssS0FBSyxDQUFDLEVBQUM7WUFDbEJSLFFBQVEsQ0FBQ04sb0VBQWtCLENBQUNLLEtBQUssQ0FBQ00sSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQztZQUNoRFAsWUFBWSxDQUFDSCxLQUFLLENBQUNNLElBQUksQ0FBQ0ksT0FBTyxDQUFDO1NBQ25DO1FBQ0QsSUFBR1YsS0FBSyxDQUFDUyxLQUFLLEtBQUssQ0FBQyxFQUFDO1lBQ2pCUixRQUFRLENBQUNMLG9FQUFrQixDQUFDSSxLQUFLLENBQUNNLElBQUksQ0FBQ0ssTUFBTSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJWCxLQUFLLENBQUNTLEtBQUssS0FBSyxDQUFDLElBQUlULEtBQUssQ0FBQ1MsS0FBSyxLQUFLLENBQUMsRUFBQztZQUV2QyxJQUFHLE9BQStCLENBQXhCVCxLQUFLLENBQUNNLElBQUksQ0FBQ00sR0FBRyxDQUFDVixRQUFRLENBQUMsS0FBS1csTUFBTSxFQUFDO2dCQUMxQ2IsS0FBSyxDQUFDTSxJQUFJLENBQUNNLEdBQUcsQ0FBQ1YsUUFBUSxDQUFDWSxPQUFPLENBQUNDLFNBQUFBLElBQUksRUFBSTtvQkFDcENkLFFBQVEsQ0FBQ0osbUVBQWlCLENBQUNrQixJQUFJLENBQUMsQ0FBQztpQkFDcEMsQ0FBQyxDQUFDO2FBQ04sTUFDSTtnQkFDRGQsUUFBUSxDQUFDSixtRUFBaUIsQ0FBQ0csS0FBSyxDQUFDTSxJQUFJLENBQUNNLEdBQUcsQ0FBQ1YsUUFBUSxDQUFDLENBQUM7YUFDdkQ7U0FDSjtRQUNELElBQUdGLEtBQUssQ0FBQ1MsS0FBSyxLQUFLLENBQUMsRUFBQztZQUNqQlIsUUFBUTtTQUNYO0tBQ0o7SUFFRCxxQkFDSSw4REFBQ2UsS0FBRztRQUFDQyxTQUFTLEVBQUUxQiwwRUFBYTtRQUFFMkIsT0FBTyxFQUFFO21CQUFNWCxXQUFXLEVBQUU7U0FBQTtRQUFFWSxLQUFLLEVBQUU7WUFBQ0MsV0FBVyxFQUFHcEIsS0FBSyxDQUFDcUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTO1NBQUM7a0JBQ3ZILDRFQUFDQyxHQUFDO3NCQUFHdEIsS0FBSyxDQUFDTSxJQUFJLENBQUNLLE1BQU07Ozs7O2dCQUFLOzs7OztZQUN6QixDQUNUO0NBQ0o7R0FwQ3dCWixNQUFNOztRQUNWTixvREFBVzs7O0FBRFBNLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanM/MWE2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQW5zd2Vycy5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGFkZEFkaXRpb25hbElkVG9TdG9yZSwgYWRkUGxhdGZvcm1Ub1N0b3JlLCBhZGRVc2VyTW9vZFRvU3RvcmUsIGFkZEdlbnJlSWRUb1N0b3JlLCBhZGRSZWFsZWFzZURhdGVUb1N0b3JlfSBmcm9tICcuLi9yZWR1Y2Vycy9tb3ZpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICBBbnN3ZXIocHJvcHMpe1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IFtwbGF0Zm9ybSwgc2V0UGxhdGVmb3JtXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgXG4gICAgY29uc29sZS5sb2cocHJvcHMuZGF0YSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwcm9wcy5oYW5kbGVTZWxlY3QocHJvcHMuaW5kZXgpXG4gICAgICAgIGlmIChwcm9wcy5pbmRleCA9PT0gMCl7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRQbGF0Zm9ybVRvU3RvcmUocHJvcHMuZGF0YS5rZXl3b3JkKSlcbiAgICAgICAgICAgIHNldFBsYXRlZm9ybShwcm9wcy5kYXRhLmtleXdvcmQpXG4gICAgICAgIH1cbiAgICAgICAgaWYocHJvcHMuaW5kZXggPT09IDEpe1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkVXNlck1vb2RUb1N0b3JlKHByb3BzLmRhdGEuYW5zd2VyKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaW5kZXggPT09IDIgfHwgcHJvcHMuaW5kZXggPT09IDMpe1xuXG4gICAgICAgICAgICBpZih0eXBlb2YocHJvcHMuZGF0YS5pZHMucGxhdGZvcm0pID09PSBPYmplY3Qpe1xuICAgICAgICAgICAgICAgIHByb3BzLmRhdGEuaWRzLnBsYXRmb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZEdlbnJlSWRUb1N0b3JlKGl0ZW0pKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkR2VucmVJZFRvU3RvcmUocHJvcHMuZGF0YS5pZHMucGxhdGZvcm0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHByb3BzLmluZGV4ID09PSA0KXtcbiAgICAgICAgICAgIGRpc3BhdGNoXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfSBzdHlsZT17e2JvcmRlckNvbG9yIDogcHJvcHMuaXNDbGlja2VkID8gXCIjZmYyNzQyXCIgOiBcIiNmOGViZTFcIn19ID5cbiAgICAgICAgICAgIDxwID57cHJvcHMuZGF0YS5hbnN3ZXJ9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJhZGRBZGl0aW9uYWxJZFRvU3RvcmUiLCJhZGRQbGF0Zm9ybVRvU3RvcmUiLCJhZGRVc2VyTW9vZFRvU3RvcmUiLCJhZGRHZW5yZUlkVG9TdG9yZSIsImFkZFJlYWxlYXNlRGF0ZVRvU3RvcmUiLCJBbnN3ZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwicGxhdGZvcm0iLCJzZXRQbGF0ZWZvcm0iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2VsZWN0IiwiaW5kZXgiLCJrZXl3b3JkIiwiYW5zd2VyIiwiaWRzIiwiT2JqZWN0IiwiZm9yRWFjaCIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImlzQ2xpY2tlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Answer.js\n");

/***/ })

});