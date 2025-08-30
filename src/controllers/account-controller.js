export default class AccountController {
  
  constructor(account_service) {
    this.account_service = account_service  
  }

  GetAccountBalance(req, res, next) {

    try {

      const { account_id } = req.query
      
      const account_balance = this.account_service.GetAccountBalance(account_id)
  
      return res.status(200).json(account_balance)

    } catch (error) {
      next(error)
    }
  }

  ClearAccounts(req, res, next) {
    this.account_service.Clear()
    return res.status(200).send("OK")
  }

}