import { InstantLoanCalculate } from "./instant-loan-form";
import { HousingLoanCalculate } from "./housing-loan-form";
import { ConsumerLoanCalculate } from "./consumer-loan-form";

let instantForm = new InstantLoanCalculate("form-instant-loan", 20);
$("#submit-instant-loan").click(() => instantForm.calculate());


let housingForm = new HousingLoanCalculate("form-housing-loan", 2);
$("#submit-housing-loan").click(() => housingForm.calculate());

let consumerForm = new ConsumerLoanCalculate("form-consumer-loan", 15);
$("#submit-consumer-loan").click(() => consumerForm.calculate(Number($(`#consumer-loan-dropdown`).val())));