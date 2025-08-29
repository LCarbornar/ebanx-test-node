import AccountService from '../services/account-service.js' 

class AccountController {
  GetAccountBalance(req, res) {
    const account_id = req.query.account_id

    try {
      const account_balance = AccountService.GetAccountBalance(account_id)
        
      res.json({ account_balance })
    } catch (error) {
      // TODO - refactor to use a exception handler middleware
      res.status(404).json(0)
    }
  }
}

export default new AccountController()