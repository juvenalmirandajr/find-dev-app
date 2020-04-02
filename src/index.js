const mongoose = require("mongoose")
const express = require("express")
const routes = require("./routes")

const USER_DATABASE = "someone"
const PASSWORD_DATABASE = "somepassword"
const DATA_BASE = "find_dev_app"
mongoose.connect(
  `mongodb+srv://${USER_DATABASE}:${PASSWORD_DATABASE}@cluster0-yhvgd.mongodb.net/${DATA_BASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3333)
