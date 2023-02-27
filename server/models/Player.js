const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    age: {
        type: Number,

    },
    username: {
        type: String,
    },

});

const player = model('Player', playerSchema);

module.exports = player;