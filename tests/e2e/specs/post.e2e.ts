// import UsersPage from "../pageobjects/users.page.js";
const PostPage = require('../pageobjects/post.page')

describe('Users page', () => {
    it('load data', async () => {
        await PostPage.open()

    })

    //not found root
    it('delete user', async () => {
        await PostPage.loadData()
        // await PostPage.deletePost()
    })
})