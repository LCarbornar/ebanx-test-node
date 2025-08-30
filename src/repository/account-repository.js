export default class AccountRepository {

    #accounts

    constructor() {
        this.#accounts = new Map()
    }

  GetBalance(account_id) {
    return this.#accounts.get(account_id)?.balance
  }
  
}
