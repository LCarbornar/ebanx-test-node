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

  EventHandler(req, res) {
    
    try {

      const { type } = req.body

      if (type === 'deposit') {

        const { account_id, amount } = req.body
        const account = this.account_service.Deposit(account_id, amount)

        return res.status(201).json({ destination: account })

      } else if( type === 'withdraw' ) {

        const { origin, amount } = req.body
        const account = this.account_service.Withdraw(origin, amount)

        return res.status(201).json({ origin: account })
      } else if(type === 'transfer') {

        const { origin, destination, amount } = req.body
        const result = this.account_service.Transfer(origin, destination, amount)

        return res.status(201).json({ origin: result.origin, destination: result.destination })

      }

    } catch (error) {
      res.status(400).json({ error: error.message })
    }

  }
}