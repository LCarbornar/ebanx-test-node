import Account from '../models/account.js'
export default class AccountService {

    constructor(account_repository) {
        this.account_repository = account_repository
    }

    GetAccountBalance(account_id) {

        const balance = this.account_repository.GetBalance(account_id)

        if (balance === undefined) throw new Error('Account not found')
        return balance

    }

    Deposit(account_id, amount) {

        let account = this.account_repository.FindById(account_id)

        if (account === undefined) {
            account = new Account(account_id, 0)
        }
        account.balance += amount

        return this.account_repository.Save(account)

    }

    Withdraw(account_id, amount) {

        let account = this.account_repository.FindById(account_id)

        if (account === undefined) {
            throw new Error('Account not found')
        }

        if (account.balance < amount) {
            throw new Error('Insufficient funds')
        }

        account.balance -= amount

        return this.account_repository.Save(account)
    }

    Transfer(origin_account_id, destination_account_id, amount) {

        const origin = this.account_repository.FindById(origin_account_id)
        const destination = this.account_repository.FindById(destination_account_id)

        if (origin === undefined || destination === undefined) {
            throw new Error('Account not found')
        }

        if (origin.balance < amount) {
            throw new Error('Insufficient funds')
        }

        origin.balance -= amount
        destination.balance += amount

        this.account_repository.Save(origin)
        this.account_repository.Save(destination)

        return { origin, destination }
        
    }
}