import express from "express"
import accountRoutes from './routes/account-routes.js'
import { errorHandler } from "./middleware/error-handler.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(accountRoutes)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
