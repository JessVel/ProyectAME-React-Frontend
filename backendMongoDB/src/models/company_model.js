const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({


    name:{
        type: String,
        require: true,
        trim: true
    },
    country:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Country'  
    },
    address:{
        type: String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model('Company', CompanySchema);