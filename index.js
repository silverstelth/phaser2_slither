
/**
 * Requried External Modules
 */
const express = require("express")
const path = require("path")

/**
 * App Variables
 */
const app = express()
const port = process.env.PORT || "8000"


/**
 * Route Definitions
 */
app.get("/", (req, res) => {
  res.render("index")
})

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})


/**
 * App Configuration
 */
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))