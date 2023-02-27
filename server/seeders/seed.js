const db = require('../config/connection');
const { Manager } = require('../models');
const { Player } = require('../models');
const { Event } = require("../models")


const managerData = require('./managerData.json');
const playerData = require("./playerData.json");
const eventData = require("./eventData.json")

db.once('open', async () => {
  await Manager.deleteMany({});
  await Player.deleteMany({});
  await Event.deleteMany({});

  const managerStaff = await Manager.insertMany(managerData);
  const playerStaff = await  Player.insertMany(playerData);
  const eventStaff = await  Event.insertMany(eventData);

  console.log('Managers seeded');
  console.log('Players seeded');
  console.log('Events seeded');
  process.exit(0);
});