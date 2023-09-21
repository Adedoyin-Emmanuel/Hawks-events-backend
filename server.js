const express = require("express");
const { PORT, } = require("./src/config/constants");
const cors = require('cors')
const errorHandler = require('./src/middlewares/error-handler')
const notFound = require('./src/middlewares/not-found')
const group = require('./src/routes/group')
const events = require('./src/routes/event')

const app = express();

app.use(cors());
// these already do the work of bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//bring in the routes  
const user = require('./src/routes/user')
app.use('/api/users', user)
app.use('/api/events', events)
app.use('/api/group', group)


app.use(errorHandler);
app.use(notFound);

const server = app.listen(PORT, () => {
    console.log(`App started at port: ${PORT}`);
});


process.on("unhandledRejection", (err) => {
  server.close(() => process.exit(1));
});
