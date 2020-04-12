//Define a schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    _id: { type: Schema.Types.ObjectId},
    description: { type: String},
    title: { type: String},
    instruction: { type: String},
    iterationI: { type: Number, default: 0},
    iterationJ: { type: Number, default: 0},
    mostPlayed: { type: Boolean},
    iframe: { type: String},
    imgPath: { type: String},
    tags_id: { type: Array}
});

module.exports = mongoose.model('games', GameSchema );
