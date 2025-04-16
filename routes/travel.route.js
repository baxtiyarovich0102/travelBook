const { Router } = require("express")
const router =Router()
const {getAllTravels, getTravelById, addTravel, updateTravel, removeTravel} = require("../controllers/travel.controller")


router.get("/", getAllTravels)
router.get("/:id", getTravelById)
router.post("/add", addTravel )
router.put("/:id", updateTravel )
router.delete("/:id", removeTravel )





module.exports = router