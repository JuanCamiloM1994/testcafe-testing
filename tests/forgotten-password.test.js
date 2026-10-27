
import Navbar from "../page-objects/components/Navbar";
import LoginPage from "../page-objects/pages/LoginPage";
import ForgottenPasswordPage from "../page-objects/pages/ForgottenPasswordPage";

const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()
const navbar = new Navbar()

fixture`Send forgotten password`
    .page`http://zero.webappsecurity.com/index.html`

test("User can request new password to be send to his email", async t => {
    await t.click(navbar.signInButton)
    await t.click(loginPage.linkToPassword)
    await t.typeText(forgottenPasswordPage.emailInput, "email@random.com", { paste: true, replace: true })
    await t.pressKey('enter')
    await t.expect(forgottenPasswordPage.message.innerText).contains('email@random.com')
    await t.expect(forgottenPasswordPage, emailInput.exists).notOk()

})