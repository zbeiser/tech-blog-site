const seedUsers = require('./user-seed');
const seedBlogposts = require('./blogpost-seed');
const seedComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedTables = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedBlogposts();

    await seedComments();

    process.exit(0);
};

seedTables();