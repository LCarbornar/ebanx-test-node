import express from 'express'
import AccountController from '../controllers/account-controller.js'
import EventController from '../controllers/event-Controller.js'
import AccountService from "../services/account-service.js"
import AccountRepository from "../repository/account-repository.js"

const account_repository = new AccountRepository()
const account_service = new AccountService(account_repository)
const account_controller = new AccountController(account_service)
const event_controller = new EventController(account_service)

const router = express.Router()

router.get('/balance', (req, res) => account_controller.GetAccountBalance(req, res))
router.post('/event', (req, res) => event_controller.EventHandler(req, res))

export default router
