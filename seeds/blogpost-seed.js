const { Blogpost } = require('../Models');

const blogpostSeeds = [
  {
    title: "Coding is so dope",
    description: "Hey guys, I just started my coding journey and man oh man am I just having a blast. Cheers!",
    user_id: 1
  },
  {
    title: "What is handlebars?",
    description: "How does it work? Anybody able to help me out?",
    user_id: 1
  },
  {
    title: "GF cookies",
    description: "Hi friends! I know this is a tech blog, but thought I'd ask if anyone has any good GF cookie recipes?",
    user_id: 2
  },
  {
    title: "Ski trip this weekend",
    description: "Hi folks. Some buddies and I are looking for another person to join our backcountry ski trip this weekend. Who's in?",
    user_id: 4
  },
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostSeeds);

module.exports = seedBlogposts;