import { Selector } from "testcafe";

// prettier-ignore
fixture`Feedback form test`
    .page`http://zero.webappsecurity.com/index.html`

test("User can submit feedback via form", async t => {
    //Selectors

    const linkToFeedback = Selector('#feedback')
    const form_name = Selector('#name')
    const form_email = Selector('#email')
    const form_subject = Selector('#subject')
    const form_comment = Selector('#comment')
    const form_submitButton = Selector('input').withAttribute(
        'value',
        'Send Message'
    )
    const message = Selector('div').innerText


    //Actions

    await t.click(linkToFeedback)
    await t.typeText(form_name, 'NAME', { paste: true })
    await t.typeText(form_email, 'EMAIL', { paste: true })
    await t.typeText(form_subject, 'SUBJECT', { paste: true })
    await t.typeText(form_comment, 'COMMENT', { paste: true })
    await t.click(form_submitButton)

    //Assertion
    await t.expect(message).contains('Thank you for your comment')
})