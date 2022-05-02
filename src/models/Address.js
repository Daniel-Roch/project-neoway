const mongoose = require('../config/db')

const AddressSchema = new mongoose.Schema({
    CPF: {
        type: String,
        require: true,
    },
    CNPJ:{
        type: String,
        require: true,
    },
    Count: {
        type: [Number],
        required: [true,'Número inválido. (Number)'],
    },
    CreatedAt:{
        type: Date,
        default: Date.now,
    },
})

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address