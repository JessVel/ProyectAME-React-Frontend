const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({


    name:{
        type: String,
        require: true,
        trim: true
    },
    country:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Country'
        
    }
})

module.exports = mongoose.model('City', CitySchema);