const { Comment } = require('../Models');

const commentSeeds = [
  {
    description: "Good luck buddy",
    user_id: 5,
    blogpost_id: 1
  },
  {
    description: "I believe in you!",
    user_id: 2,
    blogpost_id: 1
  },
  {
    description: "I love your pumpkin cookies so much!",
    user_id: 6,
    blogpost_id: 3
  },
  {
    description: "Can't huck it this time, but have fun!",
    user_id: 1,
    blogpost_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentSeeds);

module.exports = seedComments;