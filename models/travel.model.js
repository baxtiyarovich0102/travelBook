const {Schema, model} = require("mongoose")


const travelModel = new Schema({
    title: {type: String,
        requied: true,
        minLength: 3
    },
    image: {
        type: String,
        requied: true
    },
    desc: {
        type: String,
        required: true
    }
    

})


module.exports = model("Travel", travelModel)