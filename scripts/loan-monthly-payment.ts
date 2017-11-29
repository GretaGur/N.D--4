
export class MonthlyPayment {
    formId: string;
    amount: number;
    rate: number;
    term: number;
    discountFactor: number;
    monthlyPayments: number;

    constructor(formId: string, amount: number, rate: number, term: number) {
        this.formId = formId;
        this.amount = amount;
        this.rate = rate / 100 / 12;
        this.term = term * 12;
        this.discountFactor;
        this.monthlyPayments;
    }

    monthlyPayment() {
        this.calculateDiscountFactor();
        this.calculateMonthlyPayment();
        this.outputData();
    }

    calculateDiscountFactor() {
        let x = Math.pow(1 + this.rate, this.term);
        this.discountFactor = ((x - 1) / (this.rate * x));
    }

    calculateMonthlyPayment() {
        this.monthlyPayments = (this.amount / this.discountFactor);
    }

    outputData() {
        if (isFinite(this.monthlyPayments)) {
            $(`${this.formId} table`).css("display", "block");
            $(`${this.formId} .error-message`).text("");
            $(`${this.formId} .issued-loan-amount`).text(this.amount.toFixed(2));
            $(`${this.formId} .payment`).text(this.monthlyPayments.toFixed(2));
            $(`${this.formId} .total`).text((this.monthlyPayments * this.term).toFixed(2));
            $(`${this.formId} .totalinterest`).text(((this.monthlyPayments * this.term) - this.amount).toFixed(2));
        }
    }
    returnDiscountFactor() {
        this.calculateDiscountFactor();
        return this.discountFactor;
    }
}