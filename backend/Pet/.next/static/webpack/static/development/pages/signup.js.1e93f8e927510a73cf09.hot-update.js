webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commons/formControls/Input/InputDefault */ "./commons/formControls/Input/InputDefault.tsx");
/* harmony import */ var _generated_apolloComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/apolloComponents */ "./generated/apolloComponents.tsx");


var _jsxFileName = "D:\\code\\exp\\Pet\\backend\\Pet\\pages\\signup.tsx";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Register",
    description: "register page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Register now"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_generated_apolloComponents__WEBPACK_IMPORTED_MODULE_6__["CreateUserComponent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (signup) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
          var response;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return signup({
                    variables: {
                      uusername: data.uusername,
                      uphone: data.uphone,
                      ucellphone: data.ucellphone,
                      uemail: data.uemail,
                      upassword: data.upassword,
                      uavatar: data.uavatar,
                      ufirstname: data.ufirstname,
                      ulastname: data.ulastname,
                      ubirtdate: data.ubirtdate,
                      ugender: data.ugender,
                      ucountry: data.ucountry,
                      ustate: data.ustate,
                      ucity: data.ucity,
                      ustreet: data.ustreet,
                      uzip: data.uzip,
                      ugeolocation: data.ugeolocation,
                      uemailverified: data.uemailverified,
                      uactiveaccount: data.uactiveaccount,
                      ucurrentoccupation: data.ucurrentoccupation,
                      uranking: data.uranking,
                      udateadmission: data.udateadmission,
                      ulastlogin: data.ulastlogin
                    }
                  });

                case 2:
                  response = _context.sent;
                  console.log(response);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      initialValues: {
        uusername: 'JarnoLeppala!',
        uphone: '6181092045',
        ucellphone: '6181092045',
        uemail: 'eric@gmail.com',
        upassword: 'password123',
        uavatar: 'eric.jpg',
        ufirstname: 'Eric',
        ulastname: 'Torres',
        ubirtdate: '27/04/1992',
        ugender: 'male',
        ucountry: 'México',
        ustate: 'Durango',
        ucity: 'Durango',
        ustreet: 'Bayacora',
        uzip: 34000,
        ugeolocation: 'pos aqui we XD',
        uemailverified: 'verified',
        uactiveaccount: 'active',
        ucurrentoccupation: 'worker',
        uranking: 3,
        udateadmission: '23/03/2017',
        ulastlogin: '23/03/2017'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, function (_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uusername",
        placeholder: "Username",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uphone",
        placeholder: "Phone",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ucellphone",
        placeholder: "Cellphone",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uemail",
        placeholder: "Email",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "upassword",
        placeholder: "Password",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uavatar",
        placeholder: "Avatar",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ufirstname",
        placeholder: "Firstname",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ulastname",
        placeholder: "Lastname",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ubirtdate",
        placeholder: "Birtdate",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ugender",
        placeholder: "Gender",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ucountry",
        placeholder: "Country",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ustate",
        placeholder: "State",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ucity",
        placeholder: "City",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ustreet",
        placeholder: "Street",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uzip",
        placeholder: "Zip",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ugeolocation",
        placeholder: "Geolocation",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uemailverified",
        placeholder: "Emailverified",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uactiveaccount",
        placeholder: "Activeaccount",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ucurrentoccupation",
        placeholder: "Currentoccupation",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "uranking",
        placeholder: "Ranking",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "udateadmission",
        placeholder: "Dateadmission",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "ulastlogin",
        placeholder: "Lastlogin",
        component: _commons_formControls_Input_InputDefault__WEBPACK_IMPORTED_MODULE_5__["InputDefault"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "submit"));
    });
  }));
});

/***/ })

})
//# sourceMappingURL=signup.js.1e93f8e927510a73cf09.hot-update.js.map