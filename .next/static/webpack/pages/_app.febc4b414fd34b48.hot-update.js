"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"./node_modules/wagmi/providers/jsonRpc/dist/wagmi-providers-jsonRpc.esm.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n// Define Sepolia network manually\nvar sepolia = {\n    id: 11155111,\n    name: \"Sepolia Testnet\",\n    network: \"sepolia\",\n    nativeCurrency: {\n        name: \"Ethereum\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"https://sepolia.infura.io/v3/43b63ab830c94d8a98ca966e9d167c57\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Etherscan\",\n            url: \"https://sepolia.etherscan.io\"\n        }\n    },\n    testnet: true\n};\n// Configure Sepolia with `jsonRpcProvider`\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    sepolia\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_1__.jsonRpcProvider)({\n        rpc: function(chain) {\n            return {\n                http: chain.rpcUrls.default\n            };\n        }\n    })\n]), chains = ref.chains, provider = ref.provider;\n// Get default wallets for the chains\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.getDefaultWallets)({\n    appName: \"HemDex\",\n    chains: chains\n}).connectors;\n// Create WAGMI client\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\n// Main App Component\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.RainbowKitProvider, {\n            chains: chains,\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.darkTheme)((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.darkTheme.accentColors.purple), {\n                borderRadius: \"medium\",\n                fontStack: \"system\",\n                overlayBlur: \"small\"\n            })),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n            lineNumber: 56,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n        lineNumber: 55,\n        columnNumber: 3\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFtRTtBQUNUO0FBSzFCO0FBQ0M7QUFDVTtBQUVaO0FBRS9CLGtDQUFrQztBQUNsQyxJQUFNUSxPQUFPLEdBQUc7SUFDZkMsRUFBRSxFQUFFLFFBQVE7SUFDWkMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLGNBQWMsRUFBRTtRQUNmRixJQUFJLEVBQUUsVUFBVTtRQUNoQkcsTUFBTSxFQUFFLEtBQUs7UUFDYkMsUUFBUSxFQUFFLEVBQUU7S0FDWjtJQUNEQyxPQUFPLEVBQUU7UUFDUkMsT0FBTyxFQUFFLCtEQUErRDtLQUN4RTtJQUNEQyxjQUFjLEVBQUU7UUFDZkQsT0FBTyxFQUFFO1lBQUVOLElBQUksRUFBRSxXQUFXO1lBQUVRLEdBQUcsRUFBRSw4QkFBOEI7U0FBRTtLQUNuRTtJQUNEQyxPQUFPLEVBQUUsSUFBSTtDQUNiO0FBRUQsMkNBQTJDO0FBQzNDLElBQTZCbkIsR0FHNUIsR0FINEJBLHNEQUFlLENBQzNDO0lBQUNRLE9BQU87Q0FBQyxFQUNUO0lBQUNMLHdFQUFlLENBQUM7UUFBRWlCLEdBQUcsRUFBRSxTQUFDQyxLQUFLO21CQUFNO2dCQUFFQyxJQUFJLEVBQUVELEtBQUssQ0FBQ04sT0FBTyxDQUFDQyxPQUFPO2FBQUU7U0FBQztLQUFFLENBQUM7Q0FBQyxDQUN4RSxFQUhPTyxNQUFNLEdBQWV2QixHQUc1QixDQUhPdUIsTUFBTSxFQUFFQyxRQUFRLEdBQUt4QixHQUc1QixDQUhld0IsUUFBUTtBQUt4QixxQ0FBcUM7QUFDckMsSUFBTSxVQUFZLEdBQUtwQix5RUFBaUIsQ0FBQztJQUN4Q3NCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCSCxNQUFNLEVBQU5BLE1BQU07Q0FDTixDQUFDLENBSE1FLFVBQVU7QUFLbEIsc0JBQXNCO0FBQ3RCLElBQU1FLFdBQVcsR0FBRzFCLG1EQUFZLENBQUM7SUFDaEMyQixXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZELFFBQVEsRUFBUkEsUUFBUTtDQUNSLENBQUM7QUFHRixxQkFBcUI7QUFDckIsU0FBU0ssS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7SUFDcEMscUJBQ0MsOERBQUM3Qiw4Q0FBVztRQUFDOEIsTUFBTSxFQUFFTCxXQUFXO2tCQUMvQiw0RUFBQ3RCLHNFQUFrQjtZQUNsQmtCLE1BQU0sRUFBRUEsTUFBTTtZQUNkVSxLQUFLLEVBQUUzQixpRUFBUyxDQUFDLHdLQUNiQSxpRkFBNkI7Z0JBQ2hDOEIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCQyxTQUFTLEVBQUUsUUFBUTtnQkFDbkJDLFdBQVcsRUFBRSxPQUFPO2NBQ3BCLENBQUM7c0JBQ0YsNEVBQUNSLFNBQVMscUZBQUtDLFNBQVM7Ozs7b0JBQUk7Ozs7O2dCQUNSOzs7OztZQUNSLENBQ2I7Q0FDRjtBQWZRRixLQUFBQSxLQUFLO0FBaUJkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9qc29uUnBjJztcbmltcG9ydCB7XG5cdGdldERlZmF1bHRXYWxsZXRzLFxuXHRSYWluYm93S2l0UHJvdmlkZXIsXG5cdGRhcmtUaGVtZSxcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlJztcbmltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG4vLyBEZWZpbmUgU2Vwb2xpYSBuZXR3b3JrIG1hbnVhbGx5XG5jb25zdCBzZXBvbGlhID0ge1xuXHRpZDogMTExNTUxMTEsIC8vIENoYWluIElEIGZvciBTZXBvbGlhXG5cdG5hbWU6ICdTZXBvbGlhIFRlc3RuZXQnLFxuXHRuZXR3b3JrOiAnc2Vwb2xpYScsXG5cdG5hdGl2ZUN1cnJlbmN5OiB7XG5cdFx0bmFtZTogJ0V0aGVyZXVtJyxcblx0XHRzeW1ib2w6ICdFVEgnLFxuXHRcdGRlY2ltYWxzOiAxOCxcblx0fSxcblx0cnBjVXJsczoge1xuXHRcdGRlZmF1bHQ6ICdodHRwczovL3NlcG9saWEuaW5mdXJhLmlvL3YzLzQzYjYzYWI4MzBjOTRkOGE5OGNhOTY2ZTlkMTY3YzU3Jyxcblx0fSxcblx0YmxvY2tFeHBsb3JlcnM6IHtcblx0XHRkZWZhdWx0OiB7IG5hbWU6ICdFdGhlcnNjYW4nLCB1cmw6ICdodHRwczovL3NlcG9saWEuZXRoZXJzY2FuLmlvJyB9LFxuXHR9LFxuXHR0ZXN0bmV0OiB0cnVlLFxufTtcblxuLy8gQ29uZmlndXJlIFNlcG9saWEgd2l0aCBganNvblJwY1Byb3ZpZGVyYFxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG5cdFtzZXBvbGlhXSwgLy8gQWRkIFNlcG9saWEgY2hhaW4gaGVyZVxuXHRbanNvblJwY1Byb3ZpZGVyKHsgcnBjOiAoY2hhaW4pID0+ICh7IGh0dHA6IGNoYWluLnJwY1VybHMuZGVmYXVsdCB9KSB9KV1cbik7XG5cbi8vIEdldCBkZWZhdWx0IHdhbGxldHMgZm9yIHRoZSBjaGFpbnNcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuXHRhcHBOYW1lOiAnSGVtRGV4Jyxcblx0Y2hhaW5zLFxufSk7XG5cbi8vIENyZWF0ZSBXQUdNSSBjbGllbnRcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcblx0YXV0b0Nvbm5lY3Q6IHRydWUsXG5cdGNvbm5lY3RvcnMsXG5cdHByb3ZpZGVyLFxufSk7XG5cblxuLy8gTWFpbiBBcHAgQ29tcG9uZW50XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG5cdFx0XHQ8UmFpbmJvd0tpdFByb3ZpZGVyXG5cdFx0XHRcdGNoYWlucz17Y2hhaW5zfVxuXHRcdFx0XHR0aGVtZT17ZGFya1RoZW1lKHtcblx0XHRcdFx0XHQuLi5kYXJrVGhlbWUuYWNjZW50Q29sb3JzLnB1cnBsZSxcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICdtZWRpdW0nLFxuXHRcdFx0XHRcdGZvbnRTdGFjazogJ3N5c3RlbScsXG5cdFx0XHRcdFx0b3ZlcmxheUJsdXI6ICdzbWFsbCcsXG5cdFx0XHRcdH0pfT5cblx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0PC9SYWluYm93S2l0UHJvdmlkZXI+XG5cdFx0PC9XYWdtaUNvbmZpZz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJqc29uUnBjUHJvdmlkZXIiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsIm1lcmdlIiwic2Vwb2xpYSIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImRlZmF1bHQiLCJibG9ja0V4cGxvcmVycyIsInVybCIsInRlc3RuZXQiLCJycGMiLCJjaGFpbiIsImh0dHAiLCJjaGFpbnMiLCJwcm92aWRlciIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiLCJhY2NlbnRDb2xvcnMiLCJwdXJwbGUiLCJib3JkZXJSYWRpdXMiLCJmb250U3RhY2siLCJvdmVybGF5Qmx1ciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});