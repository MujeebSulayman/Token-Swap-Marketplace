/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SingleCard.js":
/*!**********************************!*\
  !*** ./components/SingleCard.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import { useState, useRef, useEffect } from 'react';\n// import {\n// \tgetTokenAddress,\n// \tgetTokenBalance,\n// \tincreaseAllowance,\n// } from '../utils/context';\n// import { ethers } from 'ethers';\n// import TransactionStatus from './TransactionStatus';\n// import toast, { Toaster } from 'react-hot-toast';\n// import {\n// \tClipboardIcon,\n// \tclickboardCheckIcon,\n// \tPlusIcon,\n// } from '@heroicons/react/outline';\n// const SingleCard = ({ index, name, walletAddress }) => {\n// \tconst [balance, setBalance] = useState('_');\n// \tconst [tokenAddress, setTokenAddress] = useState();\n// \tconst [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });\n// \tconst [txPending, setTxPending] = useState(false);\n// \tconst notifyError = () => toast.error(msg, { duration: 6000 });\n// \tconst notifySuccess = () =>\n// \t\ttoast.success('Transaction Successful', { duration: 6000 });\n// \tuseEffect(() => {\n// \t\tif (name && walletAddress) {\n// \t\t\tfetchTokenBalance();\n// \t\t\tfetchTokenAddress();\n// \t\t} else {\n// \t\t\tsetBalance('_');\n// \t\t}\n// \t}, [name, walletAddress]);\n// \tasync function fetchTokenBalance() {\n// \t\tconst bal = await getTokenBalance(name, walletAddress);\n// \t\tconst fBal = ethers.utils.formatUnits(bal.toString(), 18);\n// \t\tsetBalance(fBal.toString());\n// \t}\n// \tasync function fetchTokenAddress() {\n// \t\tconst address = await getTokenAddress(name)\n// \t\tsetTokenAddress(address)\n// \t}\n// \treturn (\n// \t\t<article className='flex flex-col bg-[#212429]'>\n// \t\t\t<a\n// \t\t\t\thref=''\n// \t\t\t\tnoopener\n// \t\t\t\tnoreferrer\n// \t\t\t\taria-label='Loren ipsum Loren ipsum Loren ipsum'></a>\n// \t\t</article>\n// \t);\n// };\n// export default SingleCard;\nexpor;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELFdBQVc7QUFDWCxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0IsbUNBQW1DO0FBQ25DLHVEQUF1RDtBQUN2RCxvREFBb0Q7QUFDcEQsV0FBVztBQUNYLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsYUFBYTtBQUNiLHFDQUFxQztBQUVyQywyREFBMkQ7QUFDM0QsZ0RBQWdEO0FBQ2hELHVEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUsc0RBQXNEO0FBQ3RELG1FQUFtRTtBQUNuRSwrQkFBK0I7QUFDL0IsaUVBQWlFO0FBRWpFLHFCQUFxQjtBQUNyQixpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLE1BQU07QUFDTiw4QkFBOEI7QUFFOUIsd0NBQXdDO0FBQ3hDLDREQUE0RDtBQUU1RCwrREFBK0Q7QUFDL0QsaUNBQWlDO0FBQ2pDLEtBQUs7QUFFTCx3Q0FBd0M7QUFDeEMsZ0RBQWdEO0FBQ2hELDZCQUE2QjtBQUM3QixLQUFLO0FBQ0wsWUFBWTtBQUNaLHFEQUFxRDtBQUNyRCxRQUFRO0FBQ1IsY0FBYztBQUNkLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsNERBQTREO0FBQzVELGVBQWU7QUFDZixNQUFNO0FBQ04sS0FBSztBQUVMLDZCQUE2QjtBQUU3QkEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanM/MjNlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQge1xuLy8gXHRnZXRUb2tlbkFkZHJlc3MsXG4vLyBcdGdldFRva2VuQmFsYW5jZSxcbi8vIFx0aW5jcmVhc2VBbGxvd2FuY2UsXG4vLyB9IGZyb20gJy4uL3V0aWxzL2NvbnRleHQnO1xuLy8gaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbi8vIGltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tICcuL1RyYW5zYWN0aW9uU3RhdHVzJztcbi8vIGltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0Jztcbi8vIGltcG9ydCB7XG4vLyBcdENsaXBib2FyZEljb24sXG4vLyBcdGNsaWNrYm9hcmRDaGVja0ljb24sXG4vLyBcdFBsdXNJY29uLFxuLy8gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xuXG4vLyBjb25zdCBTaW5nbGVDYXJkID0gKHsgaW5kZXgsIG5hbWUsIHdhbGxldEFkZHJlc3MgfSkgPT4ge1xuLy8gXHRjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgnXycpO1xuLy8gXHRjb25zdCBbdG9rZW5BZGRyZXNzLCBzZXRUb2tlbkFkZHJlc3NdID0gdXNlU3RhdGUoKTtcbi8vIFx0Y29uc3QgW2NvcHlJY29uLCBzZXRDb3B5SWNvbl0gPSB1c2VTdGF0ZSh7IGljb246IENsaXBib2FyZEljb24gfSk7XG4vLyBcdGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyBcdGNvbnN0IG5vdGlmeUVycm9yID0gKCkgPT4gdG9hc3QuZXJyb3IobXNnLCB7IGR1cmF0aW9uOiA2MDAwIH0pO1xuLy8gXHRjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT5cbi8vIFx0XHR0b2FzdC5zdWNjZXNzKCdUcmFuc2FjdGlvbiBTdWNjZXNzZnVsJywgeyBkdXJhdGlvbjogNjAwMCB9KTtcblxuLy8gXHR1c2VFZmZlY3QoKCkgPT4ge1xuLy8gXHRcdGlmIChuYW1lICYmIHdhbGxldEFkZHJlc3MpIHtcbi8vIFx0XHRcdGZldGNoVG9rZW5CYWxhbmNlKCk7XG4vLyBcdFx0XHRmZXRjaFRva2VuQWRkcmVzcygpO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRzZXRCYWxhbmNlKCdfJyk7XG4vLyBcdFx0fVxuLy8gXHR9LCBbbmFtZSwgd2FsbGV0QWRkcmVzc10pO1xuXG4vLyBcdGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5CYWxhbmNlKCkge1xuLy8gXHRcdGNvbnN0IGJhbCA9IGF3YWl0IGdldFRva2VuQmFsYW5jZShuYW1lLCB3YWxsZXRBZGRyZXNzKTtcblxuLy8gXHRcdGNvbnN0IGZCYWwgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYmFsLnRvU3RyaW5nKCksIDE4KTtcbi8vIFx0XHRzZXRCYWxhbmNlKGZCYWwudG9TdHJpbmcoKSk7XG4vLyBcdH1cblxuLy8gXHRhc3luYyBmdW5jdGlvbiBmZXRjaFRva2VuQWRkcmVzcygpIHtcbi8vIFx0XHRjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpXG4vLyBcdFx0c2V0VG9rZW5BZGRyZXNzKGFkZHJlc3MpXG4vLyBcdH1cbi8vIFx0cmV0dXJuIChcbi8vIFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgYmctWyMyMTI0MjldJz5cbi8vIFx0XHRcdDxhXG4vLyBcdFx0XHRcdGhyZWY9Jydcbi8vIFx0XHRcdFx0bm9vcGVuZXJcbi8vIFx0XHRcdFx0bm9yZWZlcnJlclxuLy8gXHRcdFx0XHRhcmlhLWxhYmVsPSdMb3JlbiBpcHN1bSBMb3JlbiBpcHN1bSBMb3JlbiBpcHN1bSc+PC9hPlxuLy8gXHRcdDwvYXJ0aWNsZT5cbi8vIFx0KTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFNpbmdsZUNhcmQ7XG5cbmV4cG9yIl0sIm5hbWVzIjpbImV4cG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});