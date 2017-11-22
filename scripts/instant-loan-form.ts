import { LionParameters } from "./loan-interface";
import { AbstractLionCalculate } from "./loan-abstract-calculate";
import { ValidateValue } from "./loan-input-validate";
import { MonthlyPayment } from "./loan-monthly-payment";


export class InstantLoanCalculate extends AbstractLionCalculate implements LionParameters  {
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
            let monthlyPayment = new MonthlyPayment(this.amount, this.rate, this.term);
            monthlyPayment.monthlyPayment()
        } else {
            $(`#error-message`).text("Neteisingai užpildyta forma");
            $(`table`).css("display", "none");
        }
    }

    getDataFromTheForm() {
        let amount = Number($(`${this.formId} .loan-amount`).val());
        let term = Number($(`${this.formId} .loan-term`).val());
        if(this.validateInputs(amount, term)) {
            return true;
        } else {
            return false;
        }
    }

    validateInputs(amount: number, term: number) {
        let validate = new ValidateValue();
        (validate.validateInput(amount, "number", 100, 5000)) ? (this.amount = amount) : this.isValid = false;
        (validate.validateInput(term, "number", 1, 24)) ? (this.term = (term / 12)) : this.isValid = false;
        return this.isValid;
    }
}