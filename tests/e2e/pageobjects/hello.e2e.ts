// import helloPage from "../pageobjects/hello.page.js"
const HelloPage = require('../pageobjects/hello.page')

describe('My Login application', () => {
    console.log('----------------------',HelloPage)
    it('should toggle', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting();
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });

    it('should not toggle', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('asfasfasf')
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });


})


