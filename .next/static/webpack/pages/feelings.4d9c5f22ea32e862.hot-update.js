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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Answer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Answers.module.css */ \"./styles/Answers.module.css\");\n/* harmony import */ var _styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/movies */ \"./reducers/movies.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Answer(props) {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    console.log(props.data);\n    var handleClick = function() {\n        props.handleSelect(props.index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Answers_module_css__WEBPACK_IMPORTED_MODULE_4___default().answer),\n        onClick: function() {\n            return handleClick();\n        },\n        style: {\n            borderColor: props.isClicked ? \"#ff2742\" : \"#f8ebe1\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: props.data.answer\n        }, void 0, false, {\n            fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Answer.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marionthm1/Documents/Code/movie-project/frontend/components/Answer.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n};\n_s(Answer, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Answer;\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNqQjtBQUNTO0FBQ21HOztBQUU3SCxTQUFVUSxNQUFNLENBQUNDLEtBQUssRUFBQzs7SUFDbEMsSUFBTUMsUUFBUSxHQUFHUix3REFBVyxFQUFFO0lBRTlCUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDSSxJQUFJLENBQUM7SUFFdkIsSUFBTUMsV0FBVyxHQUFHLFdBQU07UUFFdEJMLEtBQUssQ0FBQ00sWUFBWSxDQUFDTixLQUFLLENBQUNPLEtBQUssQ0FBQztLQUNsQztJQUVELHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRWxCLDBFQUFhO1FBQUVvQixPQUFPLEVBQUU7bUJBQU1OLFdBQVcsRUFBRTtTQUFBO1FBQUVPLEtBQUssRUFBRTtZQUFDQyxXQUFXLEVBQUdiLEtBQUssQ0FBQ2MsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTO1NBQUM7a0JBQ3ZILDRFQUFDQyxHQUFDO3NCQUFHZixLQUFLLENBQUNJLElBQUksQ0FBQ00sTUFBTTs7Ozs7Z0JBQUs7Ozs7O1lBQ3pCLENBQ1Q7Q0FDSjtHQWZ3QlgsTUFBTTs7UUFDVk4sb0RBQVc7OztBQURQTSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQW5zd2VyLmpzPzFhNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Fuc3dlcnMubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyBhZGRBZGl0aW9uYWxJZFRvU3RvcmUsIGFkZFBsYXRmb3JtVG9TdG9yZSwgYWRkVXNlck1vb2RUb1N0b3JlLCBhZGRHZW5yZUlkVG9TdG9yZSwgYWRkUmVhbGVhc2VEYXRlVG9TdG9yZX0gZnJvbSAnLi4vcmVkdWNlcnMvbW92aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgQW5zd2VyKHByb3BzKXtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgcHJvcHMuaGFuZGxlU2VsZWN0KHByb3BzLmluZGV4KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9IHN0eWxlPXt7Ym9yZGVyQ29sb3IgOiBwcm9wcy5pc0NsaWNrZWQgPyBcIiNmZjI3NDJcIiA6IFwiI2Y4ZWJlMVwifX0gPlxuICAgICAgICAgICAgPHAgPntwcm9wcy5kYXRhLmFuc3dlcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsImFkZEFkaXRpb25hbElkVG9TdG9yZSIsImFkZFBsYXRmb3JtVG9TdG9yZSIsImFkZFVzZXJNb29kVG9TdG9yZSIsImFkZEdlbnJlSWRUb1N0b3JlIiwiYWRkUmVhbGVhc2VEYXRlVG9TdG9yZSIsIkFuc3dlciIsInByb3BzIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2VsZWN0IiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJhbnN3ZXIiLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImlzQ2xpY2tlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Answer.js\n");

/***/ })

});