
export class MonthlyPayment {
    amount: number;
    rate: number;
    term: number;
    discountFactor: number;
    monthlyPayments: number;

    constructor(amount: number, rate: number, term: number) {
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
            $(`table`).css("display", "block");
            $("#error-message").text("");
            $("#issued-loan-amount").text(this.amount.toFixed(2));
            $("#payment").text(this.monthlyPayments.toFixed(2));
            $("#total").text((this.monthlyPayments * this.term).toFixed(2));
            $("#totalinterest").text(((this.monthlyPayments * this.term) - this.amount).toFixed(2));
        }
    }
    returnDiscountFactor() {
        this.calculateDiscountFactor();
        return this.discountFactor;
    }
}