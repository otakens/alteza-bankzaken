webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_payment_component__ = __webpack_require__("../../../../../src/app/payment/payment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'overzicht', component: __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__["a" /* OverviewComponent */] },
    { path: 'betalen', component: __WEBPACK_IMPORTED_MODULE_4__payment_payment_component__["a" /* PaymentComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-layout'>\n  <div class='header'>\n    <img  src='assets/img/bza-logo.png' class='header-logo'>\n    <h1>Wijzer in bankzaken</h1>\n    <ul class='navigation'>\n      <li><a routerLink=\"/home\">Home</a></li>\n      <li><a routerLink=\"/overzicht\">Overzicht</a></li>\n      <li><a routerLink=\"/betalen\">Betalen</a></li>\n      <li><a a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/otakens/alteza-bankzaken\">GitHub</a></li>\n    </ul>\n    <div class='header-image-position'>\n      <img src='assets/img/bza-header-01.jpg' class='header-image'>test\n    </div>\n  </div>\n  <div class='content'>\n  <router-outlet></router-outlet>\n   </div>\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_payment_component__ = __webpack_require__("../../../../../src/app/payment/payment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__payment_payment_component__["a" /* PaymentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-split\">\r\n  <div class=\"content-left\">\r\n    <h2>Eigen gegevens</h2>\r\n    <div class=\"account\">\r\n      <h3>Basisrekening</h3>\r\n      <p class=\"bankdetails\">123.154.56.123</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-right\">\r\n    <h2>Rekening Gegevens</h2>\r\n    <div class=\"user-details\">\r\n      <p>Voorletters</p><input type=\"text\" name=\"user-initial\">\r\n      <p>Achternaam</p><input type=\"text\" name=\"user-familyname\">\r\n      <p>Email</p><input type=\"text\" name=\"user-email\">\r\n      <p>Straat + nr.</p><input type=\"text\" name=\"user-street\" class=\"three-fourth\"> <input type=\"text\" name=\"user-housenumber\" class=\"one-fourth\">\r\n      <p>Plaats</p><input type=\"text\" name=\"user-place\">\r\n      <p>Postcode</p><input type=\"text\" name=\"user-zipcode\">\r\n      <p>Telefoon</p><input type=\"text\" name=\"user-phone\">\r\n      <div class=\"button-group\"> \r\n        <button>Verstuur</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-split\">\r\n  <div class=\"content-left\">\r\n    <h2>Rekening</h2>\r\n    <div class=\"account\">\r\n      <h3>Basisrekening</h3>\r\n      <p class=\"bankdetails\">123.154.56.123</p>\r\n      <p class=\"account-total\">€ 120,34</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-right\">\r\n    <h2>Transacties</h2>\r\n    <div class=\"transaction-details\">\r\n      <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">J. Huting</p>\r\n        <p class=\"transaction-date\">12-05-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 700,00</p>\r\n      </div>\r\n      <div class=\"transaction subtract\">\r\n        <p class=\"transaction-name\">K. Janssen</p>\r\n        <p class=\"transaction-date\">06-04-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Af</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 12,00</p>\r\n      </div>\r\n      <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">P. Peters</p>\r\n        <p class=\"transaction-date\">02-04-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 113,00</p>\r\n      </div>\r\n      <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">L. Aalbers</p>\r\n        <p class=\"transaction-date\">02-04-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 1.143,50</p>\r\n      </div>\r\n      <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">H. Jackson</p>\r\n        <p class=\"transaction-date\">12-03-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 88,00</p>\r\n      </div>\r\n           <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">J. Huting</p>\r\n        <p class=\"transaction-date\">12-05-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 700,00</p>\r\n      </div>\r\n      <div class=\"transaction subtract\">\r\n        <p class=\"transaction-name\">K. Janssen</p>\r\n        <p class=\"transaction-date\">06-04-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Af</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 12,00</p>\r\n      </div>\r\n      <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">P. Peters</p>\r\n        <p class=\"transaction-date\">02-04-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 113,00</p>\r\n      </div>\r\n      <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">L. Aalbers</p>\r\n        <p class=\"transaction-date\">02-04-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 1.143,50</p>\r\n      </div>\r\n      <div class=\"transaction add\">\r\n        <p class=\"transaction-name\">H. Jackson</p>\r\n        <p class=\"transaction-date\">12-03-2015</p>\r\n        <div class=\"transaction-action\">\r\n          <p>Bij</p>\r\n        </div>\r\n        <p class=\"transaction-amount\">€ 88,00</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overview/overview.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], OverviewComponent);

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-split\">\r\n  <div class=\"content-left\">\r\n    <h2>Betalen</h2>\r\n    <div class=\"account\">\r\n      <h3>Basisrekening</h3>\r\n      <p class=\"bankdetails\">123.154.56.123</p>\r\n      <p class=\"account-total\">€ 120,34</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-right\">\r\n    <h2>Betaalopdracht</h2>\r\n    <div class=\"payment-details\">\r\n      <p>Bedrag</p><input type=\"text\" name=\"payment-amount\">\r\n      <p>Spoed</p><input type=\"checkbox\" name=\"payment-rush\">\r\n      <p>Van rekening</p><select></select>\r\n      <p>Uitvoerdatum</p><input type=\"date\" name=\"payment-date\">\r\n      <p>Naar rekeningnummer</p><input type=\"text\" name=\"payment-account-to\">\r\n      <p>Ten name van</p><input type=\"text\" name=\"payment-name-to\">\r\n      <div class=\"button-group\"> \r\n        <button>Verstuur</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/payment/payment.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map