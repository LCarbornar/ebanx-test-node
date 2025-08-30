export default class AccountService {

    constructor(account_repository) {
        this.account_repository = account_repository
    }

    GetAccountBalance(account_id) {

        const balance = this.account_repository.GetBalance(account_id)
        
        if (balance === undefined) throw new Error('Account not found')
        return balance

    }
}