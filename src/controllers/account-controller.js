export default class AccountController {
  
  constructor(account_service) {
    this.account_service = account_service  
  }

  GetAccountBalance(req, res) {

    try {

      const { account_id } = req.query
      
      const account_balance = this.account_service.GetAccountBalance(account_id)
  
      return res.status(200).json(account_balance)

    } catch (error) {
      // TODO - refactor to use a exception handler middleware
      res.status(400).json(0)
    }
  }

}