const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({

    name:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true
    },
    region:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Region'
    },
    country:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Country'  
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    register:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Contact', ContactSchema);