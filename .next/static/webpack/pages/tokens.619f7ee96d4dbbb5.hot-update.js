"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tokens",{

/***/ "./components/TokenBalance.js":
/*!************************************!*\
  !*** ./components/TokenBalance.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_HP_Documents_Projects_Token_Swap_Marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Documents_Projects_Token_Swap_Marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Documents_Projects_Token_Swap_Marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TokenBalance = function(param) {\n    var name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"_\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref3[0], setTxPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Transaction Completed\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"_\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenBalance() {\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function _fetchTokenBalance() {\n        _fetchTokenBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_HP_Documents_Projects_Token_Swap_Marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bal, fBal;\n            return C_Users_HP_Documents_Projects_Token_Swap_Marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenBalance)(name, walletAddress);\n                    case 3:\n                        bal = _ctx.sent;\n                        console.log(bal);\n                        fBal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(bal.toString(), 18);\n                        setBalance(fBal.toString());\n                        _ctx.next = 13;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                        notifyError(\"Failed to fetch token balance\");\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }));\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_HP_Documents_Projects_Token_Swap_Marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_HP_Documents_Projects_Token_Swap_Marketplace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenAddress)(name);\n                    case 3:\n                        address = _ctx.sent;\n                        setTokenAddress(address);\n                        _ctx.next = 11;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                        notifyError(\"Failed to fetch token address\");\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"text-sm\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"bg-zinc-800 p-0.5 ml-3 px-3 rounded-lg text-zinc-100\",\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(copyIcon.icon, {\n                    className: \"h-6 cursor-pointer\",\n                    onClick: function() {\n                        navigator.clipboard.writeText(tokenAddress);\n                        setCopyIcon({\n                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardCheckIcon\n                        });\n                        setTimeout(function() {\n                            return setCopyIcon({\n                                icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n                            });\n                        }, 2000);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n                    lineNumber: 63,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_4__.TransactionStatus, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 73,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\components\\\\TokenBalance.js\",\n        lineNumber: 54,\n        columnNumber: 3\n    }, _this);\n};\n_s(TokenBalance, \"YqODc3N0E60NeeZZcDEDlgeMnpI=\");\n_c = TokenBalance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenBalance);\nvar _c;\n$RefreshReg$(_c, \"TokenBalance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rva2VuQmFsYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBb0Q7QUFDcEI7QUFDaUI7QUFLZjtBQUNVO0FBS2xCOztBQUUxQixJQUFNYSxZQUFZLEdBQUcsZ0JBQTZCO1FBQTFCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsYUFBYSxTQUFiQSxhQUFhOztJQUMxQyxJQUE4QmQsR0FBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFwQ2UsT0FBTyxHQUFnQmYsR0FBYSxHQUE3QixFQUFFZ0IsVUFBVSxHQUFJaEIsR0FBYSxHQUFqQjtJQUMxQixJQUF3Q0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNDaUIsWUFBWSxHQUFxQmpCLElBQVUsR0FBL0IsRUFBRWtCLGVBQWUsR0FBSWxCLElBQVUsR0FBZDtJQUNwQyxJQUFnQ0EsSUFBaUMsR0FBakNBLCtDQUFRLENBQUM7UUFBRW1CLElBQUksRUFBRWQsbUVBQWE7S0FBRSxDQUFDLEVBQTFEZSxRQUFRLEdBQWlCcEIsSUFBaUMsR0FBbEQsRUFBRXFCLFdBQVcsR0FBSXJCLElBQWlDLEdBQXJDO0lBQzVCLElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDc0IsU0FBUyxHQUFrQnRCLElBQWUsR0FBakMsRUFBRXVCLFlBQVksR0FBSXZCLElBQWUsR0FBbkI7SUFDOUIsSUFBTXdCLFdBQVcsR0FBRyxTQUFDQyxHQUFHO2VBQUt0Qiw2REFBVyxDQUFDc0IsR0FBRyxFQUFFO1lBQUVFLFFBQVEsRUFBRSxJQUFJO1NBQUUsQ0FBQztLQUFBO0lBQ2pFLElBQU1DLGFBQWEsR0FBRztlQUFNekIsK0RBQWEsQ0FBQyx1QkFBdUIsQ0FBQztLQUFBO0lBRWxFSixnREFBUyxDQUFDLFdBQU07UUFDZixJQUFJYyxJQUFJLElBQUlDLGFBQWEsRUFBRTtZQUMxQmdCLGlCQUFpQixFQUFFLENBQUM7WUFDcEJDLGlCQUFpQixFQUFFLENBQUM7U0FDcEIsTUFBTWYsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCLEVBQUU7UUFBQ0gsSUFBSTtRQUFFQyxhQUFhO0tBQUMsQ0FBQyxDQUFDO2FBRVhnQixpQkFBaUI7ZUFBakJBLGtCQUFpQjs7YUFBakJBLGtCQUFpQjtRQUFqQkEsa0JBQWlCLEdBQWhDLHVRQUFtQztnQkFFM0JFLEdBQUcsRUFFSEMsSUFBSTs7Ozs7OytCQUZRdkIsK0RBQWUsQ0FBQ0csSUFBSSxFQUFFQyxhQUFhLENBQUM7O3dCQUFoRGtCLEdBQUcsWUFBNkM7d0JBQ3RERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7d0JBQ1hDLElBQUksR0FBRy9CLDREQUF3QixDQUFDOEIsR0FBRyxDQUFDTSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDMUR0QixVQUFVLENBQUNpQixJQUFJLENBQUNLLFFBQVEsRUFBRSxDQUFDLENBQUM7Ozs7Ozt3QkFFNUJKLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7d0JBQ25CWCxXQUFXLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7U0FFOUM7ZUFWY00sa0JBQWlCOzthQVlqQkMsaUJBQWlCO2VBQWpCQSxrQkFBaUI7O2FBQWpCQSxrQkFBaUI7UUFBakJBLGtCQUFpQixHQUFoQyx1UUFBbUM7Z0JBRTNCUSxPQUFPOzs7Ozs7K0JBQVM5QiwrREFBZSxDQUFDSSxJQUFJLENBQUM7O3dCQUFyQzBCLE9BQU8sWUFBOEI7d0JBQzNDckIsZUFBZSxDQUFDcUIsT0FBTyxDQUFDLENBQUM7Ozs7Ozt3QkFFekJMLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7d0JBQ25CWCxXQUFXLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7U0FFOUM7ZUFSY08sa0JBQWlCOztJQVVoQyxxQkFDQyw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOzswQkFDOUUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5RUFBeUU7O2tDQUN2Riw4REFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLFNBQVM7a0NBQUU1QixJQUFJOzs7Ozs2QkFBSztrQ0FDakMsOERBQUM2QixHQUFDO3dCQUFDRCxTQUFTLEVBQUMsc0RBQXNEO2tDQUNqRTFCLE9BQU87Ozs7OzZCQUNMOzs7Ozs7cUJBQ0M7MEJBRU4sOERBQUN5QixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0RBQXNEOzBCQUNwRSw0RUFBQ3JCLFFBQVEsQ0FBQ0QsSUFBSTtvQkFDYnNCLFNBQVMsRUFBQyxvQkFBb0I7b0JBQzlCRSxPQUFPLEVBQUUsV0FBTTt3QkFDZEMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQzdCLFlBQVksQ0FBQyxDQUFDO3dCQUM1Q0ksV0FBVyxDQUFDOzRCQUFFRixJQUFJLEVBQUViLHdFQUFrQjt5QkFBRSxDQUFDLENBQUM7d0JBQzFDeUMsVUFBVSxDQUFDO21DQUFNMUIsV0FBVyxDQUFDO2dDQUFFRixJQUFJLEVBQUVkLG1FQUFhOzZCQUFFLENBQUM7eUJBQUEsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDN0Q7Ozs7O3lCQUNBOzs7OztxQkFDRztZQUVMaUIsU0FBUyxrQkFBSSw4REFBQ2QscURBQWlCOzs7O3FCQUFHOzBCQUNuQyw4REFBQ0osb0RBQU87Ozs7cUJBQUc7Ozs7OzthQUNOLENBQ0w7Q0FDRjtHQTdES1EsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBK0RsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9rZW5CYWxhbmNlLmpzPzIwYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbmltcG9ydCB7XG5cdENsaXBib2FyZEljb24sXG5cdENsaXBib2FyZENoZWNrSWNvbixcblx0UGx1c0ljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblN0YXR1cyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtcblx0Z2V0VG9rZW5BZGRyZXNzLFxuXHRnZXRUb2tlbkJhbGFuY2UsXG5cdGluY3JlYXNlQWxsb3dhbmNlLFxufSBmcm9tICcuLi91dGlscy9jb250ZXh0JztcblxuY29uc3QgVG9rZW5CYWxhbmNlID0gKHsgbmFtZSwgd2FsbGV0QWRkcmVzcyB9KSA9PiB7XG5cdGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKCdfJyk7XG5cdGNvbnN0IFt0b2tlbkFkZHJlc3MsIHNldFRva2VuQWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbY29weUljb24sIHNldENvcHlJY29uXSA9IHVzZVN0YXRlKHsgaWNvbjogQ2xpcGJvYXJkSWNvbiB9KTtcblx0Y29uc3QgW3R4UGVuZGluZywgc2V0VHhQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDYwMDAgfSk7XG5cdGNvbnN0IG5vdGlmeVN1Y2Nlc3MgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKCdUcmFuc2FjdGlvbiBDb21wbGV0ZWQnKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChuYW1lICYmIHdhbGxldEFkZHJlc3MpIHtcblx0XHRcdGZldGNoVG9rZW5CYWxhbmNlKCk7XG5cdFx0XHRmZXRjaFRva2VuQWRkcmVzcygpO1xuXHRcdH0gZWxzZSBzZXRCYWxhbmNlKCdfJyk7XG5cdH0sIFtuYW1lLCB3YWxsZXRBZGRyZXNzXSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkJhbGFuY2UoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGJhbCA9IGF3YWl0IGdldFRva2VuQmFsYW5jZShuYW1lLCB3YWxsZXRBZGRyZXNzKTtcblx0XHRcdGNvbnNvbGUubG9nKGJhbCk7XG5cdFx0XHRjb25zdCBmQmFsID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGJhbC50b1N0cmluZygpLCAxOCk7XG5cdFx0XHRzZXRCYWxhbmNlKGZCYWwudG9TdHJpbmcoKSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdG5vdGlmeUVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdG9rZW4gYmFsYW5jZScpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5BZGRyZXNzKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xuXHRcdFx0c2V0VG9rZW5BZGRyZXNzKGFkZHJlc3MpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRub3RpZnlFcnJvcignRmFpbGVkIHRvIGZldGNoIHRva2VuIGFkZHJlc3MnKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IG14LTIgYm9yZGVyLVsxcHhdIHJvdW5kZWQtbCByb3VuZGVkLXItbGcgYm9yZGVyLVsjNzc2NUYzXSc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgYmctemluYy05MDAgdGV4dC16aW5jLTMwMCB3LWZpdCBwLTIgcHgtMyByb3VuZGVkLWwtbGcnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtc20nPntuYW1lfTwvcD5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdiZy16aW5jLTgwMCBwLTAuNSBtbC0zIHB4LTMgcm91bmRlZC1sZyB0ZXh0LXppbmMtMTAwJz5cblx0XHRcdFx0XHR7YmFsYW5jZX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBwLTIgcHgtMiBiZy1bIzc3NjVGM10gcm91bmRlZC1yLWxnJz5cblx0XHRcdFx0PGNvcHlJY29uLmljb25cblx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNiBjdXJzb3ItcG9pbnRlcidcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0b2tlbkFkZHJlc3MpO1xuXHRcdFx0XHRcdFx0c2V0Q29weUljb24oeyBpY29uOiBDbGlwYm9hcmRDaGVja0ljb24gfSk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHNldENvcHlJY29uKHsgaWNvbjogQ2xpcGJvYXJkSWNvbiB9KSwgMjAwMCk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7dHhQZW5kaW5nICYmIDxUcmFuc2FjdGlvblN0YXR1cyAvPn1cblx0XHRcdDxUb2FzdGVyIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2tlbkJhbGFuY2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJldGhlcnMiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJDbGlwYm9hcmRJY29uIiwiQ2xpcGJvYXJkQ2hlY2tJY29uIiwiUGx1c0ljb24iLCJUcmFuc2FjdGlvblN0YXR1cyIsImdldFRva2VuQWRkcmVzcyIsImdldFRva2VuQmFsYW5jZSIsImluY3JlYXNlQWxsb3dhbmNlIiwiVG9rZW5CYWxhbmNlIiwibmFtZSIsIndhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInRva2VuQWRkcmVzcyIsInNldFRva2VuQWRkcmVzcyIsImljb24iLCJjb3B5SWNvbiIsInNldENvcHlJY29uIiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJmZXRjaFRva2VuQmFsYW5jZSIsImZldGNoVG9rZW5BZGRyZXNzIiwiYmFsIiwiZkJhbCIsImNvbnNvbGUiLCJsb2ciLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJhZGRyZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TokenBalance.js\n"));

/***/ })

});