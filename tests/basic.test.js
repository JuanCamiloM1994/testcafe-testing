import { Selector } from "testcafe";

// prettier-ignore
fixture`Getting started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async t => {

    })
    .beforeEach(async t => {
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    })
    .after(async t => {

    })
    .afterEach(async t => {

    })

test('My first TestCafe test', async t => {

    const name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const articleText = Selector("#article-header")
    await t.typeText(name_input, "Juan")
    await t.click(submit_button)
    await t.expect(Selector(articleText).innerText).contains("Juan")
})