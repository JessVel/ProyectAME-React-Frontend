const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({

    name:{
        type: String,
        require: true,
        trim: true
    },
    region:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Region'
    }
})

module.exports = mongoose.model('Country', CountrySchema);