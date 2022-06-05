"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./component/header.js":
/*!*****************************!*\
  !*** ./component/header.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _action_loginAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/loginAction */ \"./action/loginAction.js\");\n/* harmony import */ var _action_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/sidebar */ \"./action/sidebar.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility */ \"./utility/index.js\");\n/* harmony import */ var _common_headerDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/headerDropdown */ \"./component/common/headerDropdown.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function(param) {\n    var location = param.location;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return {\n            isCollapsed: state\n        };\n    }), profile = ref.profile, isCollapsed = ref.isCollapsed, isVisible = ref.isVisible, language = ref.language;\n    var logoutAction = function() {\n        return dispatch((0,_action_loginAction__WEBPACK_IMPORTED_MODULE_3__.logout)());\n    };\n    var toggleCollapse = function() {\n        return dispatch((0,_action_sidebar__WEBPACK_IMPORTED_MODULE_4__.setSidebarCollapse)(!isCollapsed));\n    };\n    var toggleVisibility = function() {\n        return dispatch((0,_action_sidebar__WEBPACK_IMPORTED_MODULE_4__.setSidebarVisibility)(!isVisible));\n    };\n    var headerTitle = (0,_utility__WEBPACK_IMPORTED_MODULE_5__.getHeaderTitle)(location.pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar, {\n        fixed: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            fluid: true,\n            className: \"justify-content-between px-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"collapse-menu-btn \".concat(isCollapsed ? \"fas fa-angle-right\" : \"fas fa-angle-left\"),\n                    onClick: toggleCollapse\n                }, void 0, false, {\n                    fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"page-title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: headerTitle\n                    }, void 0, false, {\n                        fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navigation-items\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_headerDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            profile: profile,\n                            logout: logoutAction\n                        }, void 0, false, {\n                            fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-bars collapse-sidebar-btn\",\n                            onClick: toggleVisibility\n                        }, void 0, false, {\n                            fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/er/Desktop/Tntra Pirates - HackFest 2022/client/component/header.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"yiZWhn4nAWqR8oBnh/bJeUrqzdg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvaGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ2M7QUFDSDtBQUNMO0FBSXBCO0FBQzRCO0FBQ0Y7O0FBRXJELElBQU1ZLE1BQU0sR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUN4QixJQUFNQyxRQUFRLEdBQUdaLHdEQUFXLEVBQUU7SUFDOUIsSUFBc0RDLEdBT3JELEdBUHFEQSx3REFBVyxDQUMvRCxTQUFDWSxLQUFLO2VBQU07WUFDVkMsV0FBVyxFQUFFRCxLQUFLO1NBSW5CO0tBQUMsQ0FDSCxFQVBPRSxPQUFPLEdBQXVDZCxHQU9yRCxDQVBPYyxPQUFPLEVBQUVELFdBQVcsR0FBMEJiLEdBT3JELENBUGdCYSxXQUFXLEVBQUVFLFNBQVMsR0FBZWYsR0FPckQsQ0FQNkJlLFNBQVMsRUFBRUMsUUFBUSxHQUFLaEIsR0FPckQsQ0FQd0NnQixRQUFRO0lBUWpELElBQU1DLFlBQVksR0FBRztlQUFNTixRQUFRLENBQUNSLDJEQUFNLEVBQUUsQ0FBQztLQUFBO0lBRTdDLElBQU1lLGNBQWMsR0FBRztlQUFNUCxRQUFRLENBQUNQLG1FQUFrQixDQUFDLENBQUNTLFdBQVcsQ0FBQyxDQUFDO0tBQUE7SUFDdkUsSUFBTU0sZ0JBQWdCLEdBQUc7ZUFBTVIsUUFBUSxDQUFDTixxRUFBb0IsQ0FBQyxDQUFDVSxTQUFTLENBQUMsQ0FBQztLQUFBO0lBQ3pFLElBQUlLLFdBQVcsR0FBR2Qsd0RBQWMsQ0FBQ0ksUUFBUSxDQUFDVyxRQUFRLENBQUM7SUFDbkQscUJBQ0UsOERBQUNwQixtREFBTTtRQUFDcUIsS0FBSyxFQUFDLEtBQUs7a0JBQ2pCLDRFQUFDcEIsc0RBQVM7WUFBQ3FCLEtBQUs7WUFBQ0MsU0FBUyxFQUFDLDhCQUE4Qjs7OEJBQ3ZELDhEQUFDQyxHQUFDO29CQUNBRCxTQUFTLEVBQUUsb0JBQW1CLENBQzNCLE9BRDZCWCxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsbUJBQW1CLENBQ3BGO29CQUNKYSxPQUFPLEVBQUVSLGNBQWM7Ozs7O3lCQUN2Qjs4QkFDRiw4REFBQ1MsS0FBRztvQkFBQ0gsU0FBUyxFQUFDLFlBQVk7OEJBQ3pCLDRFQUFDSSxJQUFFO2tDQUFFUixXQUFXOzs7Ozs2QkFBTTs7Ozs7eUJBQ2xCOzhCQUNOLDhEQUFDTyxLQUFHO29CQUFDSCxTQUFTLEVBQUMsa0JBQWtCOztzQ0FFL0IsOERBQUNoQiw4REFBYzs0QkFBQ00sT0FBTyxFQUFFQSxPQUFPOzRCQUFFWCxNQUFNLEVBQUVjLFlBQVk7Ozs7O2lDQUFJO3NDQUMxRCw4REFBQ1EsR0FBQzs0QkFDQUQsU0FBUyxFQUFDLGtDQUFrQzs0QkFDNUNFLE9BQU8sRUFBRVAsZ0JBQWdCOzs7OztpQ0FDekI7Ozs7Ozt5QkFDRTs7Ozs7O2lCQUNJOzs7OzthQUNMLENBQ1Q7Q0FDSDtHQXJDS1YsTUFBTTs7UUFDT1Ysb0RBQVc7UUFDMEJDLG9EQUFXOzs7QUFGN0RTLEtBQUFBLE1BQU07QUF1Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvaGVhZGVyLmpzP2EyNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE5hdmJhciwgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL2FjdGlvbi9sb2dpbkFjdGlvbic7XG5pbXBvcnQge1xuICBzZXRTaWRlYmFyQ29sbGFwc2UsXG4gIHNldFNpZGViYXJWaXNpYmlsaXR5LFxufSBmcm9tICcuLi9hY3Rpb24vc2lkZWJhcic7XG5pbXBvcnQgeyBnZXRIZWFkZXJUaXRsZSwgc2hvd1RvYXN0IH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgSGVhZGVyRHJvcGRvd24gZnJvbSAnLi9jb21tb24vaGVhZGVyRHJvcGRvd24nO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBwcm9maWxlLCBpc0NvbGxhcHNlZCwgaXNWaXNpYmxlLCBsYW5ndWFnZSB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiAoe1xuICAgICAgaXNDb2xsYXBzZWQ6IHN0YXRlLFxuICAgICAgLy8gaXNWaXNpYmxlOiBzdGF0ZS5zaWRlYmFyLmlzVmlzaWJsZSxcbiAgICAgIC8vIHByb2ZpbGU6IHN0YXRlLnByb2ZpbGUsXG4gICAgICAvLyBsYW5ndWFnZTogc3RhdGUubGFuZ3VhZ2UsXG4gICAgfSksXG4gICk7XG4gIGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IGRpc3BhdGNoKGxvZ291dCgpKTtcblxuICBjb25zdCB0b2dnbGVDb2xsYXBzZSA9ICgpID0+IGRpc3BhdGNoKHNldFNpZGViYXJDb2xsYXBzZSghaXNDb2xsYXBzZWQpKTtcbiAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IGRpc3BhdGNoKHNldFNpZGViYXJWaXNpYmlsaXR5KCFpc1Zpc2libGUpKTtcbiAgbGV0IGhlYWRlclRpdGxlID0gZ2V0SGVhZGVyVGl0bGUobG9jYXRpb24ucGF0aG5hbWUpO1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgZml4ZWQ9XCJ0b3BcIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW4gcHgtM1wiPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17YGNvbGxhcHNlLW1lbnUtYnRuICR7aXNDb2xsYXBzZWQgPyAnZmFzIGZhLWFuZ2xlLXJpZ2h0JyA6ICdmYXMgZmEtYW5nbGUtbGVmdCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cbiAgICAgICAgICA8aDE+e2hlYWRlclRpdGxlfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbXNcIj5cbiAgICAgICAgICB7LyogPExhbmd1YWdlRHJvcGRvd24gZGlzcGF0Y2g9e2Rpc3BhdGNofSBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+ICovfVxuICAgICAgICAgIDxIZWFkZXJEcm9wZG93biBwcm9maWxlPXtwcm9maWxlfSBsb2dvdXQ9e2xvZ291dEFjdGlvbn0gLz5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnMgY29sbGFwc2Utc2lkZWJhci1idG5cIlxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIk5hdmJhciIsIkNvbnRhaW5lciIsImxvZ291dCIsInNldFNpZGViYXJDb2xsYXBzZSIsInNldFNpZGViYXJWaXNpYmlsaXR5IiwiZ2V0SGVhZGVyVGl0bGUiLCJzaG93VG9hc3QiLCJIZWFkZXJEcm9wZG93biIsIkhlYWRlciIsImxvY2F0aW9uIiwiZGlzcGF0Y2giLCJzdGF0ZSIsImlzQ29sbGFwc2VkIiwicHJvZmlsZSIsImlzVmlzaWJsZSIsImxhbmd1YWdlIiwibG9nb3V0QWN0aW9uIiwidG9nZ2xlQ29sbGFwc2UiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiaGVhZGVyVGl0bGUiLCJwYXRobmFtZSIsImZpeGVkIiwiZmx1aWQiLCJjbGFzc05hbWUiLCJpIiwib25DbGljayIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/header.js\n");

/***/ })

});