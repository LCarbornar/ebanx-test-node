export default class AccountRepository {

    #accounts

    constructor() {
        this.#accounts = new Map()
    }

    FindById(account_id) {
        return this.#accounts.get(account_id)
    }

    GetBalance(account_id) {
        let account = this.#accounts.get(account_id)
        return account?.balance
    }

    Save(account) {

        this.#accounts.set(account.id, account)
        return account
        
    }


}
