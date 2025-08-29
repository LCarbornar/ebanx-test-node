import express from 'express'
import AccountController from '../controllers/account-controller.js'

const router = express.Router()

router.get('/balance', AccountController.GetAccountBalance)

export default router
