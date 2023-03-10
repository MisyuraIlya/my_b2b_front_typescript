const Page = require('./page');

class PostPage extends Page {

    public get loadingTitle() {
        return $('#post-loading')
    }

    public get errorTitle() {
        return $('#post-error')
    }

    public  get postList() {
        return $('#post-list')
    }

    public get postItems() {
        return browser.react$$('PostItem')
    }

    public async loadData() {
        try {
            await this.open();
            // await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.postList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('Не удалось загрузить posts' + e.message)
        }
    }

    public async deletePost() {
        try {
            await this.postItems.waitForExist({ timeout: 5000 });
            //TODO FIX
            // const postCount = await this.postItems.length;
            // console.log('-------- postCount ----------',postCount)
            // if(!postCount) {
            //     throw new Error('Пользователи не найдены')
            // }

            // await this.postItems[0].$('#post-delete').click();

            // const postsCountAfterDelete = await this.postItems.length;

            // if(postCount - postsCountAfterDelete !== 1) {
            //     throw new Error('Удаление не произошло или удалился более чем 1 пользователь');
            // }

        } catch (e) {
            throw new Error('Не удалось удалить пользователя. ' + e.message)
        }
    }

    open() {
        return super.open('/post')
    }
}

module.exports = new PostPage();
