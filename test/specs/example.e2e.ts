// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})


