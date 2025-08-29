import AccountRepository from "../repository/account-repository.js"

class AccountService {

    GetAccountBalance(account_id) {
        const balance = AccountRepository.GetBalance(account_id)
        if (balance === undefined) throw new Error('Account not found')
        return balance
    }
}

export default new AccountService()