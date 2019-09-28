webpackHotUpdate("main",{

/***/ "./src/components/frontPage/register.js":
/*!**********************************************!*\
  !*** ./src/components/frontPage/register.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_gabimenezes_Desktop_brixbiz_2_0_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");

var _jsxFileName = "/Users/gabimenezes/Desktop/brixbiz-2.0/client/src/components/frontPage/register.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_gabimenezes_Desktop_brixbiz_2_0_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




class Pills extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      items: {
        default: "1"
      }
    };

    this.togglePills = (type, tab) => e => {
      e.preventDefault();

      if (this.state.items[type] !== tab) {
        let items = _objectSpread({}, this.state.items);

        items[type] = tab;
        this.setState({
          items
        });
      }
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBContainer"], {
      className: "mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCol"], {
      md: "12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Join Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNav"], {
      className: "mt-5 nav-pills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavLink"], {
      to: "#",
      active: this.state.items["default"] === "1",
      onClick: this.togglePills("default", "1"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Join Us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavLink"], {
      to: "#",
      active: this.state.items["default"] === "2",
      onClick: this.togglePills("default", "2"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Business Owners")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavLink"], {
      to: "#",
      active: this.state.items["default"] === "3",
      onClick: this.togglePills("default", "3"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Carriers"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabContent"], {
      activeItem: this.state.items["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabPane"], {
      tabId: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "color",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Join our platform and be able to rate your favorite mom and popshops Order deliveries with our registered businesses")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabPane"], {
      tabId: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Ready to grow your business? Join our platform"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Become a partner and create an online presence"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "List your inventory online and make it easy for local consumer to find you by what you have in your store"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Participate in our mobile order and delivery service"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabPane"], {
      tabId: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Become a courier"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "brixbiz couriers have a flexible schedule and the ability to make more per delivery with higher average order fees and multiple stops "))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pills); // // import React from 'react';
// // import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
// // const CardExample = () => {
// //     return (
// //         <MDBRow> 
// //         <MDBCol>
// //             <MDBCard style={{ width: "22rem" }}>
// //                 <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
// //                 <MDBCardBody>
// //                     <MDBCardTitle>Join our platform</MDBCardTitle>
// //                     <MDBCardText>
// //                        Join our platform and be able to rate your favorite mom and popshops
// //                   Place mobile orders with your local shops for pick up
// //                   Order deliveries with our registered businesses
// //           </MDBCardText>
// //                     <MDBBtn href="#">MDBBtn</MDBBtn>
// //                 </MDBCardBody>
// //             </MDBCard>
// //         </MDBCol>
// //         <MDBCol>
// //             <MDBCard style={{ width: "22rem" }}>
// //                 <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
// //                 <MDBCardBody>
// //                         <MDBCardTitle>Ready to grow your business?</MDBCardTitle>
// //                     <MDBCardText>
// //                         Become a partner and create an online presence
// //                         List your inventory online and make it easy for local consumer to find you by what you have in your store
// //                         Participate in our mobile order and delivery service
// //          </MDBCardText>
// //                     <MDBBtn href="#">MDBBtn</MDBBtn>
// //                 </MDBCardBody> 
// //             </MDBCard>
// //         </MDBCol>
// //             <MDBCol>
// //                 <MDBCard style={{ width: "22rem" }}>
// //                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
// //                     <MDBCardBody>
// //                         <MDBCardTitle>Become a courier</MDBCardTitle>
// //                         <MDBCardText>
// //                             Become a courier
// //                             brixbiz couriers have a flexible schedule and the ability to make more per delivery with higher average order fees and multiple stops
// //           </MDBCardText>
// //                         <MDBBtn href="#">MDBBtn</MDBBtn>
// //                     </MDBCardBody>
// //                 </MDBCard>
// //             </MDBCol>
// //         </MDBRow>
// //     )
// // }
// // export default CardExample;
// // function Register() {
// //     return (
// // // users
// //         <div>
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-8">
// //                     <p>Join our platform and be able to rate your favorite mom and popshops
// //                     </p>
// //                     <p>Place mobile orders with your local shops for pick up</p>
// //                     <p>Order deliveries with our registered businesses</p>
// //                     </div>
// //                 <div className="col-4">User Image</div>
// //             </div>
// //         </div>
// // {/* // businesses */} 
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-4">Business Image</div>
// //                 <div className="col-8">
// //                     <p>Ready to grow your business? Join our platform</p>
// //                     <p>Become a partner and create an online presence</p>
// //                     <p>List your inventory online and make it easy for local consumer to find you by what you have in your store</p>
// //                     <p>Participate in our mobile order and delivery service</p>
// //                 </div>
// //             </div>
// //         </div>
// // {/* // couriers */}
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-8">
// //                     <p>Become a courier</p>
// //                     <p>brixbiz couriers have a flexible schedule and the ability to make more per delivery with higher average order fees and multiple stops </p>
// //                 </div>
// //                 <div className="col-4">Courier Image</div>
// //             </div>
// //         </div>
// //         </div>
// //     );
// // }
// // export default Register;

/***/ })

})
//# sourceMappingURL=main.277e2099a1bda43abc1c.hot-update.js.map