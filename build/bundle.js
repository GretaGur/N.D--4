/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractLionCalculate; });
var AbstractLionCalculate = /** @class */ (function () {
    function AbstractLionCalculate(formId, rate) {
        this.formId = ("#" + formId);
        this.rate = rate;
    }
    AbstractLionCalculate.prototype.calculate = function (rate) {
    };
    return AbstractLionCalculate;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateValue; });
var ValidateValue = /** @class */ (function () {
    function ValidateValue() {
        var _this = this;
        this.validateInput = function (newValue, validateBy, minimumValue, maximumValue) {
            _this.validateValueType(newValue, validateBy);
            if (minimumValue || maximumValue) {
                minimumValue ? minimumValue = minimumValue : minimumValue = 0;
                maximumValue ? maximumValue = maximumValue : "";
                _this.validateValueSize(newValue, minimumValue, maximumValue);
            }
            return _this.isValid;
        };
    }
    ValidateValue.prototype.validateValueType = function (newValue, validateBy) {
        if (newValue || (newValue === 0)) {
            ((typeof newValue) === validateBy) ? this.isValid = true : this.isValid = false;
        }
        else {
            this.isValid = false;
        }
    };
    ValidateValue.prototype.validateValueSize = function (newValue, minimumValue, maximumValue) {
        if (minimumValue && maximumValue) {
            ((newValue >= minimumValue) && (newValue <= maximumValue)) ? this.isValid = true : this.isValid = false;
        }
        else {
            (newValue >= minimumValue) ? this.isValid = true : this.isValid = false;
        }
    };
    return ValidateValue;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyPayment; });
var MonthlyPayment = /** @class */ (function () {
    function MonthlyPayment(amount, rate, term) {
        this.amount = amount;
        this.rate = rate / 100 / 12;
        this.term = term * 12;
        this.discountFactor;
        this.monthlyPayments;
    }
    MonthlyPayment.prototype.monthlyPayment = function () {
        this.calculateDiscountFactor();
        this.calculateMonthlyPayment();
        this.outputData();
    };
    MonthlyPayment.prototype.calculateDiscountFactor = function () {
        var x = Math.pow(1 + this.rate, this.term);
        this.discountFactor = ((x - 1) / (this.rate * x));
    };
    MonthlyPayment.prototype.calculateMonthlyPayment = function () {
        this.monthlyPayments = (this.amount / this.discountFactor);
    };
    MonthlyPayment.prototype.outputData = function () {
        if (isFinite(this.monthlyPayments)) {
            $("table").css("display", "block");
            $("#error-message").text("");
            $("#issued-loan-amount").text(this.amount.toFixed(2));
            $("#payment").text(this.monthlyPayments.toFixed(2));
            $("#total").text((this.monthlyPayments * this.term).toFixed(2));
            $("#totalinterest").text(((this.monthlyPayments * this.term) - this.amount).toFixed(2));
        }
    };
    MonthlyPayment.prototype.returnDiscountFactor = function () {
        this.calculateDiscountFactor();
        return this.discountFactor;
    };
    return MonthlyPayment;
}());



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instant_loan_form__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__housing_loan_form__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consumer_loan_form__ = __webpack_require__(7);



var instantForm = new __WEBPACK_IMPORTED_MODULE_0__instant_loan_form__["a" /* InstantLoanCalculate */]("form-instant-loan", 20);
$("#submit-instant-loan").click(function () { return instantForm.calculate(); });
var housingForm = new __WEBPACK_IMPORTED_MODULE_1__housing_loan_form__["a" /* HousingLoanCalculate */]("form-housing-loan", 2);
$("#submit-housing-loan").click(function () { return housingForm.calculate(); });
var consumerForm = new __WEBPACK_IMPORTED_MODULE_2__consumer_loan_form__["a" /* ConsumerLoanCalculate */]("form-consumer-loan", 15);
$("#submit-consumer-loan").click(function () { return consumerForm.calculate(Number($("#consumer-loan-dropdown").val())); });


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstantLoanCalculate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loan_abstract_calculate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loan_input_validate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_monthly_payment__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var InstantLoanCalculate = /** @class */ (function (_super) {
    __extends(InstantLoanCalculate, _super);
    function InstantLoanCalculate(formId, rate) {
        var _this = _super.call(this, formId, rate) || this;
        _this.amount;
        _this.term;
        _this.isValid = true;
        return _this;
    }
    InstantLoanCalculate.prototype.calculate = function () {
        this.isValid = true;
        if (this.getDataFromTheForm()) {
            var monthlyPayment = new __WEBPACK_IMPORTED_MODULE_2__loan_monthly_payment__["a" /* MonthlyPayment */](this.amount, this.rate, this.term);
            monthlyPayment.monthlyPayment();
        }
        else {
            $("#error-message").text("Neteisingai užpildyta forma");
            $("table").css("display", "none");
        }
    };
    InstantLoanCalculate.prototype.getDataFromTheForm = function () {
        var amount = Number($(this.formId + " .loan-amount").val());
        var term = Number($(this.formId + " .loan-term").val());
        if (this.validateInputs(amount, term)) {
            return true;
        }
        else {
            return false;
        }
    };
    InstantLoanCalculate.prototype.validateInputs = function (amount, term) {
        var validate = new __WEBPACK_IMPORTED_MODULE_1__loan_input_validate__["a" /* ValidateValue */]();
        (validate.validateInput(amount, "number", 100, 5000)) ? (this.amount = amount) : this.isValid = false;
        (validate.validateInput(term, "number", 1, 24)) ? (this.term = (term / 12)) : this.isValid = false;
        return this.isValid;
    };
    return InstantLoanCalculate;
}(__WEBPACK_IMPORTED_MODULE_0__loan_abstract_calculate__["a" /* AbstractLionCalculate */]));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousingLoanCalculate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loan_abstract_calculate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loan_input_validate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_monthly_payment__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var HousingLoanCalculate = /** @class */ (function (_super) {
    __extends(HousingLoanCalculate, _super);
    function HousingLoanCalculate(formId, rate) {
        var _this = _super.call(this, formId, rate) || this;
        _this.amount;
        _this.term;
        _this.income;
        _this.children;
        _this.isValid = true;
        _this.minimumRequirementsCart = 238.35;
        return _this;
    }
    HousingLoanCalculate.prototype.calculate = function () {
        this.isValid = true;
        if (this.getDataFromTheForm()) {
            var issuedAmount = this.issuedAmount();
            if (issuedAmount > 0) {
                var monthlyPayment = new __WEBPACK_IMPORTED_MODULE_2__loan_monthly_payment__["a" /* MonthlyPayment */](issuedAmount, this.rate, this.term);
                monthlyPayment.monthlyPayment();
            }
            else {
                this.displayError();
            }
        }
        else {
            this.displayError();
        }
    };
    HousingLoanCalculate.prototype.getDataFromTheForm = function () {
        var amount = Number($(this.formId + " .loan-amount").val());
        var term = Number($(this.formId + " .loan-term").val());
        var income = Number($(this.formId + " .income").val());
        var children = Number($(this.formId + " .number-of-children").val());
        if (this.validateInputs(amount, term, income, children)) {
            return true;
        }
        else {
            return false;
        }
    };
    HousingLoanCalculate.prototype.validateInputs = function (amount, term, income, children) {
        var validate = new __WEBPACK_IMPORTED_MODULE_1__loan_input_validate__["a" /* ValidateValue */]();
        (validate.validateInput(amount, "number", 1000)) ? (this.amount = amount) : this.isValid = false;
        (validate.validateInput(term, "number", 1, 30)) ? (this.term = term) : this.isValid = false;
        (validate.validateInput(income, "number", this.minimumRequirementsCart)) ? (this.income = income) : this.isValid = false;
        (validate.validateInput(children, "number")) ? (this.children = children) : this.isValid = false;
        return this.isValid;
    };
    HousingLoanCalculate.prototype.issuedAmount = function () {
        var maximumMonthlyAmount = this.income - (this.minimumRequirementsCart + (this.children * this.minimumRequirementsCart / 2));
        var monthlyPayment = new __WEBPACK_IMPORTED_MODULE_2__loan_monthly_payment__["a" /* MonthlyPayment */](this.amount, this.rate, this.term);
        if ((this.amount / monthlyPayment.returnDiscountFactor()) <= maximumMonthlyAmount) {
            return this.amount;
        }
        else {
            var issuedAmount = ((maximumMonthlyAmount - monthlyPayment.returnDiscountFactor()) * (this.term * 12));
            return issuedAmount;
        }
    };
    HousingLoanCalculate.prototype.displayError = function () {
        $("#error-message").text("Pagal jūsų užpildytą formą paskola nesuteikiama");
        $("table").css("display", "none");
    };
    return HousingLoanCalculate;
}(__WEBPACK_IMPORTED_MODULE_0__loan_abstract_calculate__["a" /* AbstractLionCalculate */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerLoanCalculate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loan_abstract_calculate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loan_input_validate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_monthly_payment__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ConsumerLoanCalculate = /** @class */ (function (_super) {
    __extends(ConsumerLoanCalculate, _super);
    function ConsumerLoanCalculate(formId, rate) {
        var _this = _super.call(this, formId, rate) || this;
        _this.amount;
        _this.term;
        _this.isValid = true;
        return _this;
    }
    ConsumerLoanCalculate.prototype.calculate = function (rate) {
        this.rate = rate;
        this.isValid = true;
        if (this.getDataFromTheForm()) {
            var monthlyPayment = new __WEBPACK_IMPORTED_MODULE_2__loan_monthly_payment__["a" /* MonthlyPayment */](this.amount, this.rate, this.term);
            monthlyPayment.monthlyPayment();
        }
        else {
            $("#error-message").text("Neteisingai užpildyta forma");
            $("table").css("display", "none");
        }
    };
    ConsumerLoanCalculate.prototype.getDataFromTheForm = function () {
        var amount = Number($(this.formId + " .loan-amount").val());
        var term = Number($(this.formId + " .loan-term").val());
        if (this.validateInputs(amount, term)) {
            return true;
        }
        else {
            return false;
        }
    };
    ConsumerLoanCalculate.prototype.validateInputs = function (amount, term) {
        var validate = new __WEBPACK_IMPORTED_MODULE_1__loan_input_validate__["a" /* ValidateValue */]();
        (validate.validateInput(amount, "number", 100, 5000)) ? (this.amount = amount) : this.isValid = false;
        (validate.validateInput(term, "number", 1, 60)) ? (this.term = (term / 12)) : this.isValid = false;
        return this.isValid;
    };
    return ConsumerLoanCalculate;
}(__WEBPACK_IMPORTED_MODULE_0__loan_abstract_calculate__["a" /* AbstractLionCalculate */]));



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map