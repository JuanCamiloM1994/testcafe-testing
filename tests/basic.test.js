import { Selector } from "testcafe";

// prettier-ignore
fixture`Getting started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        //test setup goes here
        // await runDataBaseReset
        // asait seedtestData()
    })
    .beforeEach(async t => {
        // Runs before each test
    })
    .after(async t => {
        // cleaning test data
        // logging and sending data to monitoring system
    })
    .afterEach(async t => {
        // Runs after ech test
    })

test('My first TestCafe test', async t => {
    // here goes testcafe code
    await t.typeText("#developer-name", "Juan")
    await t.click("#submit-button")

    await t.expect(Selector("#article-header").innerText).contains("Juan")
})