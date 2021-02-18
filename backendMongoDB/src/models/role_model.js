const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({

    name:{
        type: String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model('Role', RoleSchema);