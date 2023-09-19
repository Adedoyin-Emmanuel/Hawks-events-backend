const express = require("express")
const {PORT} = require('./src/config/constants')
const app = express()

app.use(cors())
// these already do the work of bodyParser 
app.use(express.json())
app.use(express.urlencoded({extended:false})) 

app.use(errorHandler)
app.use(notFound)

const start = async () => {
    // bring in the database 
    const server = app.listen(PORT, () => {
        console.log(`App started at port: ${PORT}`)
    })
}

start()
process.on("unhandledRejection", (err) => {
    server.close(() => process.exit(1))
})