import { Selector } from "testcafe";
import { login } from '../helper'
fixture`New pay test`
    .page`http://zero.webappsecurity.com/index.html`

test.before(async t => {
    await login("username", "password")
})
    ('User can add new pay to the list', async t => {
        const payBillsTab = Selector('#pay_bills_tab')
        const addNewPayeTab = Selector('a').withText('Add New Payee')
        const form_name = Selector('#np_new_payee_name')
        const form_address = Selector('#np_new_payee_address')
        const form_account = Selector('#np_new_payee_account')
        const form_details = Selector('#np_new_payee_details')
        const form_submitButton = Selector('#add_new_payee')
        const message = Selector("#alert_content").innerText
        await t.click(payBillsTab)
        await t.click(addNewPayeTab)
        await t.typeText(form_name, 'name', { paste: true })
        await t.typeText(form_address, 'Address', { paste: true })
        await t.typeText(form_account, 'Account', { paste: true })
        await t.typeText(form_details, 'Details', { paste: true })
        await t.click(form_submitButton)
        await t.expect(message).contains('successfully created')
    })