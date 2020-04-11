//Define a schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TagSchema = new Schema({
    _id: Schema.Types.ObjectId,
    game_id: Schema.Types.ObjectId,
    text: String
});

let Tag = mongoose.model('tags', TagSchema );

module.exports = Tag;
