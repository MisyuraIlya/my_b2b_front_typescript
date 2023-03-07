import helloPage from "../pageobjects/hello.page.js"

describe('My Login application', () => {
    it('should toggle', async () => {
        await helloPage.open();
        await helloPage.toggleTitleWithInput('hello')
        await expect(helloPage.helloTitle).toBeExisting();
        await helloPage.toggleBtn.click()
        await expect(helloPage.helloTitle).not.toBeExisting();
    });

    it('should not toggle', async () => {
        await helloPage.open();
        await helloPage.toggleTitleWithInput('asfasfasf')
        await expect(helloPage.helloTitle).not.toBeExisting();
    });


})


