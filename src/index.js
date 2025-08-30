import express from "express"
import accountRoutes from './routes/account-routes.js'

const app = express()

app.use(accountRoutes)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
