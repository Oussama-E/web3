const {MONGODB_URI, PORT} = require('./utils/config')
const express = require("express");
const mongoose = require("mongoose");
const middlewares = require('./utils/middlewares')
const contactsRouter = require("./routes/contacts");
const infoRouter = require("./routes/info");
const cors = require("cors");



mongoose.connect(MONGODB_URI), { useNewUrlParser: true, useUnifiedTopology: true }

const app = express();

app.use(express.json())
app.use(middlewares.logger)
app.use(middlewares.attachCurrentuser)

app.use(cors())
app.use('/api/contact', contactsRouter)
app.use(infoRouter)

app.use(middlewares.errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
