import { Selector } from "testcafe";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";

const loginPage = new LoginPage()
const navbar = new Navbar()

fixture`Login test`
    .page`http://zero.webappsecurity.com/index.html`


test("User cannot login with invalid credentials", async t => {
    await t.click(navbar.signInButton)
    loginPage.loginToApp('invalid username', 'invalid password')
    await t.expect(loginPage.errormessage.innerText).contains('Login and/or password are wrong.')
})

test("User can login with valid credentials", async t => {
    await t.click(navbar.signInButton)
    loginPage.loginToApp('usrname', 'password')
    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginPage.loginForm).notOk()
    await t.click(navbar.userIcon)
    await t.click(navbar.logoutButton)
    await t.expect(navbar.logoutButton.exists).notOk()
    await t.expect(navbar.signInButton.exists).ok()

})