import { ContentElementType } from '../Base/ContentElement';
import { InputElement } from '../Base/InputElement';
export class DateInputElement extends InputElement {
    constructor(json) {
        super(json);
        if (this.isValidJSON) {
            this.max = json.max;
            this.min = json.min;
            this.placeholder = json.placeholder;
        }
    }
    getTypeName() {
        return ContentElementType.DateInput;
    }
    getRequiredProperties() {
        return ['id'];
    }
}
