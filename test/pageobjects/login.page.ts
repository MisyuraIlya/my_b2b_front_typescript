
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get toggleBtn() {
        return $('#toggle') ;
    }


    public get searchInput() {
        return $('#search') ;
    }

    public get helloTitle() {
        return $('#hello') ;
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async toggleTitleWithInput (text: string) {
        await this.searchInput.setValue(text);
        await this.toggleBtn.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('/hello.js');
    }
}

module.exports = new LoginPage();
