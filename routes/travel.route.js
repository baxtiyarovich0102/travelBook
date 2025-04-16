const { Router } = require("express")
const router =Router()
const {getAllTravels, getTravelById, addTravel} = require("../controllers/travel.controller")


router.get("/", getAllTravels)

router.get("/:id", getTravelById)

router.post("/add", addTravel )





module.exports = router