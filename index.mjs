import express from 'express'
import routes from './src/routes/index.mjs'
import cookieParser from 'cookie-parser'
import session from 'express-session'

//Creatin an app instance
const app = express()
const PORT = 8000

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(session({
  secret: "Spectra",
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 60000 * 60
  }
}))

//Registering Router
app.use('/api', routes)



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})