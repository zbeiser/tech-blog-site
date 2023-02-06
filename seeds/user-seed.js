const { User } = require('../Models');

const userSeeds = [
  {
    username: 'zachboy',
    password: 'ilovecoding'
  },
  {
    username: 'emmagurl',
    password: 'sharktank'
  },
  {
    username: 'chloeyogi',
    password: 'southindian'
  },
  {
    username: 'bobbysailer',
    password: 'fullstoke'
  },
  {
    username: 'handybrendan',
    password: 'woodworker'
  },
  {
    username: 'doctorcady',
    password: 'alwaysdown'
  },
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;