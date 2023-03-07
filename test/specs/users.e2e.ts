import UsersPage from "../pageobjects/users.page.js";

describe('Users page', () => {
    it('load data', async () => {
        await UsersPage.open()

    })

    it('delete user', async () => {
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    })
})