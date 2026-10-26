import { Selector } from "testcafe";
import xPathToCSS from 'xpath-to-css'

// prettier-ignore
fixture`Search box test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can search for information using search box ', async t => {
    // Selectors
    const searchBox = Selector('#searchTerm')
    const resultsTile = Selector('h2')
    const linkText = Selector('div').innerText

    // XPATH TO CSS Example
    const xPath = `'//*[@id="onlineBankingMenu"]/div/strong'`
    const css = xPathToCSS(xPath)
    console.log(css)
    
    //Actions
    await t.typeText(searchBox, 'online bank', { paste: true })
    await t.pressKey('enter')

    //Assertions
    await t.expect(resultsTile.exists).ok()
    await t.expect(searchBox.exists).ok()
    await t.expect(linkText).contains('Zero - Free Access to Online Banking')

})