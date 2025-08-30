import AccountRepository from '../src/repository/account-repository.js' 
import AccountService from '../src/services/account-service.js'

let account_service

beforeEach(() => {
  const repository = new AccountRepository()
  account_service = new AccountService(repository)
})

test('Should return 404 if account balance not found', () => {

  const account_id = '999'

  expect(() => account_service.GetAccountBalance(account_id)).toThrow('Account not found')

})

test('Should create a new account with initial balance', () => {

  const account_id = '123'
  const initial_balance = 100

  account_service.Deposit(account_id, initial_balance)

  expect(account_service.GetAccountBalance(account_id)).toBe(initial_balance)
})

test('Should return the balance', () => {

  const account_id = '333'
  const initial_balance = 42

  account_service.Deposit(account_id, initial_balance)

  const account_balance = account_service.GetAccountBalance(account_id)

  expect(account_balance).toBeDefined()
  expect(account_balance).toBe(42)
})

test('Should withdraw funds from the account', () => {

  const account_id = '444'
  const initial_balance = 100
  const withdraw_amount = 50

  account_service.Deposit(account_id, initial_balance)

  account_service.Withdraw(account_id, withdraw_amount)

  const account_balance = account_service.GetAccountBalance(account_id)

  expect(account_balance).toBeDefined()
  expect(account_balance).toBe(50)
})

test('Should return 404 if the account is not found when withdrawing funds', () => {

  const account_id = '999'
  const withdraw_amount = 50

  expect(() => account_service.Withdraw(account_id, withdraw_amount)).toThrow('Account not found')

})
