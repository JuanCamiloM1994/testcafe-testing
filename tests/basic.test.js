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
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
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

    const name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const articleText = Selector("#article-header")

    //await t.takeScreenshot({ fullPage: true})
    //await t.takeElementScreenshot(submit_button)
    //await t.setTestSpeed(1)
    await t.typeText(name_input, "Juan")
    //await t.wait(3000)
    await t.click(submit_button)

    await t.expect(Selector(articleText).innerText).contains("Juan")

/*     //click 
    await t.click('selector', { options })
    // double click
    await t.doubleClick('selector', {options})
    // right click
    await t.rightClick('selector', {options})
    // drag element 
    await t.drag('selector', 200, 0, { options})
    // hover
    await t.hover('selector', {options})
    // select text
    await t.selectText('selector')
    // type text 
    await t.typeText('selectos', 'text')
    // press key
    await t.pressKey('key')
    // navigate
    await t.navigateTo('url')
    // take screenshot 
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    // resize windows 
    await t.resizeWindow(800,600) */
})

/* test.skip('My first TestCafe test', async t => {
    // here goes testcafe code

    const name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const articleText = Selector("#article-header")

    //await t.takeScreenshot({ fullPage: true})
    //await t.takeElementScreenshot(submit_button)
    //await t.setTestSpeed(1)
    await t.typeText(name_input, "Juan")
    //await t.wait(3000)
    await t.click(submit_button)

    await t.expect(Selector(articleText).innerText).contains("Juan")
}) */

/* test.only('My first TestCafe test', async t => {
    // here goes testcafe code

    const name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const articleText = Selector("#article-header")

    //await t.takeScreenshot({ fullPage: true})
    //await t.takeElementScreenshot(submit_button)
    //await t.setTestSpeed(1)
    await t.typeText(name_input, "Juan")
    //await t.wait(3000)
    await t.click(submit_button)

    await t.expect(Selector(articleText).innerText).contains("Juan")
}) */

