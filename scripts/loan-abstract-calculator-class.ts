
export abstract class AbstractLoanCalculator {

    formId: string;
    rate: number;

    constructor(formId: string, rate: number) {
        this.formId = (`#${formId}`);
        this.rate = rate;
    }

    calculate(rate?: number) {
    }
}