import express from 'express'
import AccountController from '../controllers/account-controller.js'
import AccountService from "../services/account-service.js"
import AccountRepository from "../repository/account-repository.js"

const account_repository = new AccountRepository()
const account_service = new AccountService(account_repository)
const account_controller = new AccountController(account_service)

const router = express.Router()

router.get('/balance', account_controller.GetAccountBalance)

export default router
