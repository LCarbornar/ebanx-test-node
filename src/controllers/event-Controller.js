export default class EventController {

    constructor(account_service) {
        this.account_service = account_service
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

            return res.status(400).json({ error: 'Invalid event type' })

        } catch (error) {
            res.status(400).json({ error: error.message })
        }

    }

}