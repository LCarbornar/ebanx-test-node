class AccountRepository {

    #accounts = new Map()

    GetBalance(account_id) {
        return this.#accounts.get(account_id)?.balance
    }
}

export default new AccountRepository()