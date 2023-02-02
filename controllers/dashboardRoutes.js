const express = require('express');
const router = express.Router();
const { User, Blogpost, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Get all of user's blog posts to dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
          attributes: ['username', 'id']
        },
      ]
    });

    const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));

    res.render('dashboard', {
      blogposts,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;