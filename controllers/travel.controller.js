const Travel = require("../models/travel.model")

const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find()

        res.status(200).json({message: "Success", travels: travels})
    } catch (err) {
        res.send(err)
    }
}


const getTravelById = async (req, res) => {
    try {

        const travel = await Travel.findById(req.params.id)
        if(!travel){return res.status(404).json({message: "Not Found"})}

        res.status(200).json({message: "Success", travel: travel})
        
    } catch (err) {
        res.send(err)
    }
}



const addTravel = async (req, res) => {
    try {

        const {title, image, desc} = req.body

        const newTravel = await Travel.create({
            title: title,
            image: image,
            desc: desc
        })
    
        res.status(201).json({
            message: "Successfully added",
            newTravel
        })
        
    } catch (err) {
        res.send(err)
    }
}



const updateTravel = async (req, res) => {
    try {

        const {title, image, desc} = req.body

        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id,{
            title,
            image,
            desc
        })
    
        res.status(200).json({
            message: "Successfully updated",
            updateTravel
        })
        
    } catch (err) {
        res.send(err)
    }
}


const removeTravel = async (req, res) => {
    try {

     await Travel.findByIdAndDelete(req.params.id)
    
        res.status(201).json({
            message: "Successfully removed"
        })
        
    } catch (err) {
        res.send(err)
    }
}


module.exports = {
    getAllTravels, getTravelById, addTravel, updateTravel, removeTravel
}