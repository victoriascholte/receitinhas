const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Projeto Receitinha",
    version: "1.0.0"
  })
})

module.exports = router