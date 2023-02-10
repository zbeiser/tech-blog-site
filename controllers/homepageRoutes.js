const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//// TEST ROUTE
// router.get('/', async (req, res) => {
//   try {
//     const blogpostData = await Blogpost.findAll({
//       include: [
//         {
//           model: User,
//         },
//         {
//           model: Comment,
//         }
//       ],
//     });

//     res.status(200).json(blogpostData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const blogpostData = await User.findAll({
//       include: [
//         {
//           model: Blogpost,
//         },
//         {
//           model: Comment,
//         }
//       ],
//     });

//     res.status(200).json(blogpostData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const blogpostData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//         },
//         {
//           model: Blogpost,
//         }
//       ],
//     });

//     res.status(200).json(blogpostData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

// View one blogpost
router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: User
        }
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('viewpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Take user to commenting page
router.get('/comment/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('comment', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Take user to login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// Take user to signup page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
