import express from "express"
import accountRoutes from './routes/account-routes.js'

const app = express()

app.use(accountRoutes)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
