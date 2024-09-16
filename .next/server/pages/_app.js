/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// Define Sepolia network manually\nconst sepolia = {\n    id: 11155111,\n    name: \"Sepolia Testnet\",\n    network: \"sepolia\",\n    nativeCurrency: {\n        name: \"Ethereum\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"https://sepolia.infura.io/v3/43b63ab830c94d8a98ca966e9d167c57\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Etherscan\",\n            url: \"https://sepolia.etherscan.io\"\n        }\n    },\n    testnet: true\n};\n// Configure Sepolia with `jsonRpcProvider`\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)([\n    sepolia\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.default\n            })\n    })\n]);\n// Get default wallets for the chains\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"HemDex\",\n    chains\n});\n// Create WAGMI client\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n// Customize theme (optional)\n// const myTheme = merge(darkTheme(), {\n// \tcolors: {\n// \t\taccentColor: '#18181b',\n// \t\taccentColorForeground: '#ffffff',\n// \t},\n// });\n// Main App Component\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_1__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme)({\n                ..._rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme.accentColors.purple,\n                borderRadius: \"small\",\n                fontStack: \"system\",\n                overlayBlur: \"small\"\n            }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n                lineNumber: 71,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n            lineNumber: 63,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1FO0FBQ1Q7QUFLMUI7QUFDQztBQUNVO0FBRVo7QUFFL0Isa0NBQWtDO0FBQ2xDLE1BQU1RLE9BQU8sR0FBRztJQUNmQyxFQUFFLEVBQUUsUUFBUTtJQUNaQyxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsY0FBYyxFQUFFO1FBQ2ZGLElBQUksRUFBRSxVQUFVO1FBQ2hCRyxNQUFNLEVBQUUsS0FBSztRQUNiQyxRQUFRLEVBQUUsRUFBRTtLQUNaO0lBQ0RDLE9BQU8sRUFBRTtRQUNSQyxPQUFPLEVBQUUsK0RBQStEO0tBQ3hFO0lBQ0RDLGNBQWMsRUFBRTtRQUNmRCxPQUFPLEVBQUU7WUFBRU4sSUFBSSxFQUFFLFdBQVc7WUFBRVEsR0FBRyxFQUFFLDhCQUE4QjtTQUFFO0tBQ25FO0lBQ0RDLE9BQU8sRUFBRSxJQUFJO0NBQ2I7QUFFRCwyQ0FBMkM7QUFDM0MsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHckIsc0RBQWUsQ0FDM0M7SUFBQ1EsT0FBTztDQUFDLEVBQ1Q7SUFBQ0wsd0VBQWUsQ0FBQztRQUFFbUIsR0FBRyxFQUFFLENBQUNDLEtBQUssR0FBSyxDQUFDO2dCQUFFQyxJQUFJLEVBQUVELEtBQUssQ0FBQ1IsT0FBTyxDQUFDQyxPQUFPO2FBQUUsQ0FBQztLQUFFLENBQUM7Q0FBQyxDQUN4RTtBQUVELHFDQUFxQztBQUNyQyxNQUFNLEVBQUVTLFVBQVUsR0FBRSxHQUFHckIseUVBQWlCLENBQUM7SUFDeENzQixPQUFPLEVBQUUsUUFBUTtJQUNqQk4sTUFBTTtDQUNOLENBQUM7QUFFRixzQkFBc0I7QUFDdEIsTUFBTU8sV0FBVyxHQUFHMUIsbURBQVksQ0FBQztJQUNoQzJCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZKLFFBQVE7Q0FDUixDQUFDO0FBRUYsNkJBQTZCO0FBQzdCLHVDQUF1QztBQUN2QyxhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLHNDQUFzQztBQUN0QyxNQUFNO0FBQ04sTUFBTTtBQUVOLHFCQUFxQjtBQUNyQixTQUFTUSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN4QyxxQkFDQyw4REFBQzdCLDhDQUFXO1FBQUM4QixNQUFNLEVBQUVMLFdBQVc7a0JBQy9CLDRFQUFDdEIsc0VBQWtCO1lBQ2xCZSxNQUFNLEVBQUVBLE1BQU07WUFDZGEsS0FBSyxFQUFFM0IsaUVBQVMsQ0FBQztnQkFDaEIsR0FBR0EsaUZBQTZCO2dCQUNoQzhCLFlBQVksRUFBRSxPQUFPO2dCQUNyQkMsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CQyxXQUFXLEVBQUUsT0FBTzthQUNwQixDQUFDO3NCQUNGLDRFQUFDUixTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDUjs7Ozs7WUFDUixDQUNiO0NBQ0Y7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tc3dhcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBqc29uUnBjUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvanNvblJwYyc7XG5pbXBvcnQge1xuXHRnZXREZWZhdWx0V2FsbGV0cyxcblx0UmFpbmJvd0tpdFByb3ZpZGVyLFxuXHRkYXJrVGhlbWUsXG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC9tZXJnZSc7XG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuLy8gRGVmaW5lIFNlcG9saWEgbmV0d29yayBtYW51YWxseVxuY29uc3Qgc2Vwb2xpYSA9IHtcblx0aWQ6IDExMTU1MTExLCAvLyBDaGFpbiBJRCBmb3IgU2Vwb2xpYVxuXHRuYW1lOiAnU2Vwb2xpYSBUZXN0bmV0Jyxcblx0bmV0d29yazogJ3NlcG9saWEnLFxuXHRuYXRpdmVDdXJyZW5jeToge1xuXHRcdG5hbWU6ICdFdGhlcmV1bScsXG5cdFx0c3ltYm9sOiAnRVRIJyxcblx0XHRkZWNpbWFsczogMTgsXG5cdH0sXG5cdHJwY1VybHM6IHtcblx0XHRkZWZhdWx0OiAnaHR0cHM6Ly9zZXBvbGlhLmluZnVyYS5pby92My80M2I2M2FiODMwYzk0ZDhhOThjYTk2NmU5ZDE2N2M1NycsXG5cdH0sXG5cdGJsb2NrRXhwbG9yZXJzOiB7XG5cdFx0ZGVmYXVsdDogeyBuYW1lOiAnRXRoZXJzY2FuJywgdXJsOiAnaHR0cHM6Ly9zZXBvbGlhLmV0aGVyc2Nhbi5pbycgfSxcblx0fSxcblx0dGVzdG5ldDogdHJ1ZSxcbn07XG5cbi8vIENvbmZpZ3VyZSBTZXBvbGlhIHdpdGggYGpzb25ScGNQcm92aWRlcmBcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuXHRbc2Vwb2xpYV0sIC8vIEFkZCBTZXBvbGlhIGNoYWluIGhlcmVcblx0W2pzb25ScGNQcm92aWRlcih7IHJwYzogKGNoYWluKSA9PiAoeyBodHRwOiBjaGFpbi5ycGNVcmxzLmRlZmF1bHQgfSkgfSldXG4pO1xuXG4vLyBHZXQgZGVmYXVsdCB3YWxsZXRzIGZvciB0aGUgY2hhaW5zXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcblx0YXBwTmFtZTogJ0hlbURleCcsXG5cdGNoYWlucyxcbn0pO1xuXG4vLyBDcmVhdGUgV0FHTUkgY2xpZW50XG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG5cdGF1dG9Db25uZWN0OiB0cnVlLFxuXHRjb25uZWN0b3JzLFxuXHRwcm92aWRlcixcbn0pO1xuXG4vLyBDdXN0b21pemUgdGhlbWUgKG9wdGlvbmFsKVxuLy8gY29uc3QgbXlUaGVtZSA9IG1lcmdlKGRhcmtUaGVtZSgpLCB7XG4vLyBcdGNvbG9yczoge1xuLy8gXHRcdGFjY2VudENvbG9yOiAnIzE4MTgxYicsXG4vLyBcdFx0YWNjZW50Q29sb3JGb3JlZ3JvdW5kOiAnI2ZmZmZmZicsXG4vLyBcdH0sXG4vLyB9KTtcblxuLy8gTWFpbiBBcHAgQ29tcG9uZW50XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG5cdFx0XHQ8UmFpbmJvd0tpdFByb3ZpZGVyXG5cdFx0XHRcdGNoYWlucz17Y2hhaW5zfVxuXHRcdFx0XHR0aGVtZT17ZGFya1RoZW1lKHtcblx0XHRcdFx0XHQuLi5kYXJrVGhlbWUuYWNjZW50Q29sb3JzLnB1cnBsZSxcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICdzbWFsbCcsXG5cdFx0XHRcdFx0Zm9udFN0YWNrOiAnc3lzdGVtJyxcblx0XHRcdFx0XHRvdmVybGF5Qmx1cjogJ3NtYWxsJyxcblx0XHRcdFx0fSl9PlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L1JhaW5ib3dLaXRQcm92aWRlcj5cblx0XHQ8L1dhZ21pQ29uZmlnPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImpzb25ScGNQcm92aWRlciIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwibWVyZ2UiLCJzZXBvbGlhIiwiaWQiLCJuYW1lIiwibmV0d29yayIsIm5hdGl2ZUN1cnJlbmN5Iiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiZGVmYXVsdCIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwidGVzdG5ldCIsImNoYWlucyIsInByb3ZpZGVyIiwicnBjIiwiY2hhaW4iLCJodHRwIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSIsImFjY2VudENvbG9ycyIsInB1cnBsZSIsImJvcmRlclJhZGl1cyIsImZvbnRTdGFjayIsIm92ZXJsYXlCbHVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();