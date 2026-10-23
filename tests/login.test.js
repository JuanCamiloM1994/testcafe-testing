import { Selector } from "testcafe";

// prettier-ignore
fixture`Getting started with TestCafe`
    .page`http://zero.webappsecurity.com/index.html`


test("User cannot login with invalid credentials", async t => {
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const usernameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(usernameInput, 'invalid username', { paste: true })
    await t.typeText(passwordInput, 'invalid password', { paste: true })

    const submiteButton = Selector('.btn-primary')
    await t.click(submiteButton)

    const errorMessage = Selector('.alert-error')
    await t.expect(errorMessage).contains('Login and/or password are wrong.')
})