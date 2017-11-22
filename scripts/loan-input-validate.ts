export class ValidateValue {

    isValid: boolean;

    validateInput = (newValue: any, validateBy: string, minimumValue?: number, maximumValue?: number) => {
        this.validateValueType(newValue, validateBy);
        if (minimumValue || maximumValue) {
            minimumValue ? minimumValue = minimumValue : minimumValue = 0;
            maximumValue ? maximumValue = maximumValue : "";
            this.validateValueSize(newValue, minimumValue, maximumValue);
        }
        return this.isValid;
    }

    validateValueType(newValue: any, validateBy: string) {
        if (newValue || (newValue === 0)) {
            ((typeof newValue) === validateBy) ? this.isValid = true : this.isValid = false;
        } else {
            this.isValid = false;
        }
    }
    validateValueSize(newValue: any, minimumValue: number, maximumValue?: number) {
        if (minimumValue && maximumValue) {
            ((newValue >= minimumValue) && (newValue <= maximumValue)) ? this.isValid = true : this.isValid = false;
        } else {
            (newValue >= minimumValue) ? this.isValid = true : this.isValid = false;
        }
    }
}