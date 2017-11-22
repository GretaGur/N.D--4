export interface LionParameters {
    formId: string;
    amount: number;
    rate: number;
    term: number;
    income?: number;
    numberOfChildren?: number;
    monthlyPayments?: number;
    calculate(rate?: number): void;
}