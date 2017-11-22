import { LionParameters } from "./loan-interface";
import { AbstractLionCalculate } from "./loan-abstract-calculate";
import { ValidateValue } from "./loan-input-validate";
import { MonthlyPayment } from "./loan-monthly-payment";


export class HousingLoanCalculate extends AbstractLionCalculate implements LionParameters {
    amount: number;
    term: number;
    isValid: boolean;
    income: number;
    children: number;
    minimumRequirementsCart: number;

    constructor(formId: string, rate: number) {
        super(formId, rate);
        this.amount;
        this.term;
        this.income;
        this.children;
        this.isValid = true;
        this.minimumRequirementsCart = 238.35;
    }

    calculate() {
        this.isValid = true;
        if (this.getDataFromTheForm()) {
            let issuedAmount = this.issuedAmount();
            if (issuedAmount > 0) {
                let monthlyPayment = new MonthlyPayment(issuedAmount, this.rate, this.term);
                monthlyPayment.monthlyPayment()
            } else {
                this.displayError();
            }
        } else {
            this.displayError();
        }
    }

    getDataFromTheForm() {
        let amount = Number($(`${this.formId} .loan-amount`).val());
        let term = Number($(`${this.formId} .loan-term`).val());
        let income = Number($(`${this.formId} .income`).val());
        let children = Number($(`${this.formId} .number-of-children`).val());
        if (this.validateInputs(amount, term, income, children)) {
            return true;
        } else {
            return false;
        }
    }

    validateInputs(amount: number, term: number, income: number, children: number) {
        let validate = new ValidateValue();
        (validate.validateInput(amount, "number", 1000)) ? (this.amount = amount) : this.isValid = false;
        (validate.validateInput(term, "number", 1, 30)) ? (this.term = term) : this.isValid = false;
        (validate.validateInput(income, "number", this.minimumRequirementsCart)) ? (this.income = income) : this.isValid = false;
        (validate.validateInput(children, "number")) ? (this.children = children) : this.isValid = false;
        return this.isValid;
    }

    issuedAmount() {
        let maximumMonthlyAmount = this.income - (this.minimumRequirementsCart + (this.children * this.minimumRequirementsCart / 2));
        let monthlyPayment = new MonthlyPayment(this.amount, this.rate, this.term);
        if ((this.amount / monthlyPayment.returnDiscountFactor()) <= maximumMonthlyAmount) {
            return this.amount;
        } else {
            let issuedAmount = ((maximumMonthlyAmount - monthlyPayment.returnDiscountFactor()) * (this.term * 12));
            return issuedAmount;
        }
    }

    displayError() {
        $(`#error-message`).text("Pagal jūsų užpildytą formą paskola nesuteikiama");
        $(`table`).css("display", "none");
    }
}