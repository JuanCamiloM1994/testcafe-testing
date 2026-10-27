import { Selector, t } from "testcafe";
import BasePage from "./BasePage";

class FeedbackPage extends BasePage {
    forName: Selector = Selector('#name')
    formEmail: Selector = Selector('#email')
    formSubject: Selector = Selector('#subject')
    formComment: Selector = Selector('#comment')
    formSubmitButton: Selector = Selector('input').withAttribute(
        'value',
        'Send Message'
    )
    message: Selector = Selector('div')

    async submitFeedback(t: TestController) {
        await t

            .typeText(this.forName, 'NAME', { paste: true })
            .typeText(this.formEmail, 'EMAIL', { paste: true })
            .typeText(this.formSubject, 'SUBJECT', { paste: true })
            .typeText(this.formComment, 'COMMENT', { paste: true })
            .click(this.formSubmitButton)
    }

}
export default FeedbackPage