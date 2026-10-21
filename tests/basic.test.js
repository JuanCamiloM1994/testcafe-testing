import { Selector } from "testcafe";

// prettier-ignore
fixture`Getting started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example/`

test('My first TestCafe test', async t => {
    // here goes testcafe code
    await t.typeText("#developer-name", "Juan")
    await t.click("#submit-button")

    await t.expect(Selector("#article-header").innerText).contains("Juan")
})