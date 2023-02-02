const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all blog posts to front page
router.get('/', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));

    res.render('homepage', { 
      blogposts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;