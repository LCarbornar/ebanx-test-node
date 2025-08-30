import AccountNotFoundError from "../erros/account-not-found.js"
import InvalidEventError from "../erros/invalid-event-error.js"

export function errorHandler(err, req, res, next) {

    if (err instanceof AccountNotFoundError) {

    return res.status(404).json(0)

  } else if (err instanceof InvalidEventError) {

    return res.status(400).json({ error: err.message })

  }

  return res.status(500).json({ error: 'Internal server error' })
}