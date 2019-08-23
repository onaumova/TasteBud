const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let TasteSchema = new Schema ({
    Name: {type: String, required: true },
    Type: {type: String, required: true }
});

module.exports = mongoose.model('Taste', TasteSchema);