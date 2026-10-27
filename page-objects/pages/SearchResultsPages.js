import { Selector, t } from "testcafe";

class SearchResultsPages {
    constructor() {
        this.resultsTitle = Selector('h2')
        this.linkText = Selector('div')
    }
}

export default SearchResultsPages