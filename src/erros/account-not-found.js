export default class AccountNotFoundError extends Error {

  constructor() {
    super(`Account not found`)
    this.name = 'AccountNotFoundError'
  }
  
}