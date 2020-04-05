const mongoose = require("mongoose")
const express = require("express")
const cors =  require("cors")
const routes = require("./routes")

const USER_DATABASE = "password"
const PASSWORD_DATABASE = "password"
const DATA_BASE = "find_dev_app"
const app = express()

mongoose.connect(
  `mongodb+srv://${USER_DATABASE}:${PASSWORD_DATABASE}@cluster0-yhvgd.mongodb.net/${DATA_BASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
