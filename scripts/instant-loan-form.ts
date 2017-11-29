import { LoanParameters } from "./loan-interface";
import { AbstractLoanCalculator } from "./loan-abstract-calculator-class";
import { ValidateValue } from "./loan-input-validate";
import { MonthlyPayment } from "./loan-monthly-payment";


export class InstantLoanCalculate extends AbstractLoanCalculator implements LoanParameters {
    amount: number;
    term: number;
    isValid: boolean;

    constructor(formId: string, rate: number) {
        super(formId, rate);
        this.amount;
        this.term;
        this.isValid = true;
    }

    calculate() {
        this.isValid = true;
        if (this.getDataFromTheForm()) {
            let monthlyPayment = new MonthlyPayment(this.formId, this.amount, this.rate, this.term);
            monthlyPayment.monthlyPayment()
        } else {
            $(`${this.formId} .error-message`).text("Neteisingai užpildyta forma");
            $(`${this.formId} table`).css("display", "none");
        }
    }

    getDataFromTheForm() {
        let amount = Number($(`${this.formId} .loan-amount`).val());
        let term = Number($(`${this.formId} .loan-term`).val());
        if (this.validateInputs(amount, term)) {
            return true;
        } else {
            return false;
        }
    }

    validateInputs(amount: number, term: number) {
        let validate = new ValidateValue();
        if (validate.validateInput(amount, "number", 100, 5000)) {
        this.amount = amount;
        this.clearError($(`${this.formId} .loan-amount`));
        } else {
            this.isValid = false;
            this.displayError($(`${this.formId} .loan-amount`));
        }
        if (validate.validateInput(term, "number", 1, 24)) {
        this.term = (term / 12);
        this.clearError($(`${this.formId} .loan-term`));
        } else {
            this.isValid = false;
            this.displayError($(`${this.formId} .loan-term`));
        }
        return this.isValid;
    }

    clearError(inputId: JQuery<HTMLElement>) {
        $(inputId).css('border-color', 'initial');
    }

    displayError(inputId: JQuery<HTMLElement>) {
        console.log(`${this.formId} table`);
        console.log(inputId);
        $(inputId).css('border-color', 'red');
        $(`${this.formId} table`).css("display", "none");
    }
}