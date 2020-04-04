const axios = require("axios")
const Dev = require("../models/Dev")
const parseStringAsArray = require("../utils/parseStringAsArray")

module.exports = {
  async index(req, res) {
    const devs = await Dev.find()
    return res.json(devs)
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body
    let dev = await Dev.findOne({ github_username })
    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      )
      const { name = login, avatar_url, bio } = response.data
      const arrayTechs = parseStringAsArray(techs)
      const location = {
        type: "Point",
        coordinates: [longitude, latitude],
      }
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: arrayTechs,
        location,
      })
    }
    return res.json(dev)
  },

  async update(req, res) {
    const { github_username, techs, latitude, longitude } = req.body
    const arrayTechs = parseStringAsArray(techs)

    let dev = await Dev.update(
      { github_username: github_username },
      {
        $set: {
          techs: arrayTechs,
          latitude: latitude,
          longitude: longitude,
        },
      }
    )
    return res.json(dev)
  },

  async destroy(req, res) {
    const user = req.params.github_username
    let dev = await Dev.deleteOne({ github_username: user })
    return res.json(dev)
  },
}
