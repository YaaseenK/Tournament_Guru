const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    eventName: {
      type: String,
      maxlength: 60,
      minlength: 4,
      default: 'Unnamed event',
    },
    game: {
      type: String,
    },
    date: {
      type: String,
      
    },
    description: {
        type: String,
    },
    prizepool: {
        type: Number,
    }
  }
);
const event = model('event', eventSchema);

module.exports = event;