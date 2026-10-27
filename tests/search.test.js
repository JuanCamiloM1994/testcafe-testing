import xPathToCSS from 'xpath-to-css'
import Navbar from "../page-objects/components/Navbar";
import SearchResultsPages from "../page-objects/pages/SearchResultsPages";

const navbar = new Navbar()
const searhResultPages = new SearchResultsPages()


fixture`Search box test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can search for information using search box ', async t => {
    const xPath = `'//*[@id="onlineBankingMenu"]/div/strong'`
    const css = xPathToCSS(xPath)
    console.log(css)
    navbar.search('online bank')
    await t.expect(searhResultPages.resultsTitle.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t.expect(searhResultPages.linkText.innerText).contains('Zero - Free Access to Online Banking')

})