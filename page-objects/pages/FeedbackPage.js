import { Selector, t } from "testcafe";
import BasePage from "./BasePage";

class FeedbackPage extends BasePage {
    constructor() {
        this.forName = Selector('#name')
        this.formEmail = Selector('#email')
        this.formSubject = Selector('#subject')
        this.formComment = Selector('#comment')
        this.formSubmitButton = Selector('input').withAttribute(
            'value',
            'Send Message'
        )
        this.message = Selector('div')
    }
}
export default FeedbackPage