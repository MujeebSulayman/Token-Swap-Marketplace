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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// Define Sepolia network manually\nconst sepolia = {\n    id: 11155111,\n    name: \"Sepolia Testnet\",\n    network: \"sepolia\",\n    nativeCurrency: {\n        name: \"Ethereum\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: \"https://sepolia.infura.io/v3/43b63ab830c94d8a98ca966e9d167c57\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"Etherscan\",\n            url: \"https://sepolia.etherscan.io\"\n        }\n    },\n    testnet: true\n};\n// Configure Sepolia with `jsonRpcProvider`\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)([\n    sepolia\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_2__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.default\n            })\n    })\n]);\n// Get default wallets for the chains\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"HemDex\",\n    chains\n});\n// Create WAGMI client\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n// Main App Component\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_1__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme)({\n                ..._rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme.accentColors.purple,\n                borderRadius: \"medium\",\n                fontStack: \"system\",\n                overlayBlur: \"small\"\n            }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n            lineNumber: 56,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\Projects\\\\Token Swap Marketplace\\\\pages\\\\_app.js\",\n        lineNumber: 55,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1FO0FBQ1Q7QUFLMUI7QUFDQztBQUNVO0FBRVo7QUFFL0Isa0NBQWtDO0FBQ2xDLE1BQU1RLE9BQU8sR0FBRztJQUNmQyxFQUFFLEVBQUUsUUFBUTtJQUNaQyxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsY0FBYyxFQUFFO1FBQ2ZGLElBQUksRUFBRSxVQUFVO1FBQ2hCRyxNQUFNLEVBQUUsS0FBSztRQUNiQyxRQUFRLEVBQUUsRUFBRTtLQUNaO0lBQ0RDLE9BQU8sRUFBRTtRQUNSQyxPQUFPLEVBQUUsK0RBQStEO0tBQ3hFO0lBQ0RDLGNBQWMsRUFBRTtRQUNmRCxPQUFPLEVBQUU7WUFBRU4sSUFBSSxFQUFFLFdBQVc7WUFBRVEsR0FBRyxFQUFFLDhCQUE4QjtTQUFFO0tBQ25FO0lBQ0RDLE9BQU8sRUFBRSxJQUFJO0NBQ2I7QUFFRCwyQ0FBMkM7QUFDM0MsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHckIsc0RBQWUsQ0FDM0M7SUFBQ1EsT0FBTztDQUFDLEVBQ1Q7SUFBQ0wsd0VBQWUsQ0FBQztRQUFFbUIsR0FBRyxFQUFFLENBQUNDLEtBQUssR0FBSyxDQUFDO2dCQUFFQyxJQUFJLEVBQUVELEtBQUssQ0FBQ1IsT0FBTyxDQUFDQyxPQUFPO2FBQUUsQ0FBQztLQUFFLENBQUM7Q0FBQyxDQUN4RTtBQUVELHFDQUFxQztBQUNyQyxNQUFNLEVBQUVTLFVBQVUsR0FBRSxHQUFHckIseUVBQWlCLENBQUM7SUFDeENzQixPQUFPLEVBQUUsUUFBUTtJQUNqQk4sTUFBTTtDQUNOLENBQUM7QUFFRixzQkFBc0I7QUFDdEIsTUFBTU8sV0FBVyxHQUFHMUIsbURBQVksQ0FBQztJQUNoQzJCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZKLFFBQVE7Q0FDUixDQUFDO0FBR0YscUJBQXFCO0FBQ3JCLFNBQVNRLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3hDLHFCQUNDLDhEQUFDN0IsOENBQVc7UUFBQzhCLE1BQU0sRUFBRUwsV0FBVztrQkFDL0IsNEVBQUN0QixzRUFBa0I7WUFDbEJlLE1BQU0sRUFBRUEsTUFBTTtZQUNkYSxLQUFLLEVBQUUzQixpRUFBUyxDQUFDO2dCQUNoQixHQUFHQSxpRkFBNkI7Z0JBQ2hDOEIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCQyxTQUFTLEVBQUUsUUFBUTtnQkFDbkJDLFdBQVcsRUFBRSxPQUFPO2FBQ3BCLENBQUM7c0JBQ0YsNEVBQUNSLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNSOzs7OztZQUNSLENBQ2I7Q0FDRjtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2tlbi1zd2FwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9qc29uUnBjJztcbmltcG9ydCB7XG5cdGdldERlZmF1bHRXYWxsZXRzLFxuXHRSYWluYm93S2l0UHJvdmlkZXIsXG5cdGRhcmtUaGVtZSxcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlJztcbmltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG4vLyBEZWZpbmUgU2Vwb2xpYSBuZXR3b3JrIG1hbnVhbGx5XG5jb25zdCBzZXBvbGlhID0ge1xuXHRpZDogMTExNTUxMTEsIC8vIENoYWluIElEIGZvciBTZXBvbGlhXG5cdG5hbWU6ICdTZXBvbGlhIFRlc3RuZXQnLFxuXHRuZXR3b3JrOiAnc2Vwb2xpYScsXG5cdG5hdGl2ZUN1cnJlbmN5OiB7XG5cdFx0bmFtZTogJ0V0aGVyZXVtJyxcblx0XHRzeW1ib2w6ICdFVEgnLFxuXHRcdGRlY2ltYWxzOiAxOCxcblx0fSxcblx0cnBjVXJsczoge1xuXHRcdGRlZmF1bHQ6ICdodHRwczovL3NlcG9saWEuaW5mdXJhLmlvL3YzLzQzYjYzYWI4MzBjOTRkOGE5OGNhOTY2ZTlkMTY3YzU3Jyxcblx0fSxcblx0YmxvY2tFeHBsb3JlcnM6IHtcblx0XHRkZWZhdWx0OiB7IG5hbWU6ICdFdGhlcnNjYW4nLCB1cmw6ICdodHRwczovL3NlcG9saWEuZXRoZXJzY2FuLmlvJyB9LFxuXHR9LFxuXHR0ZXN0bmV0OiB0cnVlLFxufTtcblxuLy8gQ29uZmlndXJlIFNlcG9saWEgd2l0aCBganNvblJwY1Byb3ZpZGVyYFxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG5cdFtzZXBvbGlhXSwgLy8gQWRkIFNlcG9saWEgY2hhaW4gaGVyZVxuXHRbanNvblJwY1Byb3ZpZGVyKHsgcnBjOiAoY2hhaW4pID0+ICh7IGh0dHA6IGNoYWluLnJwY1VybHMuZGVmYXVsdCB9KSB9KV1cbik7XG5cbi8vIEdldCBkZWZhdWx0IHdhbGxldHMgZm9yIHRoZSBjaGFpbnNcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuXHRhcHBOYW1lOiAnSGVtRGV4Jyxcblx0Y2hhaW5zLFxufSk7XG5cbi8vIENyZWF0ZSBXQUdNSSBjbGllbnRcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcblx0YXV0b0Nvbm5lY3Q6IHRydWUsXG5cdGNvbm5lY3RvcnMsXG5cdHByb3ZpZGVyLFxufSk7XG5cblxuLy8gTWFpbiBBcHAgQ29tcG9uZW50XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG5cdFx0XHQ8UmFpbmJvd0tpdFByb3ZpZGVyXG5cdFx0XHRcdGNoYWlucz17Y2hhaW5zfVxuXHRcdFx0XHR0aGVtZT17ZGFya1RoZW1lKHtcblx0XHRcdFx0XHQuLi5kYXJrVGhlbWUuYWNjZW50Q29sb3JzLnB1cnBsZSxcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICdtZWRpdW0nLFxuXHRcdFx0XHRcdGZvbnRTdGFjazogJ3N5c3RlbScsXG5cdFx0XHRcdFx0b3ZlcmxheUJsdXI6ICdzbWFsbCcsXG5cdFx0XHRcdH0pfT5cblx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0PC9SYWluYm93S2l0UHJvdmlkZXI+XG5cdFx0PC9XYWdtaUNvbmZpZz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJqc29uUnBjUHJvdmlkZXIiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsIm1lcmdlIiwic2Vwb2xpYSIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImRlZmF1bHQiLCJibG9ja0V4cGxvcmVycyIsInVybCIsInRlc3RuZXQiLCJjaGFpbnMiLCJwcm92aWRlciIsInJwYyIsImNoYWluIiwiaHR0cCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiLCJhY2NlbnRDb2xvcnMiLCJwdXJwbGUiLCJib3JkZXJSYWRpdXMiLCJmb250U3RhY2siLCJvdmVybGF5Qmx1ciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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