const { Schema, model } = require('mongoose');

const managerSchema = new Schema({
    gamerTag: {
        type: String,
        },
    firstName: {
        type: String,

        
    },
    lastName: {
        type: String,

    },
});

const manager = model('Manager', managerSchema);

module.exports = manager;