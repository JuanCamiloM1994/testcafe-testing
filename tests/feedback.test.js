import { Selector } from "testcafe";
import FeedbackPage from "../page-objects/pages/FeedbackPage";


const feedbackPage = new FeedbackPage()
fixture`Feedback form test`
    .page`http://zero.webappsecurity.com/index.html`

test("User can submit feedback via form", async t => {

    const linkToFeedback = Selector('#feedback')
    await t.click(linkToFeedback)
    await t.typeText(feedbackPage.forName, 'NAME', { paste: true })
    await t.typeText(feedbackPage.formEmail, 'EMAIL', { paste: true })
    await t.typeText(feedbackPage.formSubject, 'SUBJECT', { paste: true })
    await t.typeText(feedbackPage.formComment, 'COMMENT', { paste: true })
    feedbackPage.waitFor(4000)
    await t.click(feedbackPage.formSubmitButton)
    await t.expect(feedbackPage.message.innerText).contains('Thank you for your comment')
})